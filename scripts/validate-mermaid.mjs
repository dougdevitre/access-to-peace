#!/usr/bin/env node

/**
 * validate-mermaid.mjs
 *
 * Extracts all Mermaid diagram blocks from markdown files in the repository
 * and validates each one by rendering through the Mermaid CLI (mmdc).
 *
 * Usage:
 *   PUPPETEER_EXECUTABLE_PATH=/path/to/chrome \
 *   PUPPETEER_SKIP_DOWNLOAD=true \
 *   node scripts/validate-mermaid.mjs
 */

import { readFileSync, writeFileSync, unlinkSync, mkdtempSync } from 'fs';
import { execSync } from 'child_process';
import { join, relative } from 'path';
import { tmpdir } from 'os';

const REPO_ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');
const PUPPETEER_CONFIG = join(tmpdir(), 'mermaid-puppeteer-config.json');

// Write puppeteer config for --no-sandbox
writeFileSync(PUPPETEER_CONFIG, JSON.stringify({ args: ['--no-sandbox'] }));

/**
 * Recursively find all .md files under a directory
 */
function findMarkdownFiles(dir) {
  const result = execSync(`find "${dir}" -name "*.md" -not -path "*/node_modules/*" -not -path "*/.git/*" | sort`, {
    encoding: 'utf-8'
  });
  return result.trim().split('\n').filter(Boolean);
}

/**
 * Extract mermaid blocks from a markdown file
 * Returns array of { code, lineNumber, diagramType }
 */
function extractMermaidBlocks(filePath) {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const blocks = [];

  let inBlock = false;
  let blockLines = [];
  let blockStartLine = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!inBlock && line.trim() === '```mermaid') {
      inBlock = true;
      blockStartLine = i + 1; // 1-based
      blockLines = [];
    } else if (inBlock && line.trim() === '```') {
      inBlock = false;
      const code = blockLines.join('\n');
      const firstLine = code.trim().split('\n')[0] || '';
      const diagramType = firstLine.replace(/\s+/g, ' ').trim();
      blocks.push({ code, lineNumber: blockStartLine, diagramType });
    } else if (inBlock) {
      blockLines.push(line);
    }
  }

  return blocks;
}

/**
 * Validate a single mermaid block using mmdc
 */
function validateBlock(code, index) {
  const tmpDir = mkdtempSync(join(tmpdir(), 'mermaid-'));
  const inputFile = join(tmpDir, `diagram-${index}.mmd`);
  const outputFile = join(tmpDir, `diagram-${index}.svg`);

  writeFileSync(inputFile, code);

  try {
    execSync(
      `npx @mermaid-js/mermaid-cli -i "${inputFile}" -o "${outputFile}" -p "${PUPPETEER_CONFIG}" --quiet`,
      {
        encoding: 'utf-8',
        timeout: 30000,
        stdio: ['pipe', 'pipe', 'pipe']
      }
    );
    // Cleanup
    try { unlinkSync(inputFile); } catch {}
    try { unlinkSync(outputFile); } catch {}
    return { pass: true, error: null };
  } catch (e) {
    // Cleanup
    try { unlinkSync(inputFile); } catch {}
    try { unlinkSync(outputFile); } catch {}

    const stderr = e.stderr ? e.stderr.toString().trim() : '';
    const stdout = e.stdout ? e.stdout.toString().trim() : '';
    const errorMsg = stderr || stdout || e.message || 'Unknown error';
    // Extract just the relevant error line
    const lines = errorMsg.split('\n');
    const errorLine = lines.find(l => /error|parse|syntax|unexpected/i.test(l)) || lines[lines.length - 1];
    return { pass: false, error: errorLine.substring(0, 200) };
  }
}

// Main
console.log('=== Mermaid Diagram Validation ===\n');

const mdFiles = findMarkdownFiles(REPO_ROOT);
console.log(`Found ${mdFiles.length} markdown files\n`);

let totalBlocks = 0;
let passCount = 0;
let failCount = 0;
const failures = [];

for (const filePath of mdFiles) {
  const relPath = relative(REPO_ROOT, filePath);
  const blocks = extractMermaidBlocks(filePath);

  if (blocks.length === 0) continue;

  for (let i = 0; i < blocks.length; i++) {
    totalBlocks++;
    const block = blocks[i];
    const blockNum = i + 1;

    process.stdout.write(`  Validating ${relPath} block ${blockNum}/${blocks.length}...`);

    const result = validateBlock(block.code, totalBlocks);

    if (result.pass) {
      passCount++;
      console.log(` PASS  (${block.diagramType})`);
    } else {
      failCount++;
      console.log(` FAIL  (${block.diagramType})`);
      console.log(`    Error: ${result.error}`);
      failures.push({
        file: relPath,
        block: blockNum,
        line: block.lineNumber,
        type: block.diagramType,
        error: result.error
      });
    }
  }
}

// Summary
console.log('\n=== Summary ===');
console.log(`Total: ${totalBlocks} | Pass: ${passCount} | Fail: ${failCount}`);

if (failures.length > 0) {
  console.log('\n=== Failures ===');
  for (const f of failures) {
    console.log(`  ${f.file} (block ${f.block}, line ${f.line})`);
    console.log(`    Type: ${f.type}`);
    console.log(`    Error: ${f.error}`);
  }
  process.exit(1);
} else {
  console.log('\nAll diagrams validated successfully!');
  process.exit(0);
}

# Changelog

All notable changes to Access To Peace are documented here.

## [Unreleased]

---

## 2026-04-10

### Added
- **Worked examples for all 26 modules** — Every module now includes a concrete
  input/output demonstration showing how user input transforms into the module's
  primary artifact. Covers all 7 domains: communication, assessment, mediation,
  wellness, legal, school, and community. (PR #4)

- **Mermaid diagram validation script** — `scripts/validate-mermaid.mjs` extracts
  and validates all 73 Mermaid diagrams through the Mermaid CLI renderer.
  All 73 diagrams pass validation. (PR #3)

- **Comprehensive Mermaid diagrams across all 46 files** — Visual flowcharts,
  process diagrams, and entity-relationship diagrams added to every markdown file
  to support onboarding comprehension. Includes platform architecture, safety gate
  decision trees, module process flows, workflow diagrams, ER diagrams for data
  schemas, and more. (PR #2)

## 2026-04-09

### Added
- **Initial platform restructure** — Split combined module files into 26 individual
  modules, organized into `modules/`, `references/`, `workflows/`, `templates/`,
  `checklists/`, `schemas/`, `artifacts/`, and `routines/` directories. Added
  routing table, role definitions, trigger catalog, artifact specifications,
  NVC framework, trauma-informed guide, legal disclaimers, and crisis resources
  as standalone reference files. (PR #1)

### Foundation
- **Core platform files** — README.md, SKILL.md, CONTRIBUTING.md, LICENSE (MIT)
- **26 modules** across 7 domains (Communication, Assessment, Mediation, Wellness,
  Legal, School, Community)
- **20 roles** across 6 pods (Individual & Family, Mediation & Conflict,
  Mental Health, Legal & Court, School & Youth, Community & Nonprofit)
- **80 triggers** with 4 safety levels (Green, Yellow, Orange, Red)
- **13 artifact types** with quality gates
- **6 workflows** + individual conflict navigation
- **Missouri reference implementation** for crisis resources and legal aid

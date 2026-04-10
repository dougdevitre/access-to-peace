# Localization Guide

## Overview

Access To Peace supports localization of safety-critical content. Translations are
organized by language code under this directory.

## Directory Structure

```
locales/
├── README.md          (this file)
├── es/                (Spanish)
│   ├── crisis-resources.md
│   ├── safety-gate.md
│   ├── disclaimers.md
│   └── nvc-templates.md
└── [language-code]/   (future languages)
    ├── crisis-resources.md
    ├── safety-gate.md
    ├── disclaimers.md
    └── nvc-templates.md
```

## What to Translate (Priority Order)

### 1. Crisis Resources (CRITICAL)
- National crisis line numbers (verify the number has language-specific support)
- State/regional resources (replace Missouri resources with local equivalents)
- Always include: emergency number, suicide/crisis lifeline, DV hotline, crisis text line

### 2. Safety Gate Prompts
- All four safety level responses (Green, Yellow, Orange, Red)
- The safety escalation prompt
- The "Are you safe right now?" question and response options

### 3. Disclaimer Blocks
- All 8 blocks (A through H) from `references/legal-disclaimer.md`
- Legal and clinical disclaimers must be accurate in the target language

### 4. NVC Templates
- The four NVC components (Observation, Feeling, Need, Request)
- Sentence templates from `references/nvc-framework.md`
- Feeling words and needs lists

## Translation Standards

- **Accuracy over fluency** for safety content — a slightly awkward but accurate
  translation is better than a smooth but imprecise one
- **Preserve all phone numbers** — do not translate phone numbers; verify they
  support the target language
- **Use formal register** — the platform uses a calm, professional tone
- **Test with native speakers** — all translations should be reviewed by a native
  speaker before merging
- **Note the translator** — include `Translated by:` and `Reviewed by:` at the
  top of each file

## How to Contribute a Translation

1. Create a new directory: `locales/[language-code]/`
2. Copy the English source files as reference
3. Translate following the standards above
4. Open a PR with the language code in the branch name
5. Include verification that crisis line numbers support the target language

## Language Codes

Use [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) two-letter codes:
- `es` — Spanish
- `fr` — French
- `zh` — Chinese
- `ar` — Arabic
- `vi` — Vietnamese
- `ko` — Korean

## Questions?

Contact: dougdevitre@gmail.com

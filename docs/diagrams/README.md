# Access To Peace — Onboarding Guide

> Visual guide to the platform architecture, session flow, safety systems,
> roles, modules, workflows, and data model. Start here if you're new.

---

## How To Read These Diagrams

All diagrams use [Mermaid](https://mermaid.js.org/) syntax and render natively on GitHub,
in VS Code (with the Mermaid extension), and in most modern markdown viewers.

---

## Table of Contents

| Diagram | File | What It Answers |
|---------|------|----------------|
| [Platform Overview](#platform-overview) | This file | What is Access To Peace and how does it fit together? |
| [Session Flow](session-flow.md) | session-flow.md | What happens from the moment a user starts to the final artifact? |
| [Safety Gate Decision Tree](safety-gates.md) | safety-gates.md | How does the safety system work? When does it intervene? |
| [Role Selection & Pods](role-pods.md) | role-pods.md | Who uses this platform? How do roles map to modules? |
| [Module Pathways](module-pathways.md) | module-pathways.md | How do the 26 modules connect across 7 domains? |
| [Workflow Sequences](workflow-sequences.md) | workflow-sequences.md | What are the 6 end-to-end workflows and how do they chain modules? |
| [Data Flow & Persistence](data-flow.md) | data-flow.md | How is session data structured, stored, and visualized? |
| [NVC & Trauma-Informed Framework](language-framework.md) | language-framework.md | How do the communication and language rules work? |
| [Quality Gates & Disclaimers](quality-gates.md) | quality-gates.md | What checks run before every artifact is produced? |
| [Quick-Start Decision Tree](quick-start.md) | quick-start.md | I'm a new user — where do I begin? |

---

## Platform Overview

```mermaid
graph TB
    subgraph ENTRY["🚪 Entry Points"]
        USER["User arrives with<br/>a conflict, question,<br/>or need"]
        TRIGGER["Trigger Identified<br/><i>80 triggers across 8 categories</i>"]
        ROLE["Role Selected<br/><i>20 roles across 6 pods</i>"]
    end

    subgraph SAFETY["🛡️ Safety Layer"]
        GATE["Safety Gate<br/>Green | Yellow | Orange | Red"]
        CRISIS["Crisis Interrupt<br/>988 · DV Hotline · 911"]
    end

    subgraph CORE["⚙️ Core Processing"]
        ROUTING["Routing Engine<br/><i>references/routing.md</i>"]
        MODULES["26 Modules<br/><i>7 domains</i>"]
        QUESTIONS["Question Sets<br/><i>Required + Optional</i>"]
    end

    subgraph OUTPUT["📄 Output Layer"]
        ARTIFACTS["13 Artifact Types<br/><i>references/artifacts.md</i>"]
        QUALITY["Quality Gates<br/><i>8-point checklist</i>"]
        DISCLAIMERS["Disclaimer Blocks<br/><i>A through H</i>"]
    end

    subgraph CONTINUITY["🔄 Continuity"]
        NEXT["Recommended<br/>Next Modules"]
        WORKFLOWS["6 Workflows<br/><i>workflows/</i>"]
        DASHBOARD["Peace Dashboard<br/><i>artifacts/peace-dashboard.md</i>"]
    end

    subgraph GOVERNANCE["📚 Governance"]
        TRAUMA["Trauma-Informed<br/>Principles<br/><i>SAMHSA 6 principles</i>"]
        NVC["NVC Framework<br/><i>Rosenberg 4 components</i>"]
        LEGAL["Legal Disclaimers<br/><i>8 reusable blocks</i>"]
        CONTRIB["Contributing Standards<br/><i>CONTRIBUTING.md</i>"]
    end

    USER --> TRIGGER
    USER --> ROLE
    TRIGGER --> GATE
    ROLE --> GATE
    GATE -->|"Green/Yellow"| ROUTING
    GATE -->|"Orange/Red"| CRISIS
    CRISIS -->|"User confirms safe"| ROUTING
    ROUTING --> MODULES
    MODULES --> QUESTIONS
    QUESTIONS --> ARTIFACTS
    ARTIFACTS --> QUALITY
    QUALITY --> DISCLAIMERS
    DISCLAIMERS --> NEXT
    NEXT --> WORKFLOWS
    WORKFLOWS --> DASHBOARD

    TRAUMA -.->|governs language| MODULES
    NVC -.->|governs rewrites| MODULES
    LEGAL -.->|appended to| ARTIFACTS
    CONTRIB -.->|governs additions| MODULES

    style ENTRY fill:#e8f5e9,stroke:#2e7d32
    style SAFETY fill:#fff3e0,stroke:#e65100
    style CORE fill:#e3f2fd,stroke:#1565c0
    style OUTPUT fill:#f3e5f5,stroke:#6a1b9a
    style CONTINUITY fill:#e0f7fa,stroke:#00695c
    style GOVERNANCE fill:#fce4ec,stroke:#880e4f
```

### Key Concepts

| Concept | What It Means |
|---------|--------------|
| **Trigger** | What the user says or needs — mapped to a module via `references/routing.md` |
| **Role** | Who the user is — determines language depth, default modules, and artifact types |
| **Safety Gate** | Runs on every session — escalates if harm indicators are detected |
| **Module** | A structured question-and-answer flow that produces an artifact |
| **Artifact** | The output document — rewritten message, safety plan, agreement, etc. |
| **Quality Gate** | 8-point checklist that runs before any artifact is released |
| **Pathway** | Every module recommends next modules — users are never left at a dead end |

### File Map

```mermaid
graph LR
    subgraph ROOT["Root"]
        SKILL["SKILL.md<br/><i>Skill entry point</i>"]
        README["README.md<br/><i>Project overview</i>"]
        CONTRIBUTING["CONTRIBUTING.md<br/><i>Standards</i>"]
    end

    subgraph REFS["references/"]
        R1["routing.md"]
        R2["roles.md"]
        R3["triggers.md"]
        R4["artifacts.md"]
        R5["nvc-framework.md"]
        R6["trauma-informed.md"]
        R7["legal-disclaimer.md"]
        R8["crisis-resources.md"]
    end

    subgraph MODS["modules/"]
        M1["MOD-01 to MOD-04<br/><i>Communication</i>"]
        M2["MOD-05 to MOD-08<br/><i>Assessment</i>"]
        M3["MOD-09 to MOD-12<br/><i>Resolution</i>"]
        M4["MOD-13 to MOD-16<br/><i>Wellness</i>"]
        M5["MOD-17 to MOD-20<br/><i>Legal</i>"]
        M6["MOD-21 to MOD-23<br/><i>School</i>"]
        M7["MOD-24 to MOD-26<br/><i>Community</i>"]
    end

    subgraph SUPPORT["Supporting Files"]
        W["workflows/"]
        T["templates/"]
        C["checklists/"]
        S["schemas/"]
        A["artifacts/"]
        RO["routines/"]
    end

    SKILL --> REFS
    SKILL --> MODS
    REFS --> MODS
    MODS --> SUPPORT

    style ROOT fill:#fff9c4,stroke:#f57f17
    style REFS fill:#e8f5e9,stroke:#2e7d32
    style MODS fill:#e3f2fd,stroke:#1565c0
    style SUPPORT fill:#f3e5f5,stroke:#6a1b9a
```

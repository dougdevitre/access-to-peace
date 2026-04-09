# Access To Peace

> A trauma-informed, open-source platform for conflict resolution, mediation, mental wellness,
> co-parenting de-escalation, restorative practices, and community peace-building.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Access To Initiative](https://img.shields.io/badge/Access%20To-Initiative-green)](https://dougdevitre.github.io/access-projects)
[![Status: Active Development](https://img.shields.io/badge/Status-Active%20Development-yellow)]()

---

## Platform Architecture

```mermaid
graph TB
    subgraph Entry["User Entry Points"]
        A["Free-text trigger<br/>(e.g. 'I need help with a conflict')"]
        B["Role selection<br/>(20 roles across 6 pods)"]
        C["Quick-start scenario<br/>(common pathways)"]
    end

    subgraph Core["Core Processing Loop"]
        D["Trigger Identification<br/>80 triggers · 8 categories"]
        E["Role Assignment<br/>Language mode + defaults"]
        F{"Safety Gate<br/>Green · Yellow · Orange · Red"}
        G["Module Loaded<br/>26 modules · 7 domains"]
        H["Question Set<br/>Required + Optional"]
        I["Artifact Generated<br/>13 artifact types"]
        J["Quality Gates<br/>Neutrality · Trauma-informed · PII"]
    end

    subgraph Safety["Safety Response"]
        K["Crisis Resources<br/>988 · DV Hotline · 911"]
        L["Safety Plan<br/>MOD-14"]
        M["Safety Assessment<br/>MOD-07"]
    end

    subgraph Output["User Outputs"]
        N["Completed Artifact"]
        O["Recommended Next Modules"]
        P["Session Summary"]
    end

    A --> D
    B --> E
    C --> D
    D --> E
    E --> F
    F -- "Green/Yellow" --> G
    F -- "Orange" --> M
    F -- "Red" --> K
    M --> L
    L --> G
    K --> |"When safe"| G
    G --> H
    H --> I
    I --> J
    J --> N
    N --> O
    O --> |"Continue"| D
    O --> P

    style F fill:#ff9800,stroke:#e65100,color:#fff
    style K fill:#d32f2f,stroke:#b71c1c,color:#fff
    style N fill:#2e7d32,stroke:#1b5e20,color:#fff
```

---

## What Is Access To Peace?

Access To Peace is one pillar of the [Access To](https://dougdevitre.github.io/access-projects)
civic technology initiative — a family of open-source platforms designed to democratize access
to essential services across justice, education, housing, health, and safety.

**Access To Peace** specifically addresses the gap between conflict and resolution. It serves
individuals, families, clinicians, mediators, attorneys, courts, schools, and community
organizations who need structured, trauma-informed tools for navigating conflict — without
requiring expensive professional services at every step.

---

## Core Principles

- **Trauma-informed first.** Every interaction assumes the user may be in or near crisis.
- **Conflict-neutral.** Artifacts document facts. The platform does not take sides.
- **Role-aware.** Language, depth, and outputs adjust automatically by role.
- **Safety always first.** A safety gate runs on every session. Crisis resources are always one step away.
- **Educational framing.** Legal and clinical content is for informational purposes only.
- **Open source.** Free to use, fork, and deploy. Reference implementation targets Missouri.

---

## Who This Serves

```mermaid
graph LR
    subgraph Pod1["Individual & Family"]
        IND["Individual"]
        PAR["Parent"]
        YTH["Youth/Teen"]
        ELD["Elder/Caregiver"]
    end
    subgraph Pod2["Mediation & Conflict"]
        MED["Mediator"]
        ARB["Arbitrator"]
        CCH["Conflict Coach"]
        RPF["Restorative Facilitator"]
    end
    subgraph Pod3["Mental Health"]
        THR["Therapist"]
        PSY["Psychiatrist"]
        SWK["Social Worker"]
        PSS["Peer Support"]
    end
    subgraph Pod4["Legal & Court"]
        ATT["Attorney"]
        GAL["Guardian ad Litem"]
        JDG["Judge/Court Staff"]
        VAD["Victim Advocate"]
    end
    subgraph Pod5["School & Youth"]
        SCL["School Counselor"]
        TCH["Teacher/Admin"]
    end
    subgraph Pod6["Community & Nonprofit"]
        ORG["Community Organizer"]
        NCM["Case Manager"]
    end

    style Pod1 fill:#e3f2fd,stroke:#1565c0
    style Pod2 fill:#e8f5e9,stroke:#2e7d32
    style Pod3 fill:#fce4ec,stroke:#c62828
    style Pod4 fill:#fff3e0,stroke:#e65100
    style Pod5 fill:#f3e5f5,stroke:#6a1b9a
    style Pod6 fill:#e0f2f1,stroke:#00695c
```

| Pod | Roles |
|-----|-------|
| Individual & Family | Individuals, Parents (co-parenting), Youth/Teens, Elders/Caregivers |
| Mediation & Conflict | Mediators, Arbitrators, Conflict Coaches, Restorative Practices Facilitators |
| Mental Health | Therapists, Psychiatrists, Social Workers, Peer Support Specialists |
| Legal & Court | Family Law Attorneys, GALs, Judges/Court Staff, Victim Advocates |
| School & Youth | School Counselors, Teachers/Administrators |
| Community & Nonprofit | Community Organizers, Nonprofit Case Managers |

---

## Platform Modules (26)

### Communication & De-escalation
- De-Escalation Message Rewriter
- Active Listening Guide
- Nonviolent Communication (NVC) Framework
- Co-Parenting Communication Rewriter

### Conflict Assessment
- Conflict Intake & Triage
- Conflict History Timeline
- Power & Safety Assessment
- Interests vs. Positions Mapper

### Mediation & Resolution
- Mediation Session Prep
- Peace Agreement Builder
- Restorative Circle Prep
- Community Dialogue Facilitator

### Mental Wellness & Regulation
- Emotional Regulation Plan
- Safety Plan Builder
- Trauma-Informed Self-Care Plan
- Grief & Loss Navigation

### Legal & Court Support
- Parenting Plan Communication Log
- Court Preparation Checklist
- Protective Order Navigation *(educational only)*
- Case Documentation Summary

### School & Youth
- Peer Conflict Resolution Guide
- School Restorative Practice Template
- Youth Emotional Check-In

### Community & Systems
- Neighborhood Dispute Navigator
- Service Referral Builder
- Community Peace Agreement

---

## Repo Structure

```
access-to-peace/
├── SKILL.md                    # Claude skill root — triggers, roles, routing, quick-start scenarios
├── README.md                   # This file
├── LICENSE
├── CONTRIBUTING.md
├── references/                 # Core reference materials
│   ├── routing.md              # Trigger → module → artifact routing table
│   ├── roles.md                # 20 role definitions, language modes, defaults
│   ├── triggers.md             # 80-trigger catalog with safety levels
│   ├── artifacts.md            # 13 artifact definitions and quality gates
│   ├── nvc-framework.md        # Nonviolent Communication language patterns
│   ├── trauma-informed.md      # Trauma-informed principles and language guide
│   ├── legal-disclaimer.md     # 8 standard disclaimer blocks by context
│   └── crisis-resources.md     # Crisis lines and local service finders
├── modules/                    # 26 modules — each with triggers, questions, output, pathways, examples
│   ├── MOD-01-deescalation-rewriter.md
│   ├── MOD-02-active-listening.md
│   ├── MOD-03-nvc-framework.md
│   ├── MOD-04-coparenting-rewriter.md
│   ├── MOD-05-conflict-intake.md
│   ├── MOD-06-conflict-timeline.md
│   ├── MOD-07-power-safety-assessment.md
│   ├── MOD-08-interests-positions.md
│   ├── MOD-09-mediation-session-prep.md
│   ├── MOD-10-peace-agreement-builder.md
│   ├── MOD-11-restorative-circle-prep.md
│   ├── MOD-12-community-dialogue.md
│   ├── MOD-13-emotional-regulation.md
│   ├── MOD-14-safety-plan-builder.md
│   ├── MOD-15-self-care-plan.md
│   ├── MOD-16-grief-loss-navigation.md
│   ├── MOD-17-parenting-plan-log.md
│   ├── MOD-18-court-prep-checklist.md
│   ├── MOD-19-protective-order-nav.md
│   ├── MOD-20-case-documentation.md
│   ├── MOD-21-peer-conflict-guide.md
│   ├── MOD-22-school-restorative.md
│   ├── MOD-23-youth-checkin.md
│   ├── MOD-24-neighborhood-dispute.md
│   ├── MOD-25-service-referral.md
│   └── MOD-26-community-peace-agreement.md
├── workflows/                  # End-to-end workflow guides
│   ├── all-workflows.md
│   └── individual-conflict-nav.md
├── templates/                  # Fillable artifact templates
│   ├── all-templates.md
│   └── peace-agreement.md
├── checklists/                 # Pre-built checklists for key workflows
│   └── all-checklists.md
├── schemas/                    # Data schemas for structured outputs
│   ├── data-schemas.md         # JSON + CSV schemas
│   └── airtable-schema.md      # Airtable base design for case tracking
├── artifacts/                  # Dashboard and tracker concepts
│   └── peace-dashboard.md
└── routines/                   # Recurring workflow patterns
    └── all-routines.md
```

---

## Quick Start

### As a Claude Skill
1. Copy `SKILL.md`, `references/`, and `modules/` to your Claude skill directory.
2. Add the skill description to your Claude Code `CLAUDE.md` or skill registry.
3. Trigger with any conflict, mediation, peace, or de-escalation request.

### As a Standalone Tool
1. Clone this repo.
2. Open `SKILL.md` and paste into any Claude conversation as a system prompt.
3. Start with: *"I need help with a conflict"* or identify your role directly.

### Reference Implementation
Missouri is the reference deployment. Roles, statutes referenced (educational only),
and service resources are calibrated for Missouri — but all modules are state-agnostic
by default. Fork and localize `references/crisis-resources.md` for your region.

---

## Common Pathways

```mermaid
flowchart LR
    Start{"Where do\nI start?"} --> MSG["Need to send\na message"]
    Start --> CONFLICT["In a conflict"]
    Start --> MEDIATION["Mediation\ncoming up"]
    Start --> UNSAFE["Don't feel\nsafe"]
    Start --> COPAR["Co-parenting\nproblems"]
    Start --> SCHOOL["School\nconflict"]
    Start --> COMMUNITY["Community\ndispute"]
    Start --> WELLNESS["Overwhelmed\nor grieving"]

    MSG --> M01["MOD-01\nDe-Escalation"]
    M01 --> M03["MOD-03 NVC\nor MOD-04 Co-Parent"]

    CONFLICT --> M05["MOD-05\nConflict Intake"]
    M05 --> NEXT["Follow recommended\nnext modules"]

    MEDIATION --> M08["MOD-08\nInterests Mapper"]
    M08 --> M09["MOD-09\nSession Prep"]
    M09 --> M13a["MOD-13\nRegulation"]

    UNSAFE --> M07["MOD-07\nSafety Assessment"]
    M07 --> M14["MOD-14\nSafety Plan"]
    M14 --> M19["MOD-19 or MOD-25\nProtection/Referral"]

    COPAR --> M04["MOD-04\nCo-Parent Rewriter"]
    M04 --> M17["MOD-17\nCommunication Log"]

    SCHOOL --> M21["MOD-21\nPeer Conflict"]
    M21 --> M22["MOD-22\nRestorative Practice"]

    COMMUNITY --> M24["MOD-24\nDispute Navigator"]
    M24 --> M12["MOD-12 or MOD-26\nDialogue/Agreement"]

    WELLNESS --> M13b["MOD-13 or MOD-15\nRegulation/Self-Care"]
    M13b --> M25["MOD-25\nService Referral"]

    style Start fill:#1565c0,stroke:#0d47a1,color:#fff
    style UNSAFE fill:#ff9800,stroke:#e65100,color:#fff
    style M07 fill:#ff9800,stroke:#e65100,color:#fff
    style M14 fill:#ff9800,stroke:#e65100,color:#fff
```

Not sure where to start? Here are the most common user journeys:

| Situation | Start With | Then |
|-----------|-----------|------|
| Need to send a message without escalating | MOD-01 De-Escalation Rewriter | MOD-03 NVC or MOD-04 Co-Parenting |
| In a conflict, don't know what to do | MOD-05 Conflict Intake | Follow recommended next modules |
| Mediation coming up | MOD-08 Interests Mapper → MOD-09 Session Prep | MOD-13 Emotional Regulation |
| Don't feel safe | MOD-07 Safety Assessment | MOD-14 Safety Plan → MOD-19 or MOD-25 |
| Co-parenting communication problems | MOD-04 Co-Parenting Rewriter | MOD-17 Communication Log |
| School conflict with students | MOD-21 Peer Conflict Guide | MOD-22 Restorative Practice |
| Community/neighborhood dispute | MOD-24 Dispute Navigator | MOD-12 Dialogue or MOD-26 Agreement |
| Overwhelmed, burned out, grieving | MOD-13 Regulation or MOD-15 Self-Care | MOD-25 Service Referral |

Every module includes **Recommended Next Modules** so users are always guided to the next step.

---

## Safety & Disclaimers

Access To Peace is a **documentation and support tool only**.

- It is **not** a substitute for emergency services. If anyone is in immediate danger, call 911.
- It is **not** legal advice. Consult a licensed attorney for legal guidance.
- It is **not** clinical care. Consult a licensed mental health professional for diagnosis or treatment.
- Crisis resources are embedded throughout and always accessible regardless of current module.

**Crisis lines:**
- **988** — Suicide & Crisis Lifeline (call or text)
- **1-800-799-7233** — National Domestic Violence Hotline
- **Text HOME to 741741** — Crisis Text Line

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). All contributions must maintain the platform's
trauma-informed, conflict-neutral voice. No advocacy content. No side-taking.

---

## License

MIT License. See [LICENSE](LICENSE).

---

## Part of the Access To Initiative

| Platform | Focus |
|----------|-------|
| [access-to-justice](https://github.com/dougdevitre/access-to-justice) | Legal navigation |
| [access-to-education](https://github.com/dougdevitre/access-to-education) | K-12 support |
| [access-to-housing](https://github.com/dougdevitre/access-to-housing) | Housing & Fair Housing |
| [access-to-health](https://github.com/dougdevitre/access-to-health) | Public health |
| [access-to-safety](https://github.com/dougdevitre/access-to-safety) | Community safety |
| [access-to-services](https://github.com/dougdevitre/access-to-services) | Social services |
| [access-to-jobs](https://github.com/dougdevitre/access-to-jobs) | Workforce |
| [access-to-business](https://github.com/dougdevitre/access-to-business) | Small business |
| **access-to-peace** | Conflict resolution & peace |

---

*Built with care by [Doug DeVitre](https://linkedin.com/in/dougdevitre) · [CoTrackPro](https://cotrackpro.com) · St. Louis, MO*

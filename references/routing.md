# Routing Reference

## Trigger → Module → Artifact

```mermaid
flowchart TD
    USER["User Input\n(free text or selected trigger)"]
    USER --> MATCH{"Match trigger\nkeywords"}

    MATCH --> CAT1["Communication\nT-01 to T-10"]
    MATCH --> CAT2["Conflict Assessment\nT-11 to T-20"]
    MATCH --> CAT3["Mediation & Resolution\nT-21 to T-30"]
    MATCH --> CAT4["Mental Wellness\nT-31 to T-40"]
    MATCH --> CAT5["Legal & Court\nT-41 to T-50"]
    MATCH --> CAT6["School & Youth\nT-51 to T-60"]
    MATCH --> CAT7["Community\nT-61 to T-70"]
    MATCH --> CAT8["Crisis & Safety\nT-71 to T-80"]
    MATCH --> AMB["Ambiguous?\nAsk clarifying question"]

    CAT1 --> MOD_C["MOD-01 · 02 · 03 · 04"]
    CAT2 --> MOD_A["MOD-05 · 06 · 07 · 08"]
    CAT3 --> MOD_M["MOD-09 · 10 · 11 · 12"]
    CAT4 --> MOD_W["MOD-13 · 14 · 15 · 16"]
    CAT5 --> MOD_L["MOD-17 · 18 · 19 · 20"]
    CAT6 --> MOD_S["MOD-21 · 22 · 23"]
    CAT7 --> MOD_N["MOD-24 · 25 · 26"]
    CAT8 --> CRISIS["Crisis Interrupt\nStop all work"]

    MOD_C --> ART["Artifact Output\nA-01 through A-13"]
    MOD_A --> ART
    MOD_M --> ART
    MOD_W --> ART
    MOD_L --> ART
    MOD_S --> ART
    MOD_N --> ART

    AMB --> MATCH

    style CAT8 fill:#d32f2f,stroke:#b71c1c,color:#fff
    style CRISIS fill:#d32f2f,stroke:#b71c1c,color:#fff
    style ART fill:#2e7d32,stroke:#1b5e20,color:#fff
    style MATCH fill:#1565c0,stroke:#0d47a1,color:#fff
```

Every session routes through this table. Match the user's trigger (free text or selected)
to the closest module. If ambiguous, ask one clarifying question before routing.

---

## Routing Table

| Trigger Keywords | Safety Level | Module | Primary Artifact |
|-----------------|-------------|--------|-----------------|
| "help with a conflict," "argument," "dispute" | Green | MOD-05 Conflict Intake | Conflict Intake Summary |
| "message rewrite," "how do I say this," "help me respond" | Green | MOD-01 De-escalation Rewriter | Rewritten Message (3 versions) |
| "co-parenting message," "text my ex," "email the other parent" | Green | MOD-04 Co-Parenting Rewriter | Court-neutral rewritten message |
| "mediation," "preparing for mediation," "mediation session" | Green | MOD-09 Mediation Session Prep | Mediation Prep Sheet |
| "peace agreement," "write an agreement," "resolution document" | Green | MOD-10 Peace Agreement Builder | Peace Agreement Draft |
| "restorative circle," "circle practice," "harm repair" | Green | MOD-11 Restorative Circle Prep | Circle Agenda + Harm Repair Plan |
| "community dispute," "neighbor conflict," "HOA conflict" | Green | MOD-24 Neighborhood Dispute | Dispute Navigation Plan |
| "school conflict," "student fight," "bullying" | Green | MOD-21 Peer Conflict Guide | Peer Conflict Resolution Plan |
| "emotional regulation," "can't calm down," "overwhelmed" | Yellow | MOD-13 Emotional Regulation | Regulation Plan + Grounding Tools |
| "safety plan," "I don't feel safe," "need a safety plan" | Orange | MOD-14 Safety Plan Builder | Personalized Safety Plan |
| "court prep," "going to court," "hearing preparation" | Green | MOD-18 Court Prep Checklist | Court Preparation Checklist |
| "parenting plan," "custody communication," "visitation log" | Green | MOD-17 Parenting Plan Log | Communication Log |
| "I'm scared," "they threatened me," "I'm afraid" | Orange | MOD-07 Power & Safety Assessment | Safety Assessment + Resources |
| "protect myself," "protective order," "restraining order" | Orange | MOD-19 Protective Order Nav | Educational Navigation Guide |
| "grief," "loss," "someone died," "I'm grieving" | Yellow | MOD-16 Grief & Loss | Grief Navigation Plan |
| "self-care," "I'm burned out," "caregiver stress" | Yellow | MOD-15 Self-Care Plan | Trauma-Informed Self-Care Plan |
| "referral," "resources," "where can I get help" | Green | MOD-25 Service Referral | Service Referral List |
| "document this," "keep a record," "case summary" | Green | MOD-20 Case Documentation | Case Documentation Summary |
| "community dialogue," "town hall," "group facilitation" | Green | MOD-12 Community Dialogue | Dialogue Agenda + Facilitation Guide |
| "interests," "what do they really want," "underlying needs" | Green | MOD-08 Interests vs. Positions | Interests Map |
| "listening," "how to listen," "they won't hear me" | Green | MOD-02 Active Listening | Active Listening Guide |
| "nonviolent communication," "NVC," "feelings and needs" | Green | MOD-03 NVC Framework | NVC Communication Script |
| "youth check-in," "how are you feeling," "teen support" | Green/Yellow | MOD-23 Youth Check-In | Emotional Check-In Summary |
| "school restorative," "restorative practice at school" | Green | MOD-22 School Restorative | Restorative Practice Template |
| "conflict timeline," "history of conflict," "pattern of behavior" | Green | MOD-06 Conflict Timeline | Conflict History Timeline |
| "community agreement," "group norms," "collective peace" | Green | MOD-26 Community Peace Agreement | Community Peace Agreement |

---

## Safety Level Definitions

```mermaid
flowchart LR
    G["🟢 GREEN\nProductive conflict"] --> |"Route directly"| MODULE["Load Module"]
    Y["🟡 YELLOW\nDistress/overwhelm"] --> |"Safety gate question"| MODULE
    O["🟠 ORANGE\nActive threats"] --> |"Full safety gate"| RESOURCES["Crisis Resources\nFirst"]
    R["🔴 RED\nImminent harm"] --> |"BLOCK artifacts"| CRISIS["Crisis Resources\nONLY"]

    RESOURCES --> MODULE
    CRISIS --> |"When confirmed safe"| MODULE

    style G fill:#4caf50,stroke:#2e7d32,color:#fff
    style Y fill:#ffeb3b,stroke:#f9a825,color:#000
    style O fill:#ff9800,stroke:#e65100,color:#fff
    style R fill:#d32f2f,stroke:#b71c1c,color:#fff
```

| Level | Meaning | Action |
|-------|---------|--------|
| **Green** | No harm indicators. Productive conflict. | Route directly. |
| **Yellow** | Distress, overwhelm, fear implied. | Ask safety gate question before routing. |
| **Orange** | Active threat language, safety concern. | Run full safety gate. Offer crisis resources first. |
| **Red** | Emergency, imminent harm, active crisis. | Block artifact work. Crisis resources only. |

---

## Ambiguous Trigger Protocol

If the user's trigger matches multiple modules OR contains no clear keyword:

1. Ask: *"Can you tell me a little more about what's happening? For example, are you trying
   to write a message, prepare for mediation, make a safety plan, or something else?"*
2. Map their answer to the routing table.
3. Confirm role before loading module.

---

## Role → Default Module Mapping

```mermaid
flowchart LR
    subgraph IndFam["Individual & Family"]
        IND["IND → MOD-05"]
        PAR["PAR → MOD-04"]
        YTH["YTH → MOD-23"]
        ELD["ELD → MOD-05"]
    end
    subgraph MedConf["Mediation & Conflict"]
        MED["MED → MOD-09"]
        ARB["ARB → MOD-09"]
        CCH["CCH → MOD-08"]
        RPF["RPF → MOD-11"]
    end
    subgraph MH["Mental Health"]
        THR["THR → MOD-14"]
        PSY["PSY → MOD-14"]
        SWK["SWK → MOD-25"]
        PSS["PSS → MOD-13"]
    end
    subgraph Legal["Legal & Court"]
        ATT["ATT → MOD-17"]
        GAL["GAL → MOD-20"]
        JDG["JDG → MOD-20"]
        VAD["VAD → MOD-14"]
    end
    subgraph School["School & Youth"]
        SCL["SCL → MOD-21"]
        TCH["TCH → MOD-22"]
    end
    subgraph Comm["Community"]
        ORG["ORG → MOD-24"]
        NCM["NCM → MOD-25"]
    end

    style IndFam fill:#e3f2fd,stroke:#1565c0
    style MedConf fill:#e8f5e9,stroke:#2e7d32
    style MH fill:#fce4ec,stroke:#c62828
    style Legal fill:#fff3e0,stroke:#e65100
    style School fill:#f3e5f5,stroke:#6a1b9a
    style Comm fill:#e0f2f1,stroke:#00695c
```

When a role is identified but no trigger is given, start here:

| Role | Default Module |
|------|---------------|
| Individual (IND) | MOD-05 Conflict Intake |
| Parent (PAR) | MOD-04 Co-Parenting Rewriter |
| Youth (YTH) | MOD-23 Youth Check-In |
| Elder (ELD) | MOD-05 Conflict Intake |
| Mediator (MED) | MOD-09 Mediation Session Prep |
| Arbitrator (ARB) | MOD-09 Mediation Session Prep |
| Conflict Coach (CCH) | MOD-08 Interests vs. Positions |
| Restorative Facilitator (RPF) | MOD-11 Restorative Circle Prep |
| Therapist (THR) | MOD-14 Safety Plan Builder |
| Psychiatrist (PSY) | MOD-14 Safety Plan Builder |
| Social Worker (SWK) | MOD-25 Service Referral |
| Peer Support (PSS) | MOD-13 Emotional Regulation |
| Attorney (ATT) | MOD-17 Parenting Plan Log |
| GAL (GAL) | MOD-20 Case Documentation |
| Judge/Court (JDG) | MOD-20 Case Documentation |
| Victim Advocate (VAD) | MOD-14 Safety Plan Builder |
| School Counselor (SCL) | MOD-21 Peer Conflict Guide |
| Teacher/Admin (TCH) | MOD-22 School Restorative |
| Community Organizer (ORG) | MOD-24 Neighborhood Dispute |
| Nonprofit Case Manager (NCM) | MOD-25 Service Referral |

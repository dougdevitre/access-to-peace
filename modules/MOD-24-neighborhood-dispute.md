# MOD-24 — Neighborhood Dispute Navigator

## Purpose
Help a community member or organizer navigate a neighborhood, HOA, or
landlord-tenant dispute using structured de-escalation and resolution steps.

## Triggers
T-61, T-62, T-64, T-65

## Roles
IND, ORG, NCM

## Safety Level
Green / Yellow if safety concern indicated

```mermaid
flowchart TD
    A["Trigger: T-61, T-62, T-64, T-65\nNeighborhood Dispute"]:::blue --> B["Q1: Dispute Type?\nNoise / Boundary / Shared Space /\nParking / Pets / Trash / Other"]:::blue
    B --> C["Q2: Who is involved?\nNeighbor / Landlord / Tenant / HOA"]
    C --> D["Q3: Duration?\nQ4: What have you tried?"]
    D --> E["Q5: What outcome\ndo you want?"]
    E --> F{"Q8: Do you feel safe?"}:::orange
    F -- "No / Sometimes" --> G["Safety resources:\nNon-emergency police / 911"]:::red
    F -- "Yes" --> H["Generate Navigation Plan"]:::green
    G --> H
    H --> I["Step 1: Direct Conversation\n(if safe)"]:::green
    I --> J["Step 2: Written Request\n(certified letter/email)"]:::green
    J --> K["Step 3: Third-Party\nMediation (often free)"]:::green
    K --> L["Step 4: Formal Complaint\n(code enforcement / small claims)"]:::green
    L --> M["Local Resources:\n211 / Legal Aid / Mediation"]:::green
    M --> N["MOD-01 De-Escalation"]:::green
    M --> O["MOD-12 Community Dialogue"]:::green
    M --> P["MOD-26 Community Peace Agreement"]:::green
    M --> Q["MOD-25 Service Referral"]:::green

    classDef blue fill:#1565c0,color:#fff
    classDef orange fill:#ff9800,color:#fff
    classDef red fill:#d32f2f,color:#fff
    classDef green fill:#2e7d32,color:#fff
```

---

## Question Set

**Required:**
1. What is the dispute about? (noise / property boundary / shared space / parking / pets / trash / other)
2. Who is involved? (neighbor / landlord / tenant / HOA / other)
3. How long has this been going on?
4. What have you already tried?
5. What outcome are you hoping for?

**Optional:**
6. Is there a lease, HOA agreement, or local ordinance involved?
7. Has anyone contacted police, building management, or a code enforcement agency?
8. Do you feel safe in the situation? (yes / no / sometimes)

---

## Output Format

### Neighborhood Dispute Navigation Plan

**Dispute type:** [categorized]
**Parties:** [Your household] / [Neighbor / Landlord / HOA]
**Duration:** [user's input]

**What you've tried:**
[User's input — normalized: "You've already taken reasonable steps."]

**Your goal:** [user's stated outcome]

**Recommended next steps:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | **Direct conversation** — if safe | Use MOD-01 to prepare what to say. Calm, specific, one issue at a time. |
| 2 | **Written request** — if conversation didn't work | Certified letter or email. State the issue, what you're asking, and a reasonable deadline. |
| 3 | **Third-party mediation** — if written request ignored | Community mediation center. Often free. See resources below. |
| 4 | **Formal complaint** — if mediation fails | Code enforcement, housing authority, HOA board, or small claims court depending on issue. |

**Local resources:**
- Community mediation: [from crisis-resources.md — local mediation centers]
- 211 (social services navigator): call or text 211
- Missouri Legal Aid (tenant issues): 800-990-0340

**If you feel unsafe at any point:**
Contact local non-emergency police line or call 911 if in immediate danger.

---

## Quality Gates
- [ ] Safety check embedded
- [ ] Steps are sequential and realistic
- [ ] No legal conclusions ("they violated your lease") — educational only
- [ ] Resources included

## Recommended Next Modules
- **MOD-01** De-Escalation Message Rewriter — prepare what to say or write
- **MOD-12** Community Dialogue Facilitator — if the dispute affects multiple households
- **MOD-26** Community Peace Agreement — formalize a neighbor agreement
- **MOD-25** Service Referral Builder — find mediation or legal aid services

## Disclaimer
Append Blocks A, B.

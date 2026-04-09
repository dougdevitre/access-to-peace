# MOD-07 — Power & Safety Assessment

## Purpose
Assess power dynamics, safety risks, and protective factors in a conflict situation.
Produces a safety assessment with targeted resources.

## Triggers
T-14, T-15, T-18, T-19, T-71, T-72, T-77, T-78

## Roles
All — mandatory for VAD, THR, SWK; available to all

## Safety Level
Orange — safety gate runs before question set

```mermaid
flowchart TD
    T14["T-14: Safety concern"] --> ENTRY
    T15["T-15: Power imbalance"] --> ENTRY
    T18["T-18: Threats reported"] --> ENTRY
    T19["T-19: Violence indicated"] --> ENTRY
    T71["T-71: DV indicators"] --> ENTRY
    T72["T-72: Stalking behavior"] --> ENTRY
    T77["T-77: Weapon mention"] --> ENTRY
    T78["T-78: Child at risk"] --> ENTRY

    ENTRY["MOD-07: Power &\nSafety Assessment"]:::blue --> GATE{"MANDATORY\nSAFETY GATE:\nImmediate danger?"}:::orange

    GATE -- "YES" --> CRISIS["Call 911 NOW\nReturn when safe"]:::red
    GATE -- "NOT SURE" --> QUESTIONS["Proceed through\nassessment questions"]
    GATE -- "NO, but concerned" --> QUESTIONS

    QUESTIONS --> S1["Section 1: Current Safety\nSafe location? Other party aware?"]
    S1 --> S2["Section 2: Risk Factors\nViolence? Weapons? Escalation?\nControl? Children? Substances?"]
    S2 --> S3["Section 3: Protective Factors\nTrusted people? Safe place?\nPrior contact with help?"]

    S3 --> ASSESS["Safety Assessment\nRisk + Protective factors"]
    ASSESS --> LEVEL{"Concern Level?"}

    LEVEL -- "Low" --> LOW["Low Concern\nSafe to proceed"]:::green
    LEVEL -- "Moderate" --> MOD_RISK["Moderate Concern\nSafety plan recommended"]:::orange
    LEVEL -- "High / Critical" --> HIGH["High/Critical Concern\nImmediate safety steps +\nCrisis resources"]:::red

    LOW --> OUTPUT["Safety Assessment +\nResources Table"]:::green
    MOD_RISK --> OUTPUT
    HIGH --> OUTPUT

    OUTPUT --> MOD14["MOD-14: Safety Plan Builder"]
    OUTPUT --> MOD19["MOD-19: Protective Order Nav"]
    OUTPUT --> MOD25["MOD-25: Service Referral"]
    OUTPUT --> MOD05["MOD-05: Conflict Intake"]
    OUTPUT --> MOD13["MOD-13: Emotional Regulation"]

    classDef blue fill:#1565c0,color:#fff
    classDef orange fill:#ff9800,color:#fff
    classDef red fill:#d32f2f,color:#fff
    classDef green fill:#2e7d32,color:#fff
```

---

## Safety Gate (mandatory)

> Before we continue — I want to make sure you're safe right now.
> Is anyone in immediate physical danger?
>
> → YES: Call 911 now. Come back when you're safe.
> → NOT SURE: Let's check through a few questions together.
> → NO, I'm safe but concerned: Let's assess the situation.

---

## Question Set

**Section 1 — Current Safety**
1. Are you currently in a safe location? (yes / no / unsure)
2. Is the other party aware you're seeking help right now? (yes / no / unsure)

**Section 2 — Risk Factors** *(answer only what you're comfortable sharing)*
3. Has there been any physical contact, violence, or threats of violence? (yes / no / prefer not to say)
4. Has the other party ever used or threatened to use a weapon? (yes / no / prefer not to say)
5. Has the conflict escalated recently — gotten worse, more frequent, or more intense? (yes / no)
6. Do you feel controlled, monitored, or isolated by the other party? (yes / no / sometimes)
7. Is a child present in or affected by this situation? (yes / no)
8. Has alcohol or substance use played a role in the conflict? (yes / no / prefer not to say)

**Section 3 — Protective Factors**
9. Do you have people you trust who know about this situation? (yes / no)
10. Do you have a safe place to go if needed? (yes / no)
11. Have you ever contacted law enforcement, a hotline, or an advocate about this? (yes / no)

---

## Output Format

### Safety Assessment

**Date:** [system date]
**Role:** [user role]
**Safety gate response:** [Safe / Not sure / Immediate concern]

**Risk factors identified:**
[Bullet list of risk factors user confirmed — neutral language]

**Protective factors present:**
[Bullet list of protective factors user confirmed]

**Overall safety concern level:** [Low / Moderate / High / Critical]

**Immediate recommended steps:**
[2–4 specific, actionable steps based on assessment]

**Resources:**

| Resource | Contact | Best For |
|----------|---------|---------|
| National DV Hotline | 1-800-799-7233 | Safety planning, shelter, advocacy |
| 988 Lifeline | Call/text 988 | Crisis, mental health |
| Crisis Text Line | Text HOME to 741741 | Text-based crisis support |
| Local legal aid | [from crisis-resources.md] | Protective orders, custody |
| Child welfare (MO) | 1-800-392-3738 | If child is at risk |

**Next recommended module:**
- MOD-14 Safety Plan Builder (if Moderate, High, or Critical)
- MOD-19 Protective Order Navigation (educational — if applicable)
- MOD-05 Conflict Intake (if Low concern, ready to document)

---

## Quality Gates
- [ ] Safety gate completed before question set
- [ ] No judgment language in risk assessment
- [ ] User's "prefer not to say" responses respected — not pressed
- [ ] Crisis resources always included regardless of risk level
- [ ] Child welfare flagged if child confirmed at risk

## Recommended Next Modules
- **MOD-14** Safety Plan Builder — build a personal safety plan (if Moderate/High/Critical)
- **MOD-19** Protective Order Navigation — learn about protective orders (educational)
- **MOD-25** Service Referral Builder — connect to DV services, shelters, legal aid
- **MOD-05** Conflict Intake — if safe to proceed, document the broader conflict
- **MOD-13** Emotional Regulation Plan — build regulation tools for high-stress moments

## Disclaimer
Append Blocks A, C, F. Add Block E if child involved.

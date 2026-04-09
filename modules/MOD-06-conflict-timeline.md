# MOD-06 — Conflict History Timeline

## Purpose
Build a structured, chronological, neutral timeline of a conflict's history.
Used for documentation, mediation prep, and court context.

## Triggers
T-13, T-16

## Roles
All — especially ATT, GAL, JDG, MED

## Safety Level
Green / Yellow if pattern indicates escalation or safety concern

```mermaid
flowchart TD
    T13["T-13: Needs conflict\ndocumentation"] --> ENTRY
    T16["T-16: Pattern of\nescalation"] --> ENTRY

    ENTRY["MOD-06: Conflict\nHistory Timeline"]:::blue --> SAFETY{"Escalation or safety\nconcern in pattern?"}
    SAFETY -- "No → Green" --> Q1
    SAFETY -- "Yes → Yellow" --> YELLOW["Flag safety concern"]:::orange
    YELLOW --> Q1

    Q1["Q1: When did\nconflict begin?"] --> Q2["Q2: First incident\nor triggering event"]
    Q2 --> Q3["Q3: Key events in order\ndate + description + parties"]
    Q3 --> Q4["Q4: Most recent event"]
    Q4 --> Q5["Q5: Escalating, stable,\nor de-escalating?"]
    Q5 --> Q6["Q6-Q7: Supporting documents?\nCourt/police involvement?"]

    Q6 --> TABLE["Build Chronological Table\nDate | Event | Parties | Evidence"]
    TABLE --> PATTERN["Pattern Assessment:\nEscalating / Stable /\nDe-escalating"]
    PATTERN --> GAPS["Note Timeline Gaps"]
    GAPS --> OUTPUT["Conflict History\nTimeline Document"]:::green

    OUTPUT --> MOD07["MOD-07: Power & Safety"]
    OUTPUT --> MOD20["MOD-20: Case Documentation"]
    OUTPUT --> MOD09["MOD-09: Mediation Prep"]
    OUTPUT --> MOD05["MOD-05: Conflict Intake"]
    OUTPUT --> MOD08["MOD-08: Interests vs. Positions"]

    classDef blue fill:#1565c0,color:#fff
    classDef orange fill:#ff9800,color:#fff
    classDef green fill:#2e7d32,color:#fff
```

---

## Question Set

**Required:**
1. When did this conflict begin (approximate date or time period)?
2. What was the first incident or event that started the conflict?
3. List the key events since then, in order. For each: approximate date, what happened (neutral description), who was involved.
4. What is the most recent event?
5. Has the conflict escalated, stayed the same, or de-escalated over time?

**Optional:**
6. Are there any documents, messages, or records that correspond to events on this timeline?
7. Has there been any court involvement, police contact, or formal complaints?

---

## Output Format

### Conflict History Timeline

**Conflict type:** [categorized]
**Parties:** [Party A] / [Party B] / [others as applicable]
**Timeline prepared:** [system date]

| Date (approx.) | Event | Parties Involved | Notes / Evidence |
|----------------|-------|-----------------|-----------------|
| [date] | [neutral description] | [Party A, Party B] | [document ref or blank] |
| [date] | [neutral description] | | |

**Pattern assessment:**
- Escalating / Stable / De-escalating
- [Brief neutral note on pattern if clear]

**Safety flag:** [None / See note: ___]

**Gaps in timeline:** [Any periods the user couldn't account for — noted as "gap"]

---

## Quality Gates
- [ ] All events described neutrally — no blame language
- [ ] Dates marked approximate where uncertain
- [ ] Safety flag raised if escalation pattern detected
- [ ] Gap periods noted, not assumed

## Recommended Next Modules
- **MOD-07** Power & Safety Assessment — if the timeline reveals escalation or safety concerns
- **MOD-20** Case Documentation Summary — compile the timeline into a formal case document
- **MOD-09** Mediation Session Prep — use the timeline to prepare for mediation
- **MOD-05** Conflict Intake — if the timeline reveals additional issues not yet triaged
- **MOD-08** Interests vs. Positions Mapper — understand what's driving the pattern

## Disclaimer
Append Block A. Add Block B if court context.

# Daily Check-In Routine
## Schedule: Daily (for active conflict situations) or as needed
## Time required: 5–10 minutes

```mermaid
flowchart TD
    MORNING["Morning Check-In\n5-10 minutes"]

    MORNING --> SAFETY["1. Safety Pulse\nIs everyone safe?"]
    SAFETY --> SAFE{"Safe?"}
    SAFE -- "No" --> CRISIS["Crisis Response\nWorkflow"]
    SAFE -- "Yes" --> BASELINE["2. Emotional Baseline\nScale 1-10"]

    BASELINE --> LOW["1-3: Clear\nProceed normally"]
    BASELINE --> MID["4-6: Elevated\nUse MOD-13 first"]
    BASELINE --> HIGH["7-10: Do NOT\ncommunicate today"]

    LOW --> TASK["3. Today's One Thing\nMessage · Log · Prep · Rest"]
    MID --> TASK
    HIGH --> REST["Rest is valid"]

    TASK --> RESOURCE{"4. Need\nresources?"}
    RESOURCE -- "Yes" --> M25["MOD-25\nService Referral"]
    RESOURCE -- "No" --> DONE["Check-in complete"]

    style CRISIS fill:#d32f2f,stroke:#b71c1c,color:#fff
    style HIGH fill:#ff9800,stroke:#e65100,color:#fff
    style REST fill:#e8f5e9,stroke:#2e7d32
```

---

### Morning Check-In (for individuals in active conflict)

**1. Safety pulse:** Is everyone safe today? (yes / no — if no, go to crisis response workflow)

**2. Emotional baseline:** On a scale of 1–10, how activated am I right now?
- 1–3: Clear to engage. Proceed normally.
- 4–6: Elevated. Use regulation tools (MOD-13) before any difficult communication.
- 7–10: Do not send messages or have difficult conversations. Stabilize first.

**3. Today's one thing:** What is the one conflict-related task I can realistically do today?
- [ ] Send a message (draft with MOD-01 first)
- [ ] Add a log entry (MOD-17 or MOD-20)
- [ ] Prepare for an upcoming meeting/hearing (MOD-09 or MOD-18)
- [ ] Rest and do nothing conflict-related today *(this is valid and sometimes the right choice)*

**4. Resource check:** Do I need anything today that I don't have access to?
- [ ] Attorney or advocate
- [ ] Mediator
- [ ] Mental health support
- [ ] Basic needs
→ If yes: MOD-25 (service referral)

---

# Weekly Case Review Routine
## Schedule: Weekly (Monday or first workday)
## Roles: MED, ATT, SWK, SCL, NCM, GAL — professional users
## Time required: 15–30 minutes

```mermaid
flowchart TD
    REVIEW["Weekly Case Review\n15-30 minutes"]

    REVIEW --> S1["1. Dashboard Refresh\nUpdate all active cases\nFlag safety changes"]
    S1 --> S2["2. Safety Sweep\nOrange/Red from last week?\nPlans current?"]
    S2 --> S3["3. Agreement Review\nDue this week?\nBreaches to address?"]
    S3 --> S4["4. Communication Audit\nUnanswered messages?\nPatterns in MOD-17?"]
    S4 --> S5["5. Upcoming Sessions\nCourt · Mediation · Circles\nPrep complete?"]
    S5 --> S6["6. Referrals Follow-up\nDid they connect?\nResource gaps?"]
    S6 --> S7["7. This Week's Priorities\nTop 3 actions"]

    style REVIEW fill:#1565c0,stroke:#0d47a1,color:#fff
    style S2 fill:#ff9800,stroke:#e65100,color:#fff
    style S7 fill:#2e7d32,stroke:#1b5e20,color:#fff
```

---

### Case Review Steps

**1. Dashboard refresh**
- Open peace-dashboard.md
- Update status on all active cases
- Flag any cases where safety level has changed

**2. Safety sweep**
- Any Orange/Red cases from last week?
- Safety plans in place? Current?
- Any cases needing safety check before proceeding?

**3. Agreement review**
- Any agreements due for review this week?
- Any reported breaches to address?

**4. Communication log audit** (co-parenting cases)
- Any unanswered communications from last week?
- Any pattern worth noting in MOD-17?

**5. Upcoming hearings / sessions**
- Any court dates, mediation sessions, or circles this week?
- Prep complete? (MOD-09, MOD-18, MOD-11 as applicable)

**6. Referrals follow-up**
- Any referrals made last week — did the person connect?
- Any open resource gaps?

**7. This week's priorities:**
| Priority | Case ID | Action | Due |
|---------|---------|--------|-----|
| 1 | | | |
| 2 | | | |
| 3 | | | |

---

# Post-Session Closeout Routine
## Schedule: Within 2 hours of each session
## Roles: All professional users (MED, ATT, SCL, SWK, RPF, NCM)
## Time required: 10–15 minutes

```mermaid
flowchart TD
    CLOSE["Post-Session Closeout\n10-15 minutes"]

    CLOSE --> S1["1. Session Summary\nTrigger · Module\nArtifact · Outcome"]
    S1 --> S2["2. Safety Log\nLevel start/end\nCrisis interrupt?\nPlan updated?"]
    S2 --> S3["3. Action Items\nDocument saved\nNext steps communicated\nFollow-up date set"]
    S3 --> S4["4. Agreement Registry\nAdd to dashboard\nReview date calendared"]
    S4 --> S5["5. Facilitator Self-Check\nAm I regulated?\nDo I need support?"]

    S5 --> NOTE["Vicarious trauma is real.\nTaking care of yourself is\npart of taking care of others."]

    style CLOSE fill:#1565c0,stroke:#0d47a1,color:#fff
    style S5 fill:#fce4ec,stroke:#c62828
    style NOTE fill:#f3e5f5,stroke:#6a1b9a
```

---

### Closeout Steps

**1. Session summary** (MOD-20 or session notes)
- What was the trigger?
- What module was used?
- What artifact was produced?
- What was the outcome?

**2. Safety log**
- Safety level at start: ___
- Safety level at end: ___
- Any crisis interrupt? (yes / no)
- Safety plan updated? (yes / no / not applicable)

**3. Action items captured**
- [ ] Document produced and saved
- [ ] Next steps communicated to client/participant
- [ ] Follow-up date set

**4. Agreement registry updated** (if agreement reached)
- Add to artifacts/peace-dashboard.md → Agreements section
- Review date calendared

**5. Facilitator self-check** *(often skipped — don't skip it)*
- Am I regulated after this session?
- Did anything in this session affect me personally?
- Do I need supervision, consultation, or a break before the next session?

> *Vicarious trauma is real. Conflict work is emotionally demanding.
> Taking care of yourself is part of taking care of others.*

**6. Session closed:** [date / time]

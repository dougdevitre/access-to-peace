# Mediation Session Workflow
## Workflow: MED-SESSION
**For:** Mediator (MED), Arbitrator (ARB), Attorney (ATT) in mediation context  
**Start trigger:** T-21, T-22, T-27  

```mermaid
flowchart TD
    T["Trigger: T-21 · T-22 · T-27"] --> S1["1. Pre-Session Prep\nMOD-09 (each party separately)"]
    S1 --> S2["2. Interests Mapping\nMOD-08 (each party)"]
    S2 --> S3["3. Session Facilitation\nMOD-12 (dialogue framework)"]
    S3 --> S4["4. Agreement Drafting\nMOD-10"]
    S4 --> S5["5. Documentation\nMOD-20"]
    S5 --> S6["6. Follow-up\nSchedule review date"]

    style T fill:#1565c0,stroke:#0d47a1,color:#fff
    style S4 fill:#2e7d32,stroke:#1b5e20,color:#fff
```

## Steps
1. **Pre-session prep** → MOD-09 (for each party separately if mediating)
2. **Interests mapping** → MOD-08 (pre-session for each party)
3. **Session facilitation** → MOD-12 (community dialogue framework adapted for mediation)
4. **Agreement drafting** → MOD-10
5. **Documentation** → MOD-20
6. **Follow-up** → Schedule review date from MOD-10 output

## Key Guardrails for Mediator Role
- Never produce content that advocates for one party over another
- Both parties' interests must appear in session notes
- Agreement terms reviewed for specificity before finalizing (MOD-10 quality gate)

---

# Co-Parenting Communication Workflow
## Workflow: COPAR-COMM
**For:** Parent (PAR), Attorney (ATT), GAL  
**Start trigger:** T-04, T-43, T-50  

```mermaid
flowchart TD
    T["Trigger: T-04 · T-43 · T-50"] --> S1{"New situation?"}
    S1 -- "Yes" --> INTAKE["1. Intake\nMOD-05"]
    S1 -- "No (ongoing)" --> S2
    INTAKE --> S2{"Safety language\npresent?"}
    S2 -- "Yes" --> SAFE["2. Safety Check\nMOD-07"]
    S2 -- "No" --> S3
    SAFE --> S3["3. Message Rewrite\nMOD-04 (court-neutral)"]
    S3 --> S4["4. Log Entry\nMOD-17"]
    S4 --> S5{"User emotionally\nactivated?"}
    S5 -- "Yes" --> REG["5. Regulation\nMOD-13"]
    S5 -- "No" --> S6
    REG --> S6{"Heading\nto hearing?"}
    S6 -- "Yes" --> COURT["6. Court Prep\nMOD-18"]
    S6 -- "No" --> DONE["Session Complete"]

    CHILD_CHECK["Child-Centering Checkpoint\n(runs on every step)"]

    style T fill:#1565c0,stroke:#0d47a1,color:#fff
    style SAFE fill:#ff9800,stroke:#e65100,color:#fff
    style CHILD_CHECK fill:#f3e5f5,stroke:#6a1b9a
```

## Steps
1. **Intake** → MOD-05 (if new situation) or skip to Step 2 (if ongoing)
2. **Safety check** → MOD-07 if any safety language present
3. **Message rewrite** → MOD-04 (court-neutral co-parenting rewriter)
4. **Log entry** → MOD-17 (add to communication log)
5. **Regulation** → MOD-13 if user is emotionally activated before or after
6. **Escalation** → MOD-18 (court prep) if situation is heading to hearing

## Child-Centering Checkpoint (runs on every step)
Every output must pass: *"Does this serve the child's best interest?"*
If not — revise before producing.

---

# Restorative Circle Workflow
## Workflow: RESTORATIVE-CIRCLE
**For:** RPF, SCL, TCH, ORG  
**Start trigger:** T-24, T-25, T-56  

```mermaid
flowchart TD
    subgraph PreCircle["Pre-Circle (1-2 weeks before)"]
        P1["Separate pre-circle\nconversations\nMOD-05 per person"]
        P2["Power & safety\nassessment\nMOD-07"]
        P3["Circle prep\nMOD-11"]
        P4["Logistics confirmed\nVoluntary · Safe · Space ready"]
        P1 --> P2 --> P3 --> P4
    end

    subgraph CircleDay["Circle Day"]
        C1["Opening\n(agenda from MOD-11)"]
        C2["Facilitate\nMOD-12 structure"]
        C3["Repair agreement\nMOD-10"]
        C4["Close & document\nMOD-20"]
        C1 --> C2 --> C3 --> C4
    end

    subgraph PostCircle["Post-Circle"]
        F1["Follow-up check-in\nat review date"]
        F2{"Agreement kept?"}
        F3["Return to MOD-05\n+ MOD-10 revision"]
        F1 --> F2
        F2 -- "No" --> F3
        F2 -- "Yes" --> DONE["Complete"]
    end

    PreCircle --> STOP{"Hard Stops?\nInvoluntary · Unsafe\nHarm not acknowledged"}
    STOP -- "No issues" --> CircleDay
    STOP -- "Issue found" --> PAUSE["Pause · Address\nReschedule"]
    CircleDay --> PostCircle

    style STOP fill:#ff9800,stroke:#e65100,color:#fff
    style PAUSE fill:#d32f2f,stroke:#b71c1c,color:#fff
    style DONE fill:#2e7d32,stroke:#1b5e20,color:#fff
```

## Pre-Circle (1–2 weeks before)
1. **Separate pre-circle conversations** with each participant → MOD-05 per person
2. **Power & safety assessment** → MOD-07 (confirm circle is appropriate)
3. **Circle prep** → MOD-11 (agenda + harm repair plan)
4. **Logistics confirmed:** space, time, voluntary participation, no active safety threat

## Circle Day
1. Opening — use agenda from MOD-11
2. Facilitate using community dialogue structure → MOD-12
3. Repair agreement → MOD-10 (populated during circle)
4. Close and document → MOD-20

## Post-Circle
1. Follow-up check-in at [review date from MOD-11]
2. If agreement not kept → return to MOD-05 + MOD-10 revision

## Hard Stops
- Circle does not proceed if: participant attendance is involuntary, safety concern unresolved, or harm has not been acknowledged
- If any of these: pause, address, reschedule

---

# School Conflict Response Workflow
## Workflow: SCHOOL-CONFLICT
**For:** SCL, TCH  
**Start trigger:** T-51, T-52, T-53, T-56, T-59  

```mermaid
flowchart TD
    subgraph Immediate["Immediate (Day of Incident)"]
        I1["Ensure physical safety\nSeparate if needed"]
        I2["Individual check-ins\nMOD-23 per student"]
        I3["Parent/guardian\nnotification"]
        I1 --> I2 --> I3
    end

    subgraph ShortTerm["Short-Term (Within 1 Week)"]
        S1["Conflict assessment\nMOD-21"]
        S2{"Restorative\nappropriate?"}
        S3["MOD-22\nRestorative template"]
        S4["MOD-11\nRestorative circle"]
        S1 --> S2
        S2 -- "Light touch" --> S3
        S2 -- "Full circle" --> S4
    end

    subgraph Documentation["Documentation"]
        D1["MOD-20\nCase documentation"]
    end

    Immediate --> ShortTerm --> Documentation

    subgraph Escalation["Escalation Criteria"]
        E1["Physical injury → Discipline + law enforcement"]
        E2["Pattern of bullying → Formal documentation"]
        E3["Abuse disclosure → Mandatory reporting"]
    end

    style Immediate fill:#fce4ec,stroke:#c62828
    style Escalation fill:#ff9800,stroke:#e65100,color:#fff
```

## Immediate (Day of Incident)
1. Ensure physical safety — separate if needed
2. Individual check-ins → MOD-23 (youth check-in) for each student
3. Parent/guardian notification (document via MOD-17 format)

## Short-Term (Within 1 Week)
4. Conflict assessment → MOD-21 (peer conflict resolution guide)
5. If restorative practice appropriate → MOD-22 (school restorative template)
6. If restorative circle needed → MOD-11

## Documentation
7. MOD-20 (case documentation summary) for any formal record

## Escalation Criteria
- Physical injury → school discipline + possible law enforcement
- Pattern of bullying → formal bullying documentation + parent conference
- Disclosure of abuse → mandatory reporting (separate from this workflow)

---

# Community Dispute Workflow
## Workflow: COMMUNITY-DISPUTE
**For:** ORG, NCM, MED  
**Start trigger:** T-61 through T-70  

```mermaid
flowchart TD
    T["Trigger: T-61 through T-70"] --> S1["1. Intake\nMOD-05"]
    S1 --> S2{"Safety language?"}
    S2 -- "Yes" --> SAFE["2. Safety Check\nMOD-07"]
    S2 -- "No" --> S3
    SAFE --> S3["3. Navigation\nMOD-24"]
    S3 --> S4{"Group\nconvening?"}
    S4 -- "Yes" --> S5["4. Dialogue Planning\nMOD-12"]
    S4 -- "No" --> S6
    S5 --> S6["5. Agreement\nMOD-26"]
    S6 --> S7["6. Referrals\nMOD-25"]

    style T fill:#1565c0,stroke:#0d47a1,color:#fff
    style SAFE fill:#ff9800,stroke:#e65100,color:#fff
    style S6 fill:#2e7d32,stroke:#1b5e20,color:#fff
```

## Steps
1. **Intake** → MOD-05 (from community member's perspective)
2. **Safety check** → MOD-07 if safety language present
3. **Navigation** → MOD-24 (neighborhood dispute navigator)
4. **Dialogue planning** → MOD-12 (if group convening)
5. **Agreement** → MOD-26 (community peace agreement)
6. **Referrals** → MOD-25 (if any party needs services)

---

# Crisis Response Workflow
## Workflow: CRISIS-RESPONSE
**For:** All roles  
**Start trigger:** Any T-71 through T-80, or any Red safety gate  

```mermaid
flowchart TD
    TRIGGER["Crisis Trigger Detected\nT-71 to T-80 or Red Gate"]
    TRIGGER --> STOP["Step 1: STOP EVERYTHING\nNo modules · No artifacts"]
    STOP --> RESOURCES["Step 2: Surface Crisis Resources\n911 · 988 · DV Hotline · Crisis Text"]
    RESOURCES --> ASK["Step 3: 'Are you safe right now?'"]
    ASK --> SAFE{"Response"}
    SAFE -- "Yes, safe" --> OFFER["Step 4: Offer\nMOD-07 or MOD-14"]
    SAFE -- "Not safe" --> HOLD["Step 5: Hold space\nDo not push\nRepeat resources"]
    SAFE -- "No response" --> HOLD
    OFFER --> LOG["Step 6: Log in metadata\nTrigger · Level · Resources · Confirmation"]
    HOLD --> LOG

    style TRIGGER fill:#d32f2f,stroke:#b71c1c,color:#fff
    style STOP fill:#d32f2f,stroke:#b71c1c,color:#fff
    style RESOURCES fill:#ff9800,stroke:#e65100,color:#fff
    style HOLD fill:#ff9800,stroke:#e65100,color:#fff
```

## This workflow overrides all other workflows.

### Step 1 — Stop everything.
No module work. No artifacts. Crisis first.

### Step 2 — Surface crisis resources immediately.

> 🆘 Emergency: **Call 911**
> 💙 Suicide & Crisis Lifeline: **Call or text 988**
> 💜 National DV Hotline: **1-800-799-7233**
> 💬 Crisis Text Line: **Text HOME to 741741**

### Step 3 — Ask one question only.
> "Are you safe right now?"

### Step 4 — If safe: offer to continue with MOD-07 or MOD-14.
### Step 5 — If not safe: hold space. Do not push. Repeat resources.
### Step 6 — Do not resume any other workflow until user confirms they are safe.

## Logging
All crisis interrupts are logged in session metadata with:
- Trigger code
- Safety level (Red)
- Crisis resources surfaced (yes)
- User safety confirmation (pending / confirmed / not confirmed)

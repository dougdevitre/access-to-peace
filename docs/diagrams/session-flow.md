# Session Flow

> What happens from the moment a user starts to the final artifact and beyond.

---

## Complete Session Lifecycle

```mermaid
flowchart TD
    START(["🟢 User arrives"])
    
    STEP1["<b>Step 1 — Identify Role</b><br/>Ask: What is your role?<br/><i>Default: Individual (IND)</i>"]
    STEP2["<b>Step 2 — Identify Trigger</b><br/>Accept free text or select<br/>from 80 triggers in 8 categories"]
    STEP3{"<b>Step 3 — Safety Gate</b><br/>Scan for harm indicators"}
    
    GREEN["🟢 <b>Green</b><br/>No harm indicators<br/>Productive conflict"]
    YELLOW["🟡 <b>Yellow</b><br/>Escalating tension<br/>Fear expressed"]
    ORANGE["🟠 <b>Orange</b><br/>Active threats<br/>DV / self-harm indicators"]
    RED["🔴 <b>Red</b><br/>Emergency<br/>Imminent harm"]
    
    SAFETY_Q["<i>Is anyone in immediate<br/>physical danger right now?</i>"]
    CRISIS["🆘 <b>Crisis Interrupt</b><br/>911 · 988 · DV Hotline<br/>Block all artifact work"]
    
    CONFIRM{"User confirms<br/>they are safe?"}
    
    STEP4["<b>Step 4 — Load Module</b><br/>Route via references/routing.md<br/>Load question set"]
    
    REQ["Answer <b>Required</b> questions"]
    OPT["Answer <b>Optional</b> questions<br/><i>(hidden for plain-language roles)</i>"]
    
    STEP5["<b>Step 5 — Generate Artifact</b><br/>Apply role-aware language mode<br/>Fill output template"]
    
    QG{"<b>Quality Gates</b><br/>8-point checklist"}
    PASS["✅ All gates pass"]
    FAIL["❌ Gate failed<br/>Revise before output"]
    
    DISC["Append <b>Disclaimer Blocks</b><br/>A through H per module"]
    
    STEP6["<b>Step 6 — Recommend Next</b><br/>Surface 3-5 next modules<br/>from pathway connections"]
    
    CHOICE{"User chooses"}
    CONTINUE["Continue to<br/>next module"]
    NEW["Start something<br/>new"]
    DONE["Done for now"]
    
    SUMMARY["<b>Session Summary</b><br/>Role · Modules used · Artifacts<br/>Next steps · Crisis resources"]
    
    ENDNODE(["🏁 Session Complete"])

    START --> STEP1
    STEP1 --> STEP2
    STEP2 --> STEP3
    
    STEP3 -->|"No indicators"| GREEN
    STEP3 -->|"Distress signals"| YELLOW
    STEP3 -->|"Threat language"| ORANGE
    STEP3 -->|"Emergency"| RED
    
    GREEN --> STEP4
    YELLOW --> SAFETY_Q
    ORANGE --> SAFETY_Q
    RED --> CRISIS
    
    SAFETY_Q -->|"YES"| CRISIS
    SAFETY_Q -->|"NOT SURE"| SAFETY_Q
    SAFETY_Q -->|"NO, safe"| STEP4
    
    CRISIS --> CONFIRM
    CONFIRM -->|"Yes, safe now"| STEP4
    CONFIRM -->|"No"| CRISIS
    
    STEP4 --> REQ
    REQ --> OPT
    OPT --> STEP5
    
    STEP5 --> QG
    QG -->|"Pass"| PASS
    QG -->|"Fail"| FAIL
    FAIL --> STEP5
    PASS --> DISC
    DISC --> STEP6
    
    STEP6 --> CHOICE
    CHOICE -->|"Next module"| CONTINUE
    CHOICE -->|"New topic"| NEW
    CHOICE -->|"Done"| DONE
    
    CONTINUE --> STEP4
    NEW --> STEP2
    DONE --> SUMMARY
    SUMMARY --> ENDNODE

    style START fill:#c8e6c9,stroke:#2e7d32
    style ENDNODE fill:#c8e6c9,stroke:#2e7d32
    style CRISIS fill:#ffcdd2,stroke:#c62828
    style RED fill:#ffcdd2,stroke:#c62828
    style ORANGE fill:#ffe0b2,stroke:#e65100
    style YELLOW fill:#fff9c4,stroke:#f9a825
    style GREEN fill:#c8e6c9,stroke:#2e7d32
    style PASS fill:#c8e6c9,stroke:#2e7d32
    style FAIL fill:#ffcdd2,stroke:#c62828
```

---

## Returning User Flow

```mermaid
flowchart LR
    RETURN(["User returns"])
    
    ASK{"What did you<br/>work on last time?"}
    
    REVIEW["Review previous<br/>artifact"]
    UPDATE["Update existing<br/>artifact"]
    BUILD["Build on it with<br/>next module"]
    FRESH["Start something<br/>completely new"]
    
    VERIFY["Verify context<br/><i>Role · Conflict type · Safety</i>"]
    
    RESUME["Resume at<br/>Step 4 (Load Module)"]

    RETURN --> ASK
    ASK --> REVIEW
    ASK --> UPDATE
    ASK --> BUILD
    ASK --> FRESH
    
    REVIEW --> VERIFY
    UPDATE --> VERIFY
    BUILD --> VERIFY
    FRESH --> VERIFY
    VERIFY --> RESUME

    style RETURN fill:#e3f2fd,stroke:#1565c0
    style RESUME fill:#c8e6c9,stroke:#2e7d32
```

---

## Key Rules

| Rule | Detail |
|------|--------|
| **Role carries forward** | Once identified, role persists across all modules in a session |
| **Safety gate always runs** | Even on Green sessions, harm keywords trigger re-assessment |
| **Quality gates are mandatory** | No artifact leaves without passing the 8-point checklist |
| **Next module is always offered** | Users are never left at a dead end |
| **Session summary at close** | Includes modules used, artifacts produced, and crisis resources |

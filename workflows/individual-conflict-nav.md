# Individual Conflict Navigation Workflow

## Workflow: IND-CONFLICT-NAV
**For:** Individual (IND) with no professional representation  
**Start trigger:** Any T-11 through T-20 conflict trigger  
**Estimated time:** 20–45 minutes

```mermaid
flowchart LR
    S1["Step 1\nIntake\nMOD-05"] --> S2{"Step 2\nSafety\nGate"}
    S2 -- "Orange/Red" --> SAFE["MOD-07\n+ Crisis"]
    S2 -- "Green/Yellow" --> S3["Step 3\nClarify Interests\nMOD-08"]
    SAFE --> S3
    S3 --> S4["Step 4\nCommunication\nMOD-01/02/03"]
    S4 --> S5["Step 5\nResolution\nPath"]
    S5 --> S6["Step 6\nRegulation\n(if needed)"]
    S6 --> S7["Step 7\nResources\nMOD-25"]

    style S2 fill:#ff9800,stroke:#e65100,color:#fff
    style SAFE fill:#d32f2f,stroke:#b71c1c,color:#fff
    style S1 fill:#1565c0,stroke:#0d47a1,color:#fff
```

---

## Steps

### Step 1 — Intake (MOD-05)
- Complete conflict intake question set
- Identify safety level
- Identify conflict type and parties

### Step 2 — Safety Gate
- If Orange/Red → route to MOD-07 + crisis resources first
- If Green/Yellow → continue

### Step 3 — Clarify Interests (MOD-08)
- Map positions vs. interests
- Identify BATNA
- Identify non-negotiables

### Step 4 — Communication (MOD-01 or MOD-03)
- If user needs to send a message → MOD-01
- If user needs to have a conversation → MOD-03 (NVC script)
- If user needs to listen → MOD-02

### Step 5 — Resolution Path
Based on conflict type:
- **Neighbor/community** → MOD-24
- **Family/co-parenting** → MOD-04 + MOD-17
- **Mediation upcoming** → MOD-09
- **Agreement needed** → MOD-10

### Step 6 — Regulation Support (if needed)
If user is emotionally activated at any point → interrupt with MOD-13

### Step 7 — Resources
Close every session with MOD-25 if user needs external support

---

## Decision Tree

```mermaid
flowchart TD
    INTAKE["INTAKE\nMOD-05"] --> SAFETY{"Safety Level?"}

    SAFETY -- "Red/Orange" --> MOD07["MOD-07\nSafety Assessment"]
    MOD07 --> CRISIS["Crisis Resources"]
    CRISIS --> STOP["STOP until safe"]

    SAFETY -- "Yellow" --> CHECK["Safety check question"]
    CHECK --> CONTINUE

    SAFETY -- "Green" --> CONTINUE{"Communication\nneeded?"}

    CONTINUE -- "Yes" --> COMM{"Type?"}
    COMM -- "Send message" --> MOD01["MOD-01\nDe-Escalation"]
    COMM -- "Have conversation" --> MOD03["MOD-03\nNVC Script"]
    COMM -- "Need to listen" --> MOD02["MOD-02\nActive Listening"]

    CONTINUE -- "No" --> RESOLVE{"Resolution\npath?"}

    MOD01 & MOD03 & MOD02 --> RESOLVE

    RESOLVE -- "Neighbor/community" --> MOD24["MOD-24"]
    RESOLVE -- "Family/co-parenting" --> MOD04["MOD-04 + MOD-17"]
    RESOLVE -- "Mediation upcoming" --> MOD09["MOD-09"]
    RESOLVE -- "Agreement needed" --> MOD10["MOD-10"]
    RESOLVE -- "Document" --> MOD20["MOD-20"]
    RESOLVE -- "Need resources" --> MOD25["MOD-25"]

    REG["MOD-13 Regulation\n(available as interrupt\nat any point)"]

    style SAFETY fill:#ff9800,stroke:#e65100,color:#fff
    style CRISIS fill:#d32f2f,stroke:#b71c1c,color:#fff
    style STOP fill:#d32f2f,stroke:#b71c1c,color:#fff
    style INTAKE fill:#1565c0,stroke:#0d47a1,color:#fff
```

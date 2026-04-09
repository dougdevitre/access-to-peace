# Workflow Sequences

> The 6 end-to-end workflows that chain modules together for complete user journeys,
> plus the Crisis Response override.

---

## All Workflows at a Glance

```mermaid
graph TB
    subgraph WORKFLOWS["6 Workflows + Crisis Override"]
        W1["<b>Individual Conflict Navigation</b><br/><i>7 steps · IND, PAR, ELD</i>"]
        W2["<b>Mediation Session</b><br/><i>6 steps · MED, ARB, ATT</i>"]
        W3["<b>Co-Parenting Communication</b><br/><i>6 steps · PAR, ATT, GAL</i>"]
        W4["<b>Restorative Circle</b><br/><i>Pre/During/Post · RPF, SCL</i>"]
        W5["<b>School Conflict Response</b><br/><i>4 phases · SCL, TCH</i>"]
        W6["<b>Community Dispute</b><br/><i>6 steps · ORG, NCM</i>"]
        CRISIS["🔴 <b>Crisis Response</b><br/><i>Overrides all others</i>"]
    end
    
    CRISIS -.->|"can interrupt"| W1
    CRISIS -.->|"can interrupt"| W2
    CRISIS -.->|"can interrupt"| W3
    CRISIS -.->|"can interrupt"| W4
    CRISIS -.->|"can interrupt"| W5
    CRISIS -.->|"can interrupt"| W6

    style CRISIS fill:#ffcdd2,stroke:#c62828
    style WORKFLOWS fill:#f5f5f5,stroke:#9e9e9e
```

---

## Workflow 1 — Individual Conflict Navigation

```mermaid
flowchart TD
    START(["Individual arrives"])
    
    S1["<b>Step 1: Intake</b><br/>MOD-05 Conflict Intake"]
    S2{"<b>Step 2: Safety Gate</b><br/>Any concerns?"}
    S2Y["Route to MOD-07<br/>Power & Safety"]
    S3["<b>Step 3: Clarify Interests</b><br/>MOD-08 Interests vs. Positions"]
    
    S4{"<b>Step 4: Communication</b><br/>What do you need?"}
    S4A["MOD-01<br/>Rewrite a message"]
    S4B["MOD-03<br/>Prepare a conversation"]
    S4C["MOD-02<br/>Learn to listen"]
    
    S5{"<b>Step 5: Resolution Path</b>"}
    S5A["MOD-09 Mediation Prep"]
    S5B["MOD-10 Peace Agreement"]
    S5C["MOD-20 Document it"]
    S5D["MOD-24 Neighbor dispute"]
    
    S6["<b>Step 6: Regulation</b><br/>MOD-13 if activated<br/><i>(can happen at any point)</i>"]
    S7["<b>Step 7: Resources</b><br/>MOD-25 Service Referral"]
    
    DONE(["Session complete"])
    
    START --> S1
    S1 --> S2
    S2 -->|"Yes"| S2Y
    S2Y --> S3
    S2 -->|"No"| S3
    S3 --> S4
    S4 -->|"Write"| S4A
    S4 -->|"Talk"| S4B
    S4 -->|"Listen"| S4C
    S4A --> S5
    S4B --> S5
    S4C --> S5
    S5 -->|"Mediation"| S5A
    S5 -->|"Agreement"| S5B
    S5 -->|"Document"| S5C
    S5 -->|"Neighbor"| S5D
    S5A --> S7
    S5B --> S7
    S5C --> S7
    S5D --> S7
    S6 -.->|"interrupt at any step"| S1
    S6 -.->|"interrupt at any step"| S3
    S6 -.->|"interrupt at any step"| S4
    S6 -.->|"interrupt at any step"| S5
    S7 --> DONE

    style START fill:#c8e6c9,stroke:#2e7d32
    style DONE fill:#c8e6c9,stroke:#2e7d32
    style S2Y fill:#ffe0b2,stroke:#e65100
    style S6 fill:#e1bee7,stroke:#6a1b9a
```

---

## Workflow 2 — Mediation Session

```mermaid
flowchart TD
    START(["Mediator or participant begins"])
    
    S1["<b>Step 1: Intake</b><br/>MOD-05 or role triggers MOD-09"]
    S2["<b>Step 2: Interests Map</b><br/>MOD-08 for each party"]
    S3["<b>Step 3: Session Prep</b><br/>MOD-09 Mediation Prep Sheet"]
    S4["<b>Step 4: Regulation Check</b><br/>MOD-13 for participants<br/>if needed"]
    S5["<b>Step 5: Agreement</b><br/>MOD-10 Peace Agreement Builder"]
    S6["<b>Step 6: Document</b><br/>MOD-20 Case Documentation"]
    
    DONE(["Session complete"])
    
    START --> S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> DONE

    style START fill:#bbdefb,stroke:#1565c0
    style DONE fill:#bbdefb,stroke:#1565c0
```

---

## Workflow 3 — Co-Parenting Communication

```mermaid
flowchart TD
    START(["Parent begins"])
    
    S1["<b>Step 1: Message Help</b><br/>MOD-04 Co-Parenting Rewriter"]
    CC{"<b>Child-Centering Check</b><br/>Is message focused on<br/>child's needs?"}
    S2["<b>Step 2: Log It</b><br/>MOD-17 Parenting Plan Log"]
    S3["<b>Step 3: Assess Patterns</b><br/>MOD-06 Conflict Timeline<br/><i>if 3+ entries</i>"]
    S4{"<b>Step 4: Escalation?</b>"}
    S4A["MOD-07 Safety Assessment"]
    S4B["MOD-09 Mediation Prep"]
    S5["<b>Step 5: Court Prep</b><br/>MOD-18 if proceeding"]
    S6["<b>Step 6: Ongoing</b><br/>MOD-15 Self-Care Plan"]
    
    DONE(["Session complete"])
    
    START --> S1 --> CC
    CC -->|"Pass"| S2
    CC -->|"Revise"| S1
    S2 --> S3
    S3 --> S4
    S4 -->|"Safety concern"| S4A --> S5
    S4 -->|"Ready for mediation"| S4B --> S5
    S4 -->|"Stable"| S6
    S5 --> S6 --> DONE

    style START fill:#e8f5e9,stroke:#2e7d32
    style DONE fill:#e8f5e9,stroke:#2e7d32
    style CC fill:#fff9c4,stroke:#f9a825
```

---

## Workflow 4 — Restorative Circle

```mermaid
flowchart TD
    subgraph PRE["Pre-Circle"]
        P1["<b>Assess readiness</b><br/>MOD-07 Safety check<br/><i>all participants</i>"]
        P2["<b>Prepare facilitator</b><br/>MOD-11 Circle Prep"]
        P3["<b>Prepare participants</b><br/>MOD-13 Emotional Regulation"]
    end
    
    HARD_STOP{"<b>Hard Stop Check</b><br/>Safety concern?<br/>No voluntary consent?"}
    
    subgraph CIRCLE["Circle Day"]
        C1["Opening"]
        C2["Community Building"]
        C3["Harm Acknowledgment"]
        C4["Impact Sharing"]
        C5["Accountability"]
        C6["Repair Agreement"]
        C7["Closing"]
    end
    
    subgraph POST["Post-Circle"]
        POST1["<b>Formalize</b><br/>MOD-10 Peace Agreement"]
        POST2["<b>Check-in</b><br/>MOD-23 Youth Check-In<br/><i>if youth involved</i>"]
        POST3["<b>Document</b><br/>MOD-20 Case Documentation"]
        POST4["<b>Follow-up</b><br/>Schedule review date"]
    end
    
    P1 --> P2 --> P3
    P3 --> HARD_STOP
    HARD_STOP -->|"Clear"| C1
    HARD_STOP -->|"STOP"| BLOCKED["Circle cancelled<br/>Address safety first"]
    C1 --> C2 --> C3 --> C4 --> C5 --> C6 --> C7
    C7 --> POST1 --> POST2 --> POST3 --> POST4

    style PRE fill:#e3f2fd,stroke:#1565c0
    style CIRCLE fill:#e8f5e9,stroke:#2e7d32
    style POST fill:#f3e5f5,stroke:#6a1b9a
    style HARD_STOP fill:#fff9c4,stroke:#f9a825
    style BLOCKED fill:#ffcdd2,stroke:#c62828
```

---

## Workflow 5 — School Conflict Response

```mermaid
flowchart TD
    INCIDENT(["Conflict reported"])
    
    subgraph IMMEDIATE["Phase 1 — Immediate"]
        I1["Separate parties"]
        I2["Ensure physical safety"]
        I3["MOD-23 Youth Check-In<br/><i>for each student</i>"]
    end
    
    subgraph SHORT["Phase 2 — Short-Term"]
        S1["MOD-21 Peer Conflict Guide"]
        S2["Notify parents/guardians"]
        S3{"Restorative process?"}
        S3A["MOD-22 Restorative Practice"]
        S3B["MOD-11 Full Circle"]
    end
    
    subgraph DOC["Phase 3 — Documentation"]
        D1["MOD-20 Case Documentation"]
        D2["Follow-up check-in"]
    end
    
    subgraph ESC["Phase 4 — Escalation (if needed)"]
        E1{"Safety concern?"}
        E2["MOD-07 Safety Assessment"]
        E3["MOD-14 Safety Plan"]
        E4["Mandatory reporting<br/><i>if child welfare concern</i>"]
    end
    
    INCIDENT --> I1 --> I2 --> I3
    I3 --> S1 --> S2 --> S3
    S3 -->|"Yes - classroom"| S3A
    S3 -->|"Yes - full circle"| S3B
    S3 -->|"No"| D1
    S3A --> D1
    S3B --> D1
    D1 --> D2
    D2 --> E1
    E1 -->|"Yes"| E2 --> E3 --> E4
    E1 -->|"No"| DONE(["Resolved"])

    style IMMEDIATE fill:#ffcdd2,stroke:#c62828
    style SHORT fill:#fff9c4,stroke:#f9a825
    style DOC fill:#e3f2fd,stroke:#1565c0
    style ESC fill:#ffe0b2,stroke:#e65100
```

---

## Workflow 6 — Community Dispute

```mermaid
flowchart TD
    START(["Community issue surfaces"])
    
    S1["<b>Step 1: Assess</b><br/>MOD-05 Conflict Intake<br/>or MOD-24 Neighborhood Dispute"]
    S2["<b>Step 2: Communicate</b><br/>MOD-01 De-Escalation Rewriter<br/><i>prepare direct conversation</i>"]
    S3["<b>Step 3: Dialogue</b><br/>MOD-12 Community Dialogue<br/><i>if group affected</i>"]
    S4["<b>Step 4: Agreement</b><br/>MOD-26 Community Peace Agreement"]
    S5["<b>Step 5: Resources</b><br/>MOD-25 Service Referral<br/><i>mediation centers, legal aid</i>"]
    S6["<b>Step 6: Follow-up</b><br/>Review date from agreement"]
    
    DONE(["Resolved or escalated"])
    
    START --> S1 --> S2 --> S3 --> S4 --> S5 --> S6 --> DONE

    style START fill:#f8bbd0,stroke:#880e4f
    style DONE fill:#f8bbd0,stroke:#880e4f
```

---

## Crisis Response Override

```mermaid
flowchart TD
    ANY(["ANY workflow in progress"])
    
    DETECT{"Red trigger detected<br/><i>T-71 through T-80</i>"}
    
    STOP["🛑 <b>STOP all artifact work</b>"]
    
    SURFACE["Surface crisis resources:<br/>🆘 911<br/>💙 988<br/>💜 1-800-799-7233<br/>💬 Text HOME to 741741"]
    
    SAFE{"User confirms safe?"}
    
    RESUME["Resume previous workflow<br/>at safety module:<br/>MOD-07 or MOD-14"]
    
    STAY["Stay with user<br/>Repeat resources<br/>Do NOT produce artifacts"]

    ANY --> DETECT
    DETECT -->|"Red"| STOP
    STOP --> SURFACE
    SURFACE --> SAFE
    SAFE -->|"Yes"| RESUME
    SAFE -->|"No"| STAY
    STAY --> SAFE

    style STOP fill:#ffcdd2,stroke:#c62828
    style STAY fill:#ffcdd2,stroke:#c62828
    style SURFACE fill:#fff3e0,stroke:#e65100
    style RESUME fill:#c8e6c9,stroke:#2e7d32
```

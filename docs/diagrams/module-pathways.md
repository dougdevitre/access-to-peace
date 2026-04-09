# Module Pathways

> How the 26 modules connect across 7 domains. Every module recommends next steps —
> users are never left at a dead end.

---

## Master Pathway Map

```mermaid
graph TB
    subgraph D1["Domain 1 — Communication & De-escalation"]
        MOD01["<b>MOD-01</b><br/>De-Escalation<br/>Message Rewriter"]
        MOD02["<b>MOD-02</b><br/>Active<br/>Listening Guide"]
        MOD03["<b>MOD-03</b><br/>NVC<br/>Framework"]
        MOD04["<b>MOD-04</b><br/>Co-Parenting<br/>Rewriter"]
    end
    
    subgraph D2["Domain 2 — Conflict Assessment"]
        MOD05["<b>MOD-05</b><br/>Conflict<br/>Intake & Triage"]
        MOD06["<b>MOD-06</b><br/>Conflict<br/>Timeline"]
        MOD07["<b>MOD-07</b><br/>Power & Safety<br/>Assessment"]
        MOD08["<b>MOD-08</b><br/>Interests vs.<br/>Positions"]
    end
    
    subgraph D3["Domain 3 — Mediation & Resolution"]
        MOD09["<b>MOD-09</b><br/>Mediation<br/>Session Prep"]
        MOD10["<b>MOD-10</b><br/>Peace Agreement<br/>Builder"]
        MOD11["<b>MOD-11</b><br/>Restorative<br/>Circle Prep"]
        MOD12["<b>MOD-12</b><br/>Community<br/>Dialogue"]
    end
    
    subgraph D4["Domain 4 — Mental Wellness & Regulation"]
        MOD13["<b>MOD-13</b><br/>Emotional<br/>Regulation"]
        MOD14["<b>MOD-14</b><br/>Safety Plan<br/>Builder"]
        MOD15["<b>MOD-15</b><br/>Self-Care<br/>Plan"]
        MOD16["<b>MOD-16</b><br/>Grief & Loss<br/>Navigation"]
    end
    
    subgraph D5["Domain 5 — Legal & Court"]
        MOD17["<b>MOD-17</b><br/>Parenting Plan<br/>Log"]
        MOD18["<b>MOD-18</b><br/>Court Prep<br/>Checklist"]
        MOD19["<b>MOD-19</b><br/>Protective Order<br/>Navigation"]
        MOD20["<b>MOD-20</b><br/>Case<br/>Documentation"]
    end
    
    subgraph D6["Domain 6 — School & Youth"]
        MOD21["<b>MOD-21</b><br/>Peer Conflict<br/>Guide"]
        MOD22["<b>MOD-22</b><br/>School<br/>Restorative"]
        MOD23["<b>MOD-23</b><br/>Youth<br/>Check-In"]
    end
    
    subgraph D7["Domain 7 — Community & Systems"]
        MOD24["<b>MOD-24</b><br/>Neighborhood<br/>Dispute"]
        MOD25["<b>MOD-25</b><br/>Service<br/>Referral"]
        MOD26["<b>MOD-26</b><br/>Community Peace<br/>Agreement"]
    end

    %% Cross-domain connections (most important pathways)
    MOD05 -->|"communication"| MOD01
    MOD05 -->|"co-parenting"| MOD04
    MOD05 -->|"safety concern"| MOD07
    MOD05 -->|"mediation"| MOD09
    MOD05 -->|"overwhelmed"| MOD13
    MOD05 -->|"resources"| MOD25
    MOD05 -->|"school"| MOD21
    MOD05 -->|"court"| MOD18
    MOD05 -->|"neighborhood"| MOD24
    
    MOD01 --> MOD03
    MOD03 --> MOD09
    MOD08 --> MOD09
    MOD09 --> MOD10
    MOD13 --> MOD01
    MOD07 --> MOD14
    MOD14 --> MOD19
    MOD14 --> MOD25
    MOD04 --> MOD17
    MOD17 --> MOD18
    MOD18 --> MOD20
    MOD21 --> MOD22
    MOD22 --> MOD11
    MOD23 --> MOD13
    MOD24 --> MOD12
    MOD12 --> MOD26
    MOD11 --> MOD10

    style D1 fill:#e8f5e9,stroke:#2e7d32
    style D2 fill:#fff9c4,stroke:#f9a825
    style D3 fill:#e3f2fd,stroke:#1565c0
    style D4 fill:#f3e5f5,stroke:#6a1b9a
    style D5 fill:#fff3e0,stroke:#e65100
    style D6 fill:#e0f7fa,stroke:#00695c
    style D7 fill:#fce4ec,stroke:#880e4f
```

---

## Domain 1 — Communication & De-escalation

```mermaid
flowchart LR
    MOD01["<b>MOD-01</b><br/>De-Escalation<br/>Message Rewriter"]
    MOD02["<b>MOD-02</b><br/>Active<br/>Listening Guide"]
    MOD03["<b>MOD-03</b><br/>NVC Framework"]
    MOD04["<b>MOD-04</b><br/>Co-Parenting<br/>Rewriter"]
    
    MOD01 -->|"deepen with NVC"| MOD03
    MOD01 -->|"child involved"| MOD04
    MOD01 -->|"prepare to listen"| MOD02
    MOD02 -->|"structure words"| MOD03
    MOD02 -->|"write a message"| MOD01
    MOD03 -->|"apply to message"| MOD01
    MOD03 -->|"mediation prep"| MOD09["MOD-09<br/>Mediation Prep"]
    MOD04 -->|"start documenting"| MOD17["MOD-17<br/>Parenting Log"]
    MOD04 -->|"need mediation"| MOD09

    style MOD01 fill:#c8e6c9,stroke:#2e7d32
    style MOD02 fill:#c8e6c9,stroke:#2e7d32
    style MOD03 fill:#c8e6c9,stroke:#2e7d32
    style MOD04 fill:#c8e6c9,stroke:#2e7d32
```

---

## Domain 2 — Conflict Assessment

```mermaid
flowchart LR
    MOD05["<b>MOD-05</b><br/>Conflict<br/>Intake"]
    MOD06["<b>MOD-06</b><br/>Conflict<br/>Timeline"]
    MOD07["<b>MOD-07</b><br/>Power & Safety<br/>Assessment"]
    MOD08["<b>MOD-08</b><br/>Interests vs.<br/>Positions"]
    
    MOD05 -->|"long history"| MOD06
    MOD05 -->|"safety concern"| MOD07
    MOD05 -->|"need to negotiate"| MOD08
    MOD06 -->|"escalation pattern"| MOD07
    MOD06 -->|"compile for court"| MOD20["MOD-20<br/>Case Docs"]
    MOD07 -->|"build safety plan"| MOD14["MOD-14<br/>Safety Plan"]
    MOD07 -->|"protective order"| MOD19["MOD-19<br/>Protective Order"]
    MOD08 -->|"mediation prep"| MOD09["MOD-09<br/>Mediation Prep"]
    MOD08 -->|"formalize agreement"| MOD10["MOD-10<br/>Peace Agreement"]

    style MOD05 fill:#fff9c4,stroke:#f9a825
    style MOD06 fill:#fff9c4,stroke:#f9a825
    style MOD07 fill:#ffe0b2,stroke:#e65100
    style MOD08 fill:#fff9c4,stroke:#f9a825
```

---

## Domain 3 — Mediation & Resolution

```mermaid
flowchart LR
    MOD09["<b>MOD-09</b><br/>Mediation<br/>Session Prep"]
    MOD10["<b>MOD-10</b><br/>Peace Agreement<br/>Builder"]
    MOD11["<b>MOD-11</b><br/>Restorative<br/>Circle Prep"]
    MOD12["<b>MOD-12</b><br/>Community<br/>Dialogue"]
    
    MOD09 -->|"agreement reached"| MOD10
    MOD09 -->|"need regulation"| MOD13["MOD-13<br/>Regulation"]
    MOD10 -->|"breach protocol"| MOD05["MOD-05<br/>Intake"]
    MOD11 -->|"formalize repair"| MOD10
    MOD11 -->|"community commitments"| MOD26["MOD-26<br/>Community Agreement"]
    MOD12 -->|"shared commitments"| MOD26
    MOD12 -->|"specific disputes"| MOD24["MOD-24<br/>Neighborhood"]

    style MOD09 fill:#bbdefb,stroke:#1565c0
    style MOD10 fill:#bbdefb,stroke:#1565c0
    style MOD11 fill:#bbdefb,stroke:#1565c0
    style MOD12 fill:#bbdefb,stroke:#1565c0
```

---

## Domain 4 — Mental Wellness & Regulation

```mermaid
flowchart LR
    MOD13["<b>MOD-13</b><br/>Emotional<br/>Regulation"]
    MOD14["<b>MOD-14</b><br/>Safety Plan<br/>Builder"]
    MOD15["<b>MOD-15</b><br/>Self-Care<br/>Plan"]
    MOD16["<b>MOD-16</b><br/>Grief & Loss<br/>Navigation"]
    
    MOD13 -->|"now communicate"| MOD01["MOD-01<br/>Rewriter"]
    MOD13 -->|"ongoing stress"| MOD15
    MOD14 -->|"DV protection"| MOD19["MOD-19<br/>Protective Order"]
    MOD14 -->|"find services"| MOD25["MOD-25<br/>Service Referral"]
    MOD15 -->|"acute moments"| MOD13
    MOD15 -->|"connected to loss"| MOD16
    MOD16 -->|"daily support"| MOD15
    MOD16 -->|"find counseling"| MOD25

    style MOD13 fill:#e1bee7,stroke:#6a1b9a
    style MOD14 fill:#ffcdd2,stroke:#c62828
    style MOD15 fill:#e1bee7,stroke:#6a1b9a
    style MOD16 fill:#e1bee7,stroke:#6a1b9a
```

---

## Domain 5 — Legal & Court

```mermaid
flowchart LR
    MOD17["<b>MOD-17</b><br/>Parenting Plan<br/>Log"]
    MOD18["<b>MOD-18</b><br/>Court Prep<br/>Checklist"]
    MOD19["<b>MOD-19</b><br/>Protective Order<br/>Navigation"]
    MOD20["<b>MOD-20</b><br/>Case<br/>Documentation"]
    
    MOD17 -->|"going to court"| MOD18
    MOD17 -->|"compile case"| MOD20
    MOD17 -->|"intimidation pattern"| MOD07["MOD-07<br/>Safety Assessment"]
    MOD18 -->|"emotional prep"| MOD13["MOD-13<br/>Regulation"]
    MOD18 -->|"organize evidence"| MOD20
    MOD19 -->|"safety plan"| MOD14["MOD-14<br/>Safety Plan"]
    MOD19 -->|"hearing prep"| MOD18
    MOD20 -->|"present in court"| MOD18
    MOD20 -->|"reach agreement"| MOD10["MOD-10<br/>Peace Agreement"]

    style MOD17 fill:#ffe0b2,stroke:#e65100
    style MOD18 fill:#ffe0b2,stroke:#e65100
    style MOD19 fill:#ffcdd2,stroke:#c62828
    style MOD20 fill:#ffe0b2,stroke:#e65100
```

---

## Domain 6 — School & Youth

```mermaid
flowchart LR
    MOD21["<b>MOD-21</b><br/>Peer Conflict<br/>Guide"]
    MOD22["<b>MOD-22</b><br/>School<br/>Restorative"]
    MOD23["<b>MOD-23</b><br/>Youth<br/>Check-In"]
    
    MOD21 -->|"formal process"| MOD22
    MOD21 -->|"check on student"| MOD23
    MOD21 -->|"full circle"| MOD11["MOD-11<br/>Restorative Circle"]
    MOD22 -->|"follow-up"| MOD23
    MOD22 -->|"class norms"| MOD26["MOD-26<br/>Community Agreement"]
    MOD23 -->|"peer conflict"| MOD21
    MOD23 -->|"emotionally activated"| MOD13["MOD-13<br/>Regulation"]
    MOD23 -->|"safety concerns"| MOD14["MOD-14<br/>Safety Plan"]

    style MOD21 fill:#b2dfdb,stroke:#00695c
    style MOD22 fill:#b2dfdb,stroke:#00695c
    style MOD23 fill:#b2dfdb,stroke:#00695c
```

---

## Domain 7 — Community & Systems

```mermaid
flowchart LR
    MOD24["<b>MOD-24</b><br/>Neighborhood<br/>Dispute"]
    MOD25["<b>MOD-25</b><br/>Service<br/>Referral"]
    MOD26["<b>MOD-26</b><br/>Community Peace<br/>Agreement"]
    
    MOD24 -->|"prepare message"| MOD01["MOD-01<br/>Rewriter"]
    MOD24 -->|"group affected"| MOD12["MOD-12<br/>Community Dialogue"]
    MOD24 -->|"formalize"| MOD26
    MOD24 -->|"find services"| MOD25
    MOD25 -->|"assess conflict"| MOD05["MOD-05<br/>Intake"]
    MOD25 -->|"safety need"| MOD14["MOD-14<br/>Safety Plan"]
    MOD26 -->|"needs dialogue first"| MOD12
    MOD26 -->|"harm repair"| MOD11["MOD-11<br/>Restorative Circle"]

    style MOD24 fill:#f8bbd0,stroke:#880e4f
    style MOD25 fill:#f8bbd0,stroke:#880e4f
    style MOD26 fill:#f8bbd0,stroke:#880e4f
```

---

## The Hub Module: MOD-05 Conflict Intake

MOD-05 is the primary entry point for most users. It routes to every other domain:

```mermaid
graph TB
    MOD05["<b>MOD-05</b><br/>Conflict Intake & Triage<br/><i>The hub module</i>"]
    
    COM["Communication<br/>MOD-01 · MOD-03 · MOD-04"]
    ASSESS["Assessment<br/>MOD-06 · MOD-07 · MOD-08"]
    MED_R["Mediation<br/>MOD-09 · MOD-10"]
    WELL["Wellness<br/>MOD-13 · MOD-14 · MOD-15"]
    LEGAL["Legal<br/>MOD-17 · MOD-18 · MOD-20"]
    SCHOOL["School<br/>MOD-21 · MOD-22 · MOD-23"]
    COMM["Community<br/>MOD-24 · MOD-25 · MOD-26"]
    
    MOD05 -->|"need to communicate"| COM
    MOD05 -->|"need to assess"| ASSESS
    MOD05 -->|"need mediation"| MED_R
    MOD05 -->|"emotionally overwhelmed"| WELL
    MOD05 -->|"court-related"| LEGAL
    MOD05 -->|"school-related"| SCHOOL
    MOD05 -->|"community issue"| COMM

    style MOD05 fill:#fff9c4,stroke:#f9a825,stroke-width:3px
```

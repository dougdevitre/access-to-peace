# Role Selection & Pod System

> Who uses this platform? How do the 20 roles across 6 pods connect to modules,
> language modes, and default pathways?

---

## The 6 Pods

```mermaid
graph TB
    USER(["New user arrives"])
    
    ASK["<b>What is your role?</b><br/><i>If declined: default to Individual</i>"]
    
    subgraph POD1["👤 Pod 1 — Individual & Family"]
        IND["<b>IND</b><br/>Individual<br/><i>Self-help</i>"]
        PAR["<b>PAR</b><br/>Parent<br/><i>Co-parenting</i>"]
        YTH["<b>YTH</b><br/>Youth / Teen"]
        ELD["<b>ELD</b><br/>Elder / Caregiver"]
    end
    
    subgraph POD2["⚖️ Pod 2 — Mediation & Conflict"]
        MED["<b>MED</b><br/>Mediator"]
        ARB["<b>ARB</b><br/>Arbitrator"]
        CCH["<b>CCH</b><br/>Conflict Coach"]
        RPF["<b>RPF</b><br/>Restorative<br/>Facilitator"]
    end
    
    subgraph POD3["🧠 Pod 3 — Mental Health"]
        THR["<b>THR</b><br/>Therapist"]
        PSY["<b>PSY</b><br/>Psychiatrist"]
        SWK["<b>SWK</b><br/>Social Worker"]
        PSS["<b>PSS</b><br/>Peer Support"]
    end
    
    subgraph POD4["⚖️ Pod 4 — Legal & Court"]
        ATT["<b>ATT</b><br/>Attorney"]
        GAL["<b>GAL</b><br/>Guardian<br/>ad Litem"]
        JDG["<b>JDG</b><br/>Judge /<br/>Court Staff"]
        VAD["<b>VAD</b><br/>Victim<br/>Advocate"]
    end
    
    subgraph POD5["🏫 Pod 5 — School & Youth"]
        SCL["<b>SCL</b><br/>School<br/>Counselor"]
        TCH["<b>TCH</b><br/>Teacher /<br/>Admin"]
    end
    
    subgraph POD6["🏘️ Pod 6 — Community"]
        ORG["<b>ORG</b><br/>Community<br/>Organizer"]
        NCM["<b>NCM</b><br/>Nonprofit<br/>Case Manager"]
    end

    USER --> ASK
    ASK --> POD1
    ASK --> POD2
    ASK --> POD3
    ASK --> POD4
    ASK --> POD5
    ASK --> POD6

    style POD1 fill:#e8f5e9,stroke:#2e7d32
    style POD2 fill:#e3f2fd,stroke:#1565c0
    style POD3 fill:#f3e5f5,stroke:#6a1b9a
    style POD4 fill:#fff3e0,stroke:#e65100
    style POD5 fill:#e0f7fa,stroke:#00695c
    style POD6 fill:#fce4ec,stroke:#880e4f
```

---

## Role → Language Mode

```mermaid
graph LR
    subgraph LEGAL["📜 Legal / Professional"]
        ATT2["ATT"]
        GAL2["GAL"]
        JDG2["JDG"]
        ARB2["ARB"]
        MED2["MED"]
    end
    
    subgraph CLINICAL["🩺 Clinical / Support"]
        THR2["THR"]
        PSY2["PSY"]
        SWK2["SWK"]
        PSS2["PSS"]
        CCH2["CCH"]
        RPF2["RPF"]
    end
    
    subgraph PLAIN["💬 Plain Language"]
        IND2["IND"]
        PAR2["PAR"]
        ELD2["ELD"]
        SCL2["SCL"]
        TCH2["TCH"]
        ORG2["ORG"]
        NCM2["NCM"]
        VAD2["VAD"]
    end
    
    subgraph YOUTH["🎈 Age-Appropriate"]
        YTH2["YTH"]
    end
    
    LEGAL --> L_DESC["Full depth<br/>All fields shown<br/>Neutral sourcing required"]
    CLINICAL --> C_DESC["Standard depth<br/>Required fields enforced<br/>Professional review notes"]
    PLAIN --> P_DESC["Guided experience<br/>Optional fields hidden<br/>Help text shown"]
    YOUTH --> Y_DESC["Simplified<br/>Emoji-friendly<br/>Guardian copy auto-generated"]

    style LEGAL fill:#fff3e0,stroke:#e65100
    style CLINICAL fill:#f3e5f5,stroke:#6a1b9a
    style PLAIN fill:#e3f2fd,stroke:#1565c0
    style YOUTH fill:#e8f5e9,stroke:#2e7d32
```

---

## Role → Default Module (when no trigger is given)

```mermaid
graph LR
    subgraph ROLES["Role"]
        R_IND["IND Individual"]
        R_PAR["PAR Parent"]
        R_YTH["YTH Youth"]
        R_ELD["ELD Elder"]
        R_MED["MED Mediator"]
        R_ARB["ARB Arbitrator"]
        R_CCH["CCH Conflict Coach"]
        R_RPF["RPF Restorative Fac."]
        R_THR["THR Therapist"]
        R_PSY["PSY Psychiatrist"]
        R_SWK["SWK Social Worker"]
        R_PSS["PSS Peer Support"]
        R_ATT["ATT Attorney"]
        R_GAL["GAL Guardian ad Litem"]
        R_JDG["JDG Judge"]
        R_VAD["VAD Victim Advocate"]
        R_SCL["SCL School Counselor"]
        R_TCH["TCH Teacher/Admin"]
        R_ORG["ORG Organizer"]
        R_NCM["NCM Case Manager"]
    end
    
    subgraph DEFAULTS["Default Module"]
        D05["MOD-05<br/>Conflict Intake"]
        D04["MOD-04<br/>Co-Parenting Rewriter"]
        D23["MOD-23<br/>Youth Check-In"]
        D09["MOD-09<br/>Mediation Session Prep"]
        D08["MOD-08<br/>Interests vs. Positions"]
        D11["MOD-11<br/>Restorative Circle"]
        D14["MOD-14<br/>Safety Plan Builder"]
        D25["MOD-25<br/>Service Referral"]
        D13["MOD-13<br/>Emotional Regulation"]
        D17["MOD-17<br/>Parenting Plan Log"]
        D20["MOD-20<br/>Case Documentation"]
        D21["MOD-21<br/>Peer Conflict Guide"]
        D22["MOD-22<br/>School Restorative"]
        D24["MOD-24<br/>Neighborhood Dispute"]
    end

    R_IND --> D05
    R_PAR --> D04
    R_YTH --> D23
    R_ELD --> D05
    R_MED --> D09
    R_ARB --> D09
    R_CCH --> D08
    R_RPF --> D11
    R_THR --> D14
    R_PSY --> D14
    R_SWK --> D25
    R_PSS --> D13
    R_ATT --> D17
    R_GAL --> D20
    R_JDG --> D20
    R_VAD --> D14
    R_SCL --> D21
    R_TCH --> D22
    R_ORG --> D24
    R_NCM --> D25
```

---

## Special Role Rules

| Role | Special Rule |
|------|-------------|
| **YTH** | Safety check always runs. Guardian copy auto-generated. Emoji-friendly. |
| **VAD** | Default safety level is Orange. DV resources always surfaced. |
| **THR / PSY** | Professional review note appended to safety plans. |
| **GAL** | All artifacts are child-centered. |
| **JDG** | Output must be process-neutral — no advocacy for either party. |
| **PAR** | Child-centering check on every artifact. Court-readiness scored. |

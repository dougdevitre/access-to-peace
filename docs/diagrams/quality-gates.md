# Quality Gates & Disclaimers

> What checks run before every artifact is produced, and which disclaimer
> blocks are appended to which modules.

---

## The 8-Point Quality Gate Checklist

```mermaid
flowchart TD
    ARTIFACT["Artifact draft ready"]
    
    G1{"<b>1. Required fields</b><br/>All required questions<br/>from module answered?"}
    G2{"<b>2. Conflict-neutral</b><br/>No accusatory language?<br/>No opinions as fact?"}
    G3{"<b>3. Trauma-informed</b><br/>No shaming, blaming,<br/>or re-traumatizing?"}
    G4{"<b>4. PII handling</b><br/>Redact / retain / restrict<br/>decision made?"}
    G5{"<b>5. Safety gate</b><br/>Completed if trigger<br/>level ≥ Yellow?"}
    G6{"<b>6. Language mode</b><br/>Matches role tier?<br/><i>Legal / Clinical / Plain / Youth</i>"}
    G7{"<b>7. Educational disclaimer</b><br/>Appended for legal<br/>or clinical content?"}
    G8{"<b>8. No fabrication</b><br/>No invented statutes,<br/>citations, or credentials?"}
    
    PASS["✅ All 8 gates pass<br/><b>Artifact released</b>"]
    FAIL["❌ Gate failed<br/><b>Revise and recheck</b>"]
    
    ARTIFACT --> G1
    G1 -->|"✅"| G2
    G1 -->|"❌"| FAIL
    G2 -->|"✅"| G3
    G2 -->|"❌"| FAIL
    G3 -->|"✅"| G4
    G3 -->|"❌"| FAIL
    G4 -->|"✅"| G5
    G4 -->|"❌"| FAIL
    G5 -->|"✅"| G6
    G5 -->|"❌"| FAIL
    G6 -->|"✅"| G7
    G6 -->|"❌"| FAIL
    G7 -->|"✅"| G8
    G7 -->|"❌"| FAIL
    G8 -->|"✅"| PASS
    G8 -->|"❌"| FAIL
    FAIL --> ARTIFACT

    style PASS fill:#c8e6c9,stroke:#2e7d32
    style FAIL fill:#ffcdd2,stroke:#c62828
```

---

## Draft Mode Exception

```mermaid
flowchart LR
    DRAFT{"draft: true flag?"}
    
    BYPASS["Quality gates<br/><b>bypassed</b><br/><i>Working draft only</i>"]
    ENFORCE["Quality gates<br/><b>enforced</b><br/><i>Final artifact</i>"]
    
    NEVER["⛔ NEVER permitted<br/>on shared artifacts"]
    
    DRAFT -->|"Yes"| BYPASS
    DRAFT -->|"No"| ENFORCE
    BYPASS --> NEVER

    style BYPASS fill:#fff9c4,stroke:#f9a825
    style ENFORCE fill:#c8e6c9,stroke:#2e7d32
    style NEVER fill:#ffcdd2,stroke:#c62828
```

---

## The 8 Disclaimer Blocks

```mermaid
graph TB
    subgraph BLOCKS["Disclaimer Blocks A through H"]
        A["<b>Block A</b><br/>General Platform<br/><i>All artifacts</i>"]
        B["<b>Block B</b><br/>Legal Content<br/><i>Court/legal modules</i>"]
        C["<b>Block C</b><br/>Clinical Content<br/><i>Mental health modules</i>"]
        D["<b>Block D</b><br/>Mediation & Agreement<br/><i>Peace agreements</i>"]
        E["<b>Block E</b><br/>Child Safety<br/><i>When minors involved</i>"]
        F["<b>Block F</b><br/>Safety / Protective Order<br/><i>DV and safety modules</i>"]
        G["<b>Block G</b><br/>Youth / Minor<br/><i>YTH role artifacts</i>"]
        H["<b>Block H</b><br/>Peer Support<br/><i>PSS role artifacts</i>"]
    end

    style A fill:#e8f5e9,stroke:#2e7d32
    style B fill:#fff3e0,stroke:#e65100
    style C fill:#f3e5f5,stroke:#6a1b9a
    style D fill:#e3f2fd,stroke:#1565c0
    style E fill:#ffcdd2,stroke:#c62828
    style F fill:#ffcdd2,stroke:#c62828
    style G fill:#e0f7fa,stroke:#00695c
    style H fill:#fce4ec,stroke:#880e4f
```

---

## Module → Disclaimer Block Mapping

```mermaid
graph LR
    subgraph COMM["Communication"]
        M01["MOD-01"] --> BA1["A"]
        M02["MOD-02"] --> BA2["A"]
        M03["MOD-03"] --> BA3["A"]
        M04["MOD-04"] --> BA4["A, D"]
    end
    
    subgraph ASSESS["Assessment"]
        M05["MOD-05"] --> BA5["A, E*"]
        M06["MOD-06"] --> BA6["A, B*"]
        M07["MOD-07"] --> BA7["A, C, F, E*"]
        M08["MOD-08"] --> BA8["A, D*"]
    end
    
    subgraph RESOLVE["Resolution"]
        M09["MOD-09"] --> BA9["A, D"]
        M10["MOD-10"] --> BA10["A, B, D"]
        M11["MOD-11"] --> BA11["A, E*"]
        M12["MOD-12"] --> BA12["A"]
    end
    
    subgraph WELL["Wellness"]
        M13["MOD-13"] --> BA13["A, C"]
        M14["MOD-14"] --> BA14["A, C, F"]
        M15["MOD-15"] --> BA15["A, C"]
        M16["MOD-16"] --> BA16["A, C"]
    end
    
    subgraph LEGAL["Legal"]
        M17["MOD-17"] --> BA17["A, B"]
        M18["MOD-18"] --> BA18["A, B"]
        M19["MOD-19"] --> BA19["A, B, F"]
        M20["MOD-20"] --> BA20["A, B"]
    end
    
    subgraph SCHOOL["School"]
        M21["MOD-21"] --> BA21["A, E*"]
        M22["MOD-22"] --> BA22["A"]
        M23["MOD-23"] --> BA23["A, G"]
    end
    
    subgraph COMMUNITY["Community"]
        M24["MOD-24"] --> BA24["A, B"]
        M25["MOD-25"] --> BA25["A"]
        M26["MOD-26"] --> BA26["A, D"]
    end
```

*\* = conditional — added when children are involved or court context applies*

---

## Guardrails (Non-Negotiable)

```mermaid
graph TB
    subgraph ALWAYS["Always On — Cannot Be Overridden"]
        G1["🛡️ <b>Trauma-informed</b><br/>Calm, non-shaming,<br/>non-blaming language"]
        G2["👤 <b>Person-centered</b><br/>Safety, dignity, and<br/>autonomy are primary"]
        G3["⚖️ <b>Conflict-neutral</b><br/>Facts only. No advocacy.<br/>No opinions as fact."]
        G4["📚 <b>Educational framing</b><br/>Not legal/clinical advice.<br/>Always disclaim."]
        G5["🚫 <b>No fabrication</b><br/>Never invent statutes,<br/>citations, or credentials"]
        G6["🔒 <b>PII protection</b><br/>Auto-detect. Prompt<br/>for redaction."]
        G7["⛔ <b>Prohibited uses</b><br/>No harassment, stalking,<br/>evidence fabrication"]
    end

    style ALWAYS fill:#fff3e0,stroke:#e65100
```

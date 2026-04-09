# Safety Gate Decision Tree

> How the safety system works. When it intervenes. What happens at each level.

---

## Safety Level Classification

```mermaid
flowchart TD
    INPUT(["User input received"])
    
    SCAN{"Scan for<br/>harm indicator keywords"}
    
    KEYWORDS["<b>Harm Keywords:</b><br/>hurt · harm · kill · hit · abuse<br/>scared · weapon · threat · danger<br/>emergency · injury · unsafe · suicide<br/>self-harm · can't go on · no way out"]
    
    NONE["No keywords detected"]
    MILD["Distress signals<br/><i>overwhelmed, fear,<br/>escalating tension</i>"]
    ACTIVE["Active threat language<br/><i>DV indicators,<br/>self-harm references</i>"]
    EMERGENCY["Emergency language<br/><i>imminent harm,<br/>active crisis</i>"]
    
    GREEN["🟢 <b>GREEN</b>"]
    YELLOW["🟡 <b>YELLOW</b>"]
    ORANGE["🟠 <b>ORANGE</b>"]
    RED["🔴 <b>RED</b>"]
    
    G_ACTION["Standard flow<br/>Route directly to module"]
    Y_ACTION["Ask safety question<br/><i>'Is anyone in immediate danger?'</i><br/>Then continue"]
    O_ACTION["Full safety gate<br/>Offer crisis resources first<br/>Then continue if safe"]
    R_ACTION["<b>BLOCK all artifact work</b><br/>Crisis resources ONLY<br/>Do not proceed until safe"]
    
    INPUT --> SCAN
    SCAN --> KEYWORDS
    
    KEYWORDS --> NONE
    KEYWORDS --> MILD
    KEYWORDS --> ACTIVE
    KEYWORDS --> EMERGENCY
    
    NONE --> GREEN
    MILD --> YELLOW
    ACTIVE --> ORANGE
    EMERGENCY --> RED
    
    GREEN --> G_ACTION
    YELLOW --> Y_ACTION
    ORANGE --> O_ACTION
    RED --> R_ACTION

    style GREEN fill:#c8e6c9,stroke:#2e7d32
    style YELLOW fill:#fff9c4,stroke:#f9a825
    style ORANGE fill:#ffe0b2,stroke:#e65100
    style RED fill:#ffcdd2,stroke:#c62828
    style R_ACTION fill:#ffcdd2,stroke:#c62828
    style KEYWORDS fill:#f5f5f5,stroke:#616161
```

---

## Crisis Interrupt Protocol (Red-Level Triggers T-71 through T-80)

```mermaid
flowchart TD
    TRIGGER["🔴 Red trigger fires<br/><i>T-71 through T-80</i>"]
    
    STOP["<b>1. STOP</b> all module work"]
    
    SURFACE["<b>2. SURFACE</b> immediately:<br/><i>'I hear you. Are you safe right now?'</i>"]
    
    RESOURCES["<b>Crisis Resources:</b><br/>🆘 Emergency: <b>911</b><br/>💙 Suicide & Crisis: <b>988</b><br/>💜 DV Hotline: <b>1-800-799-7233</b><br/>💬 Crisis Text: <b>HOME to 741741</b>"]
    
    WAIT{"<b>3. WAIT</b><br/>User confirms safe?"}
    
    YES["User confirms safe"]
    NO["User is not safe<br/>or uncertain"]
    
    RESUME["<b>4. RESUME</b><br/>Route to MOD-07 or MOD-14<br/>Log crisis interrupt"]
    STAY["Repeat crisis resources<br/>Stay with user<br/>Do NOT produce artifacts"]

    TRIGGER --> STOP
    STOP --> SURFACE
    SURFACE --> RESOURCES
    RESOURCES --> WAIT
    WAIT -->|"Safe"| YES
    WAIT -->|"Not safe"| NO
    YES --> RESUME
    NO --> STAY
    STAY --> WAIT

    style TRIGGER fill:#ffcdd2,stroke:#c62828
    style STOP fill:#ffcdd2,stroke:#c62828
    style STAY fill:#ffcdd2,stroke:#c62828
    style RESUME fill:#c8e6c9,stroke:#2e7d32
```

---

## Red-Level Trigger Catalog

```mermaid
graph LR
    subgraph RED_TRIGGERS["🔴 Red Triggers — Immediate Crisis Interrupt"]
        T73["T-73: Physical violence<br/><i>'He hit me'</i>"]
        T74["T-74: Self-harm<br/><i>'I want to hurt myself'</i>"]
        T75["T-75: Harm to others<br/><i>'I want to hurt someone'</i>"]
        T76["T-76: Weapons<br/><i>'Gun' · 'Knife' · 'Weapon'</i>"]
        T77["T-77: Child abuse<br/><i>'She hit my child'</i>"]
        T79["T-79: Suicidal<br/><i>'Can't go on'</i>"]
        T80["T-80: Emergency<br/><i>'Emergency'</i>"]
    end
    
    subgraph RESPONSE["Response"]
        R1["911 immediately"]
        R2["988 immediately"]
        R3["DV Hotline + 911"]
        R4["CPS referral + 911"]
    end
    
    T73 --> R3
    T74 --> R2
    T75 --> R1
    T76 --> R1
    T77 --> R4
    T79 --> R2
    T80 --> R1

    style RED_TRIGGERS fill:#ffcdd2,stroke:#c62828
    style RESPONSE fill:#fff3e0,stroke:#e65100
```

---

## Safety Gate by Module

| Module | Default Safety Level | Can Escalate To |
|--------|---------------------|----------------|
| MOD-01 De-Escalation Rewriter | Green | Yellow (T-06, T-07) |
| MOD-04 Co-Parenting Rewriter | Green | Yellow |
| MOD-05 Conflict Intake | Green | Yellow |
| MOD-07 Power & Safety Assessment | **Orange** | Red |
| MOD-13 Emotional Regulation | **Yellow** | Orange |
| MOD-14 Safety Plan Builder | **Orange** | Red |
| MOD-16 Grief & Loss | **Yellow** | Orange |
| MOD-19 Protective Order Nav | **Orange** | Red |
| MOD-21 Peer Conflict Guide | Green | Yellow (bullying) |
| MOD-23 Youth Check-In | Green/Yellow | Orange |
| All others | Green | Yellow (if harm keywords appear) |

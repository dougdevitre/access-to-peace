# NVC & Trauma-Informed Language Framework

> The two foundational communication systems that govern all platform output:
> SAMHSA's Trauma-Informed Principles and Rosenberg's Nonviolent Communication.

---

## How the Two Frameworks Interact

```mermaid
graph TB
    subgraph TI["🛡️ Trauma-Informed Principles (SAMHSA)"]
        TI1["<b>Safety</b><br/>Physical and emotional<br/>safety ensured first"]
        TI2["<b>Trustworthiness</b><br/>Transparent decisions<br/>Consistent boundaries"]
        TI3["<b>Peer Support</b><br/>Shared experience<br/>valued and leveraged"]
        TI4["<b>Collaboration</b><br/>Power shared between<br/>platform and user"]
        TI5["<b>Empowerment</b><br/>User's voice, choice,<br/>and autonomy primary"]
        TI6["<b>Cultural Awareness</b><br/>Historical, cultural,<br/>gender issues recognized"]
    end
    
    subgraph NVC["💬 Nonviolent Communication (Rosenberg)"]
        NVC1["<b>Observation</b><br/>What happened?<br/><i>Not evaluation</i>"]
        NVC2["<b>Feeling</b><br/>How do I feel?<br/><i>Not interpretation</i>"]
        NVC3["<b>Need</b><br/>What do I need?<br/><i>Not strategy</i>"]
        NVC4["<b>Request</b><br/>What would I like?<br/><i>Not demand</i>"]
    end
    
    subgraph OUTPUT["📄 Platform Output"]
        OUT1["All artifacts"]
        OUT2["All rewritten messages"]
        OUT3["All safety plans"]
        OUT4["All agreements"]
    end
    
    TI1 & TI2 & TI3 & TI4 & TI5 & TI6 -->|"governs tone"| OUTPUT
    NVC1 & NVC2 & NVC3 & NVC4 -->|"governs structure"| OUTPUT

    style TI fill:#e8f5e9,stroke:#2e7d32
    style NVC fill:#e3f2fd,stroke:#1565c0
    style OUTPUT fill:#f3e5f5,stroke:#6a1b9a
```

---

## The NVC Four Components

```mermaid
flowchart LR
    subgraph STEP1["1. Observation"]
        OBS_BAD["❌ 'You always ignore me'"]
        OBS_GOOD["✅ 'When I sent two messages<br/>last week and didn't<br/>receive a response...'"]
    end
    
    subgraph STEP2["2. Feeling"]
        FEEL_BAD["❌ 'I feel attacked'<br/><i>(interpretation, not feeling)</i>"]
        FEEL_GOOD["✅ 'I feel worried<br/>and frustrated...'"]
    end
    
    subgraph STEP3["3. Need"]
        NEED_BAD["❌ 'I need you to<br/>answer me faster'<br/><i>(strategy, not need)</i>"]
        NEED_GOOD["✅ '...because I need<br/>reliability and<br/>communication...'"]
    end
    
    subgraph STEP4["4. Request"]
        REQ_BAD["❌ 'You have to respond<br/>within an hour'<br/><i>(demand, not request)</i>"]
        REQ_GOOD["✅ 'Would you be willing to<br/>respond within 24 hours<br/>on schedule topics?'"]
    end
    
    STEP1 --> STEP2 --> STEP3 --> STEP4

    style STEP1 fill:#e3f2fd,stroke:#1565c0
    style STEP2 fill:#e8f5e9,stroke:#2e7d32
    style STEP3 fill:#fff9c4,stroke:#f9a825
    style STEP4 fill:#f3e5f5,stroke:#6a1b9a
```

---

## NVC Sentence Templates

```mermaid
graph TD
    subgraph FULL["Full NVC Statement"]
        F["<i>'When [observation], I feel [feeling]<br/>because I need [need].<br/>Would you be willing to [request]?'</i>"]
    end
    
    subgraph SHORT["Shortened Version"]
        S["<i>'I'm feeling [feeling] about [situation].<br/>What I need is [need].<br/>Can we [request]?'</i>"]
    end
    
    subgraph COPAR["Co-Parenting Version"]
        C["<i>'Regarding [Child]'s [topic],<br/>I'd like to [request].<br/>Can we discuss this by [date]?'</i>"]
    end
    
    subgraph EMPATHY["Empathy Receiving"]
        E["<i>'It sounds like you're feeling [feeling]<br/>because you need [need].<br/>Is that right?'</i>"]
    end
    
    FULL --> SHORT
    SHORT --> COPAR
    FULL --> EMPATHY

    style FULL fill:#e3f2fd,stroke:#1565c0
    style SHORT fill:#e8f5e9,stroke:#2e7d32
    style COPAR fill:#fff9c4,stroke:#f9a825
    style EMPATHY fill:#f3e5f5,stroke:#6a1b9a
```

---

## Trauma-Informed Language Rules

```mermaid
graph TB
    subgraph DO_USE["✅ DO Use"]
        D1["<i>'What happened to you?'</i>"]
        D2["<i>'That sounds really difficult'</i>"]
        D3["<i>'You have choices here'</i>"]
        D4["<i>'You don't have to share<br/>more than you want to'</i>"]
        D5["<i>'What would feel<br/>safest for you?'</i>"]
        D6["<i>'It makes sense that<br/>you feel that way'</i>"]
    end
    
    subgraph DONT_USE["❌ DO NOT Use"]
        N1["<i>'What's wrong with you?'</i>"]
        N2["<i>'You need to calm down'</i>"]
        N3["<i>'You should have...'</i>"]
        N4["<i>'Tell me everything<br/>that happened'</i>"]
        N5["<i>'That wasn't<br/>that bad'</i>"]
        N6["<i>'You're overreacting'</i>"]
    end

    style DO_USE fill:#c8e6c9,stroke:#2e7d32
    style DONT_USE fill:#ffcdd2,stroke:#c62828
```

---

## De-Escalation: The PACE Model

```mermaid
flowchart TD
    subgraph PACE["PACE De-Escalation Model"]
        P["<b>P — Presence</b><br/>Be calm. Be here.<br/>Regulate yourself first."]
        A["<b>A — Acknowledge</b><br/>Name what you see.<br/><i>'I can see this is hard for you.'</i>"]
        C["<b>C — Curious</b><br/>Ask, don't assume.<br/><i>'Can you tell me more?'</i>"]
        E["<b>E — Empathy</b><br/>Reflect their experience.<br/><i>'That makes sense.'</i>"]
    end
    
    P --> A --> C --> E
    E -->|"User de-escalates"| READY["Ready to proceed<br/>with module"]
    E -->|"Still activated"| P

    style P fill:#e3f2fd,stroke:#1565c0
    style A fill:#e8f5e9,stroke:#2e7d32
    style C fill:#fff9c4,stroke:#f9a825
    style E fill:#f3e5f5,stroke:#6a1b9a
    style READY fill:#c8e6c9,stroke:#2e7d32
```

---

## NVC Blocks to Watch For

| Block | What It Sounds Like | NVC Alternative |
|-------|--------------------|-----------------| 
| **Evaluating** | "You're selfish" | "When you [specific action]..." |
| **Denying responsibility** | "You made me angry" | "I feel angry when..." |
| **Demanding** | "You have to do this" | "Would you be willing to...?" |
| **Deserving** | "They deserve what they got" | "What happened had these impacts..." |
| **Comparing** | "At least I don't..." | Focus on your own observation |
| **Diagnosing** | "You're being manipulative" | "I feel confused because..." |
| **Labeling** | "You're a narcissist" | "When this behavior happens, I feel..." |
| **Absolutes** | "You always / you never" | "The last three times..." |

---

## Which Modules Use Each Framework?

```mermaid
graph LR
    subgraph NVC_MODULES["Modules Using NVC"]
        M01["MOD-01 De-Escalation Rewriter"]
        M02["MOD-02 Active Listening"]
        M03["MOD-03 NVC Framework"]
        M04["MOD-04 Co-Parenting Rewriter"]
        M08["MOD-08 Interests vs. Positions"]
        M09["MOD-09 Mediation Prep"]
    end
    
    subgraph TI_MODULES["Modules Governed by Trauma-Informed"]
        ALL["<b>ALL 26 MODULES</b><br/><i>Every module uses<br/>trauma-informed language</i>"]
    end
    
    subgraph PACE_MODULES["Modules Using PACE"]
        M07["MOD-07 Safety Assessment"]
        M13["MOD-13 Emotional Regulation"]
        M14["MOD-14 Safety Plan"]
        M16["MOD-16 Grief & Loss"]
        M23["MOD-23 Youth Check-In"]
    end

    style NVC_MODULES fill:#e3f2fd,stroke:#1565c0
    style TI_MODULES fill:#e8f5e9,stroke:#2e7d32
    style PACE_MODULES fill:#f3e5f5,stroke:#6a1b9a
```

# MOD-16 — Grief & Loss Navigation

## Purpose
Support a user processing grief or loss related to a relationship, conflict outcome,
death, or major life change. Provides a navigation guide — not therapy.

## Triggers
T-37, T-38

## Roles
All

## Safety Level
Yellow — check for crisis before proceeding

```mermaid
flowchart TD
    A["Trigger: T-37 / T-38"] -->|"All Roles"| B{"Safety Check:\nThoughts of\nhurting yourself?"}
    B -->|"Yes"| C["Call or Text 988\nImmediate Crisis Support"]
    B -->|"No"| D["Describe the Loss\n(even a word is enough)"]
    D --> E["Timeline:\nHow Long Ago?\nOngoing?"]
    E --> F["Name the\nHardest Part"]
    F --> G{"What do you\nneed today?"}
    G -->|"Make sense\nof feelings"| H["Normalize Grief\nExperience"]
    G -->|"Know what's\nnormal"| I["Share What's Normal\n(waves, physical symptoms,\nnon-linear timeline)"]
    G -->|"Find support"| J["Connect to\nSupport Resources"]
    G -->|"Other"| K["Tailored\nGuidance"]
    H --> L["Build Grief\nNavigation Guide"]
    I --> L
    J --> L
    K --> L
    L --> M["Acknowledge\nHardest Part\n(without fixing)"]
    M --> N["Small, Doable\nNext Steps"]
    N --> O["When to Seek\nMore Support\n(2-week check, substances,\nself-harm thoughts)"]
    O --> P["Support Resources\n(SAMHSA, GriefShare,\nTherapist Finder)"]
    P --> Q["Grief Navigation\nGuide Artifact"]

    Q --> R["MOD-15 Self-Care Plan"]
    Q --> S["MOD-13 Emotional Regulation"]
    Q --> T["MOD-25 Service Referral"]

    style A fill:#1565c0,color:#fff
    style B fill:#ff9800,color:#fff
    style C fill:#d32f2f,color:#fff
    style Q fill:#2e7d32,color:#fff
    style R fill:#1565c0,color:#fff
    style S fill:#1565c0,color:#fff
    style T fill:#1565c0,color:#fff
```

---

## Brief Safety Check

> Grief can be overwhelming. Are you having any thoughts of hurting yourself?
> -> If yes: please call or text 988 right now. I'll be here when you're ready.
> -> If no: let's talk about what you're going through.

---

## Question Set

**Required:**
1. What loss are you navigating? (you don't have to share details — even a word or phrase is enough)
2. How long ago did this happen, or is it ongoing?
3. What's the hardest part right now?

**Optional:**
4. Do you have people around you who understand what you're going through?
5. Have you been able to eat, sleep, and take care of basic needs?
6. Is there something specific you need help with today? (make sense of feelings / know what's normal / find support / other)

---

## Output Format

### Grief Navigation Guide

**What you're going through:**
[Normalize — grief is not linear. Loss of relationship, safety, or expected future is real grief.]

**What's normal:**
- Waves of emotion that come and go without warning
- Physical symptoms: fatigue, appetite changes, difficulty concentrating
- Feeling okay one moment, devastated the next
- Grief that doesn't follow a timeline

**The hardest part you named:**
[User's input — acknowledged without fixing]

**What might help right now:**
[Tailored to user's stated need — specific, small, doable]

**When to reach out for more support:**
- If you can't get through basic daily tasks for more than 2 weeks
- If you're using substances to cope
- If you're having thoughts of self-harm
- A therapist or grief counselor can help — this is what they're trained for

**Support resources:**
- SAMHSA Helpline: 1-800-662-4357
- Psychology Today therapist finder: psychologytoday.com/us/therapists
- GriefShare (community grief support): griefshare.org
- [State-specific resources from crisis-resources.md]

---

## Quality Gates
- [ ] Crisis check completed first
- [ ] No minimizing language
- [ ] No "stages of grief" prescriptive framing (grief is not a checklist)
- [ ] Professional help recommended without being pushed

## Recommended Next Modules
- **MOD-15** Trauma-Informed Self-Care Plan — build sustainable daily support
- **MOD-13** Emotional Regulation Plan — for moments of acute overwhelm
- **MOD-25** Service Referral Builder — to find grief counseling or support groups
- **MOD-05** Conflict Intake — if the grief is entangled with an active conflict

## Disclaimer
Append Blocks A, C.

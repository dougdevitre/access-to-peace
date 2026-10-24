# MOD-08 — Interests vs. Positions Mapper

## Purpose
Help a user distinguish between their stated position (what they're demanding)
and their underlying interest (what they actually need). Essential for mediation
prep, negotiation, and breaking deadlock.

## Triggers
T-12, T-17, T-29

## Roles
All — especially MED, ARB, CCH, ATT, IND

## Safety Level
Green, after the required court-order question and safety screen below. Orange if the screen is yes or prefer not to say.

```mermaid
flowchart TD
    T12["T-12: Dispute\nresolution needed"] --> ENTRY
    T17["T-17: Stuck in\nnegotiation"] --> ENTRY
    T29["T-29: Relationship\nrepair needed"] --> ENTRY

    ENTRY["MOD-08: Interests vs.\nPositions Mapper"]:::blue --> ORDER{"Court-order question\n(required, first)"}
    ORDER -- "Yes / unsure" --> CHANNEL["No map. Explain the\nchannel the order allows.\nOffer MOD-18 · MOD-19"]
    style CHANNEL fill:#ff9800,color:#fff
    ORDER -- "No" --> SCREEN{"Safety screen\n(required)"}
    SCREEN -- "No" --> BG["Background: Positions vs.\nInterests (Fisher & Ury)"]
    SCREEN -- "Yes / prefer not to say" --> EXIT["Safety exit path:\nMOD-07 · MOD-14 · MOD-19\nno concessions or joint agreements"]
    style EXIT fill:#ff9800,color:#fff
    BG --> YOUR1["Q1: What are you\nasking for? (position)"]
    YOUR1 --> YOUR2["Q2: Why is that\nimportant? (dig to core value)"]
    YOUR2 --> YOUR3["Q3: What would you\nlose without it?"]
    YOUR3 --> YOUR4["Q4: What is\n'good enough'?"]
    YOUR4 --> YOUR5["Q5: What is\nnon-negotiable?"]

    YOUR5 --> THEIR["Q6-Q8: Other side's\nposition, motivation, fears"]
    THEIR --> OVERLAP["Q9: Shared values\nor common ground?"]

    OVERLAP --> MAP_YOU["Your Interests Table:\nPosition | Interest | Non-negotiable?"]
    MAP_YOU --> BATNA["Your BATNA:\nBest alternative if\nno agreement"]
    BATNA --> MAP_THEM["Their Likely Interests Table:\nPosition | Interest | Fear"]
    MAP_THEM --> COMMON["Possible Overlap:\nShared interests"]
    COMMON --> REFRAME["Reframe for Negotiation:\nPosition → Interest language"]

    REFRAME --> OUTPUT["Interests Map"]:::green

    OUTPUT --> MOD09["MOD-09: Mediation Prep"]
    OUTPUT --> MOD10["MOD-10: Peace Agreement"]
    OUTPUT --> MOD03["MOD-03: NVC Framework"]
    OUTPUT --> MOD01["MOD-01: De-Escalation Rewriter"]
    OUTPUT --> MOD12["MOD-12: Community Dialogue"]

    classDef blue fill:#1565c0,color:#fff
    classDef green fill:#2e7d32,color:#fff
```

---

## Court-Order Question (required — ask first, before anything else)

Ask once, gently:

> Is there a protective order, no-contact order, or a court rule limiting how you
> contact them? You can answer **yes**, **no**, or **unsure**.

- **No:** go on to the safety screen below.
- **Yes** or **unsure:** do not build the map. Working out what the other person "really
  wants" is a step toward contacting or negotiating with them, and the order decides how
  that can happen. Say, calmly:

> Thank you for telling me. When there's an order like that, any contact or negotiation
> has to go only through the channel the order allows, such as your attorney, a mediator
> the court has approved, or the court itself. If you're not sure what your order allows,
> your attorney, the court clerk or a victim advocate can tell you. I can help you get
> ready to ask them (MOD-18 Court Preparation Checklist), or explain how protective
> orders work (MOD-19, educational only).

  Then offer **MOD-18** or **MOD-19**. If the person says they are afraid of the other
  person, also give the safety exit path below.
- **If the user is a mediator or attorney:** ask whether any order limits contact between
  the parties. If so, or if unsure, confirm what the order allows before any joint work.

## Safety Screen (required — ask right after the court-order question, before any other question)

Ask once, gently, in these words:

> Before we start, one safety question. Has the other person ever hurt, threatened,
> stalked or controlled you, or is there a protective order between you?
> You can answer **yes**, **no**, or **prefer not to say**.

- **No:** continue to the question set.
- **Yes** or **prefer not to say:** do not ask for details. Raise the session to at
  least Orange and take the safety exit path below.
- **If the user is a mediator or attorney:** ask instead whether the parties have been
  screened for domestic violence and coercive control. If not, or if screening raised
  a concern, recommend screening and the options below before the session.

### Safety exit path

Say, without judgment:

> Thank you for telling me. Mediation and joint agreements aren't always safe after abuse, threats or
> control, and you have options. You can ask the court or the mediator for domestic
> violence screening, ask for shuttle sessions (you stay in separate rooms and the
> mediator goes between you), bring an advocate, or ask to be excused from mediation.
> The National Domestic Violence Hotline can help you think it through, 24/7:
> **1-800-799-7233**. If you are in danger now, call **911**.

Then:
- Do **not** draft concessions, offers, joint agreements, or any step that involves
  direct contact with the other person.
- Offer instead: **MOD-07** Power & Safety Assessment, **MOD-14** Safety Plan Builder,
  **MOD-19** Protective Order Navigation.

---

## Background (share with user if unfamiliar)

> **Positions** are what people say they want: "I want full custody."
> **Interests** are why they want it: "I need my child to be stable and safe."
>
> Conflicts often get stuck because people fight over positions.
> Resolution happens when people find ways to meet each other's interests.
> — Based on Fisher & Ury, *Getting to Yes* (1981)

---

## Question Set

**Your side:**
1. What are you asking for? (your position — what you want the outcome to be)
2. Why is that important to you? (keep asking "why" until you reach a core value)
3. What would you lose if you didn't get exactly what you asked for?
4. What would a "good enough" outcome look like — even if not your ideal?
5. What is absolutely non-negotiable for you? Why?

**The other side (to build empathy, not concede):**
6. What do you think they are asking for?
7. Why do you think that matters to them?
8. What might they be afraid of losing?

**Overlap:**
9. Is there anything both parties might actually agree on at a values level — even if you disagree on the solution?

---

## Output Format

### Interests Map

#### Your Interests
| Position (what you said you want) | Underlying Interest (why you want it) | Non-negotiable? |
|----------------------------------|--------------------------------------|----------------|
| [position] | [interest] | Yes / No |

**Your core interests (distilled):**
[2–3 bullet points — the values underneath the position]

**Your BATNA (best alternative if no agreement):**
[What the user said they would do if no resolution]

---

#### Their Likely Interests (your perspective)
| Their Position | Likely Underlying Interest | What They Might Fear Losing |
|---------------|--------------------------|---------------------------|
| [position] | [interest] | [fear] |

---

#### Possible Overlap
[Areas where both parties' core interests could be served — even if the solutions look different]

---

#### Reframe for Negotiation
> Instead of: *"I want [position]"*
> Try: *"What I really need is [interest]. Is there a way we could meet that?"*

---

## Quality Gates
- [ ] Court-order question asked first; on "yes" or "unsure", no map was built
- [ ] Safety screen asked next; nothing drafted for joint work on the safety exit path
- [ ] Positions and interests are clearly distinguished
- [ ] Other party's interests framed with empathy — not as accusations
- [ ] BATNA noted (even if "I don't know yet")
- [ ] Neutral language throughout

## Recommended Next Modules
- **MOD-09** Mediation Session Prep — take your interests map into mediation preparation
- **MOD-10** Peace Agreement Builder — if both parties are ready to formalize terms
- **MOD-03** NVC Framework — frame your interests using NVC language
- **MOD-01** De-Escalation Message Rewriter — communicate your interests without escalation
- **MOD-12** Community Dialogue Facilitator — if this is a group/community conflict

---

## Worked Example

**User input:**
> Role: Parent (PAR). Court-order question: No. Safety screen: No. Q1: I want the children on weekdays. Q2: I want to be involved in their school routine and help with homework. Q3: I would lose daily involvement in their education and feel disconnected from their school life. Q4: Good enough would be having them on most school nights and being the contact for school communications. Q5: Non-negotiable: being able to attend all school events — conferences, performances, games. Q6: I think they want equal time — a 50/50 schedule. Q7: They want to feel like an equal parent and not be sidelined. Q8: They might be afraid of losing time with the children and being seen as a less involved parent. Q9: We both want the children to succeed in school and feel supported by both parents.

### Interests Map

#### Your Interests

| Position (what you said you want) | Underlying Interest (why you want it) | Non-negotiable? |
|----------------------------------|--------------------------------------|----------------|
| Children on weekdays | Daily involvement in school routine and homework | No |
| Be the school contact parent | Connection to children's education and ability to support their learning | No |
| Attend all school events | Presence at conferences, performances, and games — maintaining visible involvement in children's lives | Yes |

**Your core interests (distilled):**
- Being actively involved in your children's day-to-day education
- Maintaining a close connection to their school life and routines
- Being present for meaningful school moments

**Your BATNA (best alternative if no agreement):**
If no agreement is reached, the current arrangement or a court-determined schedule would apply. What a court would order depends on the facts and the judge, so it is hard to predict. A mediated agreement can give both parents more say in the details; a family law attorney can explain the likely options.

---

#### Their Likely Interests (your perspective)

| Their Position | Likely Underlying Interest | What They Might Fear Losing |
|---------------|--------------------------|---------------------------|
| Equal (50/50) time | Feeling like an equal, involved parent | Time with the children; being seen as less important or less involved |
| Shared schedule | Fairness and recognition as a capable, engaged parent | Their role in the children's daily life and routines |

---

#### Possible Overlap
- Both parents want the children to succeed in school and feel supported
- Both parents want to be actively involved — neither wants to be sidelined
- Both parents value the children's stability and educational success
- There may be room for a schedule that gives both parents meaningful school-night time while ensuring [Parent A] can attend all school events — and [Parent B] can too

---

#### Reframe for Negotiation
> Instead of: *"I want the children on weekdays."*
> Try: *"What I really need is to be involved in the children's school routine — helping with homework, being available for school communications, and attending every school event. Is there a way we could build a schedule that lets me do that while also making sure you have meaningful time with them during the week?"*

## Disclaimer
Append Block A. Add Block D if mediation or agreement context.

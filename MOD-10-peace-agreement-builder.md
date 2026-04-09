# MOD-10 — Peace Agreement Builder

## Purpose
Build a structured, good-faith peace agreement between two or more parties.
Not a legal contract unless reviewed by counsel.

## Triggers
T-22, T-23, T-28

## Roles
MED, ARB, IND, PAR, ORG, NCM

## Safety Level
Green

---

## Question Set

**Required:**
1. Who are the parties to this agreement? (identifiers — not necessarily names)
2. What is the conflict or situation this agreement addresses?
3. What specific commitments has each party agreed to make? (list each one)
4. When does this agreement start?
5. When will you review whether it's working?

**Optional:**
6. Who (if anyone) will help hold this agreement accountable?
7. What happens if one party doesn't keep their commitment?
8. Are there any attachments or documents that go with this agreement?
9. Will this be signed? By whom?

---

## Output Format

Produces the `templates/peace-agreement.md` populated with user's input.

Key sections:
- Background (2–3 neutral sentences)
- Numbered terms (specific, actionable, time-bound where possible)
- Duration and review date
- Breach protocol (step 1: direct conversation / step 2: mediator / step 3: escalation)
- Signature block

**Term quality check (applied to each term):**
- Is it specific? (not "communicate better" — instead "respond to messages within 24 hours")
- Is it actionable? (can it be observed / confirmed?)
- Is it mutual? (does it assign responsibility clearly?)
- Is it realistic?

**Term flag:** If any term fails the check, surface a rewrite suggestion before finalizing.

---

## Quality Gates
- [ ] Each term passes specificity/actionability check
- [ ] Background section is neutral — no blame
- [ ] Legal disclaimer included
- [ ] Review date set
- [ ] Breach protocol defined

## Disclaimer
Append Blocks A, B, D.

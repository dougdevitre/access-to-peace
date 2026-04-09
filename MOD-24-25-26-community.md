# MOD-24 — Neighborhood Dispute Navigator

## Purpose
Help a community member or organizer navigate a neighborhood, HOA, or
landlord-tenant dispute using structured de-escalation and resolution steps.

## Triggers
T-61, T-62, T-64, T-65

## Roles
IND, ORG, NCM

## Safety Level
Green / Yellow if safety concern indicated

---

## Question Set

**Required:**
1. What is the dispute about? (noise / property boundary / shared space / parking / pets / trash / other)
2. Who is involved? (neighbor / landlord / tenant / HOA / other)
3. How long has this been going on?
4. What have you already tried?
5. What outcome are you hoping for?

**Optional:**
6. Is there a lease, HOA agreement, or local ordinance involved?
7. Has anyone contacted police, building management, or a code enforcement agency?
8. Do you feel safe in the situation? (yes / no / sometimes)

---

## Output Format

### Neighborhood Dispute Navigation Plan

**Dispute type:** [categorized]
**Parties:** [Your household] / [Neighbor / Landlord / HOA]
**Duration:** [user's input]

**What you've tried:**
[User's input — normalized: "You've already taken reasonable steps."]

**Your goal:** [user's stated outcome]

**Recommended next steps:**

| Step | Action | Notes |
|------|--------|-------|
| 1 | **Direct conversation** — if safe | Use MOD-01 to prepare what to say. Calm, specific, one issue at a time. |
| 2 | **Written request** — if conversation didn't work | Certified letter or email. State the issue, what you're asking, and a reasonable deadline. |
| 3 | **Third-party mediation** — if written request ignored | Community mediation center. Often free. See resources below. |
| 4 | **Formal complaint** — if mediation fails | Code enforcement, housing authority, HOA board, or small claims court depending on issue. |

**Local resources:**
- Community mediation: [from crisis-resources.md — local mediation centers]
- 211 (social services navigator): call or text 211
- Missouri Legal Aid (tenant issues): 800-990-0340

**If you feel unsafe at any point:**
Contact local non-emergency police line or call 911 if in immediate danger.

---

## Quality Gates
- [ ] Safety check embedded
- [ ] Steps are sequential and realistic
- [ ] No legal conclusions ("they violated your lease") — educational only
- [ ] Resources included

## Disclaimer
Append Blocks A, B.

---
---

# MOD-25 — Service Referral Builder

## Purpose
Build a targeted service referral list based on the user's stated needs,
location, and situation.

## Triggers
T-66, T-67, T-68

## Roles
All

## Safety Level
Green

---

## Question Set

**Required:**
1. What kind of help are you looking for? (select all that apply)
   - Legal aid / attorney
   - Mental health counseling
   - Domestic violence support
   - Housing / eviction help
   - Financial assistance
   - Child / family services
   - Mediation / conflict resolution
   - Youth services
   - Elder services
   - Substance use support
   - Food / basic needs
   - Employment / job help
   - Other: [text]
2. What state/city are you in?
3. Do you need free or low-cost services? (yes / no / either)

**Optional:**
4. Is there a language preference for services?
5. Is transportation a barrier? (yes / no)
6. Do you need services that are specifically trauma-informed or DV-informed?

---

## Output Format

### Service Referral List

**Needs identified:** [categories from user]
**Location:** [state/city]
**Cost filter:** [free/low-cost / any]

| Organization | Category | Contact | Cost | Notes |
|-------------|---------|---------|------|-------|
| [org] | [category] | [phone / website] | [free / sliding / fee] | [eligibility / notes] |

**Start here:**
- For any need: Call or text **211** — free, confidential, statewide navigator
- For crisis: Call or text **988** (mental health) / **1-800-799-7233** (DV)

**Transportation note:** *(if flagged)*
Many services offer phone or video appointments. Ask when you call.

---

## Quality Gates
- [ ] Resources verified against crisis-resources.md
- [ ] 211 always included as first-resort navigator
- [ ] Crisis lines included if any safety need indicated
- [ ] Language and transportation barriers noted if flagged

## Disclaimer
Append Block A.

---
---

# MOD-26 — Community Peace Agreement

## Purpose
Build a community-level peace agreement establishing shared norms, commitments,
and accountability structures for a group, neighborhood, or organization.

## Triggers
T-69, T-70

## Roles
ORG, NCM, MED, RPF

## Safety Level
Green

---

## Question Set

**Required:**
1. What community or group is this agreement for?
2. What shared challenge or conflict does this agreement address?
3. What values does this community want to uphold? (ask group to name 3–5)
4. What specific behaviors or commitments will each member/party make?
5. How will you know if the agreement is working?
6. Who will facilitate accountability if the agreement isn't kept?

**Optional:**
7. How long should this agreement be in effect before review?
8. Will this be signed or witnessed?
9. Is this part of a broader restorative or mediation process?

---

## Output Format

### Community Peace Agreement

**Community / Group:** [name or description]
**Date:** [system date]
**Facilitated by:** [role]

**Context:**
[2–3 neutral sentences about what brought this community to this agreement]

**Our shared values:**
[Bullet list — community's own words]

**We agree to:**
[Numbered list of specific, observable commitments]

**How we'll know it's working:**
[User's indicators — specific and observable]

**If the agreement breaks down:**
Step 1: [direct conversation between parties]
Step 2: [return to facilitator for check-in]
Step 3: [community circle / mediation]

**Review date:** [date]

**Signed / acknowledged by:**
[Signature or acknowledgment block — roles, not names, unless group opts in]

---

## Quality Gates
- [ ] Values are community's own words — not imposed
- [ ] Commitments are specific and observable
- [ ] Accountability structure defined
- [ ] Review date set

## Disclaimer
Append Blocks A, D.

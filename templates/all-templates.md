# Artifact Templates Index

All 13 artifact types produced by Access To Peace have fillable templates.

| # | Artifact | Template File | Produced By |
|---|----------|--------------|-------------|
| A-01 | Conflict Intake Summary | [conflict-intake-summary.md](conflict-intake-summary.md) | MOD-05 |
| A-02 | Rewritten Message (3 versions) | [rewritten-message.md](rewritten-message.md) | MOD-01 |
| A-03 | Court-Neutral Co-Parenting Message | [coparenting-message.md](coparenting-message.md) | MOD-04 |
| A-04 | Mediation Prep Sheet | [mediation-prep-sheet.md](mediation-prep-sheet.md) | MOD-09 |
| A-05 | Peace Agreement Draft | [peace-agreement.md](peace-agreement.md) | MOD-10 |
| A-06 | Circle Agenda + Harm Repair Plan | [circle-agenda.md](circle-agenda.md) | MOD-11 |
| A-07 | Safety Assessment | [safety-assessment.md](safety-assessment.md) | MOD-07 |
| A-08 | Safety Plan | *(below on this page)* | MOD-14 |
| A-09 | Emotional Regulation Plan | [emotional-regulation-plan.md](emotional-regulation-plan.md) | MOD-13 |
| A-10 | Service Referral List | *(below on this page)* | MOD-25 |
| A-11 | Case Documentation Summary | [case-documentation-summary.md](case-documentation-summary.md) | MOD-20 |
| A-12 | Youth Emotional Check-In Summary | [youth-checkin-summary.md](youth-checkin-summary.md) | MOD-23 |
| A-13 | Community Peace Agreement | [community-peace-agreement.md](community-peace-agreement.md) | MOD-26 |

---

# Safety Plan Template
## Access To Peace · MOD-14 Output

```mermaid
flowchart TD
    subgraph SafetyPlan["Safety Plan Structure"]
        WS["Warning Signs\nThoughts · Feelings · Body · Behavior"]
        IC["Internal Coping\nSelf-soothing strategies"]
        PP["People & Places\nSafe contacts and locations"]
        CS["Crisis Support\nPeople I can call/text"]
        PS["Professional Support\nTherapists · Agencies"]
        CL["Crisis Lines\n911 · 988 · DV Hotline"]
        ES["Environment Safety\nMaking space safer"]
        RS["Reasons to Stay Safe\nPeople · Goals · Values"]

        WS --> IC --> PP --> CS --> PS --> CL --> ES --> RS
    end

    style CL fill:#d32f2f,stroke:#b71c1c,color:#fff
    style WS fill:#ff9800,stroke:#e65100,color:#fff
    style RS fill:#2e7d32,stroke:#1b5e20,color:#fff
```

---

# MY SAFETY PLAN

**Created:** _______________
**For:** _______________
**Created with support of:** _______________ (role)

---

## ⚠️ My Warning Signs

*Signs that I'm starting to struggle — in my thoughts, feelings, body, or behavior:*

1. _______________________________________________________________________________
2. _______________________________________________________________________________
3. _______________________________________________________________________________

---

## 🧘 What I Can Do On My Own

*Things I can do by myself — without calling anyone — to cope:*

1. _______________________________________________________________________________
2. _______________________________________________________________________________
3. _______________________________________________________________________________

---

## 👥 People and Places That Help

*People I can spend time with or places I can go when things are hard:*

| Person / Place | How They Help |
|----------------|--------------|
| | |
| | |

---

## 📞 People I Can Contact for Support

| Name | How to Reach | When to Reach Out |
|------|-------------|------------------|
| | | |
| | | |
| | | |

---

## 🏥 Professional Support

| Person / Organization | Contact | Notes |
|----------------------|---------|-------|
| | | |
| | | |

---

## 🆘 Crisis Lines (Always Available)

- **Emergency:** 911
- **Suicide & Crisis Lifeline:** Call or text **988**
- **National DV Hotline:** **1-800-799-7233**
- **Crisis Text Line:** Text **HOME** to **741741**

---

## 🔒 Making My Environment Safer

_______________________________________________________________________________
_______________________________________________________________________________

---

## 💙 My Reasons to Stay Safe

*The people, goals, and things that matter most to me:*

1. _______________________________________________________________________________
2. _______________________________________________________________________________
3. _______________________________________________________________________________

---

*This safety plan belongs to me. I can update it whenever I need to.*

*Access To Peace is a support tool only — not a substitute for emergency services or licensed clinical care.*

---
---

# Mediation Session Notes Template
## Access To Peace · MOD-09 / MOD-10 Output

```mermaid
flowchart LR
    subgraph MedNotes["Mediation Session Notes Flow"]
        SETUP["Session Setup\nParties · Mediator\nType · Location"]
        GOALS["Session Goals\nParty A · Party B\nFacilitator"]
        ISSUES["Issues\nIdentified"]
        DISCUSS["Discussion\nSummary\n(both perspectives)"]
        PROGRESS{"Agreement\nReached?"}
        PARTIAL["Partial agreement\n+ outstanding issues"]
        FULL["Full agreement\n→ Peace Agreement"]
        NONE["No agreement\n→ continuation"]
        NEXT["Next Session\nDate · Tasks"]
    end

    SETUP --> GOALS --> ISSUES --> DISCUSS --> PROGRESS
    PROGRESS -- "Partial" --> PARTIAL --> NEXT
    PROGRESS -- "Full" --> FULL
    PROGRESS -- "None" --> NONE --> NEXT

    style FULL fill:#2e7d32,stroke:#1b5e20,color:#fff
    style PROGRESS fill:#1565c0,stroke:#0d47a1,color:#fff
```

**Date:** _______________
**Mediator / Facilitator:** _______________
**Location / Platform:** _______________
**Session type:** [ ] First session  [ ] Follow-up  [ ] Agreement session

---

## Parties Present
| Identifier | Role | Attorney Present? |
|-----------|------|-----------------|
| [Party A] | | |
| [Party B] | | |

---

## Session Goals (as stated by each party)
**Party A's goal:** _______________________________________________________________________________
**Party B's goal:** _______________________________________________________________________________
**Facilitator's goal for today:** _______________________________________________________________________________

---

## Issues Identified
1. _______________________________________________________________________________
2. _______________________________________________________________________________
3. _______________________________________________________________________________

---

## Discussion Summary (neutral — both perspectives)

**Issue 1:**
_______________________________________________________________________________

**Issue 2:**
_______________________________________________________________________________

**Issue 3:**
_______________________________________________________________________________

---

## Progress / Agreements Reached
[ ] No agreement reached — continuation planned
[ ] Partial agreement on: _______________________________________________________________________________
[ ] Full agreement reached — see attached Peace Agreement

---

## Outstanding Issues for Next Session
1. _______________________________________________________________________________
2. _______________________________________________________________________________

---

## Next Session
**Date / Time:** _______________
**Tasks before next session:**
- Party A: _______________________________________________________________________________
- Party B: _______________________________________________________________________________
- Facilitator: _______________________________________________________________________________

---

*These notes are a working document for the mediation process. They are not a legal record.*
*Access To Peace · Educational purposes only.*

---
---

# Service Referral Form Template
## Access To Peace · MOD-25 Output

```mermaid
flowchart TD
    NEEDS["Identify Needs"] --> CATS{"Categories"}
    CATS --> LEGAL["Legal aid"]
    CATS --> MH["Mental health"]
    CATS --> DV["DV support"]
    CATS --> HOUSING["Housing"]
    CATS --> FINANCIAL["Financial"]
    CATS --> CHILD["Child/family"]
    CATS --> MEDIATION["Mediation"]
    CATS --> YOUTH["Youth services"]
    CATS --> ELDER["Elder services"]
    CATS --> OTHER["Other needs"]

    LEGAL & MH & DV & HOUSING & FINANCIAL & CHILD & MEDIATION & YOUTH & ELDER & OTHER --> MATCH["Match to organizations\nPhone · Website · Eligibility · Cost"]
    MATCH --> DELIVER["Deliver referral list\n+ 211 starting point"]

    style NEEDS fill:#1565c0,stroke:#0d47a1,color:#fff
    style DELIVER fill:#2e7d32,stroke:#1b5e20,color:#fff
```

**Date:** _______________
**Prepared for:** [Person A] or [role identifier]
**Prepared by:** [role]
**Location:** _______________ (city/county/state)

---

## Needs Identified

- [ ] Legal aid / attorney
- [ ] Mental health counseling
- [ ] Domestic violence support
- [ ] Housing / eviction help
- [ ] Financial assistance
- [ ] Child / family services
- [ ] Mediation / conflict resolution
- [ ] Youth services
- [ ] Elder services
- [ ] Substance use support
- [ ] Food / basic needs
- [ ] Employment / job help
- [ ] Other: _______________

---

## Referrals

| Organization | Category | Phone | Website | Cost | Notes |
|-------------|---------|-------|---------|------|-------|
| | | | | | |
| | | | | | |
| | | | | | |
| | | | | | |

---

## Start Here

**211** — Call or text **211** for any need. Free, confidential, available statewide.

---

## Crisis Lines (if applicable)

- 988 Suicide & Crisis Lifeline: call or text 988
- National DV Hotline: 1-800-799-7233
- Crisis Text Line: Text HOME to 741741

---

*Referral information is provided for educational purposes. Access To Peace does not guarantee
availability or eligibility of any service. Always call to confirm before visiting.*

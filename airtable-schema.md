# Airtable Base Schema — Access To Peace

## Base Name: `access-to-peace`

---

## Table 1: Sessions

| Field | Type | Options / Notes |
|-------|------|----------------|
| session_id | Single line text | UUID — auto or manual |
| created_at | Date | Date + time |
| role_code | Single select | IND, PAR, YTH, ELD, MED, ARB, CCH, RPF, THR, PSY, SWK, PSS, ATT, GAL, JDG, VAD, SCL, TCH, ORG, NCM |
| trigger_raw | Long text | User's original trigger text |
| trigger_code | Single select | T-01 through T-80 |
| safety_level | Single select | Green, Yellow, Orange, Red |
| safety_gate_completed | Checkbox | |
| module_code | Single select | MOD-01 through MOD-26 |
| artifact_type | Single select | A-01 through A-13 |
| artifact_id | Single line text | UUID link to artifact record |
| pii_handling | Single select | Redacted, Retained, Restricted |
| named_version | Checkbox | |
| draft_only | Checkbox | |
| disclaimers_applied | Multiple select | A, B, C, D, E, F, G, H |
| completed_at | Date | |
| notes | Long text | |

---

## Table 2: Conflict Intakes

| Field | Type | Options / Notes |
|-------|------|----------------|
| intake_id | Single line text | UUID |
| session_id | Link to Sessions | |
| created_at | Date | |
| conflict_type | Single select | coparenting, neighbor, workplace, school, family, community, other |
| party_a_relationship | Single line text | |
| party_b_relationship | Single line text | |
| additional_parties | Long text | |
| duration_estimate | Single line text | |
| most_recent_incident | Single line text | Approximate date |
| presenting_conflict | Long text | Neutral summary |
| current_impact | Long text | |
| safety_flag | Checkbox | |
| safety_note | Long text | |
| user_stated_need | Single select | documentation, next steps, communication help, mediation prep, safety support, resources |
| recommended_modules | Multiple select | MOD-01 through MOD-26 |

---

## Table 3: Message Rewrites

| Field | Type | Options / Notes |
|-------|------|----------------|
| rewrite_id | Single line text | UUID |
| session_id | Link to Sessions | |
| created_at | Date | |
| module | Single select | MOD-01, MOD-04 |
| relationship | Single line text | |
| core_need | Long text | |
| child_involved | Checkbox | |
| court_context | Checkbox | |
| neutrality_accusatory | Number | 1–10 |
| neutrality_escalation | Number | 1–10 |
| neutrality_child_centering | Number | 1–10 (blank if N/A) |
| neutrality_court_readiness | Number | 1–10 (blank if N/A) |
| version_firm | Long text | |
| version_collaborative | Long text | |
| version_minimal | Long text | |
| changes_note | Long text | |

---

## Table 4: Safety Plans

| Field | Type | Options / Notes |
|-------|------|----------------|
| plan_id | Single line text | UUID |
| session_id | Link to Sessions | |
| created_at | Date | |
| role | Single select | |
| safety_gate_response | Single select | Safe, Not sure, Immediate danger |
| warning_signs | Long text | Bullet list |
| internal_coping | Long text | |
| support_people | Long text | |
| crisis_contacts | Long text | JSON or formatted list |
| professional_supports | Long text | |
| environment_safety | Long text | |
| reasons_to_stay_safe | Long text | |
| professional_review_required | Checkbox | True for THR/PSY role |
| status | Single select | Active, Reviewed, Archived |
| last_reviewed | Date | |

---

## Table 5: Peace Agreements

| Field | Type | Options / Notes |
|-------|------|----------------|
| agreement_id | Single line text | UUID |
| session_id | Link to Sessions | |
| created_at | Date | |
| conflict_type | Single select | |
| party_a | Single line text | Identifier |
| party_b | Single line text | Identifier |
| background | Long text | |
| terms | Long text | JSON array or numbered list |
| effective_date | Date | |
| review_date | Date | |
| breach_protocol | Long text | |
| status | Single select | Draft, Acknowledged, Signed, Breached, Revised, Completed |
| legally_binding | Checkbox | Default: false |
| facilitator_role | Single select | |

---

## Table 6: Service Referrals

| Field | Type | Options / Notes |
|-------|------|----------------|
| referral_id | Single line text | UUID |
| session_id | Link to Sessions | |
| created_at | Date | |
| organization | Single line text | |
| category | Single select | Legal Aid, Mental Health, DV, Housing, Financial, Child/Family, Mediation, Youth, Elder, Substance Use, Food/Basic Needs, Employment, Other |
| phone | Phone number | |
| website | URL | |
| eligibility | Single line text | |
| cost | Single select | Free, Sliding scale, Fee, Insurance |
| state | Single line text | 2-letter |
| county | Single line text | |
| notes | Long text | |
| last_verified | Date | |
| connected | Checkbox | Did client connect with this resource? |

---

## Views to Create

### Sessions Table
- **All Sessions** — default grid
- **Active Orange/Red** — filter: safety_level = Orange or Red, completed_at is empty
- **Completed This Week** — filter: completed_at is within last 7 days
- **By Role** — group by role_code

### Safety Plans Table
- **Active Plans** — filter: status = Active
- **Needs Review** — filter: professional_review_required = true, status = Active

### Peace Agreements Table
- **Upcoming Reviews** — filter: review_date within next 30 days, status = Acknowledged or Signed
- **Breached** — filter: status = Breached

### Service Referrals Table
- **By Category** — group by category
- **Unverified** — filter: last_verified is more than 6 months ago

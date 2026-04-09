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

```mermaid
flowchart TD
    A["Trigger: T-66, T-67, T-68\nService Referral Requested"]:::blue --> B["Q1: What help do you need?\nLegal / Mental Health / DV /\nHousing / Financial / Child-Family /\nMediation / Youth / Elder /\nSubstance Use / Food / Employment"]:::blue
    B --> C["Q2: State / City"]
    C --> D["Q3: Free or low-cost\nservices needed?"]
    D --> E{"Optional barriers?"}
    E -- "Yes" --> F["Q4: Language preference\nQ5: Transportation barrier\nQ6: Trauma/DV-informed needed"]
    E -- "No" --> G["Build Referral List"]:::green
    F --> G
    G --> H["Service Referral Table:\nOrganization / Category /\nContact / Cost / Notes"]:::green
    H --> I["Always included:\n211 Navigator (any need)\n988 Crisis / DV Hotline"]:::green
    I --> J{"Safety need\nidentified?"}:::orange
    J -- "Yes" --> K["MOD-14 Safety Plan Builder"]:::red
    J -- "No" --> L["MOD-05 Conflict Intake"]:::green
    I --> M["MOD-15 Self-Care Plan"]:::green
    I --> N["MOD-24 Neighborhood Dispute"]:::green

    classDef blue fill:#1565c0,color:#fff
    classDef orange fill:#ff9800,color:#fff
    classDef red fill:#d32f2f,color:#fff
    classDef green fill:#2e7d32,color:#fff
```

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

## Recommended Next Modules
- **MOD-05** Conflict Intake — if the user's conflict hasn't been assessed yet
- **MOD-14** Safety Plan Builder — if safety needs were identified during referral
- **MOD-15** Trauma-Informed Self-Care Plan — alongside professional referrals
- **MOD-24** Neighborhood Dispute Navigator — if the need is dispute-related

---

## Worked Example

**User input:**
> Role: Individual (IND). Needs: legal aid for a custody matter and mental health counseling. Location: St. Louis, Missouri. Free or low-cost services needed: yes. Language preference: none. Transportation barrier: no. Preference: trauma-informed services.

### Service Referral List

**Needs identified:** Legal aid (custody matter), mental health counseling
**Location:** St. Louis, Missouri
**Cost filter:** Free / low-cost

| Organization | Category | Contact | Cost | Notes |
|-------------|---------|---------|------|-------|
| Legal Services of Eastern Missouri | Legal aid | 314-534-4200 / lsem.org | Free | Serves low-income residents in eastern Missouri. Handles family law including custody matters. Income eligibility required. |
| Missouri Legal Aid | Legal aid | 800-990-0340 / molegaid.org | Free | Statewide legal assistance for qualifying individuals. Can help with custody, visitation, and family law matters. |
| Behavioral Health Response | Mental health | 314-469-6644 | Free / sliding scale | St. Louis-based. Provides crisis counseling and ongoing mental health support. Trauma-informed approach available. |
| NAMI Missouri | Mental health | 800-374-2138 / namimissouri.org | Free | Offers support groups, education, and referrals for mental health services. Can connect you with trauma-informed providers. |
| Places for People | Mental health | 314-335-2600 | Sliding scale | St. Louis community mental health center. Offers counseling, psychiatric services, and case management. Trauma-informed care model. |

**Start here:**
- For any need: Call or text **211** — free, confidential, statewide navigator. Tell them you need legal help with a custody matter and mental health counseling in St. Louis. They can confirm eligibility and current availability for the organizations listed above.
- For crisis: Call or text **988** (mental health) / **1-800-799-7233** (DV)

## Disclaimer
Append Block A.

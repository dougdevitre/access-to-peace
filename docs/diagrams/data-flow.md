# Data Flow & Persistence

> How session data is structured, stored, and visualized. From raw user input
> to JSON schemas, Airtable bases, and the Peace Dashboard.

---

## End-to-End Data Flow

```mermaid
flowchart TD
    subgraph INPUT["📥 User Input"]
        TRIGGER["Trigger text"]
        ROLE["Role selection"]
        ANSWERS["Question responses"]
    end
    
    subgraph PROCESSING["⚙️ Processing"]
        MODULE["Module processes input"]
        ARTIFACT["Artifact generated"]
        QUALITY["Quality gates applied"]
    end
    
    subgraph SCHEMAS["📋 Data Schemas"]
        S1["Session Record<br/><i>JSON · 11 fields</i>"]
        S2["Conflict Intake Record<br/><i>JSON · 12 fields</i>"]
        S3["Message Rewrite Record<br/><i>JSON · 13 fields</i>"]
        S4["Safety Plan Record<br/><i>JSON · 12 fields</i>"]
        S5["Peace Agreement Record<br/><i>JSON · 12 fields</i>"]
        CSV1["Service Referral<br/><i>CSV · 10 fields</i>"]
        CSV2["Session Log<br/><i>CSV · 7 fields</i>"]
    end
    
    subgraph STORAGE["💾 Airtable Base"]
        T1["Sessions table"]
        T2["Conflict Intakes table"]
        T3["Message Rewrites table"]
        T4["Safety Plans table"]
        T5["Peace Agreements table"]
        T6["Service Referrals table"]
    end
    
    subgraph OUTPUT["📊 Visualization"]
        DASH["Peace Dashboard<br/><i>Active cases</i>"]
        TRACK["Conflict Tracker<br/><i>Pattern monitoring</i>"]
        AGREE["Agreement Registry<br/><i>Status tracking</i>"]
    end
    
    INPUT --> PROCESSING
    PROCESSING --> SCHEMAS
    SCHEMAS --> STORAGE
    STORAGE --> OUTPUT
    
    S1 --> T1
    S2 --> T2
    S3 --> T3
    S4 --> T4
    S5 --> T5
    CSV1 --> T6
    
    T1 --> DASH
    T2 --> TRACK
    T5 --> AGREE

    style INPUT fill:#e8f5e9,stroke:#2e7d32
    style PROCESSING fill:#e3f2fd,stroke:#1565c0
    style SCHEMAS fill:#fff9c4,stroke:#f9a825
    style STORAGE fill:#f3e5f5,stroke:#6a1b9a
    style OUTPUT fill:#fce4ec,stroke:#880e4f
```

---

## Schema Relationships

```mermaid
erDiagram
    SESSIONS ||--o{ CONFLICT_INTAKES : "has"
    SESSIONS ||--o{ MESSAGE_REWRITES : "has"
    SESSIONS ||--o{ SAFETY_PLANS : "has"
    SESSIONS ||--o{ PEACE_AGREEMENTS : "has"
    SESSIONS ||--o{ SERVICE_REFERRALS : "has"
    
    SESSIONS {
        string session_id PK
        string role_code
        string trigger_code
        string safety_level
        string module_code
        string artifact_type
        datetime created_at
        string status
        string disclaimers_applied
        string recommended_next
        boolean crisis_interrupt
    }
    
    CONFLICT_INTAKES {
        string intake_id PK
        string session_id FK
        string conflict_type
        string parties
        string duration
        string most_recent_event
        string impact
        string safety_flag
        string user_need
        string recommended_module
    }
    
    MESSAGE_REWRITES {
        string rewrite_id PK
        string session_id FK
        string module
        string relationship
        string original_message
        int neutrality_accusatory
        int neutrality_escalation
        int neutrality_child_centering
        string version_firm
        string version_collaborative
        string version_minimal
    }
    
    SAFETY_PLANS {
        string plan_id PK
        string session_id FK
        string warning_signs
        string internal_coping
        string safe_people_places
        string crisis_contacts
        string professional_support
        string environment_safety
        string reasons_to_stay_safe
        boolean professional_review_required
    }
    
    PEACE_AGREEMENTS {
        string agreement_id PK
        string session_id FK
        string parties
        string background
        string terms
        date start_date
        date review_date
        string breach_protocol
        string status
        string signatures
    }
    
    SERVICE_REFERRALS {
        string referral_id PK
        string session_id FK
        string organization
        string category
        string contact
        string cost
        string eligibility
        boolean connected
    }
```

---

## Airtable Views for Case Management

```mermaid
graph TB
    subgraph VIEWS["Airtable Views"]
        V1["<b>Active Cases</b><br/>Sessions where status ≠ Closed<br/>Grouped by safety level"]
        V2["<b>Safety Monitor</b><br/>Sessions where safety = Orange/Red<br/>Sorted by date"]
        V3["<b>Upcoming Reviews</b><br/>Agreements where review_date<br/>is within 14 days"]
        V4["<b>Unverified Resources</b><br/>Referrals where connected = false"]
        V5["<b>Professional Review</b><br/>Safety plans where<br/>professional_review = true"]
    end
    
    subgraph ROUTINES["Connected Routines"]
        R1["<b>Daily Check-In</b><br/>Safety pulse + emotional baseline"]
        R2["<b>Weekly Case Review</b><br/>Dashboard refresh + safety sweep"]
        R3["<b>Post-Session Closeout</b><br/>Summary + action items + self-check"]
    end
    
    V1 --> R2
    V2 --> R1
    V3 --> R2
    V4 --> R2
    V5 --> R2
    
    R1 -->|"feeds"| V2
    R2 -->|"updates"| V1
    R3 -->|"creates"| V1

    style VIEWS fill:#f3e5f5,stroke:#6a1b9a
    style ROUTINES fill:#e0f7fa,stroke:#00695c
```

---

## PII Handling Flow

```mermaid
flowchart LR
    INPUT["User provides<br/>names, addresses,<br/>case numbers"]
    
    DETECT{"PII detected?"}
    
    PROMPT["Prompt user:<br/><i>Do you want to<br/>redact, retain, or restrict?</i>"]
    
    REDACT["<b>Redact</b><br/>Replace with placeholders<br/>[Person A], [Address], etc."]
    RETAIN["<b>Retain</b><br/>Keep in artifact<br/>Warn before sharing"]
    RESTRICT["<b>Restrict</b><br/>Store separately<br/>Not in shared artifact"]
    
    OUTPUT["Artifact produced<br/>with PII choice applied"]
    
    INPUT --> DETECT
    DETECT -->|"Yes"| PROMPT
    DETECT -->|"No"| OUTPUT
    PROMPT --> REDACT --> OUTPUT
    PROMPT --> RETAIN --> OUTPUT
    PROMPT --> RESTRICT --> OUTPUT

    style REDACT fill:#c8e6c9,stroke:#2e7d32
    style RETAIN fill:#fff9c4,stroke:#f9a825
    style RESTRICT fill:#e3f2fd,stroke:#1565c0
```

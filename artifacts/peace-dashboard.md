# Peace Dashboard
## Master Status Board — Access To Peace

*Produced by: any session. Updated by: user or facilitator.*

```mermaid
graph TD
    subgraph Dashboard["Peace Dashboard Overview"]
        CASES["Active Cases\nConflict type · Parties\nStatus · Safety level"]
        SAFETY_OV["Safety Overview\nSafety plans · Last check\nNext check"]
        COMM_LOG["Communication Log\nLast message · Neutrality score"]
        AGREEMENTS["Agreements\nType · Status · Review date"]
        ACTIONS["Open Action Items\nOwner · Due · Priority"]
        RESOURCES_CONN["Resources Connected\nService · Category · Status"]
    end

    CASES --> SAFETY_OV
    CASES --> COMM_LOG
    CASES --> AGREEMENTS
    AGREEMENTS --> ACTIONS
    CASES --> RESOURCES_CONN

    UPDATE["Update after each session\nor significant event"]

    style CASES fill:#1565c0,stroke:#0d47a1,color:#fff
    style SAFETY_OV fill:#ff9800,stroke:#e65100,color:#fff
    style AGREEMENTS fill:#2e7d32,stroke:#1b5e20,color:#fff
```

```mermaid
flowchart LR
    subgraph Tracker["Conflict Tracker Lifecycle"]
        START["Conflict\nStarted"] --> ACTIVE["Active\nMultiple sessions"]
        ACTIVE --> DEESC["De-escalating\nProgress noted"]
        DEESC --> RESOLVED["Resolved\nResolution type noted"]
        ACTIVE --> PAUSED["Paused\nAwaiting event"]
        PAUSED --> ACTIVE
    end

    style START fill:#d32f2f,stroke:#b71c1c,color:#fff
    style ACTIVE fill:#ff9800,stroke:#e65100,color:#fff
    style DEESC fill:#ffeb3b,stroke:#f9a825,color:#000
    style RESOLVED fill:#2e7d32,stroke:#1b5e20,color:#fff
```

---

## Active Cases / Situations

| ID | Conflict Type | Parties | Status | Last Activity | Safety Level | Next Step |
|----|--------------|---------|--------|--------------|-------------|-----------|
| [001] | [type] | [A / B] | [Active / Resolved / Paused] | [date] | [Green/Yellow/Orange] | [module or action] |

---

## Safety Overview

| Case ID | Safety Level | Safety Plan? | Last Safety Check | Next Check |
|---------|-------------|-------------|------------------|-----------|
| | | | | |

---

## Communication Log Summary

| Case ID | Last Message | Sent By | Response Received | Neutrality Score |
|---------|-------------|---------|------------------|-----------------|
| | | | | |

---

## Agreements

| Case ID | Agreement Type | Date | Status | Review Date |
|---------|--------------|------|--------|------------|
| | | | | |

---

## Open Action Items

| Action | Owner | Due | Priority |
|--------|-------|-----|---------|
| | | | |

---

## Resources Connected

| Case ID | Service / Organization | Category | Referral Date | Status |
|---------|----------------------|---------|--------------|--------|
| | | | | |

---

*Dashboard is a working document. Update after each session or significant event.*

---
---

# Conflict Tracker
## Ongoing Conflict Monitoring Tool

*Use this to track an ongoing conflict over time across multiple sessions.*

---

## Conflict Overview

**Conflict ID:** _______________
**Conflict type:** _______________
**Parties:** [Party A] / [Party B] / [Others]
**Start date (approximate):** _______________
**Current status:** Active / De-escalating / Resolved / Paused

---

## Session Log

| Date | Module Used | Artifact Produced | Key Outcome | Safety Level | Next Step |
|------|------------|------------------|-------------|-------------|-----------|
| | | | | | |

---

## Pattern Tracker

**Escalation trend:** ↑ Escalating / → Stable / ↓ De-escalating

**Communication quality over time:**
| Period | Neutrality Score (avg) | Notable Events |
|--------|----------------------|---------------|
| | | |

**Safety level history:**
| Date | Level | Trigger |
|------|-------|---------|
| | | |

---

## Agreements Reached

| Date | Agreement Type | Status | Review Date |
|------|--------------|--------|------------|
| | | | |

---

## Resolution Notes

**Resolved on:** _______________
**Resolution type:** Mediated agreement / Peace agreement / Court order / Informal / Ongoing
**Key factors in resolution:** _______________
**Lessons noted:** _______________

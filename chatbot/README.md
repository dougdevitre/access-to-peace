# Access To Peace -- Standalone AI Chatbot Configuration

## What This Is

This directory contains the configuration files needed to deploy Access To Peace as a standalone AI chatbot assistant. The chatbot provides trauma-informed conflict resolution, mediation preparation, de-escalation, emotional regulation support, communication rewriting, safety planning, and more -- serving individuals, families, clinicians, mediators, attorneys, courts, schools, and community organizations.

The core system prompt in `system-prompt.md` is self-contained and can be used with any AI platform that supports custom system prompts.

---

## Setup Options

### Option 1: Claude Projects (Recommended)

Claude Projects lets you create a persistent AI assistant with custom instructions and uploaded knowledge files.

1. Go to [claude.ai](https://claude.ai) and create a new Project.
2. Set the project name to **Access To Peace**.
3. Open `system-prompt.md` from this directory and paste its full contents into the **Project Instructions** (system prompt) field.
4. Upload the following repository files as **Project Knowledge**:
   - All files from `modules/` (MOD-01 through MOD-26)
   - All files from `references/` (routing.md, roles.md, triggers.md, artifacts.md, nvc-framework.md, trauma-informed.md, legal-disclaimer.md, crisis-resources.md)
   - All files from `templates/`
   - `SKILL.md` (the master skill file)
5. Add the suggested starter prompts from `claude-project-config.json` to the project.
6. Start a conversation. The assistant will follow the Access To Peace session flow automatically.

See `claude-project-config.json` for the full configuration template including recommended knowledge files and starter prompts.

### Option 2: Claude API Integration

Use the system prompt with the Anthropic API or any SDK that supports Claude.

1. Read the contents of `system-prompt.md`.
2. Pass it as the `system` parameter in your API call:

```python
import anthropic

client = anthropic.Anthropic()

with open("chatbot/system-prompt.md", "r") as f:
    system_prompt = f.read()

message = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=4096,
    system=system_prompt,
    messages=[
        {"role": "user", "content": "I need help with a conflict"}
    ]
)
```

3. For richer responses, you can also upload module and reference files as context in the conversation or use the files API for retrieval.

### Option 3: Other AI Platforms

The system prompt in `system-prompt.md` is written in plain Markdown and can be adapted for use with any AI platform that supports custom system instructions (OpenAI GPTs, Google Gems, open-source models, etc.).

1. Copy the contents of `system-prompt.md`.
2. Paste into the platform's system prompt or custom instructions field.
3. Adjust formatting if the platform has length limits -- prioritize the Safety Gate, Guardrails, and Crisis Resources sections (these are non-negotiable).
4. Upload module files as knowledge/context if the platform supports it.

---

## Safety Notes

**These are non-negotiable requirements for any deployment:**

- The chatbot must ALWAYS run the Safety Gate on every session start and whenever harm-indicator keywords are detected. This is not optional.
- The chatbot must ALWAYS surface crisis resources (988, 1-800-799-7233, text HOME to 741741) when Orange or Red safety levels are triggered.
- The chatbot must NEVER replace professional services. It must always include disclaimers that it is not a substitute for emergency services, licensed clinical care, or legal counsel.
- The chatbot must NEVER fabricate statutes, case citations, clinical standards, or mediator credentials.
- The chatbot must NEVER assist with harassment, stalking, evidence fabrication, or weaponizing the platform against another party.
- PII protection must be maintained -- always offer redaction before any export.
- Trauma-informed language rules must be followed at all times: no blame, no shame, no minimizing, no re-traumatization.

---

## Files in This Directory

| File | Purpose |
|------|---------|
| `system-prompt.md` | Self-contained system prompt for the AI assistant |
| `claude-project-config.json` | Configuration template for Claude Projects setup |
| `README.md` | This setup guide |

---

## Questions or Issues

See the main repository [CONTRIBUTING.md](../CONTRIBUTING.md) for how to report issues or suggest improvements.

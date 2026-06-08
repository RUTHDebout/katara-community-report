# Alerts Module

This module defines how KATARA will prepare and send alerts.

## Channels

- SMS
- WhatsApp
- Email for institutional users
- Dashboard notifications

## MVP status

The first version should create alert drafts. Human review is required before sending public alerts.

## Alert fields

| Field | Description |
|---|---|
| `alert_id` | Unique alert identifier |
| `created_at` | Creation time |
| `area_name` | Target area |
| `severity` | low, medium, high, critical |
| `message_fr` | French alert message |
| `message_local` | Local-language message |
| `source` | satellite, community, authority, mixed |
| `status` | draft, approved, sent, cancelled |
| `approved_by` | Reviewer before sending |

## Message principles

- Use clear and calm language.
- Avoid panic.
- Say what happened, where, and what people should do.
- Keep messages short for SMS.
- Add official contacts when available.

## Example SMS draft

```text
KATARA Alert: Heavy rain and flooding reported in Agoe. Avoid flooded roads. Move important items to a safe place. Follow local authority instructions.
```

## Future integrations

- Africa's Talking SMS.
- WhatsApp Cloud API.
- Municipal contact groups.
- Location-based alert targeting.

# Community Report Data Schema

This document defines the first data model for KATARA Community Report.

## Entity: FloodReport

| Field | Type | Required | Description |
|---|---:|---:|---|
| `report_id` | string | yes | Unique report identifier. |
| `created_at` | datetime | yes | Report submission time in ISO 8601 format. |
| `reporter_name` | string | no | Name of the reporter. Can be empty if anonymous. |
| `anonymous` | boolean | yes | Whether the reporter wants to remain anonymous. |
| `phone_number` | string | no | Phone number for verification and follow-up. |
| `country` | string | yes | Country name. Example: Togo. |
| `region` | string | yes | Administrative region. Example: Maritime. |
| `city_or_prefecture` | string | yes | City, commune, or prefecture. |
| `location_name` | string | yes | Human-readable location. |
| `latitude` | number | yes | GPS latitude. |
| `longitude` | number | yes | GPS longitude. |
| `event_type` | enum | yes | `flood`, `heavy_rain`, `blocked_drain`, `damaged_road`, `damaged_house`, `health_risk`, `other`. |
| `severity` | enum | yes | `low`, `medium`, `high`, `critical`. |
| `description` | string | yes | Short description of the situation. |
| `photo_url` | string | no | URL of uploaded image. |
| `water_level_estimate_cm` | number | no | Estimated water height in centimeters. |
| `people_affected_estimate` | integer | no | Estimated number of affected people. |
| `verified_status` | enum | yes | `unverified`, `pending`, `verified`, `rejected`. |
| `verified_by` | string | no | Name or ID of verifier. |
| `source_channel` | enum | yes | `web`, `sms`, `whatsapp`, `admin`, `field_agent`. |
| `language` | enum | no | `fr`, `en`, `ewe`, `mina`, `kabye`, `other`. |
| `export_allowed` | boolean | yes | Whether the record can be included in exports. |

## Severity scale

### Low
Minor inconvenience, small water accumulation, no immediate danger.

### Medium
Water affects movement, homes, shops, small infrastructure, or local roads.

### High
Homes or public services affected, roads blocked, urgent municipal response needed.

### Critical
Danger to life, displacement, severe damage, trapped people, or health emergency.

## Verification workflow

```text
unverified -> pending -> verified
                         -> rejected
```

## Privacy principles

- Do not expose phone numbers publicly.
- Blur or moderate sensitive photos before public display.
- Allow anonymous reporting.
- Separate public data from internal verification data.
- Export only records where `export_allowed = true`.

## Minimal API payload

```json
{
  "reporter_name": "Anonymous",
  "anonymous": true,
  "phone_number": "",
  "country": "Togo",
  "region": "Maritime",
  "city_or_prefecture": "Lome",
  "location_name": "Agoe",
  "latitude": 6.2047,
  "longitude": 1.2255,
  "event_type": "flood",
  "severity": "high",
  "description": "Water is blocking the road and entering houses.",
  "photo_url": "",
  "water_level_estimate_cm": 45,
  "people_affected_estimate": 30,
  "source_channel": "web",
  "language": "fr",
  "export_allowed": true
}
```

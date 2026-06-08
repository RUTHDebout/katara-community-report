# API Module

This module will expose endpoints for KATARA Community Report.

## Planned endpoints

```text
POST   /reports              Submit a community report
GET    /reports              List reports with filters
GET    /reports/{id}         Read one report
PATCH  /reports/{id}/verify  Update verification status
GET    /exports/csv          Export reports as CSV
GET    /exports/geojson      Export reports as GeoJSON
POST   /alerts               Create alert draft
GET    /health               Health check
```

## Minimal report submission payload

```json
{
  "anonymous": true,
  "country": "Togo",
  "region": "Maritime",
  "city_or_prefecture": "Lome",
  "location_name": "Agoe",
  "latitude": 6.2047,
  "longitude": 1.2255,
  "event_type": "flood",
  "severity": "high",
  "description": "Water is entering homes.",
  "source_channel": "web",
  "language": "fr"
}
```

## Implementation recommendation

Start simple:

- FastAPI for API.
- PostgreSQL + PostGIS for geospatial data.
- Local file storage first, then S3-compatible storage.
- JWT or admin password for verification endpoints.

## Safety

- Public endpoints must not expose phone numbers.
- Verification endpoints require admin authentication.
- Uploaded photos must be moderated before public display.

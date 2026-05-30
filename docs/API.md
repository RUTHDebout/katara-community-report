# API Documentation

## Current status

The backend is currently an early FastAPI prototype.

## Available endpoints

### Health check

```http
GET /health
```

Response:

```json
{
  "status": "healthy"
}
```

### Root endpoint

```http
GET /
```

Response:

```json
{
  "project": "KATARA Community Report",
  "status": "active",
  "mission": "Community-centered climate resilience infrastructure"
}
```

## Planned endpoints

### Create report

```http
POST /reports
```

Expected fields:

- location
- category
- description
- latitude
- longitude
- media evidence
- language
- reporter type

### List reports

```http
GET /reports
```

### Export reports

```http
GET /reports/export.csv
GET /reports/export.geojson
```

## Future API priorities

- Authentication
- Report validation
- Moderation workflow
- Geospatial export
- SMS gateway integration
- AI-assisted classification

# KATARA Research Stack

KATARA Research Stack is the research and implementation layer for building a flood early warning and community reporting system for West Africa.

## Objective

Build an open-source, modular system combining:

1. Satellite and remote sensing data.
2. Community reports from the field.
3. Risk mapping and dashboards.
4. SMS/WhatsApp alert workflows.
5. RAG-based documentation assistant.
6. Exportable data for municipalities, ministries, NGOs, and researchers.

## Reference repositories

### Geospatial and satellite

- `opengeos/Awesome-GEE` — Google Earth Engine resources.
- `cordmaur/Sentinel1-Flood-Finder` — Sentinel-1 SAR flood mapping reference.
- `opengeos/leafmap` — interactive mapping in Python.
- `sacridini/Awesome-Geospatial` — broader geospatial ecosystem.
- `acgeospatial/awesome-earthobservation-code` — Earth observation code resources.

### Community reporting

- `ushahidi/Ushahidi_Web` — reference model for crowdsourced crisis/community reports.

### AI, RAG, and agents

- `langchain-ai/langgraph` — structured agent workflows.
- `run-llama/llama_index` — document ingestion and RAG.
- `mendableai/firecrawl` — web data collection.
- `qdrant/qdrant` or `chroma-core/chroma` — vector database.

## Target MVP architecture

```text
Community Users
   |
   | SMS / WhatsApp / Web form
   v
Community Report API
   |
   | stores reports, GPS, photos, severity, category
   v
Database + Object Storage
   |
   +--> Map Dashboard
   +--> CSV / GeoJSON / Shapefile export
   +--> RAG knowledge base
   +--> Alert engine

Satellite / Weather Data
   |
   | Sentinel-1, Sentinel-2, CHIRPS, GEE layers
   v
Risk Processing Layer
   |
   v
Flood risk map + alerts
```

## Core modules

### 1. Community report module

Collects citizen reports during and after floods.

Fields:

- reporter name or anonymous flag
- phone number
- location name
- latitude
- longitude
- event type
- damage category
- severity
- description
- photo URL
- timestamp
- verification status

### 2. Satellite risk module

Uses remote sensing and rainfall data to detect or estimate flood risk.

Possible layers:

- Sentinel-1 SAR flood extent
- Sentinel-2 NDWI water index
- CHIRPS rainfall anomaly
- administrative boundaries
- rivers and drainage zones
- building footprints
- community report points

### 3. Dashboard module

Displays:

- report points
- risk zones
- report severity
- trends by date
- export buttons
- verification state

### 4. Alert module

Planned channels:

- SMS
- WhatsApp
- email for institutional users
- dashboard notifications

### 5. RAG assistant module

Helps the team query:

- flood management documents
- climate adaptation documents
- municipal response guides
- legal and policy references
- project documentation
- donor and grant requirements

## 30-day MVP roadmap

### Week 1 — Research and setup

- Audit the listed repositories.
- Create data schema.
- Prepare the first dashboard wireframe.
- Define demo geography: Maritime region, Togo.
- Prepare a sample GeoJSON dataset.

### Week 2 — Community report MVP

- Build report submission form.
- Store reports.
- Render reports on a map.
- Add severity levels.
- Add export to CSV/GeoJSON.

### Week 3 — Geospatial risk layer

- Prototype Sentinel-1 workflow.
- Add NDWI or water mask experiment.
- Overlay community reports.
- Add flood risk zones.

### Week 4 — RAG and demo

- Add document ingestion.
- Create RAG assistant.
- Prepare demo script.
- Write deployment notes.
- Prepare ministry/donor presentation narrative.

## Presentation angle

KATARA should be positioned as:

> A climate resilience and civic intelligence platform that combines satellite data, community reports, and AI to help African municipalities anticipate, document, and respond to floods.

## Immediate next issues

- Create community report schema.
- Add starter GeoJSON file.
- Add dashboard wireframe.
- Add Sentinel-1 research notebook placeholder.
- Add RAG architecture notes.

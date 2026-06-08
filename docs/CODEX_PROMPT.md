# Codex Prompt — KATARA Research Stack

Use this prompt in Codex to continue implementation.

```text
You are working inside the repository `katara-community-report`.

Goal: turn this repository into a production-ready MVP for KATARA, a flood early warning and community reporting platform for West Africa.

Context:
KATARA combines satellite flood/risk layers, community reports, map dashboards, SMS/WhatsApp alert planning, and a RAG assistant for climate, legal, and municipal documentation.

Reference repositories to study conceptually:
- opengeos/Awesome-GEE
- cordmaur/Sentinel1-Flood-Finder
- opengeos/leafmap
- ushahidi/Ushahidi_Web
- langchain-ai/langgraph
- run-llama/llama_index
- mendableai/firecrawl

Build the following repository structure:

- docs/
  - ARCHITECTURE.md
  - DATA_SCHEMA.md
  - DEPLOYMENT.md
  - MINISTRY_PRESENTATION_NOTES.md
  - RAG_ASSISTANT.md
  - SATELLITE_WORKFLOW.md
- data/
  - sample_reports.geojson
  - sample_reports.csv
- notebooks/
  - sentinel1_flood_detection_placeholder.ipynb
  - ndwi_water_index_placeholder.ipynb
- src/
  - api/
  - dashboard/
  - geospatial/
  - rag/
  - alerts/
- issues/
  - 30_day_mvp_backlog.md

Implementation tasks:

1. Create a clear README section explaining KATARA Community Report.
2. Create a data schema for community flood/damage reports.
3. Create sample CSV and GeoJSON files with realistic Togo/Maritime demo data.
4. Create a simple API plan for submitting reports.
5. Create a dashboard plan using Leaflet, Mapbox, or React map components.
6. Create satellite workflow notes for Sentinel-1, Sentinel-2 NDWI, CHIRPS, and Google Earth Engine.
7. Create RAG assistant notes using LlamaIndex or LangGraph.
8. Create GitHub issues for each module.
9. Keep implementation simple, documented, and demo-ready.

Quality requirements:
- Keep files readable.
- Add setup instructions.
- Add environment variables examples.
- Add data privacy notes.
- Add humanitarian/climate ethics notes.
- Use English for repository documentation.
- Use clear commit messages.
```

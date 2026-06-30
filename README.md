# KATARA Community Report

![CI](https://github.com/RUTHDebout/katara-community-report/actions/workflows/ci.yml/badge.svg)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/status-early%20MVP-orange.svg)

**Open-source civic-tech and climate-resilience infrastructure for flood-prone communities in West Africa.**

KATARA Community Report helps communities, municipalities, NGOs, and researchers collect, classify, verify, and act on local climate-risk reports, especially flood-related incidents in low-resource environments.

The project combines community reporting, geospatial monitoring, multilingual accessibility, offline-first workflows, and low-bandwidth communication channels such as SMS and WhatsApp.

## Why this project matters

Flood-prone communities often lack fast, localized, and accessible reporting tools. Many early-warning systems rely on top-down data flows and do not sufficiently include ground-level observations from residents.

KATARA Community Report aims to close that gap by enabling citizens and field actors to submit structured incident reports that support preparedness, humanitarian response, and local climate-adaptation planning.

## Founder context

This project is led by **Abla Ruth AGBOFOATI**, a founder based in Lomé, Togo, building AI, civic-tech, and climate-tech tools for Francophone Africa.

KATARA is designed from a field-first perspective: basic phones, low bandwidth, local languages, municipal workflows, and practical use by community champions.

## Core objectives

- Enable community-based flood and climate-risk reporting.
- Support low-bandwidth and mobile-first reporting workflows.
- Provide multilingual and locally adaptable interfaces.
- Help municipalities and NGOs visualize incidents on maps.
- Support open geospatial and civic-tech experimentation in Africa.
- Build reusable open-source components for climate-resilience systems.

## Target users

- Residents in flood-prone communities
- Community volunteers and local leaders
- Municipal disaster-risk teams
- NGOs and humanitarian organizations
- Climate adaptation researchers
- Civic-tech and open-source contributors

## Planned features

- Community incident reporting form
- Photo-based evidence submission
- Incident category classification
- Geolocation and map visualization
- Offline-first data capture
- Multilingual interface support
- CSV and GeoJSON export
- Admin dashboard for verification and triage
- SMS/WhatsApp alert and reporting workflows
- AI-assisted report classification and summarization

## Technology direction

- **Backend:** FastAPI, Python
- **Frontend:** Next.js / React
- **Geospatial:** PostGIS, GeoJSON, mapping workflows
- **Data:** community reports, flood-risk layers, structured incident datasets
- **Messaging:** SMS and WhatsApp workflows
- **AI:** report classification, summarization, triage support
- **Deployment direction:** cloud-ready, open-source, modular architecture

## Project structure

```text
katara-community-report/
├── backend/        # FastAPI backend workspace
├── frontend/       # Next.js frontend workspace
├── docs/           # Architecture, roadmap, and deployment docs
├── .github/        # CI workflows
├── CONTRIBUTING.md
├── SECURITY.md
└── LICENSE
```

## Quickstart

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

Backend health check:

```text
GET /health
```

## Project status

This repository is in early MVP and open-source structuring phase. The current focus is documentation, architecture, contributor onboarding, frontend prototype, backend prototype, and deployment readiness.

## Roadmap

### Phase 1 — Foundation

- Public repository structure
- README and documentation
- Open-source license
- Contributor guidelines
- Initial issue backlog
- MVP architecture

### Phase 2 — MVP

- Community report form
- Incident database schema
- Basic admin dashboard
- Map visualization
- CSV/GeoJSON export

### Phase 3 — Field readiness

- Offline-first workflow
- Multilingual support
- SMS/WhatsApp reporting integration
- Verification workflow
- Community champion onboarding materials

### Phase 4 — AI and automation

- AI-assisted report classification
- Automated report summaries
- Maintenance automation
- Documentation assistant
- Issue triage support

## Suggested use cases

- Local flood incident reporting
- Community-based disaster-risk mapping
- NGO field monitoring
- Municipal climate-risk dashboards
- Research datasets for flood vulnerability and adaptation
- Open-source climate-resilience experimentation in Africa

## OpenAI Codex for Open Source use case

If selected, API credits would be used to support:

- AI-assisted code maintenance
- Automated issue triage
- Documentation generation
- Multilingual accessibility
- Report classification experiments
- Contributor workflow automation
- Security and quality review support

## Contributing

Contributions are welcome. Priority areas include documentation, frontend design, geospatial workflows, backend architecture, data modeling, accessibility, and civic-tech field deployment practices.

See `CONTRIBUTING.md` for details.

## License

This project is released under the MIT License. See `LICENSE` for details.

## Maintainer

**AGBOFOATI Abla Ruth**  
Founder and primary maintainer of KATARA Community Report.

GitHub: [RUTHDebout](https://github.com/RUTHDebout)

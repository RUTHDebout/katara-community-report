# Dashboard Module

The dashboard displays community reports, flood risk layers, and operational indicators.

## MVP features

- Map centered on Maritime region, Togo.
- Community report markers.
- Marker color or icon by severity.
- Filters by event type, severity, date, and verification status.
- Popup with safe report information.
- CSV and GeoJSON export buttons.
- Admin verification view.

## Suggested stack

### Simple option

- React
- Leaflet
- OpenStreetMap tiles
- GeoJSON layers

### Advanced option

- React
- Mapbox GL JS or MapLibre
- PostGIS backend
- Layer controls for satellite/risk data

## Public popup fields

Show:

- location name
- event type
- severity
- description
- report date
- verification status

Do not show:

- phone number
- private reporter details
- sensitive images without moderation

## Map layers

1. Community reports.
2. Flood risk zones.
3. Rivers/drainage.
4. Administrative boundaries.
5. Satellite-derived flood extent.

## Future features

- Time slider.
- Heatmap.
- Offline field agent mode.
- Ministry dashboard mode.
- Situation report export.

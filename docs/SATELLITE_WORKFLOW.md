# Satellite Workflow for KATARA

This document defines the first technical workflow for satellite-based flood detection and risk mapping.

## Goal

Use satellite and rainfall datasets to support flood early warning, flood extent mapping, and post-flood damage assessment.

## Priority datasets

### Sentinel-1 SAR

Use for flood extent detection, especially during cloudy/rainy periods.

Potential workflow:

1. Select pre-flood Sentinel-1 image.
2. Select post-rainfall Sentinel-1 image.
3. Apply speckle filtering.
4. Compare backscatter difference.
5. Classify likely flooded pixels.
6. Remove permanent water bodies when possible.
7. Export flood extent as raster or vector.

### Sentinel-2 NDWI

Use for visible water detection when clouds are not blocking the scene.

Formula:

```text
NDWI = (Green - NIR) / (Green + NIR)
```

Use cases:

- Identify standing water.
- Compare water extent over time.
- Support validation of Sentinel-1 flood mask.

### CHIRPS rainfall

Use for rainfall anomalies and event monitoring.

Use cases:

- Detect unusually high rainfall.
- Create rainfall anomaly maps.
- Link rainfall intensity with community reports.

### Other useful layers

- Administrative boundaries.
- Rivers and drainage networks.
- Building footprints.
- Roads.
- Schools, health centers, markets.
- Historical flood reports.

## Google Earth Engine workflow

```text
1. Load area of interest: Maritime region, Togo.
2. Load Sentinel-1 image collection.
3. Filter by date, polarization, orbit, and bounds.
4. Create pre-event and post-event composites.
5. Calculate backscatter difference or ratio.
6. Threshold possible flooded zones.
7. Mask steep slopes, permanent water, and noise.
8. Export GeoTIFF or GeoJSON layer.
9. Overlay community reports.
10. Validate with field reports.
```

## MVP outputs

- Flood risk layer.
- Flood extent layer.
- Report overlay map.
- GeoJSON export.
- Static map for reports and presentations.

## Validation strategy

Use three validation sources:

1. Community reports.
2. Local field champions.
3. Municipal or civil protection observations.

## Research questions

- Which threshold works best for Sentinel-1 flood detection in coastal Togo?
- Can community reports improve satellite flood validation?
- How quickly can KATARA generate useful maps after heavy rainfall?
- Which villages/communes have repeated reports?
- Which areas show high flood exposure but low report coverage?

# Geospatial Module

This module handles geospatial processing for KATARA.

## Responsibilities

- Load community report GeoJSON.
- Validate coordinates.
- Export reports to GeoJSON and CSV.
- Prepare risk layers.
- Integrate Sentinel and rainfall outputs.
- Support PostGIS-ready data structures.

## Planned functions

```text
validate_coordinates(lat, lon)
report_to_geojson(report)
reports_to_feature_collection(reports)
load_sample_reports()
filter_reports_by_bbox(reports, bbox)
export_geojson(reports, path)
export_csv(reports, path)
```

## Coordinate rules

- Use WGS84 / EPSG:4326.
- Store GeoJSON coordinates as `[longitude, latitude]`.
- Validate latitude between -90 and 90.
- Validate longitude between -180 and 180.

## Priority geographic scope

- Country: Togo.
- First pilot: Maritime region.
- Priority areas: Lome, Golfe, Agoe, Baguida, Aneho, Tsevie, coastal and peri-urban flood-prone zones.

## Future integrations

- Google Earth Engine exports.
- Sentinel-1 flood extent polygons.
- CHIRPS rainfall anomaly rasters.
- Building footprints.
- Road exposure analysis.

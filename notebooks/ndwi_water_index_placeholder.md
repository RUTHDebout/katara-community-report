# NDWI Water Index Placeholder

This file defines the future notebook logic for Sentinel-2 NDWI water detection.

## Formula

```text
NDWI = (Green - NIR) / (Green + NIR)
```

## Planned steps

1. Define area of interest.
2. Load Sentinel-2 imagery.
3. Filter by date and cloud cover.
4. Calculate NDWI.
5. Apply water threshold.
6. Compare detected water with reports.
7. Export map layer.

## Limitations

- Clouds can block optical imagery.
- Sentinel-1 SAR is usually better during rainy/cloudy periods.

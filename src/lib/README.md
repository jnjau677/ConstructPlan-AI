# Geoapify Integration

This project now uses **Geoapify** instead of Google Maps for mapping functionality.

## Setup

1. Get your free API key from [Geoapify](https://myprojects.geoapify.com/)
2. Add it to your environment variables:
   ```
   VITE_GEOAPIFY_API_KEY=your_api_key_here
   ```

## Features

The `geoapify.ts` service provides:

- **Geocoding**: Convert addresses to coordinates
- **Reverse Geocoding**: Convert coordinates to addresses  
- **Place Search**: Find nearby places by category
- **Static Maps**: Generate map images
- **Map Tiles**: Get tile URLs for Leaflet/Mapbox integration
- **Routing**: Calculate routes between points (car, bike, walk)

## Usage Example

```typescript
import { geoapifyService } from './lib/geoapify';

// Geocode an address
const results = await geoapifyService.geocode('123 Main St, New York');
console.log(results[0].lat, results[0].lon);

// Reverse geocode
const address = await geoapifyService.reverseGeocode(40.7128, -74.0060);
console.log(address.formatted);

// Search nearby places
const restaurants = await geoapifyService.searchPlaces(
  40.7128, 
  -74.0060, 
  ['catering.restaurant'], 
  1000
);

// Get static map URL
const mapUrl = geoapifyService.getStaticMapUrl(40.7128, -74.0060, 15, 600, 400);

// Get route
const route = await geoapifyService.getRoute(
  40.7128, -74.0060,
  40.7580, -73.9855,
  'walk'
);
```

## Map Styles

Available styles for tiles and static maps:
- `streets` - Standard street map
- `bright` - Bright, colorful style
- `contrast` - High contrast style
- `dark` - Dark theme
- `pastel` - Soft pastel colors
- `osm-bright` - OpenStreetMap bright
- And many more...

See [Geoapify documentation](https://apidocs.geoapify.com/) for complete API reference.

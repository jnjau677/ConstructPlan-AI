/**
 * Geoapify API Service
 * Provides mapping, geocoding, and routing functionality using Geoapify APIs
 * Documentation: https://apidocs.geoapify.com/
 */

const GEOAPIFY_BASE_URL = 'https://api.geoapify.com';

interface GeoapifyConfig {
  apiKey: string;
}

interface GeocodeResult {
  formatted: string;
  lat: number;
  lon: number;
  city?: string;
  country?: string;
  postcode?: string;
  state?: string;
  street?: string;
  housenumber?: string;
}

interface ReverseGeocodeResult extends GeocodeResult {}

interface Place {
  name: string;
  formatted: string;
  lat: number;
  lon: number;
  category?: string;
}

class GeoapifyService {
  private apiKey: string;

  constructor(config: GeoapifyConfig) {
    this.apiKey = config.apiKey;
  }

  /**
   * Forward geocoding - convert address to coordinates
   */
  async geocode(address: string): Promise<GeocodeResult[]> {
    const url = `${GEOAPIFY_BASE_URL}/v1/geocode/search?text=${encodeURIComponent(address)}&apiKey=${this.apiKey}&limit=5`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geoapify API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data.features.map((feature: any) => ({
        formatted: feature.properties.formatted,
        lat: feature.properties.lat,
        lon: feature.properties.lon,
        city: feature.properties.city,
        country: feature.properties.country,
        postcode: feature.properties.postcode,
        state: feature.properties.state,
        street: feature.properties.street,
        housenumber: feature.properties.housenumber,
      }));
    } catch (error) {
      console.error('Geocoding failed:', error);
      throw error;
    }
  }

  /**
   * Reverse geocoding - convert coordinates to address
   */
  async reverseGeocode(lat: number, lon: number): Promise<ReverseGeocodeResult | null> {
    const url = `${GEOAPIFY_BASE_URL}/v1/reverse?lat=${lat}&lon=${lon}&apiKey=${this.apiKey}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geoapify API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (!data.features || data.features.length === 0) {
        return null;
      }
      
      const feature = data.features[0];
      return {
        formatted: feature.properties.formatted,
        lat: feature.properties.lat,
        lon: feature.properties.lon,
        city: feature.properties.city,
        country: feature.properties.country,
        postcode: feature.properties.postcode,
        state: feature.properties.state,
        street: feature.properties.street,
        housenumber: feature.properties.housenumber,
      };
    } catch (error) {
      console.error('Reverse geocoding failed:', error);
      throw error;
    }
  }

  /**
   * Search for places by category
   */
  async searchPlaces(
    lat: number,
    lon: number,
    categories: string[],
    radius: number = 1000,
    limit: number = 10
  ): Promise<Place[]> {
    const url = `${GEOAPIFY_BASE_URL}/v2/places?filter=circle:${lon},${lat},${radius}&categories=${categories.join(',')}&limit=${limit}&apiKey=${this.apiKey}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geoapify API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      return data.features.map((feature: any) => ({
        name: feature.properties.name,
        formatted: feature.properties.formatted,
        lat: feature.properties.lat,
        lon: feature.properties.lon,
        category: feature.properties.categories?.[0],
      }));
    } catch (error) {
      console.error('Place search failed:', error);
      throw error;
    }
  }

  /**
   * Get static map image URL
   */
  getStaticMapUrl(
    lat: number,
    lon: number,
    zoom: number = 15,
    width: number = 600,
    height: number = 400
  ): string {
    return `${GEOAPIFY_BASE_URL}/v1/staticmap?center=${lon},${lat}&zoom=${zoom}&width=${width}&height=${height}&apiKey=${this.apiKey}`;
  }

  /**
   * Generate map tile URL for use with mapping libraries like Leaflet
   */
  getTileUrl(x: number, y: number, z: number, style: string = 'streets'): string {
    return `${GEOAPIFY_BASE_URL}/v1/raster/tiles/${style}/{z}/{x}/{y}.png?apiKey=${this.apiKey}`;
  }

  /**
   * Get routing directions between two points
   */
  async getRoute(
    startLat: number,
    startLon: number,
    endLat: number,
    endLon: number,
    mode: 'car' | 'bike' | 'walk' = 'car'
  ): Promise<{ distance: number; duration: number; geometry: any }> {
    const url = `${GEOAPIFY_BASE_URL}/v1/routing?waypoints=${startLat},${startLon}|${endLat},${endLon}&mode=${mode}&apiKey=${this.apiKey}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Geoapify API error: ${response.status}`);
      }
      
      const data = await response.json();
      
      const route = data.features[0];
      return {
        distance: route.properties.distance,
        duration: route.properties.time,
        geometry: route.geometry,
      };
    } catch (error) {
      console.error('Routing failed:', error);
      throw error;
    }
  }
}

// Create singleton instance with environment variable
export const geoapifyService = new GeoapifyService({
  apiKey: import.meta.env.VITE_GEOAPIFY_API_KEY || '',
});

export default GeoapifyService;

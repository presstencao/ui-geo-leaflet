//@ts-check

export interface Coordinates {
  lat: number;
  lng: number;
}

export default function getCoordinates(lat: number, lng: number): Coordinates {
  return {
    lat,
    lng,
  };
}
export function getLat(coordinates: Coordinates): number {
  return coordinates.lat;
}

export function getLng(coordinates: Coordinates): number {
  return coordinates.lng;
}
export function getLatLng(coordinates: Coordinates): [number, number] {
  return [coordinates.lat, coordinates.lng];
}

export function getLatLngString(coordinates: Coordinates): string {
  return `${coordinates.lat},${coordinates.lng}`;
}
export function getLatLngStringFromArray(
  coordinates: [number, number]
): string {
  return `${coordinates[0]},${coordinates[1]}`;
}

export function getLatLngStringFromString(coordinates: string): string {
  return coordinates;
}
export function getGoogleMapUrlCoordinates(
  url: string
): { lat: string; long: string } {
  if (url) {
    const coordinates = {
      lat: url.split('@')[1].split(',')[0],
      long: url.split('@')[1].split(',')[1],
    };
    return coordinates;
  } else {
    throw new Error('Invalid URL');
  }
}

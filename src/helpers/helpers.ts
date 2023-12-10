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

export function getGoogleMapUrlCoordinates(url: string): string {
  const coordinates = {
    lat: url && url.split('@')[1].split(',')[0],
    long: url && url.split('@')[1].split(',')[1],
  };

  return `Lat: ${coordinates.lat}, long: ${coordinates.long}`;
}

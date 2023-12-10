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
export function getGoogleMapUrlCordinates(url: string): string {
  // https://www.google.com/maps/place/Rua+Americana,+142+-+Conj.+Hab.+Pres.+Castelo+Branco,+Carapicu%C3%ADba+-+SP,+06327-320/@-23.5348058,-46.8318442,15z/data=!4m6!3m5!1s0x94cefe2b3c6e1571:0xb2d32809856b3831!8m2!3d-23.5348058!4d-46.8215443!16s%2Fg%2F11c4c504wq?authuser=0&entry=ttu
  return (
    url &&
    url.replace(
      '{lat},{lng}',
      getLatLngString(
        getCoordinates(
          parseFloat(url.split('@')[1].split(',')[0]),
          parseFloat(url.split('@')[1].split(',')[1])
        )
      )
    )
  );
}

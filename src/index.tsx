import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Coordinates, getGoogleMapUrlCoordinates as getGoogleMapUrlCoordinates } from './helpers/helpers';
import 'leaflet/dist/leaflet.css';



// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const GetGoogleMapUrlCoordinate = (props:{url:string}):string => {
  if(props.url === undefined){
    return "No url"
  }
  const coordinates = getGoogleMapUrlCoordinates(props.url);
return `${coordinates}`
}


export function GetPointMap(props:{coordinates: Coordinates}) {

  return (
    <MapContainer center={[props.coordinates.lat,props.coordinates.lng]} zoom={13} scrollWheelZoom={true} style={{width:'100%', height:'100%'}}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[props.coordinates.lat,props.coordinates.lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
  );
}
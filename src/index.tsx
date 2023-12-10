import * as React from 'react';
import { getGoogleMapUrlCoordinates as getGoogleMapUrlCoordinates } from './helpers/helpers';


// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const GetGoogleMapUrlCoordinate = (props:{url:string}):string => {
  const coordinates = getGoogleMapUrlCoordinates(props.url);

  return `lat:${coordinates.lat} long:${coordinates.long}`
}
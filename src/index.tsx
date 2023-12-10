import * as React from 'react';
import { getGoogleMapUrlCordinates } from './helpers/helpers';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const GetGoogleMapUrlCoordinate = (url:string) =>{
  const coordinates = getGoogleMapUrlCordinates(url);
  return <span>{coordinates}</span>
}
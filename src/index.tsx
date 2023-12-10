import * as React from 'react';
import { getGoogleMapUrlCordinates } from './helpers/helpers';

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};

export const GetGoogleMapUrlCoordinate = () =>{
  const coordinates = getGoogleMapUrlCordinates('https://www.google.com/maps/place/Rua+Americana,+142+-+Conj.+Hab.+Pres.+Castelo+Branco,+Carapicu%C3%ADba+-+SP,+06327-320/@-23.5348058,-46.8318442,15z/data=!4m6!3m5!1s0x94cefe2b3c6e1571:0xb2d32809856b3831!8m2!3d-23.5348058!4d-46.8215443!16s%2Fg%2F11c4c504wq?authuser=0&entry=ttu');

  return <span>{coordinates}</span>
}
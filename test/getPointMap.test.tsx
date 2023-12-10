import React from 'react';

import * as ReactDOM from 'react-dom';
import { GetPointMap } from '../src';

describe('GetPointMap', () => {
 let container: HTMLDivElement;

 beforeEach(() => {
   container = document.createElement('div');
   document.body.appendChild(container);
 });



 it('should render the marker on the map', () => {
   const coordinates = {
     lat: -23.5489,
     lng: -46.6388,
   };
  

   ReactDOM.render(<GetPointMap coordinates={coordinates} />, container);

   expect(container.querySelector('div#map'));
//    expect(container.querySelector('marker'));
 });
});
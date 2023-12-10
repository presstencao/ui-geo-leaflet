import * as React from 'react';
import * as ReactDOM from 'react-dom';
import expect from 'expect';
import { GetGoogleMapUrlCoordinate } from "../src";
describe('it',() => {
    it('renders learn react terxt', () => {
      const div = document.createElement('div');
      ReactDOM.render(<GetGoogleMapUrlCoordinate url='https://www.google.com/maps/place/Rua+Americana,+142+-+Conj.+Hab.+Pres.+Castelo+Branco,+Carapicuíba+-+SP,+06327-320/@-23.5348058,-46.8318442,15z/data=!4m6!3m5!1s0x94cefe2b3c6e1571:0xb2d32809856b3831!8m2!3d-23.5348058!4d-46.8215443!16s%2Fg%2F11c4c504wq?authuser=0&entry=ttu' />,div);
      expect(div.innerHTML).toContain('lat');
    })
   })
describe('it', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<GetGoogleMapUrlCoordinate url='https://www.google.com/maps/place/Rua+Americana,+142+-+Conj.+Hab.+Pres.+Castelo+Branco,+Carapicu%C3%ADba+-+SP,+06327-320/@-23.5348058,-46.8318442,15z/data=!4m6!3m5!1s0x94cefe2b3c6e1571:0xb2d32809856b3831!8m2!3d-23.5348058!4d-46.8215443!16s%2Fg%2F11c4c504wq?authuser=0&entry=ttu' />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });
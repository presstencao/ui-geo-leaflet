import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { GetGoogleMapUrlCoordinate, Thing } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Thing />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<GetGoogleMapUrlCoordinate />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

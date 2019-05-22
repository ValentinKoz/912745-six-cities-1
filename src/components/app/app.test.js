import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

const mocks = {
  offers: [
    {
      price: {
        value: 0,
        text: `night`,
      },
      rating: 0,
      name: `AAAA`,
      type: `Apartment`,
      coordinates: [52.369553943508, 4.85309666406198],
    },
    {
      price: {
        value: 0,
        text: `night`,
      },
      rating: 0,
      name: `AAAA`,
      type: `Apartment`,
      coordinates: [52.369553943508, 4.85309666406198],
    },
    {
      price: {
        value: 0,
        text: `night`,
      },
      rating: 0,
      name: `AAAA`,
      type: `Apartment`,
      coordinates: [52.369553943508, 4.85309666406198],
    }
  ],
};

it(`renders correctly`, () => {
  const {offers} = mocks;
  const tree = renderer
    .create(<App
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

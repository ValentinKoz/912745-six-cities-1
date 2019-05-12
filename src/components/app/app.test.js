import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

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
    },
    {
      price: {
        value: 0,
        text: `night`,
      },
      rating: 0,
      name: `AAAA`,
      type: `Apartment`,
    },
    {
      price: {
        value: 0,
        text: `night`,
      },
      rating: 0,
      name: `AAAA`,
      type: `Apartment`,
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
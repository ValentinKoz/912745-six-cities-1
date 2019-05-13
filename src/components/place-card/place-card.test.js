import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = {
  offer: {
    price: {
      value: 0,
      text: `night`,
    },
    rating: 0,
    name: `AAAA`,
    type: `Apartment`,
  }
};

it(`renders correctly`, () => {
  const {offer} = mock;
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

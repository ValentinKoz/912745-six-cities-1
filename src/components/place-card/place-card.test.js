import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<PlaceCard
      tiplaceName={[``]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

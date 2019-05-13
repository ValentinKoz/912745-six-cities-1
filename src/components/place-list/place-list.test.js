import React from "react";
import renderer from "react-test-renderer";
import PlaceList from "./place-list.jsx";

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
    .create(<PlaceList
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

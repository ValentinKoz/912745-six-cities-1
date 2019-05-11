import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`PlaceCard correctly handles click`, () => {
  const {offer} = mock;
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    offer={offer}
    onClick={clickHandler}
  />);
  const buttonCard = placeCard.find(`div > a`);
  buttonCard.simulate(`click`, {preventDefault() { }});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

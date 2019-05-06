import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

it(`PlaceCard correctly handles click`, () => {
  const clickHandler = jest.fn();
  const placeCard = shallow(<PlaceCard
    placeName={``}
    onClick={clickHandler}
  />);
  const buttonCard = placeCard.find(`button`);
  buttonCard.simulate(`click`, {preventDefault() {}});

  expect(clickHandler).toHaveBeenCalledTimes(1);
});

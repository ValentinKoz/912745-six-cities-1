import React from 'react';
import renderer from 'react-test-renderer';
import Map from './map.jsx';

const div = global.document.createElement(`div`);
div.setAttribute(`id`, `map`);
global.document.body.appendChild(div);

it(`renders Map correctly`, () => {
  const tree = renderer
    .create(<Map
      offers={[]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

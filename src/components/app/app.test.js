import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<App
      names={[``]}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

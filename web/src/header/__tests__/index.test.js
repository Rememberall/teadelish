import React from 'react';
import renderer from 'react-test-renderer';

import Header from '../index';

it('should not change', () => {
  const tree = renderer.create(<Header />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import Footer from '../index';

it('should not change', () => {
  const tree = renderer.create(<Footer />).toJSON();
  expect(tree).toMatchSnapshot();
});

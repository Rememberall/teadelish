import React from 'react';
import renderer from 'react-test-renderer';

import LatestCheckins from '../latest';

it('should not change', () => {
  const tree = renderer.create(<LatestCheckins />).toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';

import Item from '../index';

it('should not change', () => {
  const tree = renderer
    .create(
      <Item
        beverage={{
          brand: 'Illy',
          name: 'Espresso'
        }}
        rating={5}
        comment="A rather short comment"
      />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

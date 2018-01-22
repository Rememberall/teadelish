import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Footer from '../index';

it('should not change', () => {
  const component = (
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

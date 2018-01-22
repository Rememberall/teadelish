// @flow

import React from 'react';
import renderer from 'react-test-renderer';

import Star, { getFill } from '../index';

describe('fill color', () => {
  it('should be none when there is no selected rating', () => {
    expect(getFill(3, undefined)).toBe('none');
  });

  it('should be gold when the selected rating is > the rating', () => {
    expect(getFill(3, 4)).toBe('gold');
  });

  it('should be gold when the selected rating is = the rating', () => {
    expect(getFill(4, 4)).toBe('gold');
  });

  it('should be lightgrey when the selected rating is < the rating', () => {
    expect(getFill(4, 3)).toBe('lightgrey');
  });
});

describe('snapshots', () => {
  it('should not change', () => {
    [undefined, null, 1, 2, 3, 4, 5].forEach(selectedRating => {
      const tree = renderer
        .create(<Star onSelect={() => {}} selectedRating={selectedRating} />)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });
});

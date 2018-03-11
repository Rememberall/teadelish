// @flow

import { getFill } from '../single-star';

describe('fill color', () => {
  it('should be none when there is no selected rating', () => {
    expect(getFill(false, false)).toBe('none');
  });

  it('should be gold when the selected rating is > the rating', () => {
    expect(getFill(true, true)).toBe('gold');
  });

  it('should be lightgrey when the selected rating is < the rating', () => {
    expect(getFill(true, false)).toBe('lightgrey');
  });
});

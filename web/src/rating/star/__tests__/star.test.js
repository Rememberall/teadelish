// @flow

import { getFill } from '../index';

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

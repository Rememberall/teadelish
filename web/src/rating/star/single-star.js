// @flow

import * as React from 'react';

export function getFill(active: boolean, checked: boolean) {
  if (!active) {
    return 'none';
  }

  if (checked) {
    return 'gold';
  }

  return 'lightgrey';
}

type SingleStarProps = {
  active: boolean,
  checked: boolean
};

const SingleStar = ({ active, checked }: SingleStarProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45">
    <title>Five Pointed Star</title>
    <path
      fill={getFill(active, checked)}
      stroke="black"
      d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
    />
    <div xmlns="http://www.w3.org/1999/xhtml" />
  </svg>
);

export default SingleStar;

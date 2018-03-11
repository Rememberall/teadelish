// @flow

import * as React from 'react';

import SingleStar from './single-star';

type StarRatingProps = {
  selectedRating?: number,
  wrapStar: (value: number, component: React.Node) => React.Node
};

const StarRating = ({ selectedRating, wrapStar }: StarRatingProps) =>
  [1, 2, 3, 4, 5].map(starValue =>
    wrapStar(
      starValue,
      <SingleStar
        active={selectedRating !== undefined}
        checked={selectedRating !== undefined && starValue <= selectedRating}
      />
    )
  );

StarRating.defaultProps = {
  wrapStar: (value, component) => component
};

export default StarRating;

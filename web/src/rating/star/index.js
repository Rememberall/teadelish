// @flow

import { Field } from 'react-final-form';
import * as React from 'react';

import './star.css';

export function getFill(rating: number, selectedRating: ?number): string {
  if (selectedRating == null) {
    return 'none';
  }

  if (rating <= selectedRating) {
    return 'gold';
  }

  return 'lightgrey';
}

const StarRating = ({ name, change }: React.ElementProps<Field>) => (
  <div className="star-rating">
    <button
      className="star-rating-clear"
      onClick={() => change(name, undefined)}
    >
      Clear
    </button>
    {[1, 2, 3, 4, 5].map(rating => (
      <Field key={rating} name={name} value={rating}>
        {({ input }) => (
          <label>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="45">
              <title>Five Pointed Star</title>
              <path
                fill={getFill(rating, input.value)}
                stroke="black"
                d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z"
              />
              <div xmlns="http://www.w3.org/1999/xhtml" />
            </svg>
            <input {...input} value={rating} type="radio" />
          </label>
        )}
      </Field>
    ))}
  </div>
);

export default StarRating;

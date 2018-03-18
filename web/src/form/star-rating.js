// @flow

import * as React from 'react';
import StarRating from '../rating/star';

import './input.css';

type StarRatingInputProps = React.ElementProps<typeof StarRating> & {
  name: string,
  label: string
};

const StarRatingInput = ({ name, label, change }: StarRatingInputProps) => (
  <div className="input">
    <label htmlFor={name}>Rating (0–5)</label>
    <div className="input__field">
      <StarRating name={name} change={change} />
    </div>
  </div>
);

export default StarRatingInput;

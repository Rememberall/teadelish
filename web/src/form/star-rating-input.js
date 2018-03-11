// @flow

import * as React from 'react';
import { Field, FormSpy } from 'react-final-form';

import StarRating from '../rating/star';

import './input.css';

type StarRatingInputProps = React.ElementProps<typeof Field> & {
  name: string,
  label: string
};

const StarRatingInput = ({ name, label }: StarRatingInputProps) => (
  <div className="input input--star-rating">
    <span className="input__label">{label}</span>
    <div className="input__field">
      <FormSpy
        subscription={{ values: true }}
        render={({ change, values: { starRating } }) => (
          <React.Fragment>
            <button
              type="button"
              className="star-rating__clear"
              onClick={() => change(name, undefined)}
            >
              Clear
            </button>
            <StarRating
              selectedRating={starRating}
              wrapStar={(starValue, starComponent) => (
                <Field
                  key={starValue}
                  name={name}
                  value={starValue}
                  type="radio"
                  render={({ input }) => (
                    <label>
                      {starComponent}
                      <input {...input} type="radio" />
                    </label>
                  )}
                />
              )}
            />
          </React.Fragment>
        )}
      />
    </div>
  </div>
);

export default StarRatingInput;

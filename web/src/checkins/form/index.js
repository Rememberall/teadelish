// @flow

import React, { Component } from 'react';

import StarRating from '../../rating/star';
import './form.css';

type State = {
  rating: ?number
};

class CheckinForm extends Component<void, State> {
  constructor() {
    super();
    this.state = {
      rating: null
    };
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <h1>Checkin!</h1>
        <div>
          <label htmlFor="brand">Brand</label>
          <input id="brand" type="text" disabled />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" disabled />
        </div>
        <div>
          <label htmlFor="rating">Rating (0–5)</label>
          <StarRating
            onSelect={(rating: ?number) => this.setState({ rating })}
            selectedRating={this.state.rating}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <textarea id="comment" />
        </div>
        <div>
          <button>Checkin</button>
        </div>
      </form>
    );
  }
}

export default CheckinForm;

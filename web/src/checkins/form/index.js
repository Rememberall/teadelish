// @flow

import React, { Component } from 'react';

import type { Checkin } from '../feed/item/types';
import StarRating from '../../rating/star';
import './form.css';

type Props = {
  history: {
    push: (location: string | { pathname: string, state: {} }) => void
  }
};

type State = {
  brand: string,
  name: string,
  rating: ?number,
  comment: string
};

class CheckinForm extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      brand: '',
      name: '',
      rating: null,
      comment: ''
    };
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();

          const { brand, name, rating, comment } = this.state;
          const checkin: Checkin = {
            beverage: { brand, name },
            rating,
            comment
          };

          this.props.history.push({
            pathname: '/checkin/confirmation',
            state: { checkin }
          });
        }}
      >
        <h1>Checkin!</h1>
        <div>
          <label htmlFor="brand">Brand</label>
          <input
            id="brand"
            type="text"
            onChange={e => this.setState({ brand: e.target.value })}
            disabled
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            onChange={e => this.setState({ name: e.target.value })}
            disabled
          />
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
          <textarea
            id="comment"
            onChange={e => this.setState({ comment: e.target.value })}
          />
        </div>
        <div>
          <button>Checkin</button>
        </div>
      </form>
    );
  }
}

export default CheckinForm;

import React from 'react';

import './form.css';

const CheckinForm = () => (
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
      <input id="rating" type="number" min="0" max="5" />
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

export default CheckinForm;

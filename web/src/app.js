// @flow

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import latestCheckins from './mock/latest-checkins';
import Header from './header';
import Footer from './footer';
import CheckinFeed from './checkins/feed';
import './app.css';

const LatestCheckins = () => (
  <Fragment>
    <h1>Latest checkins</h1>
    <CheckinFeed checkins={latestCheckins} />
  </Fragment>
);

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

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <section className="content">
        <Switch>
          <Route exact path="/" component={LatestCheckins} />
          <Route exact path="/checkin" component={CheckinForm} />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default App;

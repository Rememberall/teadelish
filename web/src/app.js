// @flow

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import LatestCheckins from './checkins/latest';
import CheckinForm from './checkins/form';
import CheckinConfirmation from './checkins/confirmation';
import './app.css';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Header />
      <section className="content">
        <Switch>
          <Route exact path="/" component={LatestCheckins} />
          <Route exact path="/checkin" component={CheckinForm} />
          <Route
            exact
            path="/checkin/confirmation"
            render={({ location }) => (
              <CheckinConfirmation checkin={location.state.checkin} />
            )}
          />
        </Switch>
      </section>
      <Footer />
    </Fragment>
  </BrowserRouter>
);

export default App;

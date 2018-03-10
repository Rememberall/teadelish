// @flow

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
import LatestCheckins from './checkins/latest';
import CheckinForm from './checkins/form';
import './app.css';

import type { Checkin } from './checkins/feed/item/types';
import mockLatestCheckins from './mock/latest-checkins';

type AppState = {
  latestCheckins: Array<Checkin>
};

export default class App extends React.PureComponent<void, AppState> {
  state = {
    latestCheckins: mockLatestCheckins
  };

  render() {
    const { latestCheckins } = this.state;
    return (
      <BrowserRouter>
        <Fragment>
          <Header />
          <section className="content">
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <LatestCheckins latestCheckins={latestCheckins} />
                )}
              />
              <Route
                exact
                path="/checkin"
                render={() => (
                  <CheckinForm
                    handleNewCheckin={checkin =>
                      this.setState({
                        latestCheckins: [checkin, ...this.state.latestCheckins]
                      })
                    }
                  />
                )}
              />
            </Switch>
          </section>
          <Footer />
        </Fragment>
      </BrowserRouter>
    );
  }
}

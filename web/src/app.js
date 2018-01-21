import React, { Fragment } from 'react';
import latestCheckins from './mock/latest-checkins';
import Header from './header';
import Footer from './footer';
import CheckinFeed from './checkins/feed';
import './app.css';

const App = () => (
  <Fragment>
    <Header />
    <section className="content">
      <h1>Latest checkins</h1>
      <CheckinFeed checkins={latestCheckins} />
    </section>
    <Footer />
  </Fragment>
);

export default App;

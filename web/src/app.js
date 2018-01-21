import React, { Fragment } from 'react';
import Header from './header';
import Footer from './footer';
import LatestCheckins from './checkins/latest';
import './app.css';

const App = () => (
  <Fragment>
    <Header />
    <section className="content">
      <LatestCheckins />
    </section>
    <Footer />
  </Fragment>
);

export default App;

// @flow

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import InputGroup from './blocks/input/group';
import TextInput from './blocks/input/text';
import Header from './header';
import Footer from './footer';
import LatestCheckins from './checkins/latest';
import CheckinForm from './checkins/form';
import './app.css';

import type { InputProps } from './blocks/input/types';

const TextareaInput = ({ id, onChange, onFocus, onBlur }: InputProps) => (
  <textarea
    id={id}
    className="input-group--input"
    onChange={e => onChange(e.target.value)}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

const App = () => (
  <BrowserRouter>
    <Fragment>
      {/* <Header /> */}
      <div style={{ width: '512px' }}>
        <InputGroup
          id="hello"
          label="What's up JdadjioasdjiosajdiosajdoiasjdioasjiodJ:DSADIOSJDIO:sjdioajiodjsaidjoiajdoijdoiajsjdioas"
          onChange={newValue => {
            console.log(newValue);
          }}
        >
          {TextInput}
        </InputGroup>
        <InputGroup id="sup" label="banana" onChange={console.log}>
          {TextareaInput}
        </InputGroup>
      </div>
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

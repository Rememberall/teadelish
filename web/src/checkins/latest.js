import React, { Fragment } from 'react';

import latestCheckins from '../mock/latest-checkins';
import CheckinFeed from './feed';

const LatestCheckins = () => (
  <Fragment>
    <h1>Latest checkins</h1>
    <CheckinFeed checkins={latestCheckins} />
  </Fragment>
);

export default LatestCheckins;

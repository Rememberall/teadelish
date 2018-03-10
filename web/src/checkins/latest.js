// @flow

import React, { Fragment } from 'react';

import CheckinFeed from './feed';
import { type Checkin } from './feed/item/types';

type LatestCheckinsProps = {
  latestCheckins: Array<Checkin>
};

const LatestCheckins = ({ latestCheckins }: LatestCheckinsProps) => (
  <Fragment>
    {console.log(latestCheckins)}
    <h1>Latest checkins</h1>
    <CheckinFeed checkins={latestCheckins} />
  </Fragment>
);

export default LatestCheckins;

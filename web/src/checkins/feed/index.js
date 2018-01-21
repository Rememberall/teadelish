// @flow

import React from 'react';

import type { Checkin } from './item/types';
import CheckinFeedItem from './item';
import './feed.css';

type Props = {
  checkins: Checkin[]
};

const CheckinFeed = ({ checkins }: Props) => (
  <ul className="checkin-feed">
    {checkins.map(checkin => (
      <CheckinFeedItem key={checkin.beverage.name} {...checkin} />
    ))}
  </ul>
);

export default CheckinFeed;

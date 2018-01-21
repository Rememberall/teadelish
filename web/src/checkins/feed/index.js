import React from 'react';
import PropTypes from 'prop-types';

import Item from './item';
import itemPropTypes from './item/prop-types';
import './feed.css';

const CheckinFeed = ({ checkins }) => (
  <ul className="checkin-feed">
    {checkins.map(checkin => <Item key={checkin.beverage.name} {...checkin} />)}
  </ul>
);

CheckinFeed.propTypes = {
  checkins: PropTypes.arrayOf(itemPropTypes).isRequired
};

export default CheckinFeed;

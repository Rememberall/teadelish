// @flow

import React from 'react';

import type { Checkin } from './types';
import StarRating from '../../../rating/star';
import './item.css';

const CheckinFeedItem = ({ beverage, rating, comment }: Checkin) => (
  <li className="checkin-feed-item">
    <img
      src="http://www.swedishfoodshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/russian_earl_grey_20-pack_40g.jpg"
      alt=""
    />
    <div>
      <h1>
        {beverage.brand} {beverage.name}
      </h1>
      <StarRating selectedRating={rating} />
      <p>{comment}</p>
    </div>
  </li>
);

export default CheckinFeedItem;

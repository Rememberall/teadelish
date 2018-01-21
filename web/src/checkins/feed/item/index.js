import React from 'react';

import feedItemPropTypes from './prop-types';
import './item.css';

const Item = ({ beverage, rating, comment }) => (
  <li className="checkin-feed-item">
    <img
      src="http://www.swedishfoodshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/russian_earl_grey_20-pack_40g.jpg"
      alt=""
    />
    <div>
      <h1>
        {beverage.brand} {beverage.name}
      </h1>
      <p>{rating} / 5</p>
      <p>{comment}</p>
    </div>
  </li>
);

Item.propTypes = feedItemPropTypes;

export default Item;

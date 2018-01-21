import React, { Fragment } from 'react';

import latestCheckins from '../../mock/latest-checkins';

const LatestCheckins = () => (
  <Fragment>
    <h1>Latest checkins</h1>
    <ul className="checkin-feed">
      {latestCheckins.map(checkin => (
        <li key={checkin.beverage.name} className="checkin">
          <img
            src="http://www.swedishfoodshop.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/r/u/russian_earl_grey_20-pack_40g.jpg"
            alt=""
          />
          <div>
            <h1>
              {checkin.beverage.brand} {checkin.beverage.name}
            </h1>
            <p>{checkin.rating} / 5</p>
            <p>{checkin.comment}</p>
          </div>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default LatestCheckins;

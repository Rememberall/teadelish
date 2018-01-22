// @flow

import React, { Fragment } from 'react';

import type { Checkin } from '../feed/item/types';

type Props = {
  checkin: Checkin
};

const CheckinConfirmation = ({ checkin }: Props) => (
  <Fragment>
    <h1>Well done!</h1>
    <p>
      You checked in {checkin.beverage.name} by {checkin.beverage.brand} with a
      rating of {checkin.rating} stars and this comment: &quot;{checkin.comment}&quot;.
    </p>
  </Fragment>
);

export default CheckinConfirmation;

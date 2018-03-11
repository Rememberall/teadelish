// @flow

import { storiesOf } from '@storybook/react';
import * as React from 'react';
import SingleStar from './single-star';
import StarRating from './index';

storiesOf('star rating', module)
  .add('default', () => <StarRating />)
  .add('with selected value', () => <StarRating selectedRating={3} />)
  .add('single stars', () => (
    <React.Fragment>
      <SingleStar active={false} checked={false} />
      <SingleStar active checked={false} />
      <SingleStar active checked />
    </React.Fragment>
  ));

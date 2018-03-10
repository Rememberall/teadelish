// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';

import LatestCheckins from './latest';
import mockLatestCheckins from '../mock/latest-checkins';

storiesOf('LatestCheckins', module)
  .add('with no checkins', () => <LatestCheckins latestCheckins={[]} />)
  .add('with multiple checkins', () => (
    <LatestCheckins latestCheckins={mockLatestCheckins} />
  ));

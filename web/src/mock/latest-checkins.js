// @flow

import type { Checkin } from '../checkins/feed/item/types';

const latestCheckins: Checkin[] = [
  {
    beverage: {
      brand: 'Lipton',
      name: 'Russian Earl Grey'
    },
    comment: 'SOOOO GOOD',
    rating: 5
  },
  {
    beverage: {
      brand: 'Twinings',
      name: 'Darjeeling'
    },
    comment:
      "A really long comment about how almost-perfect this tea is but not quite because I think it was a little too bitter and it didn't pair very well with milk because it's not quite strong enough",
    rating: 4
  },
  {
    beverage: {
      brand: 'Fortnum & Mason',
      name: 'Smokey Earl Grey'
    },
    comment: 'A bit too much smoke for us',
    rating: 2
  }
];

export default latestCheckins;

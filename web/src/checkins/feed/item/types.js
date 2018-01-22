// @flow

export type Beverage = {
  brand: string,
  name: string
};

export type Checkin = {
  beverage: Beverage,
  rating: ?number,
  comment: string
};

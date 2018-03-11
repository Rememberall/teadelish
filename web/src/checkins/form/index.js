// @flow

import React from 'react';
import { Form, FormSpy } from 'react-final-form';

import { Input, Textarea, StarRatingInput, SubmitButton } from '../../form';
import { type Checkin } from '../feed/item/types';

type CheckinFormProps = {
  handleNewCheckin: (newCheckin: Checkin) => void
};

const CheckinForm = ({ handleNewCheckin }: CheckinFormProps) => (
  <Form
    onSubmit={({ brand, name, rating, comment }) => {
      const beverage = { brand, name };

      const newCheckin = {
        beverage,
        rating,
        comment
      };

      handleNewCheckin(newCheckin);
    }}
  >
    {({ handleSubmit, reset, change }) => (
      <form
        onSubmit={e => {
          handleSubmit(e);
          reset();
        }}
      >
        <h1>Checkin!</h1>
        <Input name="brand" label="Brand" required />
        <FormSpy
          subscription={{ values: true }}
          render={({ values: { brand } }) => (
            <Input
              name="name"
              label="Name"
              required
              disabled={brand === undefined}
            />
          )}
        />
        <StarRatingInput name="rating" label="Rating (0–5)" change={change} />
        <Textarea name="comment" label="Comment" />
        <SubmitButton>Checkin</SubmitButton>
      </form>
    )}
  </Form>
);

export default CheckinForm;

// @flow

import React from 'react';
import { Form } from 'react-final-form';

import { Input, Textarea, StarRating, SubmitButton } from '../../form';

const CheckinForm = () => (
  <Form onSubmit={console.log}>
    {({ handleSubmit, change }) => (
      <form onSubmit={handleSubmit}>
        <h1>Checkin!</h1>
        <Input name="brand" label="Brand" />
        <Input name="name" label="Name" disabled />
        <StarRating name="rating" label="Rating (0–5)" change={change} />
        <Textarea name="comment" label="Comment" />
        <SubmitButton>Checkin</SubmitButton>
      </form>
    )}
  </Form>
);

export default CheckinForm;

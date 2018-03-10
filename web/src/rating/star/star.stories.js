import { Form } from 'react-final-form';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';
import StarRating from './index';

storiesOf('star rating', module)
  .add('simple', () => (
    <Form onSubmit={action('onSubmit')}>
      {({ handleSubmit, change }) => (
        <form onSubmit={handleSubmit}>
          <StarRating name="rating" change={change} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  ))
  .add('with initial value', () => (
    <Form initialValues={{ rating: 3 }} onSubmit={action('onSubmit')}>
      {({ handleSubmit, change }) => (
        <form onSubmit={handleSubmit}>
          <StarRating name="rating" change={change} />
          <button type="submit">Submit</button>
        </form>
      )}
    </Form>
  ));

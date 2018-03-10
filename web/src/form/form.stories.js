import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Form } from 'react-final-form';
import { Input, Textarea, StarRating, SubmitButton } from './index';

storiesOf('Form', module)
  .add('all components', () => (
    <Form onSubmit={action('onSubmit')}>
      {({ handleSubmit, change }) => (
        <form onSubmit={handleSubmit}>
          <Input name="input" label="Standard input" />
          <Textarea name="textarea" label="Standard textarea" />
          <StarRating name="starRating" label="Star rating" change={change} />
          <SubmitButton>Submit button</SubmitButton>
        </form>
      )}
    </Form>
  ))
  .add('all components with initial values', () => (
    <Form
      initialValues={{
        input: 'Hello, input',
        textarea: 'Hello, textarea',
        starRating: 3
      }}
      onSubmit={action('onSubmit')}
    >
      {({ handleSubmit, change }) => (
        <form onSubmit={handleSubmit}>
          <Input name="input" label="Standard input" />
          <Textarea name="textarea" label="Standard textarea" />
          <StarRating name="starRating" label="Star rating" change={change} />
          <SubmitButton>Submit button</SubmitButton>
        </form>
      )}
    </Form>
  ));

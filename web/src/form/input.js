// @flow
import * as React from 'react';
import { Field } from 'react-final-form';

type RequiredIndicatorProps = {
  required: boolean
};

const RequiredIndicator = ({ required }: RequiredIndicatorProps) => {
  if (!required) {
    return null;
  }

  return <span style={{ color: 'red' }}>*</span>;
};

type InputProps = {
  name: string,
  label: string,
  required: boolean,
  disabled: boolean
};

const Input = ({ name, label, required, disabled }: InputProps) => (
  <div className="input">
    <label htmlFor="brand">
      {label}
      <RequiredIndicator required={required} />
    </label>
    <Field
      id={name}
      name={name}
      component="input"
      required={required}
      disabled={disabled}
    />
  </div>
);

Input.defaultProps = {
  required: false,
  disabled: false
};

export default Input;

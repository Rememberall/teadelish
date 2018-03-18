// @flow
import * as React from 'react';
import { Field } from 'react-final-form';

type InputProps = {
  name: string,
  label: string,
  disabled?: boolean
};

const Input = ({ name, label, disabled }: InputProps) => (
  <div className="input">
    <label htmlFor="brand">{label}</label>
    <Field id={name} name={name} component="input" disabled={disabled} />
  </div>
);

Input.defaultProps = {
  disabled: false
};

export default Input;

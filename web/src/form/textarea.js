// @flow

import * as React from 'react';
import { Field } from 'react-final-form';

import './input.css';

type TextareaProps = {
  name: string,
  label: string,
  disabled?: boolean
};

const Textarea = ({ name, label, disabled }: TextareaProps) => (
  <div className="input input--textarea">
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} disabled={disabled} component="textarea" />
  </div>
);

Textarea.defaultProps = {
  disabled: false
};

export default Textarea;

// @flow

import React from 'react';

import type { InputCallbacks } from '../types';

import './text.css';

type Props = {
  id: string,
  ...InputCallbacks
};

const TextInput = ({ id, onChange, onFocus, onBlur }: Props) => (
  <input
    id={id}
    className="input-group--input"
    onChange={e => onChange(e.target.value)}
    onFocus={onFocus}
    onBlur={onBlur}
  />
);

export default TextInput;

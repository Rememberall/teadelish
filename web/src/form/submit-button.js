// @flow

import * as React from 'react';

import './submit-button.css';

type SubmitButtonProps = {
  children: React.Node
};

const SubmitButton = ({ children }: SubmitButtonProps) => (
  <button className="button button--submit">{children}</button>
);

export default SubmitButton;

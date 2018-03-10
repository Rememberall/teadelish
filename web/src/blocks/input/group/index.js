// @flow

import React, { Component } from 'react';
import classnames from 'classnames';

import './group.css';

type Props = {
  id: string,
  label: string,
  render: ({
    id: string,
    onChange: (e: SyntheticInputEvent<HTMLInputElement>) => void,
    onFocus: () => void,
    onBlur: () => void,
  }) => Element,
  onChange: (newValue: string) => void
};

type State = {
  hasFocus: boolean,
  value: string
};

class InputGroup extends Component<Props, State> {
  constructor() {
    super();

    this.state = {
      hasFocus: false,
      value: ''
    };
  }
  render() {
    const { id, label, render } = this.props;

    return (
      <div
        className={`input-group ${classnames({
          'input-group--is-waiting':
            !this.state.hasFocus && this.state.value.length === 0
        })}`}
      >
        <label htmlFor={id} className="input-group--label">
          {label}
        </label>
        {render({
          id: id,
          onChange: (e) => this.setState({ value: e.target.value }),
          onFocus: () => this.setState({ hasFocus: true }),
          onBlur:() =>  this.setState({ hasFocus: false }),
        })}
      </div>
    );
  }
}

export default InputGroup;

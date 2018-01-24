// @flow

import React, { Component } from 'react';
import classnames from 'classnames';

import './group.css';

type Props = {
  id: string,
  label: string,
  children: Input,
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
    const { id, label, children: InputElement, onChange } = this.props;

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
        {
          <InputElement
            onChange={value => {
              this.setState({ value });
              onChange(value);
            }}
            onFocus={() => this.setState({ hasFocus: true })}
            onBlur={() => this.setState({ hasFocus: false })}
            id={id}
          />
        }
      </div>
    );
  }
}

export default InputGroup;

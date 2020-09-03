import React, { Component } from 'react';
import { observer } from 'mobx-react';

import StInput from '../../components/input'

@observer
class InputDemo extends Component {

  render() {
    return (
      <StInput />
    );
  }
}

export default InputDemo;

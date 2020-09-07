import React, { Component } from 'react';
import './app.less';

import './assets/css/sui-append.min.css';
import './assets/css/sui.min.css';

export default class App extends Component {
  render() {
    return this.props.children;
  }
}

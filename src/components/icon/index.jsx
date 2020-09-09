import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Text } from '@tarojs/components';
import classNames from 'classnames';

@observer
class CIcon extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    style: {},
  };

  render() {
    const { type, style } = this.props;
    return <Text className={classNames(`sui-icon icon-${type}`)} style={style} />;
  }
}

export default CIcon;

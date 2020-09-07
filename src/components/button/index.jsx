import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import prefixCls from '@utils';

import { TYPES, SIZE } from './constants'
import './index.less'

@observer
class CButton extends Component {

  static defaultProps = {
    size: 'default',
    type: 'normal',
    href: '',
    loading: false,
    className: ''
  };

  static propTypes = {
    size: PropTypes.oneOf([SIZE.small, SIZE.default, SIZE.large]),
    type: PropTypes.oneOf([TYPES.primary, TYPES.link, TYPES.normal]),
    href: PropTypes.string,
    loading: PropTypes.bool,
    className: PropTypes.string
  };

  render() {
    const {
      size,
      disabled,
      loading,
      type,
      block,
      className,
      style,
      children,
      ...others
    } = this.props;

    const classNames = classnames(`${prefixCls}-button`, {
      block,
      disabled,
      [type]: true,
      [size]: true,
      className
    });

    return (
      <View className={classNames} style={style} {...others}>
        {children}
      </View>
    );
  }
}

export default CButton;

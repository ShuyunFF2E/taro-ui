import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';

import './index.less';

const noop = () => {};

const typeEnum = {
  NONE: '',
  ONSHOW: 'onshow',
};

@observer
class CTag extends Component {
  static propTypes = {
    type: PropTypes.oneOf([typeEnum.NONE, typeEnum.ONSHOW]),
    closable: PropTypes.bool,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    type: '',
    closable: false,
    checked: false,
    disabled: false,
    onClick: noop,
    onClose: noop,
  };

  handleClick = event => {
    const { disabled, onClick } = this.props;

    if (disabled) return;
    onClick(event);
  };

  handleRemove = event => {
    this.props.onClose();
    event.stopPropagation();
  };

  render() {
    const { type, checked, className, disabled, closable, style, ...others } = this.props;

    const classNames = classnames(`${prefixCls}-tag`, {
      closable,
      checked,
      disabled,
      [className]: className,
      [type]: !!type,
    });

    return (
      <View className={classNames} onClick={this.handleClick} style={style} {...others}>
        {this.props.children}
        {closable ? (
          <View onClick={this.handleRemove} className="tag-close-icon">
            ×
          </View>
        ) : null}
      </View>
    );
  }
}

export default CTag;

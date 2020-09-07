import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { View, Input, Text } from '@tarojs/components';
import clz from 'classnames';

import { prefixCls } from '../const';
import './index.less';

const classSelector = `${prefixCls}-input`;

@observer
class CInput extends Component {
  static propTypes = {
    width: PropTypes.number,
    maxLength: PropTypes.number,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    onInput: PropTypes.func,
  };

  static defaultProps = {
    width: 150,
    maxLength: null,
    disabled: false,
    value: '',
    onInput: () => {},
  };

  onInputValue = e => {
    this.props.onInput(e);
  };

  render() {
    const { label, placeholder, width, maxLength, disabled, value, onInput } = this.props;
    const _width = width + 'px';

    return (
      <View>
        {label && <Text className={`${classSelector}-label`}>{label}</Text>}
        <Input
          value={value}
          placeholder={placeholder}
          maxlength={maxLength}
          disabled={disabled}
          className={clz(disabled ? `${classSelector}-disabled` : '', `${classSelector}-style`)}
          style={{ width: _width }}
          onInput={this.onInputValue}
        />
      </View>
    );
  }
}

export default CInput;

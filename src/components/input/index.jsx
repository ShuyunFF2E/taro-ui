import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import { prefixCls } from '../const';
import './index.less';

const classSelector = `${prefixCls}-input`;

@observer
class StInput extends Component {
  render() {
    return <View className={classSelector}>我是input组件</View>;
  }
}

export default StInput;

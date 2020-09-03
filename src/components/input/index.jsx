import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';

@observer
class StInput extends Component {

  render() {
    return (
      <View className="st-input">
        我是input组件
      </View>
    );
  }
}

export default StInput;

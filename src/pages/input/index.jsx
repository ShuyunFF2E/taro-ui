import React, { Component } from 'react';
import { Text, View } from '@tarojs/components';
import { observer } from 'mobx-react';
import { observable } from 'mobx';

import CInput from '../../components/input';

@observer
class InputDemo extends Component {
  @observable
  basicInputValue = '';

  @observable
  disabledInputValue = '';

  onInput = e => {
    this.inputValue = e.target.value;
  };

  onDisabledInput = e => {
    this.disabledInputValue = e.target.value;
  };

  render() {
    return (
      <View>
        <Text>Input 输入框</Text>
        <CInput label="标题：" value={this.basicInputValue} placeholder="请输入标题" width={180} maxLength={20} onChange={this.onInput} />
        <CInput label="disabled：" value={this.disabledInputValue} placeholder="disabled" disabled={true} onChange={this.onDisabledInput} />
      </View>
    );
  }
}

export default InputDemo;

import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import { observable } from 'mobx';

import CMessage from '@components/message';
import CButton from '@components/button';

@observer
class Index extends Component {
  onClickSuccess = () => {
    CMessage.success('success', { duration: 5000 });
  };

  onClickError = () => {
    CMessage.error('error');
  };

  onClickTips = () => {
    const msg =
      '这是一个很长很长很长的message提示这是一个很长很长很长的message提示这是一个很长很长很长的message提示这是一个很长很长很长的message提示这是一个很长很长很长的message提示';
    CMessage.success(msg, { duration: 5000 });
  };

  render() {
    return (
      <View>
        <View style={{ marginBottom: '20px' }}>message组件</View>
        <CButton type="primary" onClick={this.onClickSuccess} style={{ marginRight: '10px' }}>
          success
        </CButton>
        <CButton onClick={this.onClickError} style={{ marginRight: '10px' }}>
          error
        </CButton>
        <CButton onClick={this.onClickTips}>超长 message</CButton>
      </View>
    );
  }
}

export default Index;

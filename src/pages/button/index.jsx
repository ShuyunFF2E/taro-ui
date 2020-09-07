import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import CButton from '../../components/button';

@observer
class Index extends Component {

  render() {
    return (
      <View>
        <CButton style={{ margin:'10px' }}>重置</CButton>

        <CButton type="primary" style={{ margin:'10px' }}>搜索</CButton>

        <CButton type="link" style={{ margin:'10px' }}>链接</CButton>

        <CButton type="primary" size="large" style={{ margin:'10px' }}>确定</CButton>

        <CButton size="large" style={{ margin:'10px' }}>取消</CButton>

        <CButton size="large" style={{ margin:'10px' }}>新增</CButton>
      </View>
    );
  }
}

export default Index;

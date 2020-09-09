import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View, Text } from '@tarojs/components';
import CIcon from '../../components/icon';

const iconList = [
  'touch-plus',
  'tb-search',
  'tb-edit',
  'tb-delete',
  'tb-ticket',
  'tb-form',
  'tb-locationfill',
  'tb-sort',
  'tb-tagfill',
  'flag',
  'touch-todo-sign',
  'touch-user-info-sign',
  'touch-chat-sign',
  'pc-redo',
  'pc-chevron-left',
  'pc-chevron-right',
  'pc-prev',
  'pc-next',
  'arrow-fat-down',
  'arrow-fat-up',
  'long-arrow-up',
  'double-angle-down',
  'double-angle-up',
];

const iconStyle = {
  display: 'block',
  fontSize: '24px',
  color: '#595959',
  textAlign: 'center',
  marginBottom: '10px',
  lineHeight: '24px',
};

@observer
class Index extends Component {
  render() {
    return (
      <View>
        <View>Icon组件</View>
        {iconList.map((type, index) => (
          <View key={index} style={{ display: 'inline-block', padding: '10px 20px', boxSizing: 'border-box' }}>
            <CIcon type={type} style={iconStyle} />
            <Text>{type}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default Index;

import React, { Component } from 'react';
import { Text, View } from '@tarojs/components';
import { observer } from 'mobx-react';
import './index.less';

import CTooltip from '../../components/tooltip';
import CIcon from '../../components/icon';
import CTag from '../../components/tag';

@observer
class TooltipDemo extends Component {
  longText = '这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字这是一段非常长的文字';

  render() {
    const placementArea = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '300px',
      height: '300px',
      border: '1px solid #eee',
      marginLeft: '50px',
      padding: '30px',
      textAlign: 'center',
    };
    const placementContainer = {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '60px 0',
    };

    const titleStyle = { margin: '30px 0 10px' };
    return (
      <View>
        <Text style={{ display: 'block' }}>Tooltip 组件</Text>

        <View>
          <View style={titleStyle}>Basic Tooltip</View>
          <CTooltip content={'edit icon'} placement="right">
            <CIcon type="tb-edit" />
          </CTooltip>
          <br />

          <CTooltip content={'TextNode Tips'} placement="right">
            TextNode
          </CTooltip>
          <br />

          <CTooltip content={'聚划算tag'} placement={'right'}>
            <CTag>聚划算</CTag>
          </CTooltip>
          <br />

          <CTooltip content={'view测试'} placement="right">
            <View style={{ display: 'inline-block' }}>99狂欢节</View>
          </CTooltip>
          <br />

          <CTooltip content={this.longText} placement="right">
            <Text>超长tooltip</Text>
          </CTooltip>
        </View>

        <View>
          <View style={titleStyle}>Tooltip Placement</View>
          <View style={placementArea}>
            <CTooltip content={'top tooltip'} placement="top">
              <Text>上</Text>
            </CTooltip>
            <View style={placementContainer}>
              <CTooltip content={'left tooltip'} placement="left">
                <Text>左</Text>
              </CTooltip>

              <CTooltip content={'default tooltip'}>
                <Text>默认</Text>
              </CTooltip>

              <CTooltip content={'right tooltip'} placement="right">
                <Text>右</Text>
              </CTooltip>
            </View>
            <CTooltip content={'bottom tooltip'} placement="bottom">
              <Text>下</Text>
            </CTooltip>
          </View>
        </View>
      </View>
    );
  }
}

export default TooltipDemo;

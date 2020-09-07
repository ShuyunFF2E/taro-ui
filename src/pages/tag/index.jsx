import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { View } from '@tarojs/components';
import CTag from '../../components/tag';

import './index.less';
import { observable } from 'mobx';

@observer
class Index extends Component {
  @observable
  tagList = [
    { text: '红色', checked: true },
    { text: '白色', checked: true },
    { text: '蓝色', checked: false },
    { text: '黄色', checked: false },
  ];

  handleClose = index => {
    this.tagList.splice(index, 1);
  };

  handleClick = () => {
    console.log('asdfasdf');
  };

  render() {
    return (
      <View className="tag-demo">
        <CTag style={{ margin: '10px' }} onClick={this.handleClick}>
          职业:小区
        </CTag>

        <CTag style={{ margin: '10px' }} type="onshow">
          肤质选择: 干性
        </CTag>

        <CTag style={{ margin: '10px' }} checked>
          女装店铺忠诚度: 低
        </CTag>

        {this.tagList.map((item, index) => (
          <CTag
            style={{ margin: '10px' }}
            key={index}
            closable
            checked={item.checked}
            onClose={() => this.handleClose(index)}
            onClick={() => this.handleClick()}>
            {item.text}
          </CTag>
        ))}

        <CTag style={{ margin: '10px' }} closable onClose={this.handleClose}>
          肤质选择: 干性
        </CTag>

        <CTag className="define" style={{ margin: '10px' }} closable>
          自定义样式
        </CTag>
      </View>
    );
  }
}

export default Index;

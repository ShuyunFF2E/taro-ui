import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { observer } from 'mobx-react';
import { View, Button } from '@tarojs/components';
import { observable } from 'mobx';

@observer
class Index extends Component {
  @observable
  componentsName = ['input', 'button', 'checkbox', 'tag', 'pagination', 'tab', 'table', 'message', 'modal', 'icon'];

  redirect = url => {
    console.log('url:', `/${url}`);
    Taro.navigateTo({
      url: `/${url}`,
    });
  };

  render() {
    const { componentsName, redirect } = this;

    return (
      <View className="index">
        {componentsName.map((item, index) => (
          <Button size="mini" type="primary" style={{ margin: '10px' }} onClick={() => redirect(item)} key={index}>
            {item}
          </Button>
        ))}
      </View>
    );
  }
}

export default Index;

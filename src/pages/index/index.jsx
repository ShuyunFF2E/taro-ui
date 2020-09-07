import React, { Component } from 'react';
import Taro from '@tarojs/taro';
import { observer } from 'mobx-react';
import { View, Button, Icon } from '@tarojs/components';
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

        <View>
          以下为taro组件库的Icon:
          <View>
            <Icon size="20" type="success" />
            <Icon size="20" type="info" />
            <Icon size="20" type="warn" color="#ccc" />
            <Icon size="20" type="warn" />
            <Icon size="20" type="waiting" />
            <Icon size="20" type="success_no_circle" />
            <Icon size="20" type="warn" />
            <Icon size="20" type="success" />
            <Icon size="20" type="download" />
            <Icon size="20" type="clear" color="red" />
            <Icon size="20" type="search" />
          </View>
        </View>
      </View>
    );
  }
}

export default Index;

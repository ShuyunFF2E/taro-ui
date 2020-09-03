import React, { Component } from 'react';
import { observer } from 'mobx-react';

import { View } from '@tarojs/components';

@observer
class Index extends Component {

  render() {
    return (
      <View>button的demo</View>
    );
  }
}

export default Index;

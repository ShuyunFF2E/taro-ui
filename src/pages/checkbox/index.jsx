import React, { Component, useState } from 'react';
import { observer } from 'mobx-react';
import { Checkbox, CheckboxGroup, Label, View } from '@tarojs/components';
import CCheckbox from '../../components/checkbox';

@observer
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indeterminate: true,
      checked: false,
    };
  }

  onChange = e => {
    console.log(e, e.detail.value[0], 'onChange');
  };

  indeterminateChange = (checked, value) => {
    console.log(checked, value, '0000');
    this.setState({
      checked: !checked,
      indeterminate: false,
    });
  };

  render() {
    const { indeterminate } = this.state;

    return (
      <View style={{ marginLeft: '50px' }}>
        <View>checkbox组件</View>
        <CCheckbox>checkbox</CCheckbox>
        <CCheckbox style={{ display: 'block' }} defaultChecked={true}>
          checked checkbox
        </CCheckbox>
        <CCheckbox style={{ display: 'block' }} disabled>
          disabled checkbox
        </CCheckbox>
        <CCheckbox style={{ display: 'block' }} indeterminate={indeterminate} onChange={this.indeterminateChange}>
          indeterminate checkbox
        </CCheckbox>
      </View>
    );
  }
}

export default Index;

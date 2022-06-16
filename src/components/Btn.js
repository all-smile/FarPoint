import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

// 注入 store 数据 到 props 上
@inject('RootStore')
@observer
export default class Btn extends Component {
  toChangeName = () => {
    this.props.RootStore.changeName('123');
  };
  render() {
    return (
      <View>
        <Text onPress={this.toChangeName}>Btn: {this.props.RootStore.name}</Text>
      </View>
    );
  }
}

// eslint-disable-next-line
import React, { Component } from 'react';
import { /* StyleSheet, */ ToastAndroid } from 'react-native';

class Toast extends Component {
  render() {
    const { visible = false, message = '', delay = 1000 } = this.props;
    console.log(visible, message);
    if (visible) {
      // ToastAndroid.showWithGravityAndOffset(
      //   message,
      //   ToastAndroid.LONG,
      //   ToastAndroid.TOP,
      //   ToastAndroid.CENTER,
      //   25,
      //   50,
      // );
      ToastAndroid.showWithGravity(message, delay, ToastAndroid.SHORT, ToastAndroid.CENTER);
      return null;
    }
    return null;
  }
}

// const styles = StyleSheet.create({});

export default Toast;

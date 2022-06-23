import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { px2dp } from '../utils/screenKits';

export default class LinearBtn extends Component {
  // props默认值
  static defaultProps = {
    style: {},
    textStyle: {},
  };
  render() {
    console.log(this.props);
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{ width: '100%', height: '100%', ...this.props.style, overflow: 'hidden' }}
      >
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#9b63cd', '#e0708c']}
          style={styles.linearGradient}
        >
          <Text style={{ ...styles.buttonText, ...this.props.textStyle }}>Sign in with Facebook</Text>
        </LinearGradient>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: px2dp(15),
    paddingRight: px2dp(15),
    borderRadius: px2dp(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: px2dp(18),
    fontFamily: 'Gill Sans',
    // textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

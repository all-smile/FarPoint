import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';
import LinearGradient from 'react-native-linear-gradient';

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
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    // textAlign: 'center',
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

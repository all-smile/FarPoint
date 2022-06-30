import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, Easing } from 'react-native';
import { Overlay } from '@rneui/themed';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { px2dp } from '~/utils/screenKits';

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.spinValue = new Animated.Value(0);
    this.state = {};
  }

  // props默认值
  static defaultProps = {
    isLoading: false,
    loadingDesc: '加载中...',
  };

  componentDidMount() {
    this.spin();
  }

  // 旋转方法
  spin = () => {
    this.spinValue.setValue(0);
    Animated.timing(this.spinValue, {
      toValue: 1, // 最终值 为1，这里表示最大旋转 360度
      duration: 800,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => this.spin());
  };

  render() {
    const { isLoading = false, loadingDesc } = this.props;
    // console.log('--------------', isLoading, this.props);

    // 映射 0-1的值 映射 成 0 - 360 度
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1], // 输入值
      outputRange: ['0deg', '360deg'], // 输出值
    });

    return (
      <View>
        <Overlay isVisible={isLoading} backdropStyle={styles.overlayWare}>
          <View style={styles.loadingWare}>
            <Animated.View style={{ transform: [{ rotate: spin }] }}>
              <Icon name="loading1" size={px2dp(25)} color="#F194FF" />
            </Animated.View>
            <Text style={styles.loadingText}>{loadingDesc}</Text>
          </View>
        </Overlay>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  overlayWare: {
    backgroundColor: 'transparent',
  },
  loadingWare: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: px2dp(7),
  },
});

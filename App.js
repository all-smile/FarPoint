import React from 'react'
import axios from 'axios';
import { View, Text, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native'
import RootStore from "./src/mobx";
import { Provider } from "mobx-react";
import { SvgXml } from "react-native-svg";
import TestSvg from './src/components/testSvg'
import Btn from "./src/components/Btn";
import { formatMoneyWithReg } from './src/lib/utils'
const screenW = Math.round(Dimensions.get('window').width) // 360
const screenH = Math.round(Dimensions.get('window').height) // 750
// alert('screenH=' + screenH + 'screenW=' + screenW);

// axios.get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata").then(console.log)

// <Image style={{ width: '100%', height: '100%' }} source={require('./src/assets/img/collection/11.jpg')}></Image>

console.log('调试');
const App = () => <View style={styles.appContainer}>
  <Provider RootStore={RootStore}>
    <ImageBackground style={styles.homeBg} source={require('./src/assets/img/collection/11.jpg')}>
      <View style={styles.homeSloganWare}>
        <Text style={styles.homeSlogan}>给</Text>
        <Text style={styles.homeSloganBig}>未来</Text>
        <Text style={styles.homeSlogan}>写</Text>
        <Text style={styles.homeSlogan}>封</Text>
        <Text style={styles.homeSlogan}>信</Text>
        <Text style={styles.homeAddUp}>已寄出 {formatMoneyWithReg(378562)} 封信</Text>
        <Btn></Btn>
      </View>
    </ImageBackground>
  </Provider>
</View>

const styles = StyleSheet.create({
  appContainer: {
    width: '100%',
    height: '100%'
  },
  homeBg: {
    width: '100%',
    height: '100%'
  },
  homeSloganWare: {
    padding: 40
  },
  homeSlogan: {
    color: "#012B6D",
    fontSize: 52
  },
  homeSloganBig: {
    color: "#012B6D",
    fontSize: 62
  },
  homeAddUp: {
    color: "#012B6D",
    fontSize: 14
  },
});

export default App
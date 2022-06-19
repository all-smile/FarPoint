import React from 'react';
// import axios from 'axios';
import { View, Text, ImageBackground, StyleSheet, ScrollView, SafeAreaView /* ,StatusBar */ } from 'react-native';
import RootStore from './src/mobx';
import { Provider } from 'mobx-react';
import { /* Svg, */ /* Circle, */ SvgUri, SvgXml } from 'react-native-svg';
// import { SvgXml } from "react-native-svg";
// import AppNavigator from "./src/navigation";
import Btn from './src/components/Btn';
import SymbolSvg from './src/assets/svgs/symbol.svg';
import { width, height, px2dp } from './src/lib/utils/screenKits';
import { formatMoneyWithReg } from './src/lib/utils/common';

const xml = `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1655121069194" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4898" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M0 778.112L620.672 485.12 0 192l164.288 293.12z" fill="#1F7BFF" fill-opacity=".1" p-id="4899"></path><path d="M341.312 778.112l620.672-293.056L341.312 192 505.6 485.12z" fill="#1F7BFF" p-id="4900"></path></svg>`;

// const req = require.context('./src/assets/svgs', false, /\.svg$/);
// console.log('req=', req);

console.log(width, height, px2dp(200));
console.log('SymbolSvg=', typeof SymbolSvg);
// axios.get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata").then(console.log)

console.log('调试');
const App = () => (
  <SafeAreaView style={styles.backgroundStyle}>
    <ScrollView style={styles.appContainer}>
      <Provider RootStore={RootStore}>
        {/* <AppNavigator></AppNavigator> */}
        <ImageBackground style={styles.homeBg} source={require('./src/assets/img/collection/11.jpg')}>
          {/* <StatusBar backgroundColor="transparent" translucent={true} /> */}
          <View style={styles.homeSloganWare}>
            <Text style={styles.homeSlogan}>给</Text>
            <Text style={styles.homeSloganBig}>未来</Text>
            <Text style={styles.homeSlogan}>写</Text>
            <Text style={styles.homeSlogan}>封</Text>
            <Text style={styles.homeSlogan}>信</Text>
            <Text style={styles.homeAddUp}>已寄出 {formatMoneyWithReg(378562)} 封信</Text>
            <Btn></Btn>
            <SvgUri width={px2dp(150)} height={px2dp(100)} uri="https://www.w3school.com.cn/svg/circle1.svg" />
            <SvgXml xml={xml} width={px2dp(20)} height={px2dp(20)} />
            {/* <SymbolSvg width={200} height={200}></SymbolSvg> */}
            {/* <Svg height="50%" width="50%" viewBox="0 0 100 100">
            <Circle cx="50" cy="50" r="50" stroke="purple" strokeWidth=".5" fill="violet" />
          </Svg> */}
          </View>
        </ImageBackground>
      </Provider>
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  appContainer: {
    // width: width,
    // height: height,
    // borderWidth: 10,
    // borderColor: 'red',
    flex: 1,
  },
  homeBg: {
    // flex: 1,
    width: width,
    height: height,
    // borderWidth: 10,
    // borderColor: 'blue',
  },
  homeSloganWare: {
    padding: 40,
  },
  homeSlogan: {
    color: '#012B6D',
    fontSize: 52,
  },
  homeSloganBig: {
    color: '#012B6D',
    fontSize: 62,
  },
  homeAddUp: {
    color: '#012B6D',
    fontSize: 14,
  },
});

export default App;

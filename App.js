import React from 'react';
// import axios from 'axios';
import { View, Text, ImageBackground, StyleSheet, ScrollView, SafeAreaView /* ,StatusBar */ } from 'react-native';
import RootStore from './src/mobx';
import { Provider } from 'mobx-react';
// import AppNavigator from "./src/navigation";
import Svg from './src/components/Svg';
import Btn from './src/components/Btn';
import { width, height, px2dp } from './src/lib/utils/screenKits';
import { formatMoneyWithReg } from './src/lib/utils/common';

console.log(width, height, px2dp(200));
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
            <View style={styles.writeBtnWare}>
              <Svg icon="pen02" size={px2dp(45)} style={styles.writeBtn}></Svg>
            </View>
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
    textAlign: 'center',
    flex: 1,
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
  writeBtnWare: {
    flex: 1,
    // justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    // backgroundColor: 'blue',
  },
  writeBtn: {
    // position: 'absolute',
    bottom: px2dp(80),
    // left: '50%',
    // justifyContent: 'center',
    // transform: 'translateX(-50%)',
  },
});

export default App;

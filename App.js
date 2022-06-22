import React from 'react';
// import axios from 'axios';
import { ImageBackground, StyleSheet, /* ScrollView */ SafeAreaView /* ,StatusBar */ } from 'react-native';
import RootStore from './src/mobx';
import { Provider } from 'mobx-react';
// import AppNavigator from './src/navigation';
import HomeScreen from './src/pages/Home/HomeScreen';
// import Svg from './src/components/Svg';
// import Btn from './src/components/Btn';
import { width, height, px2dp } from './src/utils/screenKits';
// import { formatMoneyWithReg } from './src/utils/common';
import settings from './src/settings';

import { testApi } from './src/api/index';

const { theme } = settings;

console.log(
  'testApi',
  testApi()
    .then((res) => console.log('res=======', res))
    .catch((err) => {
      console.log('err======', err);
    })
);
console.log(width, height, px2dp(200), theme);
// axios.get("https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata").then(console.log)

console.log('调试');
const App = () => (
  <SafeAreaView style={styles.backgroundStyle}>
    {/* <ScrollView style={styles.appContainer}> */}
    <Provider RootStore={RootStore}>
      {/* <AppNavigator></AppNavigator> */}
      <ImageBackground style={styles.homeBg} source={require('./src/assets/img/collection/11.jpg')}>
        <HomeScreen></HomeScreen>
        {/* <View style={styles.homeSloganWare}>
          <Text style={styles.homeSlogan}>给</Text>
          <Text style={styles.homeSloganBig}>未来</Text>
          <Text style={styles.homeSlogan}>写</Text>
          <Text style={styles.homeSlogan}>封</Text>
          <Text style={styles.homeSlogan}>信</Text>
          <Text style={styles.homeAddUp}>已寄出 {formatMoneyWithReg(378562)} 封信</Text>
          <View style={styles.writeBtnWare}>
            <Svg icon="pen" size={px2dp(45)} style={styles.writeBtn}></Svg>
            <Text style={styles.writeTextColor}>开始撰写</Text>
          </View>
        </View> */}
      </ImageBackground>
    </Provider>
    {/* </ScrollView> */}
  </SafeAreaView>
);

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
  appContainer: {
    // width: '100%',
    // height: '100%',
    // width: width,
    // height: height,
    // borderWidth: 10,
    // borderColor: 'red',
    flex: 1,
  },
  homeBg: {
    width: '100%',
    height: '100%',
    // flex: 1,
    // width: width,
    // height: height,
    // borderWidth: 10,
    // borderColor: 'blue',
  },
  homeSloganWare: {
    padding: 40,
    textAlign: 'center',
    flex: 1,
  },
  homeSlogan: {
    color: theme.fontColor,
    fontSize: 52,
  },
  homeSloganBig: {
    color: theme.fontColor,
    fontSize: 62,
  },
  homeAddUp: {
    color: theme.fontColor,
    fontSize: 14,
  },
  writeBtnWare: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // 垂直居中
    alignItems: 'center', // 水平居中
    // backgroundColor: 'blue',
  },
  writeBtn: {
    position: 'absolute',
    bottom: px2dp(70),
    // left: '50%',
    // justifyContent: 'center',
    // transform: [{ translate: 50 }],
  },
  writeTextColor: {
    position: 'absolute',
    bottom: px2dp(40),
    color: '#fff',
    fontSize: 14,
  },
});

export default App;

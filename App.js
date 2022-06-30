import React from 'react';
import { ImageBackground, StyleSheet, /* ScrollView */ SafeAreaView /* ,StatusBar */ } from 'react-native';
import RootStore from '~/mobx';
import { Provider } from 'mobx-react';
// import AppNavigator from './src/navigation';
import HomeScreen from '~/pages/Home/HomeScreen';
import { width, height, px2dp } from '~/utils/screenKits';
import settings from '~/settings';
import { testApi } from '~/api/index';

const { theme } = settings;

testApi()
  .then(/* (res) => console.log('res=======', res) */)
  .catch((err) => {
    console.log('err======', err);
  });
console.log(width, height, px2dp(200));

const App = () => (
  <SafeAreaView style={styles.backgroundStyle}>
    {/* <ScrollView style={styles.appContainer}> */}
    <Provider RootStore={RootStore}>
      {/* <AppNavigator></AppNavigator> */}
      <ImageBackground style={styles.homeBg} source={require('./src/assets/img/collection/11.jpg')}>
        <HomeScreen></HomeScreen>
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

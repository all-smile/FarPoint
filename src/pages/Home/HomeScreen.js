import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg from '../../components/Svg';
// import Btn from '../../components/Btn';
import { px2dp } from '../../utils/screenKits';
import { formatMoneyWithReg } from '../../utils/common';
import settings from '../../settings';

const { theme } = settings;

export default function HomeScreen(/* { navigation } */) {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>Home Screen</Text>
    //   <Button
    //     title="Go to Details"
    //     onPress={() =>
    //       navigation.navigate('Details', {
    //         itemId: 86,
    //         otherParam: 'anything you want here',
    //       })
    //     }
    //   ></Button>
    //   <Button
    //     title="Update the title"
    //     onPress={() => navigation.setOptions({ title: 'Updated!', headerTitleAlign: 'center' })}
    //   />
    // </View>
    <View style={styles.homeSloganWare}>
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
    </View>
  );
}

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

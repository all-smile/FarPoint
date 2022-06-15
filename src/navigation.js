import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./pages/Home/HomeScreen";
import DetailScreen from "./pages/Detail/DetailScreen";

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShadowVisible: false, // android 导航去阴影
        headerTitleAlign: 'center', // 标题居中 android/ios
        // 设置导航栏字体样式
        headerTitleStyle: {
          fontSize: 17,
          color: '#fff',
          fontFamily: 'PingFangSC-Semibold',
          fontWeight: 'bold',
        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        // 标题右侧功能组件
        headerRight: () => (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="red"
          />
        ),
      }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          title: '首页',
        }} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
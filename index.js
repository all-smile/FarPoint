/**
 * @format
 */

import { AppRegistry /* YellowBox */ } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// 调试-捕获网络请求
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

// 关闭远程调式非独立窗口的⚠️
// YellowBox.ignoreWarnings(['Remote debugger']);

AppRegistry.registerComponent(appName, () => App);

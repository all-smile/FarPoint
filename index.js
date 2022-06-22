/**
 * @format
 */

import { AppRegistry /* , YellowBox  */ } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// 调试-捕获网络请求
// GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest

// 关闭远程调式非独立窗口的⚠️
// YellowBox.ignoreWarnings(['Remote debugger']);

// 设置应忽略的前缀数组以编程方式忽略特定警告
// YellowBox.ignoreWarnings(['Warning: ...']);
// YellowBox.ignoreWarnings([
//   'Warning: componentWillMount is deprecated',
//   'Warning: componentWillReceiveProps is deprecated',
//   'Warning: componentWillUpdate is deprecated',
//   'Warning: isMounted(...) is deprecated',
// ])

AppRegistry.registerComponent(appName, () => App);

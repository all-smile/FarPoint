# FarPoint 远点
采用 react-native + Mobx 开发手机端软件，主要功能是给未来写封信

## 核心依赖
- react-native@0.68.2
- @react-navigation/native@^6.0.10
- mobx@^6.6.0
- mobx-react@^7.5.0
- prettier@2.7.0

## 项目运行
```bash
git clone https://github.com/all-smile/FarPoint.git
cd FarPoint
yarn

android: yarn android
ios: yarn ios
```


## Git 规范 (*建议)
- feat ：新功能
- fix ：修复 bug
- chore ：对构建或者辅助工具的更改
- refactor ：既不是修复 bug 也不是添加新功能的代码更改
- style ：不影响代码含义的更改 (例如空格、格式化、少了分号)
- docs ： 只是文档的更改
- perf ：提高性能的代码更改
- revert ：撤回提交
- test ：添加或修正测试

举例
git commit -m 'feat: add list'
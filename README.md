# FarPoint 远点

采用 react-native 及其相关生态开发的手机端软件，主要功能是给未来写封信。
使用 react-native 进行界面、交互开发，后端服务采用 Golang 编写

## 核心依赖

- react-native@0.68.2
- @react-navigation/native@^6.0.10
- mobx@^6.6.0
- mobx-react@^7.5.0
- prettier@2.7.0
- eslint@7.32.0
- husky@8.0.1
- commitlint/cli@17.0.2

## 项目运行

```bash
# 克隆代码仓库
git clone https://github.com/all-smile/FarPoint.git

# 进入项目目录
cd FarPoint

# 安装依赖(该项目采用yarn管理依赖包)
yarn

# 运行 (已有相应环境下)
android: yarn android
ios: yarn ios
```

## Git 规范 (\*建议)

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

# 实现功能

# 整体效果演示

# 参考文档

[React-native](https://reactnative.cn/docs/next/intro-react)
[mobx](https://cn.mobx.js.org/)
[react-navigation](https://reactnavigation.org/)
[axios](https://www.axios-http.cn/docs/intro)
[react-native-vector-icons](https://oblador.github.io/react-native-vector-icons/)

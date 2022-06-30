module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }], // mbox
    // ['react-native-reanimated/plugin'],
    [
      'babel-plugin-root-import',
      {
        paths: [
          {
            rootPathSuffix: './src',
            rootPathPrefix: '~/', // 使用 ~/  代替 ./src (~指向的就是src目录)
          },
          {
            rootPathSuffix: './src/utils',
            rootPathPrefix: '!/',
          },
        ],
      },
    ],
  ],
};

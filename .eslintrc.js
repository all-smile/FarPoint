module.exports = {
  // 解析器
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  settings: {
    react: {
      // Warning: React version not specified in eslint-plugin-react settings.
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      // 支持装饰器 否则报 '@inject' 错误
      legacyDecorators: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    eqeqeq: 2, // 必须使用 === 和 !==
    'no-empty-function': 2, // 禁止空函数
    'no-multi-spaces': 2, // 禁止使用多个空格
    'no-trailing-spaces': 2, // 禁止禁用行尾空格
    'space-infix-ops': 2, // 要求操作符周围有空格
    'space-in-parens': 2, // 强制在圆括号内使用一致的空格
    'no-var': 2, // 要求使用 let 或 const 而不是 var,
    'no-unused-vars': 2, // 禁止出现未使用过的变量
    'react/prop-types': 0, // 防止在react组件定义中缺少props验证
    indent: ['error', 2], //缩进规则为2个空格
    'react/jsx-indent': ['error', 2], //缩进规则为2个空格
    'react/jsx-indent-props': ['error', 2], //缩进规则为2个空格
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], //在JS文件中允许存在JSX语法
    'global-require': 'off', //image指定source时要用require语句
  },
};

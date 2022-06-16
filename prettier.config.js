module.exports = {
  "arrowParens": "always",
  "bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "htmlWhitespaceSensitivity": "css",
  "insertPragma": false,
  "requirePragma": false,
  "bracketSameLine": false,
  "printWidth": 120, // 超过最大值换行
  "singleQuote": true, // 使用单引号代替双引号
  "useTabs": false, // 缩进不使用tab，使用空格
  "semi": true, // 句尾添加分号
  "tabWidth": 2, // 缩进字节数
  "trailingComma": "es5", // 在对象或数组最后一个元素后面是否加逗号（在ES5中加尾逗号）
  "jsxSingleQuote": false,
  "quoteProps": "as-needed",
  "proseWrap": "preserve" // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
}
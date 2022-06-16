const checkType = (header) => {
  header = `${header}`;
  console.log('checkType header====', header);
  const enumType = ['feat', 'fix', 'style', 'chore', 'test', 'ci', 'refactor', 'revert'];
  const realType = header.split(':')[0];
  return enumType.includes(realType);
};

const checkSubject = (header) => {
  header = `${header}`;
  console.log('checkSubject header====', header);
  const realSubject = header.split(':')[1];
  if (!realSubject) {
    return false;
  }
  return realSubject.length > 0;
};

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // body换行
    'header-max-length': [2, 'never', 72], // header 最长72
    'type-enum-rule': [2, 'never'],
    'type-enum': [0, 'never'],
    'type-empty': [0, 'always'],
    'subject-empty': [0, 'always'],
    // 'type-enum': [
    //   2,
    //   'always',
    //   [
    //     'add', // 创建功能
    //     'del', // 删除功能
    //     'fix', // 解决问题
    //     'bump', // 修改某个版本号
    //     'conf', // 配置文件修改
    //     'refactor', // 必须进行重构的代码
    //     'reformat', // 代码格式化
    //     'optimize', // 代码性能优化
    //     'doc', // 文档构建与修改
    //     'start', // 开始做某事，比如创建分支等
    //     'end', // 结束做某事，比如删除分支等
    //   ],
    // ],
  },
  plugins: [
    {
      rules: {
        'type-enum-rule': ({ header }) => {
          return [
            checkType(header),
            '需要包含提交类型，格式如: "feat: 开发新功能" 中的feat, ' +
              '可选值有: feat/fix/style/test/chore/ci/..., 类型后面紧跟英文冒号分隔主题信息',
          ];
        },
        'subject-enum-rule': ({ header }) => {
          return [checkSubject(header), '需要包含提交主题, 格式如: "feat: 开发新功能" 中的 开发新功能'];
        },
      },
    },
  ],
};

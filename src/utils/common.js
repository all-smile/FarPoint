// 工具函数

// 金额增加千分位分割
// console.log(format_with_regex(1243250.99));
// 就是说1-3位后面一定要匹配3位 先行断言
export function formatMoneyWithReg(number) {
  return !(number + '').includes('.')
    ? (number + '').replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
        return match + ',';
      })
    : (number + '').replace(/\d{1,3}(?=(\d{3})+(\.))/g, (match) => {
        return match + ',';
      });
}

// 去掉字符串前后所有空格
export function trim(str, isglobal) {
  let result;
  result = str.replace(/(^\s+)|(\s+$)/g, '');
  if (isglobal && isglobal.toLowerCase() === 'g') {
    result = result.replace(/\s/g, '');
  }
  return result;
}

/**
 * 延时
 * @param {number} duration
 * @returns {Promise}
 */
export const sleep = function (duration = 0) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};

// hasOwnProperty
export const hasOwnProperty = function (object, key) {
  return Object.prototype.hasOwnProperty.call(object, key);
};

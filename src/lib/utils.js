// 工具函数

// 金额增加千分位分割
// console.log(format_with_regex(1243250.99));
export function formatMoneyWithReg(number) {
  return !(number + '').includes('.')
    ? // 就是说1-3位后面一定要匹配3位
    (number + '').replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
      return match + ',';
    })
    : (number + '').replace(/\d{1,3}(?=(\d{3})+(\.))/g, (match) => {
      return match + ',';
    });
}

// 判断是否包含中文
export function hasHan(str) {
  let reg = /[\u4e00-\u9fa5]/g
  return reg.test(str)
}
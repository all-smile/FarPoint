// 验证器

import { trim } from './common';

// 判断是否包含中文汉字
export function isHan(str) {
  const reg = /[\u4e00-\u9fa5]/g;
  return reg.test(str);
}

// 验证合法邮箱
export function isEmail(str) {
  const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
  return !!reg.test(str);
}

// 手机号
export const isPhone = (phone) => {
  phone = trim(phone, 'g');
  const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
  return !!reg.test(phone);
};

// 输入密码检验，密码长度8-16位，至少1个大写字母，1个小写字母和1个数字
export const validPWD = function (str) {
  const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^]{8,16}$/;
  return !!reg.test(str);
};

/**
 * 判断是否是对象
 */
export const isObject = (obj, isEffective = false) => {
  if (Object.prototype.toString.call(obj) === '[object Object]') {
    if (isEffective) {
      return !!Object.keys(obj).length;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * 判断是否是数组类型，
 * 并且是否是有效数组
 */
export const isArray = (array, isEffective = false) => {
  if (Object.prototype.toString.call(array) === '[object Array]') {
    if (isEffective) {
      return array.length > 0;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * 判断是否是字符串类型
 */
export const isString = (str, isEffective = false) => {
  if (Object.prototype.toString.call(str) === '[object String]') {
    if (isEffective) {
      return !!str;
    } else {
      return true;
    }
  } else {
    return false;
  }
};

/**
 * 判断是否是数值类型
 */
export const isNumber = (num) => {
  if (Object.prototype.toString.call(num) === '[object Number]') {
    return true;
  } else {
    return false;
  }
};

/**
 * 判断是否是布尔类型
 */
export const isBoolean = (boolean) => {
  if (Object.prototype.toString.call(boolean) === '[object Boolean]') {
    return true;
  } else {
    return false;
  }
};
/**
 * 判断对象是否有属性
 */
export const isEmptyObject = function (obj) {
  return typeof obj === 'object' && Object.keys(obj).length === 0;
};

// 匹配正整数
export const isPositiveInteger = (val) => {
  if (isNumber(val)) {
    const reg = /^[1-9]\d*$/g;
    return reg.test(val);
  } else {
    return false;
  }
};

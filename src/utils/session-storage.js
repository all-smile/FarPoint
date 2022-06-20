// eslint-disable-next-line
const Utils = function () {};

// toString 方法
Utils.prototype._toString = Object.prototype.toString;
Utils.prototype.class2type = {
  '[object Boolean]': 'boolean',
  '[object Number]': 'number',
  '[object String]': 'string',
  '[object Function]': 'function',
  '[object Array]': 'array',
  '[object Date]': 'date',
  '[object RegExp]': 'regExp',
  '[object Object]': 'object',
};

// 类型检测, 返回对象类型字符串
Utils.prototype.type = function (obj) {
  const type = this._toString.call(obj);
  return obj === null ? String(obj) : this.class2type[type] || 'object';
};

// 实例化 Utils
const myUtil = new Utils();

// eslint-disable-next-line
function SessionStorage() {}

// 定义数据类型标识, 存储值前缀
SessionStorage.Types = {
  stringType: '00',
  numberType: '01',
  booleanType: '02',
  jsonType: '03',
  undefinedType: '04',
};

// 系统配置
// _$sys_session_readOnly: ['_$sys_session_01', '_$sys_session_02']
SessionStorage.SystemReadOnly = '_$sys_session_readOnly';

// 判断是否是系统key
SessionStorage.prototype.isSystemKey = function (key) {
  return key && key.indexOf('_$sys_session_') === 0;
};

// 设置值
SessionStorage.prototype.put = function put(key, value, readOnly) {
  // 1、获取 key 类型
  const keyType = myUtil.type(key);
  if (keyType !== 'string') {
    console.error('the type of key is not string');
    return;
  }

  // 2、判断 key 是否和系统保留值冲突
  if (this.isSystemKey(key)) {
    console.error('the key name is illegal');
    return;
  }

  // 3、获取只读 key 配置
  let readOnlyKeys = window.sessionStorage.getItem(SessionStorage.SystemReadOnly);
  if (!readOnlyKeys) {
    readOnlyKeys = [];
  } else {
    readOnlyKeys = JSON.parse(readOnlyKeys);
  }

  // 4、判断 key 是否为只读
  if (readOnlyKeys.indexOf(key) !== -1) {
    console.error('the key is read only');
    return;
  }

  // 5、定义参数
  let param;
  // 获取 value 类型
  const valueType = myUtil.type(value);
  switch (valueType) {
    case 'object':
      // eslint-disable-next-line
      const str = JSON.stringify(value);
      param = SessionStorage.Types.jsonType + str;
      break;
    case 'string':
      param = SessionStorage.Types.stringType + value;
      break;
    case 'number':
      param = SessionStorage.Types.numberType + value;
      break;
    case 'boolean':
      param = SessionStorage.Types.booleanType + value;
      break;
    default:
      console.error('the type of value is not supported');
      break;
  }
  if (!param) {
    return;
  }

  // 保存只读 key 集合
  if (readOnly && readOnly === true) {
    readOnlyKeys.push(key);
    readOnlyKeys = JSON.stringify(readOnlyKeys);
    window.sessionStorage.setItem(SessionStorage.SystemReadOnly, readOnlyKeys);
  }

  // 设置值
  window.sessionStorage.setItem(key, param);
};

// 获取值
SessionStorage.prototype.get = function get(key) {
  // 获取 key 类型
  const keyType = typeof key;
  if (keyType !== 'string') {
    console.error('the type of key is not string');
    return undefined;
  }

  // 获取 value
  const param = window.sessionStorage.getItem(key);
  if (param === null || param === undefined) {
    return param;
  }

  // 获取 value 类型
  const valueType = param.substring(0, 2);
  // 获取 value
  let value = param.substring(2, param.length);
  switch (valueType) {
    case SessionStorage.Types.jsonType:
      value = JSON.parse(value);
      break;
    case SessionStorage.Types.numberType:
      value = Number(value);
      break;
    case SessionStorage.Types.booleanType:
      value = Boolean(value);
      break;
    default:
      break;
  }
  return value;
};

// 移除项
SessionStorage.prototype.remove = function remove(key) {
  // 获取 key 类型
  const keyType = typeof key;
  if (keyType !== 'string') {
    console.error('the type of key is not string');
    return undefined;
  }

  // 判断 key 值是否和系统保留值冲突
  if (this.isSystemKey(key)) {
    console.error('the key name is illegal');
    return;
  }

  // 获取只读 key 配置
  let readOnlyKeys = window.sessionStorage.getItem(SessionStorage.SystemReadOnly);
  if (!readOnlyKeys) {
    readOnlyKeys = [];
  } else {
    readOnlyKeys = JSON.parse(readOnlyKeys);
  }

  // 判断 key 是否为只读
  if (readOnlyKeys.indexOf(key) !== -1) {
    console.error('the key is read only');
    return;
  }

  window.sessionStorage.removeItem(key);
};

// 清空所有项
SessionStorage.prototype.clear = function clear() {
  // 获取只读 key 配置
  let readOnlyKeys = window.sessionStorage.getItem(SessionStorage.SystemReadOnly);
  if (!readOnlyKeys) {
    readOnlyKeys = [];
  } else {
    readOnlyKeys = JSON.parse(readOnlyKeys);
  }

  // 临时缓存
  const tmpCache = {};
  // 保留 read only key
  for (let i = 0; i < readOnlyKeys.length; i++) {
    const key = readOnlyKeys[i];
    const value = window.sessionStorage.getItem(key);
    tmpCache[key] = value;
  }

  // 清空
  window.sessionStorage.clear();

  if (readOnlyKeys) {
    // 还原 read only key
    for (let i = 0; i < readOnlyKeys.length; i++) {
      const key = readOnlyKeys[i];
      const value = tmpCache[key];
      window.sessionStorage.setItem(key, value);
    }

    // 保存 readOnlyKeys
    readOnlyKeys = JSON.stringify(readOnlyKeys);
    window.sessionStorage.setItem(SessionStorage.SystemReadOnly, readOnlyKeys);
  }
};

// 定义 session storage
const sessionStorage = new SessionStorage();
export default sessionStorage;

import config from '../settings/config';
const CryptoJS = require('crypto-js'); // 引用AES源码js

const { aesKey, aesIV } = config;

// AES/CBC/PKCS7Padding 算法/模式/补码方式
// 字符集 utf-8
// mode 支持 CBC CFB CTR ECB OFB 默认CBC
// padding 支持 Pkcs7 ZeroPadding NoPadding ... 默认 Pkcs7 即 Pkcs5

// 前端 AES/CBC/Pkcs7 + iv
// 后端 AES/CBC/Pkcs5 + iv

// const key = CryptoJS.enc.Utf8.parse(aesKey); // 十六位十六进制数作为密钥
const iv = CryptoJS.enc.Utf8.parse(aesIV); // 十六位十六进制数作为密钥偏移量

// 加密方法
export const aesEncrypt = (data, k) => {
  const key = CryptoJS.enc.Utf8.parse(k || aesKey);
  const encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  // 转换为字符串
  return encrypted.toString();
};

// 解密方法
export const aesDecrypt = (data, k) => {
  const key = CryptoJS.enc.Utf8.parse(k || aesKey);
  const decrypted = CryptoJS.AES.decrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  // 转换为 utf8 字符串
  const decryptedStr = decrypted.toString(CryptoJS.enc.Utf8);
  return decryptedStr;
};

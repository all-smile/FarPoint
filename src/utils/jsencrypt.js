// 非对称加密 RSA
import JSEncrypt from 'jsencrypt';
import config from '../settings/config';

const { rsaPubKey, rsaPriKey } = config;

// 公钥加密
export const rsaEncrypt = (data, key) => {
  console.log('rsaEncrypt = ', data, key);
  const encryptor = new JSEncrypt(); // 创建加密对象实例
  // 设置公钥
  encryptor.setPublicKey(key || rsaPubKey);
  // 加密
  const rsaCipher = encryptor.encrypt(data);
  return rsaCipher;
};

// 私钥解密
export const rsaDecrypt = (ciphertext, key) => {
  const decrypt = new JSEncrypt(); // 创建解密对象实例
  // 设置私钥
  decrypt.setPrivateKey(key || rsaPriKey);
  const oriData = decrypt.decrypt(ciphertext);
  return oriData;
};

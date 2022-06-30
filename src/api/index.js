// 接口调用封装， 可按模块拆分开

import request from '~/utils/request';

export function testApi() {
  return request({
    url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    method: 'get',
    mock: false,
  });
}

export function testApi02(params = {}) {
  return request({
    url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    method: 'post',
    mock: false,
    data: params,
  });
}

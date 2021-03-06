import React, { Component } from 'react';
import { SvgXml /* SvgXml */ } from 'react-native-svg';
import svgs from '~/assets/svgs.js';

// const xml = `<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1655121069194" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4898" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M0 778.112L620.672 485.12 0 192l164.288 293.12z" fill="#1F7BFF" fill-opacity=".1" p-id="4899"></path><path d="M341.312 778.112l620.672-293.056L341.312 192 505.6 485.12z" fill="#1F7BFF" p-id="4900"></path></svg>`;

export default class Svg extends Component {
  render() {
    const { color, size, style, icon } = this.props;

    const svgXmlData = svgs[icon];
    // console.log('svgXmlData=', svgXmlData);

    if (!svgXmlData) {
      const err_msg = `没有"${icon}"这个svg文件`;
      throw new Error(err_msg);
    }
    return <SvgXml width={size} height={size} xml={svgXmlData} fill={color} style={style} />;
  }
}

{
  /* <SvgUri width={px2dp(150)} height={px2dp(100)} uri="https://www.w3school.com.cn/svg/circle1.svg" /> */
}
{
  /* <SvgXml xml={xml} width={px2dp(20)} height={px2dp(20)} /> */
}

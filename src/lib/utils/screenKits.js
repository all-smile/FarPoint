import { Dimensions } from 'react-native';

export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');

/**
 * 目的： 将像素转成dp, 起到适配不同手机屏幕大小的效果
 * 手机设备独立像素单位是 dp， px是像素单位， 手机屏幕的像素密度（dpi）不同，则 1dp 对应 不同的 像素系数
 * Android系统定义了四种像素密度：低（120dpi）、中（160dpi）、高（240dpi）、超高（320dpi），它们对应的 分别为0.75、1、1.5、2，这个系数乘以dp便得像素数。
 * 转换公式推导：
 * 设计稿的宽度 / 元素的宽度 = 手机屏幕宽度 / 手机中元素的宽度
 * 得出： 手机中元素的宽度 = (手机屏幕宽度 * 元素的宽度) / 设计稿的宽度
 * 假定设计稿 宽度 375
 * 使用： 200 -> px2dp(200)
 */
export const px2dp = (elePx) => (width * elePx) / 375;

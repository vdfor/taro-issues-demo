import React, { FC } from 'react';
import { useDidShow, usePageScroll, useReachBottom } from '@tarojs/taro';
import { View } from '@tarojs/components';
import styles from './index.module.scss';

// @ts-ignore
const data = [...new Array(100)].map((item, index) => index);

const Heros:FC = () => {

  useDidShow(() => {
    console.log('heros pages - useDidShow');
  })

  usePageScroll(({scrollTop}) => {
    console.log('heros pages - usePageScroll', scrollTop);
  })

  useReachBottom(() => {
    console.log('heros pages - useReachBottom');
  })

  return (
    <View className={styles.heros}>
      {data.map(i => (
        <View key={i} className={styles.hero}>
          英雄{i}
        </View>
      ))}
    </View>
  )
}

export default Heros;
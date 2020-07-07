import React, { FC } from 'react'
import {navigateTo } from '@tarojs/taro';
import { View, Button } from '@tarojs/components'
import styles from './index.module.scss'

const Index:FC = () => {
  return (
    <View className={styles.index}>
      <Button type="primary" onClick={() => {
        navigateTo({url: '/pages/heros/index?name=John'})
      }}
      >跳转到Heros(携带参数)</Button>
      <Button onClick={() => {
        navigateTo({url: '/pages/heros/index'})
      }}
      >跳转到Heros(不携带参数)</Button>
    </View>
  )
}

export default Index;

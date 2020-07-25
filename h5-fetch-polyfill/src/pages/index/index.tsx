import React, { Component } from 'react'
import { request } from '@tarojs/taro';
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  async componentDidMount () {
    try {
      const result = await request({
        url: 'https://cnodejs.org/api/v1/topic/5433d5e4e737cbe96dcef312'
      })
      console.log('result => ', result)
    } catch (error) {
      console.error('error => ', error)
    }
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}

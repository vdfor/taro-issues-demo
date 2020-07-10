import React, { Component } from 'react';
import { View, Swiper, SwiperItem, Image } from '@tarojs/components';

const data = [
  { id: 0, url: 'https://img13.360buyimg.com/ling/jfs/t1/139024/36/900/347788/5ee9cc27Effb0c16b/ce004d13e1a1479c.png' },
  { id: 1, url: 'https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png' },
  { id: 2, url: 'https://img30.360buyimg.com/ling/jfs/t1/71910/7/14212/335822/5dba8942E897651f1/3a9d17f7f54b635e.jpg' },
  { id: 3, url: 'https://img20.360buyimg.com/ling/jfs/t1/117964/14/2118/145903/5e9eee0aE8897b3dd/bd435e6161779ad1.png' },
]

export default class Index extends Component {

  render() {
    return (
      <View>
        <Swiper circular>
          {data.map(({ id, url }) => (
            <SwiperItem key={id}>
              <Image src={url} mode="scaleToFill" />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}

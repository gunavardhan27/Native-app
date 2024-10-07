import { View, Text, FlatList } from 'react-native'
import React from 'react'

const Trending = ({posts}) => {
  return (
    <FlatList
    className='mt-5'
    data={posts}
    keyExtractor={(item)=>item.id}
    renderItem={({item})=>(
        <Text className='text-white text-3xl'>{item.id}</Text>
    )}
    horizontal
    />

  )
}

export default Trending
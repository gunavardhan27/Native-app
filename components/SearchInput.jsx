import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import {icons} from '../constants'
const SearchInput = ({otherStyles,value,handleChangeText}) => {
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <View className='border-black-200 bg-black-100 focus:border-secondary flex-row items-center justify-between
      px-4 h-16 rounded-xl'>

        <TextInput className='text-white' placeholder="Search for a video topic" onChangeText={handleChangeText}
         />

        <Image source={icons.search} resizeMode='contain' className='w-[20px]' />
      </View>
    </View>
  )
}

export default SearchInput
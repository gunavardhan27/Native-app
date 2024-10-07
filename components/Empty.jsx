import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '../constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'
const Empty = ({title,subtitle}) => {
  return (
    <View className='flex-col items-center justify-center'>
      <Image source={images.empty} resizeMode='contain' className='w-[215px] h-[215px] ' />
      <Text className='text-white font-pregular'>{title}</Text>
      <Text className='text-white text-xl font-psemibold mb-4'>{subtitle}</Text>
      <CustomButton 
      title='Create a post'
      containerStyles='mt-7'
      handlePress={()=>{router.push('/Create')}}
      />
    </View>
  )
}

export default Empty
import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
const SignIn = () => {
  return (
    <SafeAreaView className='bg-primary h-full w-full'>
      <ScrollView>
        <View className='w-full items-center justify-center min-h-[85vh] '>
          <Image source={images.logo} resizeMode='contain' className='w-[135px] h-[30px]' />
          <Text className='text-white font-psemibold text-xl mt-5'>Login In to Aora</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet,Text,View } from "react-native";
import {Link} from 'expo-router'
import {images} from '../constants'
export default function App(){
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height:'100%'}}>
        <View className='w-full items-center justify-start h-full px-4 py-3'>
          <Image 
          source={images.logo}
          resizeMode="contain"
          className='w-[130px] h-[84px]' />

          <Image source={images.cards}
          className='w-full h-[200px]' 
          resizeMode="contain"/>
          <View className='relative mt-5'>
            <Text className='text-3xl font-psemibold text-white text-center'>Discover Endless Possibilites with {' '} 
              <Text className='text-secondary-200'>
                 Aura
              </Text>
            </Text>
            <Image source={images.path} resizeMode="contain" className='w-[136px] -right-2 -bottom-8 h-15 absolute ' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

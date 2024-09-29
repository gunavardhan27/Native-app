import { Image, SafeAreaView, ScrollView, StyleSheet,Text,View } from "react-native";
import {StatusBar} from 'expo-status-bar'
import {Link, router} from 'expo-router'
import {images} from '../constants'
import CustomButton from "../components/CustomButton";
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
            <Image source={images.path} resizeMode="contain" className='w-[136px] -right-7 -bottom-3 h-4 absolute ' />
          </View>
          <Text className='mt-14 text-white font-pregular'>Where Creativity meets Innovation</Text>
          <CustomButton title='Continue with email'
          handlePress={()=>router.push('/SignIn')}
          containerStyles='w-full mt-7' />
        </View>
      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  )
}

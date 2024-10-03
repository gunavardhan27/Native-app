import { Image, SafeAreaView, ScrollView, StyleSheet,Text,View } from "react-native";
import {StatusBar} from 'expo-status-bar'
import {Link, Redirect, router} from 'expo-router'
import {images} from '../constants'
import CustomButton from "../components/CustomButton";
import { useUserStore } from "../store/Global";
import { getCurrentUser } from "../lib/appwrite";
import { useEffect } from "react";
export default function App(){
  useEffect(()=>{
    try{
      const user = getCurrentUser()
      if(user){
        setUser(user,true)
      }
    }catch(error){
      Alert.alert('Error','log the user in')
    }
  },[])
  const user = useUserStore((state)=>state.user)
  const setUser = useUserStore((state)=>state.setUser)
  if(user){
    return <Redirect href='/Home' />
  }
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

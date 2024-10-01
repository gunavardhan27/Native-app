import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
const SignUp = () => {
  const [form,setForm] = useState({
    username:'',
    email:'',
    password:''       
  })
  return (
    <SafeAreaView className='bg-primary h-full w-full px-2'>
      <ScrollView>
        <View className='w-full justify-center min-h-[55vh] '>
          <Image source={images.logo} resizeMode='contain' className='w-[135px] h-[30px]' />
          <Text className='text-white font-psemibold text-xl mt-5'>Sign Up to Aora</Text>
          <FormField title='username' value={form.username}
          handleChangeText={e=>{setForm(...form,{username:e})}}
          keyboardType='string'
          otherStyles='mt-7' />
          <FormField title='Email' value={form.email} 
          handleChangeText={e=>{setForm(...form,{email:e})}} 
          otherStyles='mt-7'
           keyboardType='email-address' />
          
          <FormField title='Password' value={form.password} 
          handleChangeText={e=>{setForm({...form,password:e})}} 
          otherStyles='mt-7'
           keyboardType='password' />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default SignUp
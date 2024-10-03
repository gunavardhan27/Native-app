import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import {Link, router} from 'expo-router'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { signIn } from '../../lib/appwrite'
const SignIn = () => {
  const [form,setForm] = useState({
    email:'',
    password:''       
  })
  const login = async ()=>{
    if(!form.email || !form.password){
      Alert.alert('Error','please fill all the fields')
    }
    try{
      await signIn(form.email,form.password)
      router.replace('/Home')
    }catch(error){
      throw new Error(error)
      Alert.alert('Error',)
    }
    
  }
  return (
    <SafeAreaView className='bg-primary h-full w-full px-2'>
      <ScrollView>
        <View className='w-full justify-center min-h-[55vh] '>
          <Image source={images.logo} resizeMode='contain' className='w-[135px] h-[30px]' />
          <Text className='text-white font-psemibold text-xl mt-5'>Login In to Aora</Text>
          <FormField title='Email' value={form.email} 
          handleChangeText={e=>{setForm({...form,email:e})}} 
          otherStyles='mt-7'
           keyboardType='email-address' />
          
          <FormField title='Password' value={form.password} 
          handleChangeText={e=>{setForm({...form,password:e})}} 
          otherStyles='mt-7'
           keyboardType='password' />

           <CustomButton title='Submit' containerStyles='mt-7' handlePress={login} />
          <Text className='text-white mt-9 text-center font-pmedium'>Doesnot have an account?</Text>
          <Link href='/sign-up' className='text-secondary-100 text-center font-psemibold'>SignUp</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
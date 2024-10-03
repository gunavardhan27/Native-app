import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import { Link, router } from 'expo-router'
import CustomButton from '../../components/CustomButton'
import { createUser } from '../../lib/appwrite'
const SignUp = () => {
  
  const [form,setForm] = useState({
    username:'',
    email:'',
    password:''       
  })
  const register = async () =>{
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error','fill all the fields')
    }
    try{
      const response = await createUser(form.email,form.password,form.username)
      router.replace('/Home')
    }catch(error){
      //Alert.alert('Error',error)
    }
  }
  return (
    <SafeAreaView className='bg-primary h-full w-full px-2'>
      <ScrollView>
        <View className='w-full justify-center min-h-[55vh] '>
          <Image source={images.logo} resizeMode='contain' className='w-[135px] h-[30px]' />
          <Text className='text-white font-psemibold text-xl mt-5'>Sign Up to Aora</Text>
          <FormField title='username' value={form.username}
          handleChangeText={e=>{setForm({...form,username:e})}}
          keyboardType='string'
          otherStyles='mt-7' />
          <FormField title='Email' value={form.email} 
          handleChangeText={e=>{setForm({...form,email:e})}} 
          otherStyles='mt-7'
           keyboardType='email-address' />
          
          <FormField title='Password' value={form.password} 
          handleChangeText={e=>{setForm({...form,password:e})}} 
          otherStyles='mt-7'
           keyboardType='password' />

          <CustomButton title='Submit' containerStyles='mt-7' handlePress={register} />
           <Text className='text-white mt-9 text-center font-pmedium'>Already have an account?</Text>
           <Link href='/SignIn' className='text-secondary-100 text-center font-psemibold'>Login</Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default SignUp
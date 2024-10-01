import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import {icons} from '../constants'
const FormField = ({title,value,handleChangeText,otherStyles,...props}) => {
    const [showPassword,setShowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className='text-white font-pbold'>{title}</Text>
      <View className='border-black-200 bg-black-100 focus:border-secondary items-center
      px-4 h-16 rounded-xl '>
        <TextInput className='text-white' value={value} onChangeText={handleChangeText}
        secureTextEntry={title==='Password' && !showPassword} />
        {title==='Password' && (
            <TouchableOpacity className='' onPress={()=>setShowPassword(d=>!d)}>
                {showPassword ? <Image source={icons.eyeHide} resizeMode='contain'
                className='w-[30px]  '
                 /> : <Image source={icons.eye} resizeMode='contain' />}
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
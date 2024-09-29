import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,handlePress,containerStyles,isLoading}) => {
  return (
    <TouchableOpacity 
    onPress={handlePress}
    activeOpacity={0.7}
    disabled={isLoading}
    className={`bg-secondary-200 p-2 rounded-xl ${containerStyles} ${isLoading ? 'opacity-50':''}`}>
        <Text className='text-center font-psemibold'>{title}</Text> 
    </TouchableOpacity>
  )
}

export default CustomButton
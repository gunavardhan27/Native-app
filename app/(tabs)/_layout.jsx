import { View, Text,Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {icons} from '../../constants'
const TabIcon = ({icon,color,name,focused})=>{
  return (
    <View className='flex flex-col items-center justify-center'>
      <Image source={icon} resizeMode='contain' tintColor={color} className='w-6 h-8' />
      <Text className={`${focused ? 'font-psemibold' : 'font-pregular'} text-xs text-center text-white`}>{name}</Text>
    </View>
  )
}
const TabLayout = () => {
  return (
    <>
      <Tabs screenOptions={{tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:'#161622'
        },
        tabBarActiveTintColor:'orange'
      }}>
        <Tabs.Screen name='Home' 
        options={
          {
            title:'Home',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon 
              icon = {icons.home}
              color={color}
              name='Home'
              focused={focused}
              />
            )
          }
        }
        />
        <Tabs.Screen name='BookMark' 
        options={
          {
            title:'BookMark',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon 
              icon = {icons.bookmark}
              color={color}
              name='BookMark'
              focused={focused}
              />
            )
          }
        }
        />
        <Tabs.Screen name='Create' 
        options={
          {
            title:'Create',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon 
              icon = {icons.plus}
              color={color}
              name='Create'
              focused={focused}
              />
            )
          }
        }
        />
        <Tabs.Screen name='Profile' 
        options={
          {
            title:'Profile',
            headerShown:false,
            tabBarIcon:({color,focused})=>(
              <TabIcon 
              icon = {icons.profile}
              color={color}
              name='Profile'
              focused={focused}
              />
            )
          }
        }
        />
      </Tabs>
    </>
  )
}

export default TabLayout
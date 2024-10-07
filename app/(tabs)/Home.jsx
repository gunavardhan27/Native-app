import { View, Text, FlatList, RefreshControl, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserStore } from '../../store/Global'
import { Image } from 'react-native'
import {images} from '../../constants'
import SearchInput from '../../components/SearchInput'
import Trending from '../../components/Trending'
import Empty from '../../components/Empty'
import { getAllPosts } from '../../lib/appwrite'
import useAppwrite from '../../lib/useAppwrite'
const Home = () => {
  const {posts,refetch} = useAppwrite(getAllPosts)
  console.log(posts,'divya')
  const dummyData = [{id:1},{id:2}] 
  const user = useUserStore((state)=>state.user)
  const [refreshing,setRefreshing] = useState(false)
  const onRefresh = ()=>{
    setRefreshing(true)
    refetch()
    //to load any new posts or images
    setRefreshing(false)
  }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <FlatList
      className='m-5'
      data={posts}
      keyExtractor={(item)=>item.title}
      renderItem={({item})=>(
        <Text className='text-3xl text-white'>{item.title}</Text>
      )}
      ListHeaderComponent={()=>(
        <View>
          <View className='flex-row items-center justify-between'>
            <View>
              <Text className='text-white font-pregular text-md'>Welcome Back</Text>
              <Text className='text-white font-pbold text-xl'>GunaV</Text>
            </View>
            <Image source={images.logoSmall} resizeMode='contain' className='w-[30px]' />
          </View>
        
            <SearchInput otherStyles='mb-7' placeholder='Search for a Video Topic' handleChangeText={()=>{}} />
          <View className='my-7'>
            <Text className='text-gray-100 w-full'>
              Latest Videos
            </Text>


            <Trending posts={dummyData ?? []} />
          </View>
          
        </View>
      )}
      ListEmptyComponent={()=>(
        <Empty title='no videos found' subtitle='Be the first one to upload' />
      )}
      />
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      
    </SafeAreaView>
  )
}

export default Home
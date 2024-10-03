import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useUserStore } from '../../store/Global'

const Home = () => {
  const user = useUserStore((state)=>state.user)
  return (
    <SafeAreaView>
      <FlatList
      className='m-5'
      data={[{id:1}]}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <Text className='text-3xl'>{item.id}</Text>
      )}
      ListHeaderComponent={()=>(
        <View>
          <Text>
            Welcome
          </Text>
          <Text>
          {user.email ? user.email:'div'}
          </Text>
        </View>
      )}
      />
    </SafeAreaView>
  )
}

export default Home
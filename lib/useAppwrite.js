import { useEffect, useState } from "react"
import { Alert } from "react-native"

const useAppwrite = async(fn)=>{
  const [posts,setPosts] = useState([])
  const fetchPosts = async ()=>{
    try{
      const posts = await fn()
      setPosts(posts)

    }catch(error){
      Alert.alert('Error',error.message)
    }
    
  }
  useEffect(()=>{
    
    fetchPosts()
  },[])
  const refetch = ()=>{
    fetchPosts()
  }
  return {posts,refetch}
}

export default useAppwrite
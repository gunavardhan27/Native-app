import { StatusBar, StyleSheet,Text,View } from "react-native";


export default function App(){
  return (
  <View style={styles.container}>
    <Text>Profile Page</Text>
    <StatusBar style='auto'></StatusBar>
  </View>
  )
}


const styles = StyleSheet.create({
    container:{
      flex:1, 
      alignItems:'center',
      justifyContent:'center',
      
    }
  })
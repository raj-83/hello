import { StyleSheet,Button, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation,route}) => {
    const {id,name} = route.params;
    console.log(route.params);
  return (
    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
      <Text style ={{fontSize:20,fontWeight:"500",marginBottom:10}}>Profile</Text>

         <Text style={styles.text}>id:{id},Name:{name}</Text>
      
      <Button title="Search" onPress={()=>navigation.navigate("Search")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
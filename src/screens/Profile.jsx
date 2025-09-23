import { StyleSheet,Button, Text, View } from 'react-native'
import React from 'react'

const Profile = ({navigation}) => {
  return (
    <View style={{width:"100%", height:"100%", justifyContent:"center", alignItems:"center"}}>
      <Text style ={{fontSize:20,fontWeight:"500",marginBottom:10}}>Profile</Text>
      <Button title="Search" onPress={()=>navigation.navigate("Search")}/>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})
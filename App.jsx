import { View, Text, StyleSheet, Image,  TouchableOpacity } from 'react-native';
import React from 'react';


const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'blue', fontSize: 20 }}>Apph</Text>
      <Text style={{ fontSize: 18 }}>raj</Text>
         <Text style={{ fontSize: 18 }}>Hello World</Text>

         <Image style={{width:100,height:100}} source={{uri:"https://images.unsplash.com/photo-1756043979844-3ee9c036ad2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
         <TouchableOpacity onPress={()=>alert("Image Clicked")}>
         <Image style={{width:100,height:100,marginTop:20}} source={{uri:"https://images.unsplash.com/photo-1756043979844-3ee9c036ad2f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}}/>
         </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               // make it full screen
    backgroundColor: 'white', // set background color
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;

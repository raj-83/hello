import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Search from './src/screens/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const stack = createNativeStackNavigator();

const StackNavigator = () => {
  return(
    <stack.Navigator initialRouteName='Home'

      scrrenOptions ={{
        headerStyle:{
          backgroundColor:"yellow"
        }
      }}
>  
       <stack.Screen 
        name="Search"
         component={Search} 
         options ={{headerShown:false}}
         /> 

      <stack.Screen 
      name="Home" 
      component={Home} 
       options ={{title:"Home Screen",headerStyle:{backgroundColor:"red"}}}
      />

         <stack.Screen 
     name="Profile"
      component={Profile} 
      /> 

    </stack.Navigator>
  )
}

const App = () => {
  return (
     <NavigationContainer>
     <StackNavigator />
     </NavigationContainer> 
  )
}

export default App

const styles = StyleSheet.create({})
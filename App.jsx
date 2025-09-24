import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'
import Search from './src/screens/Search'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigator = () => {
  return (
    <stack.Navigator initialRouteName='Home'

      scrrenOptions={{
        headerStyle: {
          backgroundColor: "yellow"
        }
      }}
    >
      <stack.Screen
        name="Search"
        component={Search}
        options={{ headerShown: false }}
      />

      <stack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home Screen", headerStyle: { backgroundColor: "Blue" } }}
      />

      <stack.Screen
        name="Profile"
        component={Profile}
      />

    </stack.Navigator>
  )
}

function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Home'
      screenOptions={{  
        
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 12

         },
         tabBarStyle: {  height: 60}

      }}
     //now icons can be added with react-native-vector-icons package
     
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options ={{tableActiveintColor:"purple"}}

      />
      <Tab.Screen
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        name="Search"
        component={Search}
      />

    </Tab.Navigator>
  );
}
const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
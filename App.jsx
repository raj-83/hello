import { StyleSheet, Text, View } from 'react-native'
import Home from './src/screens/Home'
import React from 'react'

const stack = createNativeStackNavigator();

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Home />

    </View>
  )
}

export default App

const styles = StyleSheet.create({})
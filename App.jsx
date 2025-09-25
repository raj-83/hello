// import { StyleSheet, Text, View } from 'react-native'
// import Home from './src/screens/Home'
// import Profile from './src/screens/Profile'
// import Search from './src/screens/Search'
// import { createNativeStackNavigator } from '@react-navigation/native-stack'

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native'
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// const stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// const StackNavigator = () => {
//   return (
//     <stack.Navigator initialRouteName='Home'

//       scrrenOptions={{
//         headerStyle: {
//           backgroundColor: "yellow"
//         }
//       }}
//     >
//       <stack.Screen
//         name="Search"
//         component={Search}
//         options={{ headerShown: false }}
//       />

//       <stack.Screen
//         name="Home"
//         component={Home}
//         options={{ title: "Home Screen", headerStyle: { backgroundColor: "Blue" } }}
//       />

//       <stack.Screen
//         name="Profile"
//         component={Profile}
//       />

//     </stack.Navigator>
//   )
// }

// function TabNavigator() {
//   return (
//     <Tab.Navigator initialRouteName='Home'
//       screenOptions={{  
        
//         tabBarActiveTintColor: 'tomato',
//         tabBarInactiveTintColor: 'gray',
//         tabBarLabelStyle: { fontSize: 12

//          },
//          tabBarStyle: {  height: 60}

//       }}
     
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options ={{tableActiveintColor:"purple"}}

//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//       />
//       <Tab.Screen
//         name="Search"
//         component={Search}
//       />

//     </Tab.Navigator>
//   );
// }
// const App = () => {
//   return (
//     <NavigationContainer>
//       {/* <StackNavigator /> */}
//       <TabNavigator />
//     </NavigationContainer>
//   )
// }

// export default App

// const styles = StyleSheet.create({})

import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import { configureStore, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return await response.json();
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { list: [], loading: false },
  reducers: {
    removeUser: (state, action) => {
      state.list = state.list.filter(user => user.id !== action.payload);
    },
    addUser: (state, action) => {
      state.list.push({ id: Date.now(), name: action.payload });
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, state => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, state => {
        state.loading = false;
      });
  },
});

const { removeUser, addUser } = usersSlice.actions;

const store = configureStore({ reducer: { users: usersSlice.reducer } });

const UserList = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector(state => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1 }}>
          <Text>{item.name}</Text>
          <Button title="Remove" onPress={() => dispatch(removeUser(item.id))} />
        </View>
      )}
      ListFooterComponent={
        <Button title="Add User" onPress={() => dispatch(addUser("New User"))} />
      }
    />
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, marginTop: 50 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>
          Users List
        </Text>
        <UserList />
      </View>
    </Provider>
  );
};

export default App;



import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Decks from './Decks'
const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
      <View>
        <Text>Dashboard</Text>
      </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})


// <Drawer.Navigator>
      //   <Drawer.Screen 
      //     key={'decks'}
      //     name={' '}
      //     component={Decks}
      //     options={{headerShown:false}}
      //      />
      // </Drawer.Navigator>
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Howto from '../screens/howto1';
import Splash from '../screens/Splash';
import Dashboard from '../screens/dashboard';
import Decks from '../screens/Decks';
import TiltHandler from '../screens/TiltHandler';
import Details from '../screens/Details';
const Stack = createNativeStackNavigator();

const authNav = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="howto1" component={Howto} options={{headerShown:false}}/>
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>
          <Stack.Screen name="Decks" component={Decks} options={{headerShown:false}}/>
          <Stack.Screen name="TiltHandler" component={TiltHandler} options={{headerShown:false}}/>
          <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        </Stack.Navigator>
      );
}

export default authNav;

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Howto from '../screens/howto1';
import Splash from '../screens/Splash';
const Stack = createNativeStackNavigator();

const authNav = () => {
    return (
        <Stack.Navigator initialRouteName='Splash'>
          <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          <Stack.Screen name="howto1" component={Howto} />
          <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
        </Stack.Navigator>
      );
}

export default authNav;

const styles = StyleSheet.create({})
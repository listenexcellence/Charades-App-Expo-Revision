import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AuthNav from './src/navigation/authNav';

export default function App() {
  const [visibleStatusBar, setvisibleStatusBar] = useState(true);
  
  return (
    
    <NavigationContainer style={styles.container}>
      <AuthNav />
      <StatusBar hidden={visibleStatusBar} />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

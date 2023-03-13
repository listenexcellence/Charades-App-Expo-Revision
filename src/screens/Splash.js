import { setStatusBarHidden, StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
} from 'react-native';
import { useFonts } from 'expo-font';

const Splash = ({ navigation }) => {
    const image = require('../../assets/loading.png');
    const text = require('../../assets/text1.png');
    const [loaded] = useFonts({
        Montserrat: require('./../../assets/fonts/Montserrat-Regular.ttf'),
        MontserratBold: require('./../../assets/fonts/Montserrat-Bold.ttf'),
        African: require('./../../assets/fonts/African.ttf')
      });
      
      if (!loaded) {
        return null;
      }
      setTimeout(()=> {
        navigation.replace('Home')
      },10000);
      
      return(
        <ImageBackground source={image} style={styles.container}>
            <View style={styles.mid}>
                <Image source={text} style={styles.mainText1}/>
            </View>
            <View style={styles.container1}>
            </View>
            <View style={styles.container3}>
                  <Text style={styles.text1}>© 2023</Text>
                </View>
        </ImageBackground>
      );
}

export default Splash;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      container3: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingTop: 15,
        width: '80%',
      },
      mid: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      boldText: {
        color: 'white',
        fontFamily: 'MontserratBold',
        fontSize: 16,
      },
      container1: {
        flex: 0.5,
        alignItems: 'flex-end',
        flexDirection: 'row',
        padding: 10,
        bottom: 20,
      },
      mainText1: {
        resizeMode: 'contain',
        width: 900,
        height: 100,
      },
      mainText: {
        color: '#fff',
        fontFamily: 'Montserrat',
        paddingBottom: 5,
      },
      text1: {
        color: '#fff',
        fontFamily: 'MontserratBold',
        fontSize: 15,
        textTransform: 'uppercase',
        opacity: 0.7,
    },
});
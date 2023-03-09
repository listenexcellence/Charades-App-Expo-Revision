import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const Home = ({ navigation }) => {
    const image = require('../../assets/background.png');
    const text = require('../../assets/text1.png'); 
    const [loaded] = useFonts({
      Montserrat: require('./../../assets/fonts/Montserrat-Regular.ttf'),
      MontserratBold: require('./../../assets/fonts/Montserrat-Bold.ttf'),
      MontserratEBold: require('./../../assets/fonts/Montserrat-ExtraBold.otf'),
      African: require('./../../assets/fonts/African.ttf')
    });
    
    if (!loaded) {
      return null;
    }
  return (
    <ImageBackground source={image} style={styles.container}>
            <View style={styles.mid}>
                <Image source={text} style={styles.mainText1}/>
            </View>
            <View style={styles.container1}>
                <View style={styles.buttonCon}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
                        <Text style={styles.text}>Play</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert('Hello Bigga')} style={styles.button}>
                        <Text style={styles.text}>How To Play</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCon}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.text}>Rate The Game</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container3}>
                  <Text style={styles.text1}>© 2023</Text>
                </View>
            </View>
            
        </ImageBackground>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      },
      container1: {
        height: 150,
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      container3: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingTop: 15,
      },
      buttonCon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 11,
      },
      button: {
        backgroundColor: '#205885',
        width: '47.5%',
        paddingVertical: 20,
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: 'rgba(80, 80, 80, 0.18)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
      },
      mainText1: {
        resizeMode: 'contain',
        width: 400,
        height: 100,
      },
    text: {
        color: '#fff',
        fontFamily: 'MontserratEBold',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
    text1: {
      color: '#fff',
      fontFamily: 'MontserratBold',
      fontSize: 15,
      textTransform: 'uppercase',
      opacity: 0.7,
  },
})
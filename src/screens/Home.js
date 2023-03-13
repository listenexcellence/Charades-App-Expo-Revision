import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('screen');

const Home = ({ navigation }) => {
    const image = require('../../assets/backgroundd.png');
    const text = require('../../assets/text1.png'); 
    const icon = require('../../assets/play.png'); 
    const icon2 = require('../../assets/howT.png'); 
    const icon3 = require('../../assets/sup.png'); 
    const icon4 = require('../../assets/rate.png'); 
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
                    <TouchableOpacity onPress={() => navigation.navigate('Decks')} style={styles.button}>
                      <Image source={icon} style={styles.iconImg} />
                        <Text style={styles.text}>Play Now</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('howto1')} style={styles.button}>
                    <Image source={icon2} style={styles.iconImg} />
                        <Text style={styles.text}>How To Play</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCon}>
                    <TouchableOpacity onPress={() => navigation.navigate('TiltHandler')} style={styles.button}>
                    <Image source={icon3} style={styles.iconImg} />
                        <Text style={styles.text}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                    <Image source={icon4} style={styles.iconImg} />
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
        width,
        height,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
      },
      container1: {
        height: 150,
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 5,
      },
      container3: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingTop: 15,
      },
      buttonCon: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 12,
      },
      button: {
        display: 'flex',
        backgroundColor: '#D18A1A',
        borderColor: 'rgba(255, 250, 189, 0.6)',
        borderWidth: '6px',
        width: '46.5%',
        paddingVertical: 10,
        borderRadius: 15,
        alignItems: 'center',
        shadowColor: 'rgba(80, 80, 80, 0.18)',
        shadowOpacity: 1,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
  iconImg: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
})
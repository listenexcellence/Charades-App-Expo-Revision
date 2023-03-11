import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'
import { useFonts } from 'expo-font';

const {width, height} = Dimensions.get('screen');

export default function Decks() {
    const image = require('../../assets/backgroundGame.png');
    const side = require('../../assets/sidebar.png');
    const avatar = require('../../assets/avatar.png');
    const home = require('../../assets/homeIcon.png');
    const premium = require('../../assets/premium.png');
    const decks = require('../../assets/decks.png');
    const profile = require('../../assets/profile.png');
    const memories = require('../../assets/memories.png');
    const ads = require('../../assets/ads.png');
    const support = require('../../assets/sup.png');
    const rate = require('../../assets/rate.png');
    const text = require('../../assets/text1.png');
    const coin = require('../../assets/coin.png');
    const premAd = require('../../assets/premAD.png');
    const music = require('../../assets/music.png');
    const places = require('../../assets/places.png');
    const history = require('../../assets/history.png');
    const food = require('../../assets/food.png');

    const [loaded] = useFonts({
        Futura: require('./../../assets/fonts/futura.ttf'),
        FuturaBold: require('./../../assets/fonts/FuturaBold.ttf'),
        FuturaBook: require('./../../assets/fonts/FuturaBook.ttf'),
        African: require('./../../assets/fonts/African.ttf')
      });
      
      if (!loaded) {
        return null;
      }
  return (
    <ImageBackground source={image} style={styles.container}>
        {/* The fisrt View */}
        <ImageBackground source={side} style={styles.sidebar}>
            <ScrollView>
                <View style={styles.signInView}>
                    <Image source={avatar} style={styles.signInImage} />
                    {/* This sign in text is just a placeholder for when the user logs in. His actual name/gamer tag is supposed to show here and avatar too */}
                    <Text style={styles.signInText}>Sign In</Text>
                </View>
                <View>
                    <Text style={styles.subText}>Main</Text>
                    <TouchableOpacity style={styles.touchableStuffActive}>
                        <Image source={home} style={styles.Image} />
                        <Text style={styles.Text}>Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={premium} style={styles.Image} />
                        <Text style={styles.Text}>Premium</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={decks} style={styles.Image} />
                        <Text style={styles.Text}>My Decks</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subText}>Profile & You</Text>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={profile} style={styles.Image} />
                        <Text style={styles.Text}>Profile</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={memories} style={styles.Image} />
                        <Text style={styles.Text}>Memories</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subText}>Extras</Text>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={ads} style={styles.Image} />
                        <Text style={styles.Text}>No Ads</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={support} style={styles.Image} />
                        <Text style={styles.Text}>Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.touchableStuff}>
                        <Image source={rate} style={styles.Image} />
                        <Text style={styles.Text}>Rate Us!</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.subText}>
                        Made with Love by TheTrybeCo. 2023
                    </Text>
                </View>
            </ScrollView>
        </ImageBackground>
        {/* The Second View */}
        <View style={styles.container2}>
            <ScrollView>
                {/* The Fisrt Head View */}
                <View style={styles.headView}>
                    <Image style={styles.ImageHead} source={text} />
                    <View style={styles.coinView}>
                        <Image style={styles.Image2} source={coin} />
                        <Text style={styles.CoinText}>99999</Text>
                    </View>
                </View>
                {/* The image card View */}
                <View style={styles.secondView}>
                    <ImageBackground resizeMode='stretch' source={premAd} style={styles.ImageAd}>
                        <Text style={styles.AdText}>
                            Collect & Play Our {"\n"}Exclusive Decks!
                        </Text>
                        <Text style={styles.AdSubText}>
                        These Decks are superb and affordable they are totally different from the town hall in BLAH-LAH-BLU!
                        </Text>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.BtnText}> View Decks</Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </View>
                {/* The rewards card View */}
                <View style={styles.rewardsView}>
                    {/* First Card */}
                    <View style={styles.card}>
                        <View style={styles.cardHead}>
                            <Text style={styles.CardHeadText}>
                                Daily Login Bonus
                            </Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.CardText}>
                                Text is supposed to be here. And a design for the back too.
                            </Text>
                        </View>
                    </View>
                    {/* Second Card */}
                    <View style={styles.card}>
                        <View style={styles.cardHead}>
                            <Text style={styles.CardHeadText}>
                                Daily Task
                            </Text>
                        </View>
                        <View style={styles.cardBody}>
                            <Text style={styles.CardText}>
                                There are no tasks available now. Check back later.
                            </Text>
                        </View>
                    </View>
                </View>
                {/* My decks, All decks available for free */}
                <View style={styles.Mydecks}>
                    <View style={styles.deckHead}>
                        <Text style={styles.deckHeadText}>
                            My Decks
                        </Text>
                        <Text style={styles.deckHeadLink}>
                            See All
                        </Text>
                    </View>
                    <View style={styles.deckHead}>
                        <Image style={styles.deckImage} source={music}/>
                        <Image style={styles.deckImage} source={places}/>
                        <Image style={styles.deckImage} source={history}/>
                        <Image style={styles.deckImage} source={food}/>
                    </View>
                </View>
                {/* Premium decks, Available for a fee */}
                <View style={styles.Mydecks}>
                    <View style={styles.deckHead}>
                        <Text style={styles.deckHeadText}>
                            Premium Decks
                        </Text>
                        <Text style={styles.deckHeadLink}>
                            See All
                        </Text>
                    </View>
                    <View style={styles.deckHead}>
                        <Image style={styles.deckImage} source={music}/>
                        <Image style={styles.deckImage} source={places}/>
                        <Image style={styles.deckImage} source={history}/>
                        <Image style={styles.deckImage} source={food}/>
                    </View>
                </View>
            </ScrollView>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'flex-start',
        flexDirection: 'row',
      },
      //   BEGINNING OF FIRST VIEW STYLING
    sidebar: {
        height,
        paddingVertical: 10,
        width: 160,
        marginRight: 0,
      },
    signInView: {
        borderWidth: 1,
        borderColor: 'rgba(209, 138, 26, 1)',
        borderRadius: 20,
        width: 150,
        paddingVertical: 0,
        backgroundColor: 'rgba(238, 229, 137, 0.3)',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5,
      },
    signInText: {
        color: '#fff',
        paddingHorizontal: 10,
        fontFamily: 'FuturaBook',
        fontSize: 16,
      },
    signInImage: {
        height: 40,
        width: 40,
      },
    subText: {
        color: 'rgba(255, 255, 255, 0.5)',
        padding: 10,
      },
      touchableStuff: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
      },
      Text: {
        color: '#fff',
        paddingHorizontal: 10,
        fontFamily: 'FuturaBook',
        fontSize: 16,
      },
      Image: {
        height: 24,
        width: 24,
        marginLeft: 10,
      },
      touchableStuffActive: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: "rgba(209, 138, 26, 1)",
      },
    //   BEGINNING OF SECOND VIEW STYLING
      container2: {
        height,
        paddingHorizontal: 10,
        alignItems: 'flex-end',
        width: '77%',
        overflow: 'hidden'
      },
      headView: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 15,
        justifyContent: 'flex-end',
        width: '100%',
      },
      coinView: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      CoinText: {
        color: '#fff',
        paddingHorizontal: 10,
        fontFamily: 'FuturaBold',
        fontSize: 16,
      },
      Image2: {
        height: 25,
        width: 25,
        marginLeft: 10,
      },
      ImageHead: {
        width: 300,
        height: 100,
        resizeMode: 'contain',
        borderColor: '#333',
      },
      secondView: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'flex-end',
        width: '100%',
        paddingHorizontal: 1,
        paddingBottom: 20,
      },
      ImageAd: {
        height: 205,
        width: '97%',
        paddingVertical: 30,
      },
      AdText: {
        color: '#fff',
        paddingHorizontal: 20,
        fontFamily: 'Futura',
        fontSize: 20,
        paddingBottom: 5,
      },
      AdSubText: {
        color: '#fff',
        fontFamily: 'FuturaBook',
        fontSize: 16,
        paddingHorizontal: 20,
        paddingBottom: 5,
      },
      BtnText: {
        color: '#fff',
        fontFamily: 'FuturaBook',
        fontSize: 16,
      },
      button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        backgroundColor: "rgba(209, 138, 26, 1)",
        width: '30%',
        marginLeft: 20,
        borderRadius: 10
      },
      //   BEGINNING OF DAILY BONUS STYLING
      rewardsView: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        borderRadius: 10,
        paddingBottom: 20,
      },
      card: {
        flexDirection: 'column',
      },
      cardHead: {
        backgroundColor: 'rgba(209, 138, 26, 1)',
        width: 220,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
      },
      cardBody: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        width: 220,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
      },
      CardHeadText: {
        color: '#fff',
        fontFamily: 'FuturaBold',
        fontSize: 16,
        paddingVertical: 10,
      },
      CardText: {
        color: '#fff',
        fontFamily: 'Futura',
        fontSize: 18,
        paddingHorizontal: 10,
        textAlign: 'center',
      },
      Mydecks: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 20,
      },
      deckHead: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      deckHeadText: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Futura',
        paddingBottom: 10
      },
      deckHeadLink: {
        color: 'rgba(238, 229, 137, 1)',
        fontSize: 16,
      },
      deckImage: {
        width: 110,
        height: 150,
      },
})
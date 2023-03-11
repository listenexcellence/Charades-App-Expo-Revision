import { ImageBackground, StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen');

export default function Decks() {
    const image = require('../../assets/backgroundGame.png');
    const side = require('../../assets/sidebar.png');
  return (
    <ImageBackground source={image} style={styles.container}>
        {/* The fisrt View */}
        <ImageBackground source={side} style={styles.sidebar}>
            <View>
                <Text>Sign In</Text>
            </View>
            <View>
                <Text>Main</Text>
                <TouchableOpacity>
                    <Text>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Premium</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>My Decks</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Profile & You</Text>
                <TouchableOpacity>
                    <Text>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Memories</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text>Extras</Text>
                <TouchableOpacity>
                    <Text>No Ads</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Support</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>Rate Us!</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
        {/* The Second View */}
        <View>
            <ScrollView>
                {/* The Fisrt Head View */}
                <View>
                    <Image />
                    <View>
                        <Image />
                        <Text>9999</Text>
                    </View>
                </View>
                {/* The image card View */}
                <ImageBackground>
                    <Text>
                        Content Blahh Blahh
                    </Text>
                    <Text>
                        more content stuff
                    </Text>
                    <TouchableOpacity>
                        <Text> View Decks</Text>
                    </TouchableOpacity>
                </ImageBackground>
                {/* The rewards card View */}
            </ScrollView>
        </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    container: {
        width,
        height,
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
      sidebar: {
        height,
        padding: 20,
      }
      
})
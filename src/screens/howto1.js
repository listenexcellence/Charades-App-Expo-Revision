import { StyleSheet, Text, ImageBackground, FlatList, View } from 'react-native'
import React from 'react';
import Slides from '../data';
import Howto2 from './howto2';
import Howto3 from './howto3';

const Howto1 = () => {
  const image = require('../../assets/backgroundd.png');
  return (
    <ImageBackground source={image} style={styles.container}>
      <View>
        <Text style={{position: 'absolute', left: -300, top: 20, color: '#FFF', fontSize: 30,}}>X</Text>
      </View>
      <FlatList data={Slides} renderItem={({item}) => <Howto2 item={item} />} horizontal pagingEnabled snapToAlignment='center' showsHorizontalScrollIndicator={false} />   
      <Howto3 data={Slides} />
    </ImageBackground>
  )
}

export default Howto1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
import { StyleSheet, Text, ImageBackground, FlatList, View, Alert } from 'react-native'
import React from 'react';
import Slides from '../data';
import Howto2 from './howto2';
import Howto3 from './howto3';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Howto1 = () => {
  const image = require('../../assets/backgroundd.png');
  return (
    <ImageBackground source={image} style={styles.container}>
      <TouchableOpacity onPress={() => Alert.alert('Prewsed')} style={{position: 'absolute', left: -300, top: 20, zIndex: 999, backgroundColor: '#333'}}>
        <Text style={{color: '#FFF', fontSize: 30, zIndex: 999}}>X</Text>
      </TouchableOpacity>
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
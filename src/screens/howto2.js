import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const {width, height} = Dimensions.get('screen');
const Howto2 = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode="contain" style={styles.img} />
    </View>
  )
}

export default Howto2

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  img: {
    flex: 0.7,
    width: '100%',
    },
    content: {
      flex: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      color: '#fff',
      fontFamily: 'African',
      fontSize: 46,
      width: '60%',
      textAlign: 'center',
    },
})
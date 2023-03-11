import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Howto3 = ({data}) => {
  return (
    <View style={styles.container}>
      {data.map((_, idx) => {
        return <View key={idx.toString()} style={styles.dot} />;
      })}
    </View>
  )
}

export default Howto3

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '20%'
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
  }
})
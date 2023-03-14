import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react';

export default function Details({ route, navigation }) {
    const {item} = route.params;

  return (
    <View style={styles.container}>
        <ScrollView>
            <Image source={item.image} />
            <Text>{item.description}</Text>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, 

})
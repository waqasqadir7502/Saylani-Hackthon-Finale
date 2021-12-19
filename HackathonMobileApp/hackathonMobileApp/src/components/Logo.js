import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo() {
  return <Image source={require('../assets/logo.jpg')} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    // marginBottom : 20,
    width: 110,
    height: 110,
    marginBottom: 8,
    borderRadius : 50
  },
})

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'

export const CircleImage = ({uri, personalStyle}) => {
  return (
    <Image
      source={{uri}}
      style={{...styles.image,...personalStyle}}
    />
  )
}

const styles = StyleSheet.create({
  image:{
    width: 57,
    height: 57,
    borderRadius: 60,
    marginRight: 10
  }
})
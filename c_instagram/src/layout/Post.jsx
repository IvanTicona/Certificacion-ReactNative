import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderPostComponent } from '../components/posts/HeaderPostComponent'

export const Post = () => {
  return (
    <View style={{flex: 1}}>
      <HeaderPostComponent/>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
  },
})


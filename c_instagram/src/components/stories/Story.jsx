import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import iconLogo from '../../assets/icon.png'

export const Story = ({dataStory}) => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={{uri: dataStory.image}} style={styles.story} />
      <Text style={styles.text}>{dataStory.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  story:{
    marginHorizontal: 5,
    width: 70,
    height: 70,
    borderRadius: 50,
    borderColor: 'green',
    borderWidth: 3
  },
  text:{
    color: 'white',
    paddingTop: 5
    // fontWeight: '500'
  }
})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CircleImage } from "../common/CircleImage"

const imageProfile = "https://randomuser.me/api/portraits/thumb/men/75.jpg"

export const HeaderPostComponent = () => {
  return (
    <View style={styles.header}>
      <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <CircleImage uri={imageProfile} personalStyle={styles.personalStyle}/>
        <Text style={styles.text}>Username</Text>
      </View>
      <Text style={styles.text}>...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    color: 'white',
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 5
  },
  personalStyle:{

  }
})
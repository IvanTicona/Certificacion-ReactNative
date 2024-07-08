import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import logo from '../assets/logo.png'
import Icon from 'react-native-vector-icons/FontAwesome5'

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.image}/>
      <View style={styles.iconContainer}>
        <View style={styles.hearts}>
        </View>
        <Icon name='heart' size={25} color="white" />
        <View style={styles.unReadContainer}>
          <Text style={styles.unRead}>12</Text>
        </View>
        <Icon name='facebook-messenger' size={25} color="white" />
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  text:{
    color: 'white'
  },
  image:{
    width: 150,
    height: 45
  },
  iconContainer:{
    flexDirection: 'row',
    gap: 25
  },
  unRead:{
    color: 'white',
    fontSize: 13,
    fontWeight:'500',
    textAlign: 'center'
  },
  hearts:{
    backgroundColor: 'red',
    borderRadius: 8,
    width: 14,
    height: 14,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 17,
    borderWidth: 3,
    borderColor: 'black',
    bottom: 35,
    zIndex: 10
  },
  unReadContainer:{
    backgroundColor: 'red',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 55,
    bottom: 35,
    zIndex: 10
  }
});


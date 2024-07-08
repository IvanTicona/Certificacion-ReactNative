import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'

export const Footer = () => {
  return (
    <View style={styles.footer}>
      <Icon name='house' size={25} color={'white'}/>
      <Icon name='magnifying-glass' size={25} color={'white'}/>
      <Icon name='plus' style={{borderWidth: 2, borderColor: 'white', borderRadius: 7, padding: 3}} size={17} color={'white'}/>
      <Icon name='clapperboard' size={25} color={'white'}/>
      <Icon name='user' size={25} color={'white'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  footer:{
    borderTopWidth: 1,
    borderTopColor: 'grey',
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: '100%',
    height: 50,
    alignItems:'center',
    justifyContent: 'space-evenly'
  }
});
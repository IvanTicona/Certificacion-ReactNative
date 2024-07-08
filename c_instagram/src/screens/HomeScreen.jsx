import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { Header } from '../layout/Header';
import { Stories } from '../layout/Stories';
import { Footer } from '../layout/Footer';
import { Divider } from 'react-native-elements';
import { Post } from '../layout/Post';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      <Stories/>
      <Divider style={styles.divider}/>
      <Post/>
      <Footer/>
    </SafeAreaView> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 50
  },
  divider:{
    marginVertical: 5
  }
});
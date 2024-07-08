import React, { useEffect, useState } from 'react'
import { Image, ScrollView, StyleSheet, Text } from 'react-native'
import { Story } from '../components/stories/Story'
import { stories } from '../data/stories';
import { Divider } from 'react-native-elements';

export const Stories = () => {

  const [storyData, setStoryData] = useState([]);
  useEffect(() => {
    setStoryData(stories);
  }
  ,[])
  return (
    <ScrollView horizontal style={styles.stories}>
      {
        storyData.map((story, index) => (
          <Story key={index} dataStory={story} />
        ))
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  stories:{
    paddingHorizontal: 10,
    // borderColor: 'green',
    // borderWidth: 2,
    maxHeight: 100
  }
});
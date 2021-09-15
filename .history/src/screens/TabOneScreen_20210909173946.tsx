import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.name}>Vadim</Text>
        <Text style={styles.time}>11:11 AM</Text>
      </View>
      <Text style={styles.text}>Hi There!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 100,
    width: 100,
  },
  name: {},
  time: {},
  text: {
    fontSize: 30,
    color: '#9078',
  },
})

export default TabOneScreen

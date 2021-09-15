import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
        }}
        style={styles.image}
      />
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#56078d',
  },
  container: {},
  image: {
    height: 100%
  }
})

export default TabOneScreen

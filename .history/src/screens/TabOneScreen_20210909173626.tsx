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
        <Text>Vadim</Text>
        <Text>11:11 AM</Text>
      </View>
      <Text>Hi There!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 100,
    width: 100,
  },
})

export default TabOneScreen

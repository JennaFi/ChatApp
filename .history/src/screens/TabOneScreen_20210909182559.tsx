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
        <View style={styles.row}>
          <Text style={styles.name}>Vadim</Text>
          <Text style={styles.time}>11:11 AM</Text>
        </View>
        <Text style={styles.text}>Hi There!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    padding: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    // width: 200,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'red',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  name: {},

  text: {
    fontSize: 30,
    color: '#9078',
  },
  time: {
    fontSize: 30,
    color: '#9078',
  },
})

export default TabOneScreen

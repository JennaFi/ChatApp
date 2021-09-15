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
          <Text style={styles.text}>11:11 AM</Text>
        </View>
        <Text style={styles.text}>Hi There!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',

    padding: 10,
  },
  row: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-between',

    backgroundColor: 'red',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginRight: 10,
  },

  name: {
    fontWeight: 'bold',
  },

  text: {
    color: 'grey',
  },
})

export default TabOneScreen
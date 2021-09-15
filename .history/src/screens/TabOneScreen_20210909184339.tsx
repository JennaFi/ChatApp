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
      <View style={styles.box}>
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
  box: {
    flex: 1,

    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',

    justifyContent: 'space-between',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  text: {
    color: 'grey',
  },
})

export default TabOneScreen

import React from 'react'
import { StyleSheet, View } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem'

const TabOneScreen = () => {
  return (
    <View style={styles.page}>
      <ChatRoomItem />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default TabOneScreen

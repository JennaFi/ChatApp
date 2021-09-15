import chatRoomsData from '..assets/dummy-data/ChatRooms'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import ChatRoomItem from '../components//ChatRoomItem'

const chatRoom1 = chatRoomsData[0]
const chatRoom2 = chatRoomsData[1]

const TabOneScreen = () => {
  return (
    <View style={styles.page}>
      <ChatRoomItem chatRoom={chatRoom1} />
      <ChatRoomItem chatRoom={chatRoom2} />
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

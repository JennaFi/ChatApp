import React from 'react'
import { StyleSheet, View } from 'react-native'
import chatRoomData from '../assets/dummy-data/Chats'
import Message from '../components/Message/Message'

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <Message message={chatRoomData.messages[3]}/>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1
    
  }
})

export default ChatRoomScreen

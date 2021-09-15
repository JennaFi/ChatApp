import React from 'react'
import { StyleSheet, View } from 'react-native'
import Message from '../components/Message/Message'

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <Message />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    
  }
})

export default ChatRoomScreen

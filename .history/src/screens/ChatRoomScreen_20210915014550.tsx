import { useRoute } from '@react-navigation/core'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import chatRoomData from '../assets/dummy-data/Chats'
import Message from '../components/Message/Message'
import MessageInput from '../components/MessageInput/MessageInput'

const ChatRoomScreen = () => {
  const route = useRoute()
  console.warn('Displaying chat room: ', route.params?.id)
  return (
    <SafeAreaView style={styles.page}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <Message message={item} />}
        inverted
      />
      <MessageInput />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
})

export default ChatRoomScreen

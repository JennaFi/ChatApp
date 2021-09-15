import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import chatRoomData from '../assets/dummy-data/Chats'
import Message from '../components/Message/Message'

const ChatRoomScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList data={chatRoomData.messages} renderItem={({item}) => <Message message={item}/>} />


      
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

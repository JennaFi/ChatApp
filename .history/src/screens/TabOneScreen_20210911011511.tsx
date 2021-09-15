import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native'
import chatRoomsData from '../assets/dummy-data/ChatRooms'
import ChatRoomItem from '../components//ChatRoomItem'

const TabOneScreen = () => {
  return (
    <View style={styles.page}>
      <SafeAreaView>
        <FlatList
          data={chatRoomsData}
          renderItem={({ item }) => <ChatRoomItem chatRoom={item} />}
        />
      </SafeAreaView>
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

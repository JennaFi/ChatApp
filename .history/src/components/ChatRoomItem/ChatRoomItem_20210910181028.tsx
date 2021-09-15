import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const ChatRoomItem = (props: { chatRoom: any }) => {
  const { chatRoom } = props

  const user = chatRoom.users[1]
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.image}
        />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>5</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>11:11 AM</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default ChatRoomItem

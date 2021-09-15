import React from 'react'
import { Image, Text, View } from 'react-native'
import styles from './styles'

const ChatRoomItem = (props: { chatRoom: any }) => {
  const { chatRoom } = props
  return (
    <View>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg',
          }}
          style={styles.image}
        />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>5</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.name}>Vadim</Text>
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

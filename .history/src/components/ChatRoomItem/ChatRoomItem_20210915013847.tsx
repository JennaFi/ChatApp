import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import styles from './styles'

const ChatRoomItem = (props: { chatRoom: any }) => {
  const { chatRoom } = props

  const user = chatRoom.users[1]

  const navigation = useNavigation()

  const onPress = () => {
    navigation.navigate('ChatRoom')
    console.warn('pressed')
  }
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: user.imageUri,
          }}
          style={styles.image}
        />

        {chatRoom.newMessages && (
          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
          </View>
        )}
        <View style={styles.box}>
          <View style={styles.row}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>
            {chatRoom.lastMessage.content}
          </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default ChatRoomItem

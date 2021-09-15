import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, useWindowDimensions, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import ChatRoomScreen from '../screens/ChatRoomScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <View>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  )
}

const RootNavigator = () => {
  return (
    <View style={{ height: '100%' }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerTitle: HomeHeader }}
        />

        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{ headerTitle: ChatRoomHeader }}
        />
      </Stack.Navigator>
    </View>
  )
}

const HomeHeader = props => {
  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width,
        padding: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          marginLeft: 50,
          fontWeight: 'bold',
        }}>
        Home
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
    </View>
  )
}

const ChatRoomHeader = props => {
  const { width } = useWindowDimensions()

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        width: width - 25,
        marginLeft: 25,

        padding: 10,
        alignItems: 'center',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: 'center',
          marginLeft: 10,
          fontWeight: 'bold',
        }}>
        ChatApp
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
      <Feather
        name="edit-2"
        size={24}
        color="black"
        style={{ marginHorizontal: 5 }}
      />
    </View>
  )
}

export default Navigation

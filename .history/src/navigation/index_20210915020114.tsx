import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Image, Text, View } from 'react-native'
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
          options={{ headerShown: true }}
        />
      </Stack.Navigator>
    </View>
  )
}

const HomeHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
      }}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png',
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text>Home</Text>
      <Feather name="camera" size={24} color="black" />
      <Feather name="edit-2" size={24} color="black" />
    </View>
  )
}

export default Navigation

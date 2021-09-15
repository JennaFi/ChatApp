import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ChatRoomScreen from '../screens/ChatRoomScreen'
import HomeScreen from '../screens/HomeScreen'

const Stack = createNativeStackNavigator()

const Navigation = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

const RootNavigator = () => {
  return (
    // <View style={{ flex: 1 }}>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="ChatRoom"
        component={ChatRoomScreen}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
    // </View>
  )
}

export default Navigation

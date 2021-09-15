import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { View } from 'react-native'
import ChatRoomScreen from '../screens/ChatRoomScreen'

const Stack = createStackNavigator()

const Navigation = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </View>
  )
}

const RootNavigator = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Navigator>
        <Stack.Screen
          name="ChatRoom"
          component={ChatRoomScreen}
          options={{ headerShown: true }}
        />

        {/* <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: true }}
      /> */}
      </Stack.Navigator>
    </View>
  )
}

export default Navigation

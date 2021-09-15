/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type { Node } from 'react'
import React from 'react'
import {
  SafeAreaView, StatusBar,
  useColorScheme,
  View
} from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import TabOneScreen from './src/screens/TabOneScreen'

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TabOneScreen />
        </View>
     
    </SafeAreaView>
  )
}

export default App

import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Feather from 'react-native-vector-icons/Feather'

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <TextInput />
      </View>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>+</Text>
        <Text>
          <Feather name="smile" size={30} color="#459032" />
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 10,
  },
  inputContainer: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#3777f0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 35,
  },
})

export default MessageInput

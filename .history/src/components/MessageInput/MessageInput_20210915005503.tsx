import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

const MessageInput = () => {
  return (
    <View style={styles.root}>
      <View style={styles.inputContainer}>
        <FontAwesome
          style={styles.icon}
          name="smile-o"
          size={24}
          color="grey"
        />

        <TextInput style={styles.input} />
        <Feather style={styles.icon} name="camera" size={24} color="grey" />
        <SimpleLineIcons
          style={styles.icon}
          name="microphone"
          size={24}
          color="grey"
        />
      </View>
      <View style={styles.buttonContainer}>
        <AntDesign style={styles.icon} name="plus" size={24} color="white" />
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
    flexDirection: 'row',
    padding: 5,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  icon: {
    marginHorizontal: 5,
  },
  buttonContainer: {
    width: 40,
    height: 40,
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

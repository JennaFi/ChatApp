import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const blue = '#3777f0'
const grey = 'lightgrey'

const Message = () => {

  const isMe = false

  return (
    <View style={[
      styles.container, {
        backgroundColor:  isMe ? grey : blue, 
        marginLeft: isMe ? 'auto' : 10}]}>
      <Text style={{color: isMe ? 'black' : 'white'}}>
        Message
      </Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3777f0',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    maxWidth: '75%',

  },
  text: {
    color: 'white',


  }


})

export default Message

import React from 'react'
import { StyleSheet, View } from 'react-native'
import ChatRoomItem from '../components/ChatRoomItem'

const TabOneScreen = () => {
  return (
    <View style={styles.page}>
      <ChatRoomItem />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {},
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  box: {
    flex: 1,

    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: '#3777E0',
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3,
  },

  text: {
    color: 'grey',
  },
})

export default TabOneScreen

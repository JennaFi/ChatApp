import { Image, StyleSheet, View } from 'react-native'

const TabOneScreen = () => {
  return (
    <View style={styles.container}>
      <Image />
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#56078d',
  },
  container: {},
})

export default TabOneScreen

import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Authentication = props => {
  const {} = props

  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
})
export default Authentication

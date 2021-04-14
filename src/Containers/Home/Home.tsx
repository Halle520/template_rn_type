import React from 'react'
import {View, Text} from 'react-native'
import {useSelector} from 'react-redux'
import styles from './styles'

const Home = props => {
  const {} = props
  const user = useSelector((state: any) => state.auth.user)

  return (
    <View style={styles.container}>
      <Text>
        {`email: ${user.email},
        pass: ${user.password}`}
      </Text>
    </View>
  )
}
export default Home

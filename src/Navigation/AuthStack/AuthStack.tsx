import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Authentication from '../../Containers/Authentication/Authentication.view'
const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode={'card'}>
      <Stack.Screen name="auth" component={Authentication} />
    </Stack.Navigator>
  )
}
export default AuthStack

import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Authentication from '@/Containers/Authentication/Authentication.view'
import Home from '@/Containers/Home/Home'
const Stack = createStackNavigator()
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      mode={'card'}>
      <Stack.Screen name="auth" component={Authentication} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  )
}
export default AuthStack

import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import AuthStack from './AuthStack/AuthStack'

const AppNavigation = props => {
  const {} = props

  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}
export default AppNavigation

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {Provider} from 'react-redux'

import createStore from './Redux/store'
import RootContainer from './Containers/RootContainer'
import DebugConfig from './Config/DebugConfig'
const {store, persistor} = createStore()
if (DebugConfig.useReactotron) {
  import('./Config/ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  )
}
const App = () => {
  return (
    <Provider store={store}>
      <RootContainer />
    </Provider>
  )
}

//@ts-ignore
export default __DEV__ ? console.tron.overlay(App) : App

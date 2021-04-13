// @ts-nocheck
import {LogBox} from 'react-native'
import Reactotron from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux'
import ReactotronFlipper from 'reactotron-react-native/dist/flipper'
import DebugConfig from './DebugConfig'

if (DebugConfig.useReactotron) {
  LogBox.ignoreAllLogs(false)
  Reactotron.configure({
    name: 'React Native Template',
    createSocket: path => new ReactotronFlipper(path),
  })
    .useReactNative() // add all built-in react native plugins
    .use(reactotronRedux()) // plus some custom made plugin.
    .connect()
  Reactotron.clear()
}

Reactotron.onCustomCommand('test', () => console.tron.log('Test'))
console.tron = Reactotron

/**
 * @format
 */

import 'react-native-gesture-handler'
import './src/Config/ReactotronConfig'
import {AppRegistry, LogBox} from 'react-native'
import App from './src/App'
import {name as appName} from './app.json'

LogBox.ignoreLogs(['Calling bridge'])

AppRegistry.registerComponent(appName, () => App)

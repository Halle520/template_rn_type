// @ts-nocheck
import {compose, createStore} from 'redux'
import DebugConfig from '../Config/DebugConfig'
import rootReducer from './RootReducer'
const storeConfigure = () => {
  let store, persistor
  const middleware = []
  const enhancers = []
  if (DebugConfig.useReactotron) {
    store = createStore(
      rootReducer,
      compose(...middleware, console.tron.createEnhancer())
    )
  }
  return {store, persistor}
}

export default storeConfigure

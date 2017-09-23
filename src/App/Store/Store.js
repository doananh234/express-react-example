import { createStore, applyMiddleware, compose } from 'redux'
import { autoRehydrate } from 'redux-persist'
import createLogger from 'redux-logger'
import { fromJS } from 'seamless-immutable';
import rootReducer from '../Reducers/'
import Config from '../Config/DebugSettings'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas/'
import R from 'ramda'
import RehydrationServices from '../Services/RehydrationServices'
import ReduxPersist from '../Config/ReduxPersist'
import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'

export default (history, onComplete) => {
  /* ------------- Redux Configuration ------------- */
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
// Create a history of your choosing (we're using a browser history in this case)
const historyMiddleware = routerMiddleware(history)
  middleware.push(sagaMiddleware)
  middleware.push(historyMiddleware)
  /* ------------- Logger Middleware ------------- */

  const SAGA_LOGGING_BLACKLIST = ['EFFECT_TRIGGERED', 'EFFECT_RESOLVED', 'EFFECT_REJECTED', 'persist/REHYDRATE']
    // the logger master switch
    // const USE_LOGGING = Config.reduxLogging
    // // silence these saga-based messages
    // // create the logger
    // const logger = createLogger({
    //   predicate: (getState, { type }) => USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST))
    // })
    // middleware.push(logger)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Enhancer ------------- */

  // add the autoRehydrate enhancer
  if (ReduxPersist.active) {
    enhancers.push(autoRehydrate())
  }
  // const store = compose(autoRehydrate())(createStore)(reducer)
  const store = createStore(rootReducer,  compose(...enhancers))

  // configure persistStore and check reducer version number
  if (ReduxPersist.active) {
    RehydrationServices.updateReducers(store, onComplete)
  }

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}

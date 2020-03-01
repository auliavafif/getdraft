/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */

import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const bindMiddleware = (middleware) => applyMiddleware(...middleware);

function configureStore() {
  let store;

  const sagaMiddleware = createSagaMiddleware();

  const isClient = typeof window !== 'undefined';
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage,
    };
    store = createStore(
      persistReducer(persistConfig, rootReducer),
      bindMiddleware([sagaMiddleware]),
    );
    store.__PERSISTOR = persistStore(store);
  } else {
    store = createStore(
      rootReducer,
      bindMiddleware([sagaMiddleware]),
    );
  }

  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;

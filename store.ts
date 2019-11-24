import thunkMiddleware from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  Store as ReduxStore,
} from 'redux';
import { createLogger } from 'redux-logger';
import reducers, { initialState } from './reducers';

const dev: boolean = process.env.NODE_ENV !== 'production';

const { composeWithDevTools } = dev ? require('redux-devtools-extension') : require('redux-devtools-extension/logOnlyInProduction');

export type Store = ReduxStore<typeof initialState>;

export default (state = initialState): Store => {
  const middlewares = dev ? [thunkMiddleware, createLogger()] : [];
  return createStore(reducers, state, composeWithDevTools(applyMiddleware(...middlewares)));
};

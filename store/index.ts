import {combineReducers, CombinedState, AnyAction, Reducer} from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import createSagaMiddleware from "@redux-saga/core";
import {configureStore} from "@reduxjs/toolkit";
import logger from 'redux-logger';

import rootSaga from './rootSaga'
import counter, {CounterState} from "./counter/slice";

const isDev = process.env.NODE_ENV === 'development';

export interface GlobalState {
  counter: CounterState;
}

const rootReducer = (state: GlobalState, action: AnyAction): CombinedState<GlobalState> => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload
      };
    default: {
      const combinedReducer = combineReducers({
        counter
      })

      return combinedReducer(state, action)
    }
  }
}

const createStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer as Reducer<GlobalState, AnyAction>,
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware(),
      sagaMiddleware,
      logger
    ],
    devTools: isDev
  });

  sagaMiddleware.run(rootSaga);

  return store
}

const wrapper = createWrapper(createStore, {
  debug: isDev
});

export default wrapper
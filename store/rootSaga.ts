import {all} from "@redux-saga/core/effects";

import counterSaga from './counter/saga';

export default function* rootSaga() {
  yield all([
    counterSaga
  ])
}
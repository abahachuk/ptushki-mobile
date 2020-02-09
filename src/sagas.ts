import { fork } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { userSagas } from './components/User';

export default function*(): SagaIterator {
  yield fork(userSagas().watchActions);
}

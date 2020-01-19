import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { instanceAuthService } from '../../api/Auth.service';
import {
  REQUEST_UPDATE_EMAIL,
  setUserError,
  requestUpdateUserEmailSuccess,
  REQUEST_UPDATE_PASSWORD,
  requestUpdateUserPasswordSuccess,
  REQUEST_UPDATE_PERSONAL_DATA,
  requestUpdateUserPersonalDataSuccess,
} from './actions';
import {
  UpdateUserEmailType,
  UpdateUserPasswordType,
  UpdateUserPersonalDataType,
  UsersSagasType,
} from './types';

function userSagas(): UsersSagasType {
  function* updateUserEmail({ email, password }: UpdateUserEmailType): SagaIterator {
    try {
      yield call([instanceAuthService, instanceAuthService.updateEmail], { email, password });
      yield put(requestUpdateUserEmailSuccess(email));
    } catch (e) {
      yield put(setUserError(e));
    }
  }

  function* updateUserPassword({ password, newPassword }: UpdateUserPasswordType): SagaIterator {
    try {
      yield call([instanceAuthService, instanceAuthService.updatePassword], {
        password,
        newPassword,
      });
      yield put(requestUpdateUserPasswordSuccess());
    } catch (e) {
      yield put(setUserError(e));
    }
  }

  function* updateUserPersonalData({
    firstName,
    lastName,
    phone,
  }: UpdateUserPersonalDataType): SagaIterator {
    try {
      yield call([instanceAuthService, instanceAuthService.updatePersonalData], {
        firstName,
        lastName,
        phone,
      });
      yield put(requestUpdateUserPersonalDataSuccess(firstName, lastName, phone));
    } catch (e) {
      yield put(setUserError(e));
    }
  }

  // TODO fix typescript error
  function* watchActions() {
    yield takeLatest(REQUEST_UPDATE_EMAIL, updateUserEmail);
    yield takeLatest(REQUEST_UPDATE_PASSWORD, updateUserPassword);
    yield takeLatest(REQUEST_UPDATE_PERSONAL_DATA, updateUserPersonalData);
  }

  return { watchActions };
}

export default userSagas;

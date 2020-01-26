import { call, put, takeLatest } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';
import { instanceAuthService } from '../../api/Auth.service';
import {
  requestUpdateUserEmail,
  setUserError,
  requestUpdateUserEmailSuccess,
  requestUpdateUserPassword,
  requestUpdateUserPasswordSuccess,
  requestUpdateUserPersonalData,
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
    yield takeLatest(requestUpdateUserEmail, updateUserEmail);
    yield takeLatest(requestUpdateUserPassword, updateUserPassword);
    yield takeLatest(requestUpdateUserPersonalData, updateUserPersonalData);
  }

  return { watchActions };
}

export default userSagas;

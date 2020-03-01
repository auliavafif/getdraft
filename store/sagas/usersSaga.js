/* eslint-disable prefer-const */
/* global fetch */

import {
  call, put, takeLatest,
} from 'redux-saga/effects';
import axios from 'axios';

import { GET_USERS_REQUEST } from '../constants/usersConstants';
import { getUsersSuccess, getUsersFailure } from '../actions/usersActions';
import { getUsersLoading } from '../actions/loadingActions';


function getUsers(page) {
  return axios.get(`https://randomuser.me/api/?results=40&page=${page}&seed=getdraft&nat=au,us,fr,br,ca`);
}

function* getUsersSaga(action) {
  try {
    yield put(getUsersLoading(true));
    let { data } = yield call(getUsers, action.payload);
    yield put(getUsersSuccess(data));
  } catch (err) {
    yield put(getUsersFailure(err));
  } finally {
    yield put(getUsersLoading(false));
  }
}

export default function* usersSaga() {
  yield takeLatest(GET_USERS_REQUEST, getUsersSaga);
}

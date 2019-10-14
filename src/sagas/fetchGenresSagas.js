import * as types from '../helpers/types';
import actions from '../actions';
import { takeLatest, call, put, all } from 'redux-saga/effects';
import { api } from '../api';

function* fetchGenres() {
  let response;
  try {
    response = yield call(api.getGenres);
  } catch (e) {
    yield put(actions.fetchGenresFailure('Failed to load!'));
    return;
  }
  const { genres } = response.data;
  yield put(actions.fetchGenresSuccess(genres));
}

export default function* watchFetchGenres() {
  yield all([takeLatest(types.FETCH_GENRES, fetchGenres)]);
}

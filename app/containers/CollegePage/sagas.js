
import { call, put, cancel, take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_COLLEGE } from './constants';
import { collegeLoaded } from './actions';

export function* loadCollege(action) {

  const requestURL = `http://cbmf.rocks/api/college/?bands=true&key=${action.params.key}&value=${action.params.value}`;

  try {

    const college = yield call(request, requestURL);

    yield put(collegeLoaded(college));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* loadCollegeWatcher() {

  const watcher = yield takeLatest(LOAD_COLLEGE, loadCollege);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  loadCollegeWatcher,
];



import { call, put, cancel, take, takeLatest } from 'redux-saga/effects';
import { LOAD_BAND } from 'containers/BandPage/constants';
import { bandLoaded, bandLoadingError } from 'containers/BandPage/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

export function* loadBand(params) {
  
  const requestURL = `http://cbmf.rocks/api/band/?articles=true&recommended=true&key=${params.key}&value=${params.value}`;

  try {

    const band = yield call(request, requestURL);

    yield put(bandLoaded(band));

  } catch (err) {

    yield put(bandLoadingError(err));

  }
}

export function* bandData() {

  const watcher = yield takeLatest(LOAD_BAND, loadBand);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);
}

export default [
  bandData,
];

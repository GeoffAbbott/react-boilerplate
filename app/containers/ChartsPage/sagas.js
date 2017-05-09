import { take, call, put, cancel, takeLatest } from 'redux-saga/effects';

import request from 'utils/request';

import { LOCATION_CHANGE } from 'react-router-redux';

import { chartLoaded } from './actions';

import { LOAD_CHART } from './constants';

export function* loadChart(action) {

  const requestURL = `http://cbmf.rocks/api/${action.params.type}/popular?limit=50&weeksback=0`;

  try {

    const chart = yield call(request, requestURL);

    yield put(chartLoaded(chart));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* loadChartWatcher() {

  const watcher = yield takeLatest(LOAD_CHART, loadChart);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  loadChartWatcher,
];

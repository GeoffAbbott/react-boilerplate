import { call, put, cancel, take, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';
import { LOAD_NEWS } from './constants';
import { newsLoaded } from './actions';

export function* loadNews(action) {

  const requestURL = 'http://cbmf.rocks/api/article/press?limit=50';

  try {

    const news = yield call(request, requestURL);

    yield put(newsLoaded(news.data));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* loadNewsWatcher() {

  const watcher = yield takeLatest(LOAD_NEWS, loadNews);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  loadNewsWatcher,
];

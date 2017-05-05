
import { call, put, cancel, take, takeLatest } from 'redux-saga/effects';
import { LOAD_PLAYLIST } from 'containers/Playlist/constants';
import { playlistLoaded, playlistLoadingError } from 'containers/Playlist/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

export function* loadPlaylist() {

  const requestURL = 'http://cbmf.rocks/api/playlist/587695d696b1308f1a96db01';

  try {

    const playlist = yield call(request, requestURL);

    yield put(playlistLoaded(playlist));

  } catch (err) {

    yield put(playlistLoadingError(err));

  }
}

export function* playlistData() {

  const watcher = yield takeLatest(LOAD_PLAYLIST, loadPlaylist);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);
}

export default [
  playlistData,
  loadPlaylist,
];

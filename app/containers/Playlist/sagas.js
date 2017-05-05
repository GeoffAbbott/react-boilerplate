import { call, put, cancel, takeLatest } from 'redux-saga/effects';
import { LOAD_PLAYLIST } from 'containers/Playlist/constants';
import { playlistLoaded, playlistLoadingError } from 'containers/Playlist/actions';

import request from 'utils/request';

// Individual exports for testing
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
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_PLAYLIST, loadPlaylist);

  // Suspend execution until location changes
  // yield take(LOCATION_CHANGE);
  // yield cancel(watcher);
}

// All sagas to be loaded
export default [
  playlistData,
];

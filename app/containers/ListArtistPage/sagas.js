import { call, put, cancel, take, takeLatest } from 'redux-saga/effects';
import { LOAD_ARTISTS_LIST } from 'containers/ListArtistPage/constants';
import { artistListLoaded, artistListLoadingError } from 'containers/ListArtistPage/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import request from 'utils/request';

export function* loadArtistList() {

  const requestURL = 'http://cbmf.rocks/api/band?noPopMembers=true&noPopComps=true&noPopAlbums=true&noPopAlbumTracks=true&noPopMemberColleges=true';

  try {

    const list = yield call(request, requestURL);

    yield put(artistListLoaded(list));

  } catch (err) {

    yield put(artistListLoadingError(err));

  }

}

export function* loadArtistListData() {

  const watcher = yield takeLatest(LOAD_ARTISTS_LIST, loadArtistList);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);
}

export default [

  loadArtistListData,

];

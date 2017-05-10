
import { put, cancel, takeLatest, take } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import ShopifyClient from 'models/Shopify';
import { loadPopularAlbumsSuccess } from './actions';
import { LOAD_POPULAR_ALBUMS, POPULAR_ALBUMS_SHOPIFY_ID } from './constants';

function* loadPopularAlbumsFromShopify() {

  try {

    const albums = yield ShopifyClient.fetchQueryProducts({

      collection_id: POPULAR_ALBUMS_SHOPIFY_ID,

      limit: 4,

    });

    yield put(loadPopularAlbumsSuccess(albums));

  } catch (err) {

    // yield put(collectionLoadingError(err));

  }

}

export function* loadPopularAlbumsWatcher() {

  const watcher = yield takeLatest(LOAD_POPULAR_ALBUMS, loadPopularAlbumsFromShopify);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  loadPopularAlbumsWatcher,
];


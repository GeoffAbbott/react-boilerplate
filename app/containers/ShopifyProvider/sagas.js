
import { put, cancel, takeLatest, take } from 'redux-saga/effects';
import { LOAD_COLLECTION } from 'containers/ShopifyProvider/constants';
import { collectionLoaded, collectionLoadingError } from 'containers/ShopifyProvider/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import ShopifyClient from 'models/Shopify';

export function* loadCollection(action) {

  try {

    const collection = yield ShopifyClient.fetchQueryProducts(action.params);

    yield put(collectionLoaded(collection));

  } catch (err) {

    yield put(collectionLoadingError(err));

  }

}

export function* collectionData() {

  const watcher = yield takeLatest(LOAD_COLLECTION, loadCollection);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  collectionData,
];

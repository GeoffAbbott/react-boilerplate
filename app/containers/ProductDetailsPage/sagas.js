
import { put, cancel, takeLatest, take } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import ShopifyClient from 'models/Shopify';
import { LOAD_PRODUCT } from './constants';
import { productLoaded, productLoadingError } from './actions';

export function* loadProduct(action) {

  try {

    const product = yield ShopifyClient.fetchQueryProducts(action.params);

    yield put(productLoaded(product));

  } catch (err) {

    yield put(productLoadingError(err));

  }

}

export function* productData() {

  const watcher = yield takeLatest(LOAD_PRODUCT, loadProduct);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  productData,
];


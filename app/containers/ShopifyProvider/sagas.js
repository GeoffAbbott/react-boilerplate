import { call, put, cancel, takeLatest, take } from 'redux-saga/effects';
import { LOAD_COLLECTION, LOAD_PRODUCT } from 'containers/ShopifyProvider/constants';
import { collectionLoaded, collectionLoadingError, productLoaded, productLoadingError } from 'containers/ShopifyProvider/actions';
import { LOCATION_CHANGE } from 'react-router-redux';
import Shopify from 'shopify-buy';

const ShopifyClient = Shopify.buildClient({
  accessToken: '5fca50eb153569ed2d736d36042808f2',
  appId: '6',
  domain: 'collegeband2.myshopify.com',
});

export function* loadCollection(action) {

  try {

    const collection = yield ShopifyClient.fetchQueryProducts(action.params);

    yield put(collectionLoaded(collection));

  } catch (err) {

    yield put(collectionLoadingError(err));

  }

}

export function* loadProduct(action) {

  try {

    const product = yield ShopifyClient.fetchQueryProducts(action.params);

    yield put(productLoaded(product));

  } catch (err) {

    yield put(productLoadingError(err));

  }

}

export function* collectionData() {

  const watcher = yield takeLatest(LOAD_COLLECTION, loadCollection);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export function* productData() {

  const watcher = yield takeLatest(LOAD_PRODUCT, loadProduct);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  collectionData,
  productData,
];



import { select, put, cancel, takeLatest, take, call } from 'redux-saga/effects';
import ShopifyClient from 'models/Shopify';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectCart } from 'containers/Cart/selectors';
import request from 'utils/request';
import { ADD_VARIANT_TO_CART, PREPARE_TRACK_TO_PLAY } from './constants';
import { setCart, trackReadyToPlay } from './actions';

export function* createCart() {

  try {

    const cart = yield ShopifyClient.createCart();

    yield put(setCart(cart));

  } catch (err) {

    // yield put(cartLoadingError(err));

  }

}

export function* addVariantToCart(action) {

  try {

    const state = yield select(selectCart);

    const cart = state.get('cart');

    const updatedCart = yield cart.createLineItemsFromVariants({ variant: action.variant, quantity: 1 });

    alert('Item added to cart');

    yield put(setCart(null));

    yield put(setCart(updatedCart));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* getTrack(action) {

  const requestURL = `http://cbmf.rocks/api/track/${action.trackId}`;

  try {

    const track = yield call(request, requestURL);

    yield put(trackReadyToPlay(track));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* addVariantToCartWatcher() {

  const watcher = yield takeLatest(ADD_VARIANT_TO_CART, addVariantToCart);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}
export function* playTrackWatcher() {

  const watcher = yield takeLatest(PREPARE_TRACK_TO_PLAY, getTrack);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  addVariantToCartWatcher,
  playTrackWatcher,
];

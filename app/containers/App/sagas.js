
import { select, put, cancel, takeLatest, take } from 'redux-saga/effects';
import ShopifyClient from 'models/Shopify';
import { LOCATION_CHANGE } from 'react-router-redux';
import { selectCart } from 'containers/Cart/selectors';
import { ADD_VARIANT_TO_CART } from './constants';
import { setCart } from './actions';

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

    yield put(setCart(null));

    yield put(setCart(updatedCart));

  } catch (err) {

    // yield put(bandLoadingError(err));

  }

}

export function* addVariantToCartWatcher() {

  const watcher = yield takeLatest(ADD_VARIANT_TO_CART, addVariantToCart);

  yield take(LOCATION_CHANGE);

  yield cancel(watcher);

}

export default [
  addVariantToCartWatcher,
];

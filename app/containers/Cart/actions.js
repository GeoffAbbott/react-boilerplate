/*
 *
 * Cart Actions
 *
 */

import {
  UPDATE_CART,
  CART_LOADING_ERROR,
} from './constants';

export function updateCart(cart) {

  return {

    type: UPDATE_CART,

    cart,

  };

}

export function cartLoadingError(error) {

  return {

    type: CART_LOADING_ERROR,

    error,

  };

}

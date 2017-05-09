/*
 *
 * Product Details Actions
 *
 */

import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

export function loadProduct(params) {

  return {

    type: LOAD_PRODUCT,

    params,

  };

}

export function productLoaded(product) {

  return {
    type: LOAD_PRODUCT_SUCCESS,
    product,
  };
}

export function productLoadingError(error) {
  return {
    type: LOAD_PRODUCT_ERROR,
    error,
  };
}

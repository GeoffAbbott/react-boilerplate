/*
 *
 * Playlist actions
 *
 */

import {
  LOAD_COLLECTION,
  LOAD_COLLECTION_SUCCESS,
  LOAD_COLLECTION_ERROR,
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
  LOAD_PRODUCT_ERROR,
} from './constants';

export function loadCollection(params) {

  return {

    type: LOAD_COLLECTION,

    params,

  };

}

export function loadProduct(params) {

  return {

    type: LOAD_PRODUCT,

    params,

  };

}

export function collectionLoaded(collection) {

  return {
    type: LOAD_COLLECTION_SUCCESS,
    products: collection,
  };
}

export function productLoaded(product) {

  return {
    type: LOAD_PRODUCT_SUCCESS,
    product,
  };
}

export function collectionLoadingError(error) {
  return {
    type: LOAD_COLLECTION_ERROR,
    error,
  };
}

export function productLoadingError(error) {
  return {
    type: LOAD_PRODUCT_ERROR,
    error,
  };
}

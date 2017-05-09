/*
 *
 * ShopPage actions
 *
 */

import {
  LOAD_COLLECTION,
  LOAD_COLLECTION_SUCCESS,
  LOAD_COLLECTION_ERROR,
} from './constants';

export function loadCollection(params) {

  return {

    type: LOAD_COLLECTION,

    params,

  };

}

export function collectionLoaded(collection) {

  return {
    type: LOAD_COLLECTION_SUCCESS,
    products: collection,
  };
}

export function collectionLoadingError(error) {
  return {
    type: LOAD_COLLECTION_ERROR,
    error,
  };
}

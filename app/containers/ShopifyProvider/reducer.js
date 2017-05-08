/*
 *
 * Collection reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_COLLECTION,
  LOAD_PRODUCT,
  LOAD_COLLECTION_SUCCESS,
  LOAD_PRODUCT_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  products: false,
});

function shopifyReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_COLLECTION:

      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['products'], false);

    case LOAD_COLLECTION_SUCCESS:

      return state
        .setIn(['products'], action.products)
        .set('loading', false);

    case LOAD_PRODUCT:

      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['product'], false);

    case LOAD_PRODUCT_SUCCESS:

      return state
        .setIn(['product'], action.product[0] || null)
        .set('loading', false);

    default:
      return state;
  }
}

export default shopifyReducer;

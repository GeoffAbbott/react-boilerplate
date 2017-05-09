/*
 *
 * Collection reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_PRODUCT,
  LOAD_PRODUCT_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  product: false,
});

function productDetailsReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_PRODUCT:

      return state
        .set('loading', true)
        .set('error', false)
        .set('product', false);

    case LOAD_PRODUCT_SUCCESS:

      return state
        .set('product', action.product[0] || null)
        .set('loading', false);

    default:
      return state;
  }
}

export default productDetailsReducer;

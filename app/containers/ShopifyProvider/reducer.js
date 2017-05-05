/*
 *
 * Collection reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_COLLECTION,
  LOAD_COLLECTION_SUCCESS,
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

    default:
      return state;
  }
}

export default shopifyReducer;

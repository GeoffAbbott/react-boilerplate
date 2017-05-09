/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  PLAY_TRACK,
  SET_CART,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  track: false,
  cart: false,
});

function appReducer(state = initialState, action) {

  switch (action.type) {

    case PLAY_TRACK:

      return state
        .set('track', action.track);

    case SET_CART:

      return state
        .set('cart', action.cart);

    default:

      return state;

  }

}

export default appReducer;

/*
 *
 * BandPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_BAND,
  LOAD_BAND_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  band: false,
});

function bandReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_BAND:

      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data'], false);

    case LOAD_BAND_SUCCESS:

      return state
        .setIn(['band'], action.band.data[0])
        .set('loading', false);

    default:

      return state;
  }
}

export default bandReducer;

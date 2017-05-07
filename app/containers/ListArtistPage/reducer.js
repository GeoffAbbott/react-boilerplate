/*
 *
 * ListArtist reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_ARTISTS_LIST,
  LOAD_ARTISTS_LIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: false,
  error: false,
  artists: false,
});

function listArtistReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_ARTISTS_LIST:

      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['list'], false);

    case LOAD_ARTISTS_LIST_SUCCESS:

      return state
        .setIn(['list'], action.artists.data)
        .set('loading', false);

    default:

      return state;
  }
}

export default listArtistReducer;


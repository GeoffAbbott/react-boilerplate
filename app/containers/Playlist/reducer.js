/*
 *
 * Playlist reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_PLAYLIST,
  LOAD_PLAYLIST_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: true,
  error: false,
  playlist: false,
});

function playlistReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_PLAYLIST:

      return state
        .set('loading', true)
        .set('error', false)
        .set('playlist', false);

    case LOAD_PLAYLIST_SUCCESS:

      return state
        .set('playlist', action.playlist)
        .set('loading', false);

    default:

      return state;
  }
}

export default playlistReducer;

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
  loading: false,
  error: false,
  playlist: [],
});

function playlistReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PLAYLIST:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['data'], false);
    case LOAD_PLAYLIST_SUCCESS:
      return state
        .setIn(['data'], action.playlist)
        .set('loading', false);
    default:
      return state;
  }
}

export default playlistReducer;

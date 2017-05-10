/*
 *
 * PopularAlbums reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_POPULAR_ALBUMS,
  POPULAR_ALBUMS_LOADED_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: true,
  error: false,
  albums: false,
});

function popularAlbumsReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_POPULAR_ALBUMS:

      return state
        .set('loading', true)
        .set('error', false)
        .set('albums', false);

    case POPULAR_ALBUMS_LOADED_SUCCESS:

      return state
        .set('albums', action.albums)
        .set('loading', false);

    default:
      return state;
  }

}

export default popularAlbumsReducer;

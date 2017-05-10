/*
 *
 * PopularAlbums actions
 *
 */

import {
  LOAD_POPULAR_ALBUMS,
  POPULAR_ALBUMS_LOADED_SUCCESS,
} from './constants';

export function loadPopularAlbums() {

  return {

    type: LOAD_POPULAR_ALBUMS,

  };

}

export function loadPopularAlbumsSuccess(albums) {

  return {

    type: POPULAR_ALBUMS_LOADED_SUCCESS,

    albums,

  };
}

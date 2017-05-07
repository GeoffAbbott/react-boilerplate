/*
 *
 * ListArtist actions
 *
 */

import {
  LOAD_ARTISTS_LIST,
  LOAD_ARTISTS_LIST_SUCCESS,
  LOAD_ARTISTS_LIST_ERROR,
} from './constants';

export function loadArtistsList() {
  return {
    type: LOAD_ARTISTS_LIST,
  };
}

export function artistListLoaded(artists) {
  return {
    type: LOAD_ARTISTS_LIST_SUCCESS,
    artists,
  };
}

export function artistListLoadingError(error) {
  return {
    type: LOAD_ARTISTS_LIST_ERROR,
    error,
  };
}

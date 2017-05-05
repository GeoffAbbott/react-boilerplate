/*
 *
 * Playlist actions
 *
 */

import {
  LOAD_PLAYLIST,
  LOAD_PLAYLIST_SUCCESS,
  LOAD_PLAYLIST_ERROR,
} from './constants';

export function loadPlaylist() {
  return {
    type: LOAD_PLAYLIST,
  };
}

export function playlistLoaded(playlist) {
  return {
    type: LOAD_PLAYLIST_SUCCESS,
    playlist,
  };
}

export function playlistLoadingError(error) {
  return {
    type: LOAD_PLAYLIST_ERROR,
    error,
  };
}

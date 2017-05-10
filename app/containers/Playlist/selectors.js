
import { createSelector } from 'reselect';

const selectPlaylist = (state) => state.get('hp.playlist');

const makeSelectPlaylist = () => createSelector(

  selectPlaylist,

  (playlistState) => playlistState.get('playlist')

);

const makeSelectLoading = () => createSelector(

  selectPlaylist,

  (playlistState) => playlistState.get('loading')

);

export {

  selectPlaylist,

  makeSelectPlaylist,

  makeSelectLoading,

};

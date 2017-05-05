
import { createSelector } from 'reselect';

const selectPlaylist = (state) => state.get('home');

const makeSelectPlaylist = () => createSelector(
  selectPlaylist,
  (playlistState) => playlistState.get('data')
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

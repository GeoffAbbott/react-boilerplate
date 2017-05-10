import { createSelector } from 'reselect';

const selectPopularAlbums = (state) => state.get('popular.albums');

const makeSelectPopularAlbums = () => createSelector(

  selectPopularAlbums,

  (popularAlbumsState) => popularAlbumsState.get('albums')

);

const makeSelectPopularAlbumsLoading = () => createSelector(

  selectPopularAlbums,

  (popularAlbumsState) => popularAlbumsState.get('loading')

);

export {
  selectPopularAlbums,
  makeSelectPopularAlbums,
  makeSelectPopularAlbumsLoading,
};

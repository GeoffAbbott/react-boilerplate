import { createSelector } from 'reselect';

const selectArtistList = (state) => state.get('listArtistPage');

const makeSelectListArtist = () => createSelector(

  selectArtistList,

  (listArtist) => listArtist.get('list')

);

const makeSelectLoading = () => createSelector(

  selectArtistList,

  (listArtist) => listArtist.get('loading')

);

export {

  selectArtistList,

  makeSelectListArtist,

  makeSelectLoading,

};

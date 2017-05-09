
import { createSelector } from 'reselect';

const selectTrack = (state) => state.get('global');

const makeSelectTrack = () => createSelector(

  selectTrack,

  (trackState) => trackState.get('track')

);

export {

  selectTrack,

  makeSelectTrack,

};

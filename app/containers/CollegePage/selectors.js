import { createSelector } from 'reselect';

const selectCollege = (state) => state.get('collegePage');

const makeSelectCollege = () => createSelector(

  selectCollege,

  (collegeState) => collegeState.get('college')

);

const makeSelectBands = () => createSelector(

  selectCollege,

  (bandState) => bandState.get('bands')

);

const makeSelectLoading = () => createSelector(

  selectCollege,

  (collegeState) => collegeState.get('loading')

);

export {
  selectCollege,
  makeSelectCollege,
  makeSelectBands,
  makeSelectLoading,
};


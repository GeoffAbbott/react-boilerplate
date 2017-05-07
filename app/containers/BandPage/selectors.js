import { createSelector } from 'reselect';

const selectBand = (state) => state.get('bandPage');

const makeSelectBand = () => createSelector(
  selectBand,
  (bandState) => bandState.get('band')
);

const makeSelectLoading = () => createSelector(
  selectBand,
  (bandState) => bandState.get('loading')
);

export {
  selectBand,
  makeSelectBand,
  makeSelectLoading,
};

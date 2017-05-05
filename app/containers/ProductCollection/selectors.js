
import { createSelector } from 'reselect';

const selectCollection = (state) => state.get('collection');

const makeSelectCollection = () => createSelector(
  selectCollection,
  (collectionState) => collectionState.get('products')
);

const makeSelectLoading = () => createSelector(
  selectCollection,
  (collectionState) => collectionState.get('loading')
);

export {
  selectCollection,
  makeSelectCollection,
  makeSelectLoading,
};

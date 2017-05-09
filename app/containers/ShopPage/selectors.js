import { createSelector } from 'reselect';

const selectProducts = (state) => state.get('Shop.Collection');

const makeSelectProducts = () => createSelector(
  selectProducts,
  (shopState) => shopState.get('products')
);

const makeSelectLoading = () => createSelector(
  selectProducts,
  (shopState) => shopState.get('loading')
);

export {
  selectProducts,
  makeSelectProducts,
  makeSelectLoading,
};

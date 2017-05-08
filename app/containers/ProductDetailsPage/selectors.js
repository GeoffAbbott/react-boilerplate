import { createSelector } from 'reselect';

const selectProduct = (state) => state.get('product');

const makeSelectProduct = () => createSelector(

  selectProduct,

  (productState) => productState.get('product')

);

const makeSelectLoading = () => createSelector(

  selectProduct,

  (productState) => productState.get('loading')

);

export {
  selectProduct,
  makeSelectProduct,
  makeSelectLoading,
};


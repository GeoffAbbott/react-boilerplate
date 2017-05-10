import { createSelector } from 'reselect';

const selectCart = (state) => state.get('global');

const makeSelectCart = () => createSelector(

  selectCart,

  (cartState) => cartState.get('cart')

);

export {

  selectCart,

  makeSelectCart,

};

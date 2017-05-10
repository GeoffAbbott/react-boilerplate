import { createSelector } from 'reselect';

const selectNews = (state) => state.get('newsPage');

const makeSelectNews = () => createSelector(

  selectNews,

  (bandState) => bandState.get('articles')

);

const makeSelectLoading = () => createSelector(

  selectNews,

  (bandState) => bandState.get('loading')

);

export {
  selectNews,
  makeSelectNews,
  makeSelectLoading,
};

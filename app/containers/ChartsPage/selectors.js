import { createSelector } from 'reselect';

/**
 * Direct selector to the chart state domain
 */
const selectChart = (state) => state.get('ChartsPage');


const makeSelectChart = () => createSelector(

  selectChart,

  (chartState) => chartState.get('chart')

);

const makeSelectLoading = () => createSelector(

  selectChart,

  (chartState) => chartState.get('loading')

);

export {
  selectChart,
  makeSelectChart,
  makeSelectLoading,
};

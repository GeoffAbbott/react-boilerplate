import { createSelector } from 'reselect';

/**
 * Direct selector to the chart state domain
 */
const selectChart = () => (state) => state.get('ChartsPage');


const makeSelectChart = () => createSelector(

  selectChart(),

  (substate) => substate.toJS()

);

export default makeSelectChart;

export {
  selectChart,
};

/*
 *
 * Chart reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_CHART,
  LOAD_CHART_SUCCESS,
} from './constants';

const initialState = fromJS({
  chart: false,
  loading: true,
  error: false,
});

function chartReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_CHART:

      return state
        .set('loading', true);

    case LOAD_CHART_SUCCESS:

      return state
        .set('loading', false)
        .set('chart', action.chart);

    default:

      return state;

  }

}

export default chartReducer;

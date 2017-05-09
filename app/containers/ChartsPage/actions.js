/*
 *
 * Chart actions
 *
 */

import {
  LOAD_CHART,
  LOAD_CHART_SUCCESS,
} from './constants';

export function loadChart(params) {

  return {

    type: LOAD_CHART,

    params,

  };

}

export function chartLoaded(chart) {

  return {

    type: LOAD_CHART_SUCCESS,

    chart: chart.data,

  };

}

/*
 *
 * BandPage actions
 *
 */

import {
  LOAD_BAND,
  LOAD_BAND_SUCCESS,
  LOAD_BAND_ERROR,
} from './constants';

export function loadBand(params) {

  params.type = LOAD_BAND;

  return params;
}

export function bandLoaded(band) {
  return {
    type: LOAD_BAND_SUCCESS,
    band,
  };
}

export function bandLoadingError(error) {
  return {
    type: LOAD_BAND_ERROR,
    error,
  };
}

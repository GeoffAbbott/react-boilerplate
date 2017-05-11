/*
 *
 * CollegePage actions
 *
 */

import {
  LOAD_COLLEGE,
  LOAD_COLLEGE_SUCCESS,
  LOAD_COLLEGE_ERROR,
} from './constants';

export function loadCollege(params) {

  return {
    type: LOAD_COLLEGE,
    params,
  };

}

export function collegeLoaded(college) {

  return {
    type: LOAD_COLLEGE_SUCCESS,
    college,
  };

}

export function collegeLoadingError(error) {

  return {
    type: LOAD_COLLEGE_ERROR,
    error,
  };

}

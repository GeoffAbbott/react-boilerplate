/*
 *
 * CollegePage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_COLLEGE,
  LOAD_COLLEGE_SUCCESS,
} from './constants';

const initialState = fromJS({
  loading: true,
  error: false,
  college: false,
  bands: false,
});

function collegeReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_COLLEGE:

      return state
        .set('loading', true)
        .set('error', false)
        .set('college', false)
        .set('bands', false);

    case LOAD_COLLEGE_SUCCESS:

      return state
        .set('college', action.college.data[0])
        .set('bands', action.college.bands)
        .set('loading', false);

    default:

      return state;
  }
}

export default collegeReducer;

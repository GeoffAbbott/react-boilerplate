/*
 *
 * NewsPage reducer
 *
 */

import { fromJS } from 'immutable';

import {
  LOAD_NEWS,
  NEWS_LOADED,
} from './constants';

const initialState = fromJS({
  loading: true,
  articles: false,
});

function newsPageReducer(state = initialState, action) {

  switch (action.type) {

    case LOAD_NEWS:

      return state
        .set('loading', true);

    case NEWS_LOADED:

      return state
        .set('loading', false)
        .set('articles', action.news);

    default:

      return state;

  }

}

export default newsPageReducer;

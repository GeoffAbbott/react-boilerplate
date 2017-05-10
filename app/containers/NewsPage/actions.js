/*
 *
 * NewsPage actions
 *
 */

import {
  LOAD_NEWS,
  NEWS_LOADED,
} from './constants';

export function loadNews() {

  return {

    type: LOAD_NEWS,

  };

}

export function newsLoaded(news) {

  return {

    type: NEWS_LOADED,

    news,

  };

}

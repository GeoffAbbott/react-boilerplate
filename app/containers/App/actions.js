/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  PREPARE_TRACK_TO_PLAY,
  TRACK_READY_TO_PLAY,
  PAUSE_TRACK,
  ADD_VARIANT_TO_CART,
  SET_CART,
} from './constants';

export function prepareTrackToPlay(trackId) {

  return {

    type: PREPARE_TRACK_TO_PLAY,

    trackId,

  };

}

export function trackReadyToPlay(track) {

  return {

    type: TRACK_READY_TO_PLAY,

    track,

  };

}

export function setCart(cart) {

  return {

    type: SET_CART,

    cart,

  };

}

export function pauseTrack() {

  return {

    type: PAUSE_TRACK,

  };

}

export function addVariantToCart(variant) {

  return {

    type: ADD_VARIANT_TO_CART,

    variant,

  };

}

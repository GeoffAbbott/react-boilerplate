/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const DEFAULT_LOCALE = 'en';
export const TAG_LINE = 'Let\'s get the band back together';
export const PREPARE_TRACK_TO_PLAY = 'app/Track/PLAY_TRACK';
export const TRACK_READY_TO_PLAY = 'app/Track/TRACK_READY_TO_PLAY';
export const PAUSE_TRACK = 'app/Track/PAUSE_TRACK';
export const ADD_VARIANT_TO_CART = 'app/cart/ADD_VARIANT_TO_CART';
export const SET_CART = 'app/cart/SET_CART';

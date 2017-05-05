
import { fromJS } from 'immutable';
import playlistReducer from '../reducer';

describe('playlistReducer', () => {
  it('returns the initial state', () => {
    expect(playlistReducer(undefined, {})).toEqual(fromJS({}));
  });
});

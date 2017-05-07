
import { fromJS } from 'immutable';
import listArtistReducer from '../reducer';

describe('listArtistReducer', () => {
  it('returns the initial state', () => {
    expect(listArtistReducer(undefined, {})).toEqual(fromJS({}));
  });
});

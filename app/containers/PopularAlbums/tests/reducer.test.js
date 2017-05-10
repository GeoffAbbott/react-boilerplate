
import { fromJS } from 'immutable';
import popularAlbumsReducer from '../reducer';

describe('popularAlbumsReducer', () => {
  it('returns the initial state', () => {
    expect(popularAlbumsReducer(undefined, {})).toEqual(fromJS({}));
  });
});

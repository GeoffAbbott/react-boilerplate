
import { fromJS } from 'immutable';
import bandPageReducer from '../reducer';

describe('bandPageReducer', () => {
  it('returns the initial state', () => {
    expect(bandPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

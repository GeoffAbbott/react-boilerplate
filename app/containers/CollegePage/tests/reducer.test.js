
import { fromJS } from 'immutable';
import collegePageReducer from '../reducer';

describe('collegePageReducer', () => {
  it('returns the initial state', () => {
    expect(collegePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

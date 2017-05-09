
import { fromJS } from 'immutable';
import chartReducer from '../reducer';

describe('chartReducer', () => {
  it('returns the initial state', () => {
    expect(chartReducer(undefined, {})).toEqual(fromJS({}));
  });
});

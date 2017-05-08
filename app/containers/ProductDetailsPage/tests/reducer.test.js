
import { fromJS } from 'immutable';
import productDetailsPageReducer from '../reducer';

describe('productDetailsPageReducer', () => {
  it('returns the initial state', () => {
    expect(productDetailsPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});

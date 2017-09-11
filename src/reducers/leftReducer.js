import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function leftReducer(state = initialState.lefts, action) {
  switch(action.type) {
    case types.LOAD_LEFTS_SUCCESS:
      return action.lefts
    default:
      return state;
  }
}
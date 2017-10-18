import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function oneReducer(state = initialState.ones, action) {
  switch(action.type) {
    case types.LOAD_ONES_SUCCESS:
      return action.ones
    case 'GET_ONES_SUCCESS':
      return action.ones;
    case 'CREATE_ONE_SUCCESS':
      return state.concat(action.one);
    default:
      return state;
  }
}
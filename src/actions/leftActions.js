import leftApi from '../api/leftApi';
import * as types from './actionTypes';

export function loadLefts() {
  return function(dispatch) {
    return leftApi.getAllLefts().then(lefts => {
      dispatch(loadLeftsSuccess(lefts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadLeftsSuccess(lefts) {
  return {type: 'LOAD_LEFTS_SUCCESS', lefts};
}

export const LOAD_LEFTS_SUCCESS = 'LOAD_LEFTS_SUCCESS'
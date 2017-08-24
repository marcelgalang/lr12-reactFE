import userApi from '../api/userApi';
import * as types from './actionTypes';

export function loadUsers() {
  return function(dispatch) {
    return userApi.getAllUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadUsersSuccess(users) {
  return {type: 'LOAD_USERS_SUCCESS', users};
}
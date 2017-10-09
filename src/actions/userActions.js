import userApi from '../api/userApi';
import * as types from './actionTypes';
import { API_URL } from './../index.js'



export const loadUsers = () => {
  return dispatch => {
    return fetch('https://lr12-server.herokuapp.com/api/v1/users')
      .then(response => response.json())
      .then(users => dispatch(loadUsersSuccess(users)))
      .catch(error => {
        throw(error)
      });

  }
}


const loadUsersSuccess = users => {
  return {
    type: 'LOAD_USERS_SUCCESS',
    users
  }
}
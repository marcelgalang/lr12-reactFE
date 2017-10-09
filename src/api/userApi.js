import { API_URL } from './../index.js'

class UserApi {
  static getAllUsers(){
    return fetch (API_URL + '/api/v1/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default UserApi
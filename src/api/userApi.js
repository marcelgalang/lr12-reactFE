class UserApi {
  static getAllUsers(){
    return fetch ('https://lr12-server.herokuapp.com/api/v1/users').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default UserApi
import { loadLeftsSuccess } from '../actions/leftActions';

export const createLeft = (left) => dispatch => {

    fetch('https://lr12-server.herokuapp.com/api/v1/lefts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({left: left})
    })
    .then(response =>  response.json()
    ).then(lefts => {
      dispatch(loadLeftsSuccess(lefts))
    })
    .catch(error => {
      return error;
    });
  }

class LeftApi {
  static getAllLefts(){
    return fetch ('https://lr12-server.herokuapp.com/api/v1/lefts').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default LeftApi
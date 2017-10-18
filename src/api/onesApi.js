import { loadOnesSuccess } from '../actions/oneActions';

export const createOne = (one) => dispatch => {

    fetch('https://lr12-server.herokuapp.com/api/v1/ones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({one: one})
    })
    .then(response =>  response.json()
    ).then(ones => {
      dispatch(loadOnesSuccess(ones))
    })
    .catch(error => {
      return error;
    });
  }

class OneApi {
  static getAllOnes(){
    return fetch ('http://localhost:3000/api/v1/ones').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    })
  }
}

export default OneApi
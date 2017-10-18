import { API_URL } from './../index.js'
export const addOne = one =>

 {
  return {
    type: 'CREATE_ONE_SUCCESS',
    one
  }
}

const setOnes = ones => {
  return {
    type: 'GET_ONES_SUCCESS',
    ones
  }
}



// ** Async Actions **
export const getOnes= () => {
  return dispatch => {
    return fetch('https://lr12-server.herokuapp.com/api/v1/ones')
      .then(response => response.json())
      .then(ones => dispatch(setOnes(ones)))
      .catch(error => console.log(error));
  }
}

export const createOne = one  => {

  return dispatch => {

    return fetch('https://lr12-server.herokuapp.com/api/v1/ones', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({one: one}),

    })
    .then(console.log(one))
    .then(response =>  response.json())
    .then(one => {
        dispatch(addOne(one))
      })
    .catch(error => {
      return error;
    });

  }
}

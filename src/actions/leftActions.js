import { API_URL } from './../index.js'
export const addLeft = left =>

 {
  return {
    type: 'CREATE_LEFT_SUCCESS',
    left
  }
}

const setLefts = lefts => {
  return {
    type: 'GET_LEFTS_SUCCESS',
    lefts
  }
}



// ** Async Actions **
export const getLefts = () => {
  return dispatch => {
    return fetch('https://lr12-server.herokuapp.com/api/v1/lefts')
      .then(response => response.json())
      .then(lefts => dispatch(setLefts(lefts)))
      .catch(error => console.log(error));
  }
}

export const createLeft = left  => {

  return dispatch => {

    return fetch('https://lr12-server.herokuapp.com/api/v1/lefts', {
      method: 'POST',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({left: left}),

    })
    .then(console.log(left))
    .then(response =>  response.json())
    .then(left => {
        dispatch(addLeft(left))
      })
    .catch(error => {
      return error;
    });

  }
}


import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/configureStore';


export const API_URL = 'https://lr12-server.herokuapp.com'
// export const API_URL = 'https://localhost:3000'
console.log(`${API_URL}`+'/api/v1/users')

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
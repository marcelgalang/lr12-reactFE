
import {combineReducers} from 'redux';
import users from './userReducer';
import lefts from './leftReducer';
import ones from './oneReducer';

const rootReducer = combineReducers({
  // short hand property names
  users,
  lefts,
  ones
})

export default rootReducer;

import {combineReducers} from 'redux';
import users from './userReducer';
import lefts from './leftReducer';

const rootReducer = combineReducers({
  // short hand property names
  users,
  lefts
})

export default rootReducer;
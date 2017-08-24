import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { loadUsers } from '../actions/userActions';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}

export const store = configureStore();

store.dispatch(loadUsers());
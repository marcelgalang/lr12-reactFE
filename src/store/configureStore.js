import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import { loadUsers } from '../actions/userActions';
import { getLefts } from '../actions/leftActions';
import { getOnes } from '../actions/onesActions';

export default function configureStore() {
  return createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  );
}

export const store = configureStore();

store.dispatch(loadUsers());
store.dispatch(getLefts());
store.dispatch(getOnes());
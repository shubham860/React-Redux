import Counter from './Counter';
import isLogged from './isLogged';
import {combineReducers} from 'redux';

const rootreducers = combineReducers({
  Counter : Counter,
  isLogged : isLogged
})

export default rootreducers;

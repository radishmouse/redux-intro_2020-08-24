import { createStore } from 'redux';
import { counter } from './reducers';
// 1. Default state
const defaultState = 0;

// 4. create the store using the reducer!
export const store = createStore(counter, defaultState);




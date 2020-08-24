import { createStore } from 'redux';
import { counter } from './reducers';
// 1. Default state
const defaultState = {
    checking: 10,
    savings: 2,
    alerts: []
};

// 4. create the store using the reducer!
export const store = createStore(counter, defaultState);




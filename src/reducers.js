import {
    DEPOSIT,
    WITHDRAW
} from './actions';

// 3. Write a function that expects the state and an action.
//    It must return a copy of state
// const counter = (state, action) => {};
export function counter(state, action) {
    switch(action.type) {
      case DEPOSIT:
        // do the deposit
        // and return
        return state + action.payload;
      case WITHDRAW:
        // do the withdraw
        // and return
        return state - action.payload;
      default:
        return state;
    }
}
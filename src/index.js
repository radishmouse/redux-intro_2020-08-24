import { createStore } from 'redux';
console.log('Hello Redux!');
/*
To transform my counter into a banking app:
- [ ] increment/decrement by specific amounts
  - [X] change actions to "WITHDRAW" and "DEPOSIT"
  - [ ] be able to specify the amounts to withdraw or deposit
- [ ] manage multiple accounts ("savings", "checking", "cat college")
  - [ ] dividing state into "slices"
*/

// 1. Default state
const defaultState = 0;

// 2. How do I want to be able to change state?
const DEPOSIT = 'deposit';
const WITHDRAW = 'withdraw';

function actionDeposit(amount) {
  return {
    type: DEPOSIT,
    payload: amount
  };
}

function actionWithdraw(amount) {
  return {
    type: WITHDRAW,
    payload: amount
  };
}

// 3. Write a function that expects the state and an action.
//    It must return a copy of state
// const counter = (state, action) => {};
function counter(state, action) {
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

// 4. create the store using the reducer!
const store = createStore(counter, defaultState);


// 5. subscribe to changes to state
store.subscribe(() => {
  console.log(store.getState());
});

window.store = store;
window.actionDeposit = actionDeposit;
window.actionWithdraw = actionWithdraw;

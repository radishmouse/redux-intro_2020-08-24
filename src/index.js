import { createStore } from 'redux';
console.log('Hello Redux!');

// 1. Default state
const defaultState = 0;

// 2. How do I want to be able to change state?
const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const actionIncrement = {
  type: INCREMENT
};

const actionDecrement = {
  type: DECREMENT
};

// 3. Write a function that expects the state and an action.
//    It must return a copy of state
// const counter = (state, action) => {};
function counter(state, action) {
    switch(action.type) {
      case INCREMENT:
        // do the increment
        // and return
        return state + 1;
      case DECREMENT:
        // do the decrement
        // and return
        return state - 1;
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
window.actionIncrement = actionIncrement;
window.actionDecrement = actionDecrement;

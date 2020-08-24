import { store } from './store';
import { actionDeposit, actionWithdraw } from './actions';
console.log('Hello Redux!');
/*
To transform my counter into a banking app:
- [ ] increment/decrement by specific amounts
  - [X] change actions to "WITHDRAW" and "DEPOSIT"
  - [ ] be able to specify the amounts to withdraw or deposit
- [ ] manage multiple accounts ("savings", "checking", "cat college")
  - [ ] dividing state into "slices"
*/


// 5. subscribe to changes to state
store.subscribe(() => {
  console.log(store.getState());
});
window.store = store;
window.actionDeposit = actionDeposit;
window.actionWithdraw = actionWithdraw;

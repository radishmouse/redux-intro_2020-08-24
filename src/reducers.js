import {
    DEPOSIT,
    WITHDRAW,
    ADD_ACCOUNT,
    DEL_ACCOUNT
} from './actions';

// 3. Write a function that expects the state and an action.
//    It must return a copy of state
// const counter = (state, action) => {};
export function counter(state, action) {
    
    switch(action.type) {
      case DEPOSIT:
        // do the deposit
        // and return
            
        // debugger;
        // let newState = {
        //     ...state,
        //     [action.payload.account]: state[action.payload.account] + action.payload.amount
        // }
        // return newState;
        if (state[action.payload.account] !== undefined) {
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] + action.payload.amount
            }
        } else {
            return state;
        }

      case WITHDRAW:
        // do the withdraw
        // and return
        if (state[action.payload.account] !== undefined) {
            return {
                ...state,
                [action.payload.account]: state[action.payload.account] - action.payload.amount
            }
        } else {
            return state;
        }

      case ADD_ACCOUNT:
        return {
            ...state,
            [action.payload.account]: 0
        }          
      case DEL_ACCOUNT:
        const newState = {
            ...state
        };
        // Grab the amount in this account.
        // It will need to go into another account.
        const amountToTransfer = state[action.payload.account];

        // Delete the account
        delete newState[action.payload.account];

        // Transfer the money to one of the other accounts.
        // Arbitrarily picking the first one.
        const firstAccount = Object.keys(newState)[0];
        newState[firstAccount] = newState[firstAccount] + amountToTransfer;
        return newState; 
      default:
        return state;
    }
}
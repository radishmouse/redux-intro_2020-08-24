// export each variable and function from your actions
// 2. How do I want to be able to change state?
export const DEPOSIT = 'deposit';
export const WITHDRAW = 'withdraw';
export const ADD_ACCOUNT = 'add_account';
export const DEL_ACCOUNT = 'del_account';

export function actionDeposit(amount, account) {
  return {
    type: DEPOSIT,
    payload: {
        amount,
        account
    }
  };
}

export function actionWithdraw(amount, account) {
  return {
    type: WITHDRAW,
    payload: {
        amount,
        account
    }
  };
}

export function actionAddAccount(account) {
    return {
        type: ADD_ACCOUNT,
        payload: {
            account
        }
      };
}


export function actionDelAccount(account) {
    return {
        type: DEL_ACCOUNT,
        payload: {
            account
        }
      };
}
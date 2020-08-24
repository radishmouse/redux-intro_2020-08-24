// export each variable and function from your actions
// 2. How do I want to be able to change state?
export const DEPOSIT = 'deposit';
export const WITHDRAW = 'withdraw';

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

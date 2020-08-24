// export each variable and function from your actions
// 2. How do I want to be able to change state?
export const DEPOSIT = 'deposit';
export const WITHDRAW = 'withdraw';

export function actionDeposit(amount) {
  return {
    type: DEPOSIT,
    payload: amount
  };
}

export function actionWithdraw(amount) {
  return {
    type: WITHDRAW,
    payload: amount
  };
}

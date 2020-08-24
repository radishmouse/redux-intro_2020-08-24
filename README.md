# Monday, Aug 24: Intro to Redux

## Introducing Redux
- What is Redux?
- Why does it exist?
- Why should I learn it?

## ...an analogy not involving drug lords

- Bank/$$$ === "state object"
- "transaction slip" === "action object"
    - "stack o' transaction slips" === "action creator function"
- "bank teller" === "reducer function"    

## First steps with Redux (without React)

- `npx create-react-app`
    - we want nice things:
        - new syntax
            - object spread
                - ellipsis 
            - array spread
            - .map
            - .filter
        - live reload
- `npm install redux`
    - `yarn add redux`
- comment out everything in `src/index.js`

### The Three Rules:

- Single Source of Truth
    - top level global state
- State is Immutable
    - no touching! touching is bad!
    - you cannot modify your state variables directly! ever! noooooo!
- State changes only happen via actions
    - you pass an action object to a reducer function

### The Five Steps

#### 1. Describe your "ideal" or default state
#### 2. List out all the ways you want to change that state
    These are your actions!

    They must be objects that have:
        - a .type property
            - "withdrawal" or "deposit"
        - (optional) a .payload property
            - "amount"
#### 3. Write a function that expects to receive a copy of state and an action and returns a modified version of state

    Use switch/case for a compact if/else
    
#### 4. Create a Redux Store, using the function from step 3

    The store has three functions you care about;
    - .subscribe - you pass it a function, it calls it any time the state changes
    - .getState - returns a copy of the state
    - .dispatch - you pass it an action, it tells the store to run the reducer function.

#### 5. Subscribe for changes to state

    Mainly so we can see the state in the console

# Suggested exercises:

## Bank Accounts, continued:

### Only allow deposits/withdrawals for existing accounts

- In the reducer, if an account does not exist, just return state as-is.

### Adding/removing accounts:

- Add Actions, Action Creator functions for adding new accounts and removing existing ones.
- Update the reducer to handle the new actions.
    - (If removing, make sure the account exists)

### BONUS: Add a "alert" slice to your state

If your checking or savings go below 0, set the `alerts` slice of state to a string like `"Your checking account has a negative balance"`

If that account goes back above 0, remove the notification.

### BONUS: Add alert thresholds

Add to the default state so that each account has a threshold amount and type ("above" or "below"). Based on the threshold, `state.alerts` will be updated.

Add actions, action creators for adding/removing thresholds from accounts.

For example, one of these new action objects might look like this:

```js
{
    type: ADD_THRESHOLD,
    payload: {
        account: 'savings',
        when: 'above',
        amount: 5000,
        message: 'Congratulations!'
    }
}
```

Update the reducer to handle these new actions

## Traffic light

### Create a new React app, and delete the contents of `src/index.js`

Make sure to `npm i redux` or `yarn add redux`.

Optional: create separate files for your redux code.

### Describe the defaultState for a traffic light

It should be able to hold one of three values: `'red'`, `'yellow'`, `'green'`

### Write an action and action creator

You need at least one: `CHANGE`.

(Should you have more? Does a traffic light ever go out of order?)

### Write the reducer

Make sure it returns a copy of state. The new version of state should be based on the existing state.

### Create the store

Try it out on the console, attaching any variables or functions to the `window` object.

## BONUS: ToDo app

Write the Redux code to manage state that looks like this:

```js
[
    {
        id: 12354,
        todo: 'Feed the cat',
        isComplete: true
    },
    {
        id: 23423,
        todo: 'Pet the cat',
        isComplete: false
    },
]
```

Your code should handle the following:

- adding new todos
- marking a todo as complete
- marking a todo as incomplete
- deleting a todo

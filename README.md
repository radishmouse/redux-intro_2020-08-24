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

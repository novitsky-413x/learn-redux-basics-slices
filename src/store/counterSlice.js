import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = {
    counter: 0,
    showCounter: true,
};
// every slice needs a name
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
            // this is still am immutable state, cause
            // rtk uses immer.js under the hood
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});
export const counterActions = counterSlice.actions;
export default counterSlice;

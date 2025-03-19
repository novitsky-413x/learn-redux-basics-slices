import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
    counter: 0,
    showCounter: true,
};
// every slice needs a name
const counterSlice = createSlice({
    name: 'counter',
    initialState,
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
            state.counter = state.counter + action.ammount;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const store = configureStore({
    // // if we have more than one slice
    // reducer: {
    //     counter: counterSlice.reducer,
    // },
    reducer: counterSlice.reducer,
});

export default store;

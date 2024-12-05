import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    counter: [{
        id: 1,
        value: 0,
    }]
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increaseCounter: (state, action)=>{
            const counter = {
                id: nanoid(),
                value: action.payload
            }
            state.counter.push(counter);
        },
        decreaseCounter: (state, action)=>{
            // state.counter = state.counter.filter((v)=>v.id !== action.payload);
            state.counter.pop();
        },
        resetCounter: (state, action)=>{
            state.counter = [];
        }
    }
})

export const {increaseCounter, decreaseCounter, resetCounter} = counterSlice.actions;

export default counterSlice.reducer;
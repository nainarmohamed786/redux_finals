import {createSlice} from '@reduxjs/toolkit';

const initialState={
    counter:0
}

const CounterSlice=createSlice({
    name:"count",
    initialState,
    reducers:{
        increment:(state)=>{
            state.counter +=1;
        },
        decrement:(state)=>{
            state.counter -=1;
        },
        incrementByamount:(state,action)=>{
            state.counter +=action.payload
        },
        reset:(state)=>{
            state.counter=0
        }

    }
});


export const {increment,decrement,incrementByamount,reset}=CounterSlice.actions;

export const selectedCounter=state=>state.count.counter

export default CounterSlice.reducer;
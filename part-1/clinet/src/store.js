import {configureStore} from '@reduxjs/toolkit';
import CounterSliceReducer from './features/CouterSlice'


export const store=configureStore({
    reducer:{
        count:CounterSliceReducer
    }
});
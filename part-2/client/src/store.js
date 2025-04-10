import {configureStore} from '@reduxjs/toolkit';
import PostsSliceReducer from './features/PostsSlice';
import UsersSliceReducer from './features/UsersSlice';

export const store=configureStore({
    reducer:{
        posts:PostsSliceReducer,
        users:UsersSliceReducer
    }
})
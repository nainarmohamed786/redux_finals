import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';



const USER_API="https://jsonplaceholder.typicode.com/users";
const initialState = []

export const fetchUser=createAsyncThunk("fetch/users",async()=>{
    const res=await axios.get(USER_API);
    return res.data
});


const UsersSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
     
    },
    extraReducers(builder){
        builder.addCase(fetchUser.fulfilled,(state,action)=>{
            return action.payload
        })
    }
});


export const selectedAllUser = (state) => state.users;

export default UsersSlice.reducer
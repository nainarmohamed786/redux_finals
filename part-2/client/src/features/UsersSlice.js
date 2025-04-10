import {createSlice} from '@reduxjs/toolkit';


const initialState=[
    {
        id:"1",
        name:"kavin",
    },
    {
        id:"2",
        name:"Barath"
    }
];


const UsersSlice=createSlice({
    name:"users",
    initialState,
    reducer:{

    }
});


export const selectedAllUser=state=>state.users;


export default UsersSlice.reducer;
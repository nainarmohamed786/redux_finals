import {createSlice, nanoid} from '@reduxjs/toolkit';
import {sub} from 'date-fns'

const initialState=[
    {
        id:"0",
        title:"Hello hii",
        content:"if ther jfdhcvrf fvrv",
        date:sub(new Date(),{minutes:15}).toISOString()
    },
    {
        id:"1",
        title:"hii hello",
        content:"jhvgdchbvc hfcfejvgckwfe cvbfewvcjhwfev",
        date:sub(new Date(),{minutes:10}).toISOString()

    }
];

const PostsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare:(title,content,userId)=>{
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId:userId
                    }
                }
            }
        }
    }
});


export const {postAdded}=PostsSlice.actions;

export const selectedAllPosts=state=>state.posts;

export default PostsSlice.reducer;


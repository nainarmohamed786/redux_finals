import {createAsyncThunk, createSlice, nanoid} from '@reduxjs/toolkit';
import {add, sub} from 'date-fns';
import axios from 'axios'

const POST_API="https://jsonplaceholder.typicode.com/posts";

export const fetchPosts=createAsyncThunk("fetch/posts",async()=>{
    const response=await axios.get(POST_API);
    return response.data;
})

export const addPosts=createAsyncThunk("add/posts",async(initialPost)=>{
    const response=await axios.post(POST_API,initialPost);
    return response.data;
})

const initialState={
    posts:[],
    status:"idle",
    error:null
};

const PostsSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.posts.push(action.payload)
            },
            prepare:(title,content,userId)=>{
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId:userId,
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionButton:(state,action)=>{
            const {postId,reaction}=action.payload;
            const existingPost=state.posts.find((post)=>post.id===postId);

            if(existingPost){
                existingPost.reactions[reaction]++
            }
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchPosts.pending,(state,action)=>{
            state.status="loading";
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.status="success";

            let min=1;

            const loadedPost=action.payload.map((post)=>{
                post.date=sub(new Date(),{minutes:min++}).toISOString();
                
                post.reactions={
                    thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                }

                return post;
            });

            state.posts=state.posts.concat(loadedPost);

        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.error=action.error.message
        })
        .addCase(addPosts.pending,(state,action)=>{
            state.status="loading"
        })
        .addCase(addPosts.fulfilled,(state,action)=>{
            state.status="success";
            const sortPosts=state.posts.sort((a,b)=>{
                if(a.id > b.id){
                    return 1;
                }
                if(a.id<b.id){
                    return -1
                }
                return 0;
            });

            action.payload.id=sortPosts[sortPosts.length-1].id+1;
            action.payload.userId=Number(action.payload.userId);
            action.payload.date=new Date().toISOString();
            action.payload.reactions={
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            };

            console.log(action.payload);
            state.posts.push(action.payload)

        })
    }
});


export const {postAdded,reactionButton}=PostsSlice.actions;

export const selectedAllPosts=state=>state.posts.posts;
export const getStatus=state=>state.posts.status;
export const getError=state=>state.posts.error;

export default PostsSlice.reducer;


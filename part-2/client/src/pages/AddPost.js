import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPosts, getError } from '../features/PostsSlice';
import { selectedAllUser } from '../features/UsersSlice';

const AddPost = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [userId,setUserId]=useState("");
    const users=useSelector(selectedAllUser);
    const [addRequest,setAddRequest]=useState("idle");
    const error=useSelector(getError);

    const cansave=[title,content,userId].every(Boolean) && addRequest==="idle";

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();
          if(cansave){
            try{
              setAddRequest("pending");
              if(title && content && userId){
               dispatch(addPosts({title,body:content,userId})).unwrap()
              }
             }
             catch(err){
               console.error('Failed to save the post', err)  
             }
             finally{
             setAddRequest("idle")
             }
          }
      
      
    }


    const options=users.map((user)=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ));



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required />
        <input placeholder='Content' value={content} onChange={(e)=>setContent(e.target.value)} required />
        <select value={userId} onChange={(e)=>setUserId(e.target.value)} required>
            <option value={""}>Select User</option>
            {options}
        </select>
        <button type="submit" disabled={!cansave}>Submit</button>
      </form>
    </div>
  )
}

export default AddPost

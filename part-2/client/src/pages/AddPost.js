import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { postAdded } from '../features/PostsSlice';
import { selectedAllUser } from '../features/UsersSlice';

const AddPost = () => {
    const [title,setTitle]=useState("");
    const [content,setContent]=useState("");
    const [userId,setUserId]=useState("");
    const users=useSelector(selectedAllUser);

    const dispatch=useDispatch();

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(title,content){
             dispatch(postAdded(title,content,userId));
             setTitle("");
             setContent("");
             setUserId("");
        }
    }


    const options=users.map((user)=>(
        <option key={user.id} value={user.id}>{user.name}</option>
    ));

    const disableds=Boolean(title) && Boolean(content) && Boolean(userId);


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} required />
        <input placeholder='Content' value={content} onChange={(e)=>setContent(e.target.value)} required />
        <select value={userId} onChange={(e)=>setUserId(e.target.value)} required>
            <option value={""}>Select User</option>
            {options}
        </select>
        <button type="submit" disabled={!disableds}>Submit</button>
      </form>
    </div>
  )
}

export default AddPost

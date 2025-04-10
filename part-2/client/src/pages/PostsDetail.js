import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts, getStatus, selectedAllPosts } from '../features/PostsSlice'
import PostExpert from './PostExpert';

const PostsDetail = () => {
    const posts=useSelector(selectedAllPosts);
    const status=useSelector(getStatus);

    const dispatch=useDispatch();

    useEffect(()=>{
     if(status==="idle"){
      dispatch(fetchPosts());
     }
    },[dispatch])

   


    let content;


    if(status==="loading"){
      content=<p>Loading.....</p>
    }
    else if(status==="success"){
      const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))
      content=orderedPosts.map((post,i)=>(
        <PostExpert key={post.id} post={post} />
     ))
    }



  return (
    <div>
       {content}
    </div>
  )
}

export default PostsDetail

import React from 'react'
import { useSelector } from 'react-redux'
import { selectedAllPosts } from '../features/PostsSlice'
import Timeago from './Timeago';
import UserList from './UserList';

const PostsDetail = () => {
    const posts=useSelector(selectedAllPosts);

    const orderedPosts=posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

   const renderedPost=orderedPosts.map((post)=>(
    <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <Timeago timestamp={post.date} />
          <UserList userId={post.userId} />
          <br />
    </div>
   ))

  return (
    <div>
       {renderedPost}
    </div>
  )
}

export default PostsDetail

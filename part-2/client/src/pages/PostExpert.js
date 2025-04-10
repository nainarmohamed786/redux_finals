import React from 'react';
import Timeago from './Timeago';
import UserList from './UserList';
import ReactionButton from '../features/ReactionButton';

let PostExpert = ({post}) => {
  return (
    <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,100)}....</p>
        <Timeago timestamp={post.date} />
        <UserList userId={post.userId} />
        <ReactionButton post={post} />
        <br />
  </div>  
  )
}

PostExpert=React.memo(PostExpert)

export default PostExpert

import React from 'react';
import {useDispatch} from 'react-redux'
import { reactionButton } from './PostsSlice';

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😮',
    heart: '❤️',
    rocket: '🚀',
    coffee: '☕'
}
const ReactionButton = ({post}) => {

    const dispatch=useDispatch();

      const renderButton=Object.entries(reactionEmoji).map(([name,emoji])=>{
        return(
            <button key={name} onClick={()=>dispatch(reactionButton({postId:post.id,reaction:name}))}>
               {emoji} {post.reactions[name]}
            </button>
        )
      })

  return (
    <div>
      {renderButton}
    </div>
  )
}

export default ReactionButton

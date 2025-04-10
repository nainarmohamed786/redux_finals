import { formatDistanceToNow, parseISO } from 'date-fns'
import React from 'react'

const Timeago = ({timestamp}) => {

    let timeago=""

    if(timestamp){
        const date=parseISO(timestamp);
        const times=formatDistanceToNow(date);
        timeago=`${times} ago`;
    }

  return (
    <div>
       {timeago}
    </div>
  )
}

export default Timeago

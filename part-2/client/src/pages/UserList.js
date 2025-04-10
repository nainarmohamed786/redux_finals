import React from 'react'
import { useSelector } from 'react-redux'
import { selectedAllUser } from '../features/UsersSlice'

const UserList = ({userId}) => {
    const users=useSelector(selectedAllUser);

    const filterUser=users.find((users)=>users.id === userId);

    const renderedUser=filterUser ? filterUser.name :"unknown users";

  return (
    <div>
      {renderedUser}
    </div>
  )
}

export default UserList

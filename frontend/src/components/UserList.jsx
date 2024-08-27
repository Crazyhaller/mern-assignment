import React from 'react'
import UserCard from './UserCard'

const UserList = ({ users, onSelect, selectedUsers }) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {users &&
        users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            onSelect={onSelect}
            isSelected={selectedUsers.includes(user)}
          />
        ))}
    </div>
  )
}

export default UserList

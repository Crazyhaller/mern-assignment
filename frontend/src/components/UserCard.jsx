import React from 'react'

const UserCard = ({ user, onSelect, isSelected }) => {
  return (
    <div
      className={`relative border rounded-lg p-4 w-48 text-center shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
        isSelected ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
      }`}
      onClick={() => onSelect(user)}
    >
      <input
        type="checkbox"
        checked={isSelected}
        readOnly
        className="absolute top-2 right-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
      />
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="rounded-full w-16 h-16 object-cover mx-auto mb-4"
      />
      <h3 className="text-lg font-semibold text-purple-700">{`${user.first_name} ${user.last_name}`}</h3>
      <p className="text-sm text-gray-600">Email: {user.email}</p>
      <p className="text-sm text-gray-600">Gender: {user.gender}</p>
      <p className="text-sm text-gray-600">Domain: {user.domain}</p>
      <p className="text-sm text-gray-600">
        Available: {user.available ? 'Yes' : 'No'}
      </p>
    </div>
  )
}

export default UserCard

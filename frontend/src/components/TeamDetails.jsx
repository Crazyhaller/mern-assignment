import React from 'react'

const TeamDetails = ({ team }) => {
  return (
    <div className="team-details p-6 bg-white rounded-lg shadow-md bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      <h2 className="text-2xl font-bold mb-4 text-purple-700">
        Team: {team.name}
      </h2>
      <ul className="space-y-4">
        {team.users.map((user) => (
          <li
            key={user._id}
            className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg"
          >
            <img
              src={user.avatar}
              alt={`${user.first_name} ${user.last_name}`}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-lg font-semibold text-blue-700">
                {user.first_name} {user.last_name}
              </p>
              <p className="text-sm text-gray-600">{user.email}</p>
              <p className="text-sm text-gray-600">Domain: {user.domain}</p>
              <p className="text-sm text-gray-600">Gender: {user.gender}</p>
              <p className="text-sm text-gray-600">
                Available: {user.available ? 'Yes' : 'No'}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TeamDetails

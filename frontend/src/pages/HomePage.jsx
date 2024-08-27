import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../features/users/usersSlice'
import { addTeam } from '../features/team/teamSlice'
import UserList from '../components/UserList'
import Search from '../components/Search'
import Filter from '../components/Filter'
import Pagination from '../components/Pagination'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const users = useSelector((state) => state.users.users)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedUsers, setSelectedUsers] = useState([])
  const [teamName, setTeamName] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  console.log('Current Page:', currentPage)
  const totalPages = users.totalDocs ? Math.ceil(users.totalDocs / 20) : 0

  const [filters, setFilters] = useState({
    domain: '',
    gender: '',
    availability: '',
  })

  useEffect(() => {
    dispatch(
      getUsers({ page: currentPage, size: 20, ...filters, name: searchQuery })
    )
  }, [dispatch, currentPage, filters, searchQuery])

  const handleUserSelect = (user) => {
    setSelectedUsers((prevSelected) =>
      prevSelected.includes(user)
        ? prevSelected.filter((u) => u._id !== user._id)
        : [...prevSelected, user]
    )
  }

  const handleCreateTeam = async () => {
    const teamData = {
      name: teamName,
      userIds: selectedUsers.map((user) => user._id),
    }
    const resultAction = await dispatch(addTeam(teamData))
    if (addTeam.fulfilled.match(resultAction)) {
      const newTeamId = resultAction.payload._id
      navigate(`/team/${newTeamId}`)
    }
  }

  return (
    <div className="home-page p-4 bg-gradient-to-r from-yellow-200 via-red-200 to-pink-200 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="w-full md:w-auto">
          <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Filter filters={filters} setFilters={setFilters} />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleCreateTeam()
          }}
          className="flex flex-col md:flex-row items-center mt-4 md:mt-0"
        >
          <label className="mr-2 text-blue-700">
            Team Name:
            <input
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="p-2 rounded border ml-2 bg-white border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </label>
          <button
            type="submit"
            disabled={selectedUsers.length === 0 || teamName.trim() === ''}
            className={`p-2 rounded ml-2 ${
              selectedUsers.length === 0 || teamName.trim() === ''
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-500 text-white'
            }`}
          >
            Create Team
          </button>
        </form>
      </div>
      <UserList
        users={users.docs || []}
        onSelect={handleUserSelect}
        selectedUsers={selectedUsers}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default HomePage

import React from 'react'

const Search = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Search by name"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="search-input p-2 rounded border w-full mb-4 bg-yellow-100 border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
    />
  )
}

export default Search

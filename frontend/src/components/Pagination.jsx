import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages < 1) return null

  const pages = [...Array(totalPages).keys()].map((num) => num + 1)
  console.log('Pages:', pages)

  return (
    <div className="flex justify-center mt-4">
      <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-4 py-2 rounded ${
              page === currentPage
                ? 'bg-blue-500 text-white'
                : 'bg-white border border-gray-300'
            } hover:bg-blue-100`}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination

import React from 'react'

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }

  return (
    <div className="filter-container flex flex-wrap gap-4 mb-4">
      <select
        name="domain"
        onChange={handleChange}
        className="p-2 rounded border bg-white bg-green-100 border-green-300 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">All Domain</option>
        <option value="sales">Sales</option>
        <option value="marketing">Marketing</option>
        <option value="finance">Finance</option>
        <option value="management">Management</option>
        <option value="uidesigning">UI Designing</option>
        <option value="businessdevelopment">Business Development</option>
        <option value="it">IT</option>
      </select>
      <select
        name="gender"
        onChange={handleChange}
        className="p-2 rounded border bg-white bg-blue-100 border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <select
        name="availability"
        onChange={handleChange}
        className="p-2 rounded border bg-white bg-purple-100 border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">All Availability</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
    </div>
  )
}

export default Filter

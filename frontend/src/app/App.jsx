import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import TeamPage from '../pages/TeamPage'

const App = () => {
  return (
    <Router>
      <div className="app min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/team/:id" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

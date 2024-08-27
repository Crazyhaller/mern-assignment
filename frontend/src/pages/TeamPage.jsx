import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getTeam } from '../features/team/teamSlice'
import TeamDetails from '../components/TeamDetails'

const TeamPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const team = useSelector((state) => state.team.team)

  useEffect(() => {
    dispatch(getTeam(id))
  }, [dispatch, id])

  return (
    <div className="team-page p-4 min-h-screen bg-gradient-to-r from-green-200 via-blue-200 to-purple-200">
      {team ? <TeamDetails team={team} /> : <p>Loading...</p>}
    </div>
  )
}

export default TeamPage

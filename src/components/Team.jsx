import React from 'react'
import { Link } from 'react-router-dom'

function Team() {
  const teams = [
    {id: 1, name: "FC Barcelona"},
    {id: 2, name: "Real Madrid"},
    {id: 3, name: "Paris Saint German"},
    {id: 4, name: "Arsenal"},
    {id: 5, name: "Bayern Munich"},
    {id: 6, name: "Manchester United"},
    {id: 7, name: "Manchester City"},
    {id: 8, name: "Chelsea"},
    {id: 9, name: "Dortmund"},
    {id: 10, name: "AC Milan"},
  ]
  return (
    <div style={{textAlign: "center"}}>
      {teams.map((team) => {
        return (
          <li key={team.id}>
            <Link to={`/teamdetail/${team.name}`} >{team.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default Team
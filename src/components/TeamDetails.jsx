import React from 'react'
import { useParams } from 'react-router-dom'

function TeamDetails() {

  const team = useParams().name;
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Playing... {team}</h1>
    </div>
  )
}

export default TeamDetails
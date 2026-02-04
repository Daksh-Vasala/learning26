import React from 'react'
import { useParams } from 'react-router-dom'

function Watch() {
  
  const movie = useParams().name;
  return (
    <div>
      <h1>Watching... {movie}</h1>
    </div>
  )
}

export default Watch
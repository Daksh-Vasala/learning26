import React from 'react'
import { Link } from 'react-router-dom'

function NetflixMovies() {
  const movies = [
    {id: 1, name: "Super 30"},
    {id: 2, name: "Hi Nanna"},
    {id: 3, name: "Home Alone"},
  ]

  return (
    <div style={{ textAlign: "center" }}>
      {movies.map((movie) => {
        return (
          <li key={movies.id}>
            <Link to={`/watch/${movie.name}`} >{movie.name}</Link>
          </li>
        )
      })}
    </div>
  )
}

export default NetflixMovies
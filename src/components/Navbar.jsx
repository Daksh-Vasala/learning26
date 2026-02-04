import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{backgroundColor: "black"}}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active"  aria-current="page" to="/">Home</Link>
            <Link className="nav-link" to="/netflixShows">Shows</Link>
            <Link className="nav-link" to="/netflixMovies">Movies</Link>
            <Link className="nav-link" to="/netflixSeries">Series</Link>
            <Link className="nav-link" to="/team">Teams</Link>
            <Link className="nav-link" to="/netflixContact">Contact</Link>
            <Link className="nav-link" to="/netflixAbout">About</Link>
            <Link className="nav-link" to="/watch/:name"></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
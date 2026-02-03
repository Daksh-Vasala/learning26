import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="/netflixShows">Shows</Link>
              <Link className="nav-link" to="/netflixMovies">Movies</Link>
              <Link className="nav-link" to="/netflixSeries">Series</Link>
              <Link className="nav-link" to="/netflixContact">Contact</Link>
              <Link className="nav-link" to="/netflixAbout">About</Link>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
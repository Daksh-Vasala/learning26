import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
          <Link className="nav-link" to="/netflixShows">
            Shows
          </Link>
          <Link className="nav-link" to="/netflixMovies">
            Movies
          </Link>
          <Link className="nav-link" to="/netflixSeries">
            Series
          </Link>
          <Link className="nav-link" to="/team">
            Teams
          </Link>
          <Link className="nav-link" to="/netflixContact">
            Contact
          </Link>
          <Link className="nav-link" to="/netflixAbout">
            About
          </Link>
          <Link className="nav-link" to="/watch/:name"></Link>
          <Link className="nav-link" to="/funcd1">
            Func demo 1
          </Link>
          <Link className="nav-link" to="/used1">
            Usestate demo 1
          </Link>
          <Link className="nav-link" to="/used2">
            Usestate demo 2
          </Link>
          <Link className="nav-link" to="/used3">
            Usestate demo 3
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

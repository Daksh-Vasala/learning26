import { Link } from "react-router-dom";
import Logo from "./Logo";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid" style={{ backgroundColor: "black" }}>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0"> 
          <Logo logo="Netflix"/>
          {
            props.navLinks.map((nav) => {
              return <Link key={nav.name} className="nav-link" to={nav.link}>{nav.name}</Link>
            })
          }
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
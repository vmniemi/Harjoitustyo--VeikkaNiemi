import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink to="/" className="logo">
          CyberHub
        </NavLink>

        <div className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/learn">Learn</NavLink>
          <NavLink to="/external-resources">External Resources</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
          <NavLink to="/add-topic">Add Topic</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/login">Login</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logoutUser } from "../firebase/authService";

function Navbar() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logoutUser();
    navigate("/");
  }
<a className="skip-link" href="#main-content">
  Skip to main content
</a>
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

          {currentUser ? (
            <>
              <span className="user-email">{currentUser.email}</span>
              <button className="nav-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
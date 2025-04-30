import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaSignInAlt,
  FaSignOutAlt,
  FaClinicMedical
} from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current path

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login', { state: { loggedOut: true } });
  };

  // Hide the navbar on the admin panel
  if (location.pathname === '/admin') {
    return null; // Do not render the Navbar on the admin page
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">DentalCare</div>
      <div className="nav-links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          <FaHome /> Home
        </NavLink>
        <NavLink
          to="/book-appointment"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          <FaCalendarCheck /> Book Appointment
        </NavLink>
        <NavLink
          to="/specialists"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          <FaUserMd /> Specialists
        </NavLink>
        <NavLink
          to="/treatments"
          className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
        >
          <FaClinicMedical /> Treatments
        </NavLink>
        {isLoggedIn ? (
          <button className="logout-button" onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </button>
        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) => (isActive ? 'nav-item active' : 'nav-item')}
          >
            <FaSignInAlt /> Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

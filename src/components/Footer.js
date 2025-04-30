import { Link, useLocation } from 'react-router-dom';
import { FaQuestionCircle, FaShieldAlt, FaFileAlt } from 'react-icons/fa';
import './Footer.css';
function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className={`footer ${isHome ? 'home-footer' : ''}`}>
      {isHome ? (
        <div className="floating-cards">
          <Link to="/faq" className="floating-card"><FaQuestionCircle /> FAQ</Link>
          <Link to="/privacy" className="floating-card"><FaShieldAlt /> Privacy</Link>
          <Link to="/terms" className="floating-card"><FaFileAlt /> Terms</Link>
        </div>
      ) : (
        <>
          <div className="footer-links">
            <Link to="/faq"><FaQuestionCircle /> FAQ</Link>
            <Link to="/privacy"><FaShieldAlt /> Privacy</Link>
            <Link to="/terms"><FaFileAlt /> Terms</Link>
          </div>
          <p className="footer-text">&copy; 2025 DentalCare. All rights reserved.</p>
        </>
      )}
    </footer>
  );
}

export default Footer;

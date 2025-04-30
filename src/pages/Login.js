import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './Login.css';
import loginBackground from './images/login.jpg';

function Login({ setIsLoggedIn, setUserData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/';

  // Show logout message if redirected from logout
  useEffect(() => {
    if (location.state?.loggedOut) {
      alert('Logged out successfully.');
      navigate(location.pathname, { replace: true, state: {} }); // Clear state
    }
  }, [location, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Logged in:', email);
      setIsLoggedIn(true);
      setUserData({
        name: 'John Doe',
        email: email,
      });
      alert('Login successful!');
      navigate(from, { replace: true });
    }
  };

  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${loginBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
          <div className="new-user">
            <p>New user? <Link to="/register">Create an account</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;

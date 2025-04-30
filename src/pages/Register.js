import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import registerBackground from './images/register.jpg'; // <-- Import background image

function Register({ setIsLoggedIn, setUserData }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Basic validation
    let error = '';
    switch (name) {
      case 'name':
        // Name must only contain letters and spaces
        if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name should only contain letters and spaces.';
        }
        break;
      case 'email':
        // Simple email validation using regex
        if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value)) {
          error = 'Please enter a valid email address.';
        }
        break;
      case 'password':
        // Password must be at least 8 characters long, contain a number, an uppercase letter, and a special character
        if (!/(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}/.test(value)) {
          error = 'Password must be at least 8 characters, with at least one uppercase letter, one number, and one special character.';
        }
        break;
      case 'confirmPassword':
        // Confirm password must match the password field
        if (value !== formData.password) {
          error = 'Passwords do not match.';
        }
        break;
      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure no errors before submitting
    if (Object.values(errors).some((error) => error)) {
      alert('Please correct the errors in the form.');
      return;
    }

    console.log('Registered:', formData);

    setIsLoggedIn(true);
    setUserData({
      name: formData.name,
      email: formData.email,
    });

    navigate('/');
  };

  return (
    <div
      className="register-page"
      style={{
        backgroundImage: `url(${registerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="register-form">
        <h2>Create Your Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
            />
            {errors.password && <small className="error">{errors.password}</small>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
              value={formData.confirmPassword}
              required
            />
            {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
          </div>
          <button type="submit" className="register-btn" disabled={Object.values(errors).some((error) => error)}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;

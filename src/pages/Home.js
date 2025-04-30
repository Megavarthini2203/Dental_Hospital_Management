import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <div className="home-content">
        <h1>Welcome to DentalCare</h1>
        <p>Register to manage appointments and patients with ease.</p>
        <Link to="/register">
          <button className="cta-button">Register Now</button>
        </Link>
      </div>

      <div className="home-highlights">
        <h2>Why Choose Us?</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            <h3>20+ Treatments</h3>
            <p>From orthodontics to cosmetic dentistry, we offer a wide range of services.</p>
          </div>
          {/* <div className="highlight-card">
            <h3>10+ Expert Doctors</h3>
            <p>Experienced and specialized dentists at your service.</p>
          </div> */}
          <div className="highlight-card">
            <h3>95% Patient Satisfaction</h3>
            <p>We prioritize your comfort and care every step of the way.</p>
          </div>
          <div className="highlight-card">
            <h3>24/7 Appointment Access</h3>
            <p>Book and manage your visits anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

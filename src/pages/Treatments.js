import React from 'react';
import './Treatments.css';
import { useNavigate, useLocation } from 'react-router-dom'; // Added useLocation
import treatmentbackground from './images/treatment.jpg';

const treatments = [
  {
    name: 'Teeth Whitening',
    description: 'Brighten and whiten your teeth in one visit.',
    availability: 'Mon-Fri: 9:00 AM - 5:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/4139/4139972.png'
  },
  {
    name: 'Root Canal',
    description: 'Advanced care to save your natural tooth.',
    availability: 'Mon-Wed: 2:00 PM - 6:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/6190/6190918.png'
  },
  {
    name: 'Braces',
    description: 'Straighten your teeth with modern orthodontics.',
    availability: 'Tue & Thu: 10:00 AM - 4:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/861/861173.png'
  },
  {
    name: 'Tooth Extraction',
    description: 'Quick and painless removal of damaged teeth.',
    availability: 'Everyday: 11:00 AM - 7:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/4139/4139959.png'
  },
  {
    name: 'Dental Implants',
    description: 'Permanent solution for missing teeth.',
    availability: 'Mon-Fri: 10:00 AM - 6:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/11451/11451496.png'
  },
  {
    name: 'Cosmetic Dentistry',
    description: 'Smile makeovers tailored for you.',
    availability: 'Wed & Fri: 12:00 PM - 4:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/8839/8839929.png'
  }
];

function Treatments() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current location path

  const handleBook = (treatmentName) => {
    navigate('/book-appointment', {
      state: {
        treatment: treatmentName,
        from: location.pathname // 👈 add this to redirect back after booking
      }
    });
  };

  return (
    <div
      className="treatments-page"
      style={{
        backgroundImage: `url(${treatmentbackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: '40px',
      }}
    >
      <h2>Available Dental Treatments</h2>
      <div className="treatment-cards">
        {treatments.map((treat, index) => (
          <div className="treatment-card" key={index}>
            <img src={treat.image} alt={treat.name} className="treatment-img" />
            <h3>{treat.name}</h3>
            <p>{treat.description}</p>
            <p><strong>Availability:</strong> {treat.availability}</p>
            <button className="book-btn" onClick={() => handleBook(treat.name)}>
              Book Appointment
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Treatments;

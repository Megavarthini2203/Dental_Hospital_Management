import React from 'react';
import './Doctors.css';
import { useNavigate, useLocation } from 'react-router-dom';
import doctorBackground from './images/doctors.jpg';

const doctors = [
  {
    name: 'Dr. John Doe',
    specialization: 'Orthodontist',
    availability: '10:00 AM - 1:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774299.png'
  },
  {
    name: 'Dr. Jane Smith',
    specialization: 'Periodontist',
    availability: '2:00 PM - 5:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774473.png'
  },
  {
    name: 'Dr. David Lee',
    specialization: 'Endodontist',
    availability: '5:00 PM - 8:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774369.png'
  },
  {
    name: 'Dr. Priya Kumar',
    specialization: 'Prosthodontist',
    availability: '9:00 AM - 12:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774503.png'
  },
  {
    name: 'Dr. Amir Rahman',
    specialization: 'Oral Surgeon',
    availability: '1:00 PM - 4:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774510.png'
  },
  {
    name: 'Dr. Nisha Patel',
    specialization: 'Pediatric Dentist',
    availability: '4:00 PM - 7:00 PM',
    image: 'https://cdn-icons-png.flaticon.com/512/3774/3774322.png'
  }
];

function Doctors() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBook = (doctorName) => {
    navigate('/book-appointment', {
      state: {
        doctor: doctorName,
        from: location.pathname // So we can redirect back after booking
      }
    });
  };

  return (
    <div
      className="doctors-page"
      style={{
        backgroundImage: `url(${doctorBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <div className="doctors-overlay">
        <h2>Meet Our Specialist Doctors</h2>
        <div className="doctor-cards">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} className="doctor-img" />
              <h3>{doc.name}</h3>
              <p>{doc.specialization}</p>
              <p><strong>Available:</strong> {doc.availability}</p>
              <button className="book-btn" onClick={() => handleBook(doc.name)}>
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Doctors;

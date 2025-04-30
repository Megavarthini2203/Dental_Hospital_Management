import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './BookAppointment.css';
import appointmentBackground from './images/appointment.jpg';

function BookAppointment({ isLoggedIn, userData }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    doctor: location.state?.doctor || ''
  });

  const [userAppointments, setUserAppointments] = useState([]);

  const booked = location.state?.booked;
  const fromPage = location.state?.from || '/';

  useEffect(() => {
    if (!isLoggedIn) {
      alert("Please log in to book an appointment!");
      navigate('/login', { state: { from: location.pathname } });
    } else {
      setFormData(prev => ({
        ...prev,
        name: userData.name || '',
        email: userData.email || ''
      }));

      // Load existing appointments for the user
      const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
      const filteredAppointments = allAppointments.filter(app => app.email === userData.email);
      setUserAppointments(filteredAppointments);
    }
  }, [isLoggedIn, userData, navigate, location.pathname]);

  useEffect(() => {
    if (booked) {
      alert("Appointment booked successfully!");
      navigate(fromPage, { replace: true });
    }
  }, [booked, navigate, fromPage]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const appointmentDateTime = new Date(`${formData.date}T${formData.time}`);
    const now = new Date();

    if (appointmentDateTime <= now) {
      alert("Please choose a future date and time.");
      return;
    }

    const newAppointment = { ...formData };
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));

    setUserAppointments(prev => [...prev, newAppointment]);

    setFormData(prev => ({
      ...prev,
      date: '',
      time: '',
      doctor: ''
    }));

    navigate('/book-appointment', { state: { booked: true, from: fromPage } });
  };

  const handleCancel = (indexToDelete) => {
    const updatedAppointments = userAppointments.filter((_, idx) => idx !== indexToDelete);
    setUserAppointments(updatedAppointments);

    // Update localStorage
    const allAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const filtered = allAppointments.filter(app =>
      !(app.email === userData.email && app.date === userAppointments[indexToDelete].date && app.time === userAppointments[indexToDelete].time && app.doctor === userAppointments[indexToDelete].doctor)
    );
    localStorage.setItem('appointments', JSON.stringify(filtered));
  };

  return (
    <div className="appointment-page"
      style={{
        backgroundImage: `url(${appointmentBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}>
      <div className="appointment-form">
        <h2>Book Your Appointment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} disabled />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={formData.email} disabled />
          </div>
          <div className="form-group">
            <label>Choose Date</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              min={new Date().toISOString().split("T")[0]}
            />
          </div>
          <div className="form-group">
            <label>Choose Time</label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Select Doctor</label>
            <select
              name="doctor"
              value={formData.doctor}
              onChange={handleChange}
              required
            >
              <option value="">Select a Doctor</option>
              <option value="Dr. John Doe">Dr. John Doe - 10:00 AM to 1:00 PM</option>
              <option value="Dr. Jane Smith">Dr. Jane Smith - 2:00 PM to 5:00 PM</option>
              <option value="Dr. David Lee">Dr. David Lee - 5:00 PM to 8:00 PM</option>
              <option value="Dr. Priya Kumar">Dr. Priya Kumar - 9:00 AM to 12:00 PM</option>
              <option value="Dr. Amir Rahman">Dr. Amir Rahman - 1:00 PM to 4:00 PM</option>
              <option value="Dr. Nisha Patel">Dr. Nisha Patel - 4:00 PM to 7:00 PM</option>
            </select>
          </div>
          <button type="submit" className="book-btn">Confirm Appointment</button>
        </form>

        <hr />

        <h3>Your Appointments ({userAppointments.length})</h3>
        {userAppointments.length === 0 ? (
          <p>No appointments booked.</p>
        ) : (
          <ul className="appointment-list">
            {userAppointments.map((appointment, index) => (
              <li key={index} className="appointment-item">
                <strong>{appointment.doctor}</strong><br />
                Date: {appointment.date} <br />
                Time: {appointment.time}
                <button onClick={() => handleCancel(index)} className="cancel-btn">Cancel</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BookAppointment;

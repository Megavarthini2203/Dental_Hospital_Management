import React, { useState, useEffect } from 'react';
import './AdminPanel.css';

function AdminPanel() {
  const [appointments, setAppointments] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedAppointment, setEditedAppointment] = useState({});
  const [newAppointment, setNewAppointment] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    doctor: ''
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('appointments')) || [];
    setAppointments(data);
  }, []);

  const handleDelete = (index) => {
    const updated = [...appointments];
    updated.splice(index, 1);
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedAppointment(appointments[index]);
  };

  const handleEditChange = (e) => {
    setEditedAppointment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleEditSave = () => {
    const updated = [...appointments];
    updated[editingIndex] = editedAppointment;
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    setEditingIndex(null);
    setEditedAppointment({});
  };

  const handleNewChange = (e) => {
    setNewAppointment(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddAppointment = (e) => {
    e.preventDefault();
    const updated = [...appointments, newAppointment];
    setAppointments(updated);
    localStorage.setItem('appointments', JSON.stringify(updated));
    setNewAppointment({ name: '', email: '', date: '', time: '', doctor: '' });
  };

  const filteredAppointments = appointments.filter(
    (appt) =>
      appt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      appt.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="admin-panel">
      <h2>Admin Panel - Manage Appointments</h2>

      {/* Add New Appointment Form */}
      <h3>Add New Appointment</h3>
      <form className="add-form" onSubmit={handleAddAppointment}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newAppointment.name}
          onChange={handleNewChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newAppointment.email}
          onChange={handleNewChange}
          required
        />
        <input
          type="date"
          name="date"
          value={newAppointment.date}
          onChange={handleNewChange}
          required
        />
        <input
          type="time"
          name="time"
          value={newAppointment.time}
          onChange={handleNewChange}
          required
        />
        <select
          name="doctor"
          value={newAppointment.doctor}
          onChange={handleNewChange}
          required
        >
          <option value="">Select Doctor</option>
          <option value="Dr. John Doe">Dr. John Doe</option>
          <option value="Dr. Jane Smith">Dr. Jane Smith</option>
          <option value="Dr. David Lee">Dr. David Lee</option>
          <option value="Dr. Priya Kumar">Dr. Priya Kumar</option>
          <option value="Dr. Amir Rahman">Dr. Amir Rahman</option>
          <option value="Dr. Nisha Patel">Dr. Nisha Patel</option>
        </select>
        <button type="submit">Add Appointment</button>
      </form>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by name or email..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Appointments Table */}
      {filteredAppointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <table className="appointments-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Doctor</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredAppointments.map((appt, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="text"
                      name="name"
                      value={editedAppointment.name}
                      onChange={handleEditChange}
                    />
                  ) : (
                    appt.name
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="email"
                      name="email"
                      value={editedAppointment.email}
                      onChange={handleEditChange}
                    />
                  ) : (
                    appt.email
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="date"
                      name="date"
                      value={editedAppointment.date}
                      onChange={handleEditChange}
                    />
                  ) : (
                    appt.date
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      type="time"
                      name="time"
                      value={editedAppointment.time}
                      onChange={handleEditChange}
                    />
                  ) : (
                    appt.time
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <select
                      name="doctor"
                      value={editedAppointment.doctor}
                      onChange={handleEditChange}
                    >
                      <option value="">Select a Doctor</option>
                      <option value="Dr. John Doe">Dr. John Doe</option>
                      <option value="Dr. Jane Smith">Dr. Jane Smith</option>
                      <option value="Dr. David Lee">Dr. David Lee</option>
                      <option value="Dr. Priya Kumar">Dr. Priya Kumar</option>
                      <option value="Dr. Amir Rahman">Dr. Amir Rahman</option>
                      <option value="Dr. Nisha Patel">Dr. Nisha Patel</option>
                    </select>
                  ) : (
                    appt.doctor
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button onClick={handleEditSave}>Save</button>
                      <button onClick={() => setEditingIndex(null)}>Cancel</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleEdit(index)}>Edit</button>
                      <button onClick={() => handleDelete(index)}>Delete</button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminPanel;

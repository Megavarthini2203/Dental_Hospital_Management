import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import BookAppointment from './pages/BookAppointment';
import Specialists from './pages/Doctors';
import Treatments from './pages/Treatments';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AdminPanel from './pages/AdminPanel';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedLogin = localStorage.getItem('isLoggedIn');
    return storedLogin === 'true';
  });

  const [userData, setUserData] = useState(() => {
    const storedUser = localStorage.getItem('userData');
    return storedUser ? JSON.parse(storedUser) : {};
  });

  // Sync login state and userData to localStorage
  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [isLoggedIn, userData]);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
        />
        <Route
          path="/register"
          element={<Register setIsLoggedIn={setIsLoggedIn} setUserData={setUserData} />}
        />
        <Route
          path="/book-appointment"
          element={<BookAppointment isLoggedIn={isLoggedIn} userData={userData} />}
        />
        <Route path="/specialists" element={<Specialists />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/admin" element={<AdminPanel />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Dashboard from './Dashboard';
import HotelList from './HotelList';
import Sidebar from './Sidebar';
import Login from './Login';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Route LOGIN */}
        <Route
          path="/"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />

        {/* Routes PROTÉGÉES */}
        <Route
          path="/dashboard"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                <Sidebar />
                <Dashboard />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/hotels"
          element={
            isLoggedIn ? (
              <div className="app-layout">
                <Sidebar />
                <HotelList />
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Sécurité */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

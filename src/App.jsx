import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Login from './Login';
import Dashboard from './Dashboard';
import HotelList from './HotelList';

// ==================== HOOKS PERSONNALISÉS ====================

/**
 * Hook personnalisé pour gérer l'authentification
 * Synchronise l'état avec localStorage
 */
const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  // Fonction pour se connecter
  const login = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  // Fonction pour se déconnecter
  const logout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  // Synchroniser avec localStorage si modifié dans un autre onglet
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'isLoggedIn') {
        setIsLoggedIn(e.newValue === 'true');
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return { isLoggedIn, login, logout };
};

// ==================== COMPOSANTS ====================

/**
 * Composant pour protéger les routes authentifiées
 * Redirige vers la page de login si non connecté
 */
const ProtectedRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? children : <Navigate to="/" replace />;
};

/**
 * Composant pour la route publique (Login)
 * Redirige vers dashboard si déjà connecté
 */
const PublicRoute = ({ isLoggedIn, children }) => {
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : children;
};

// ==================== COMPOSANT PRINCIPAL ====================

function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Route publique - Page de connexion */}
        <Route
          path="/"
          element={
            <PublicRoute isLoggedIn={isLoggedIn}>
              <Login setIsLoggedIn={login} />
            </PublicRoute>
          }
        />

        {/* Routes protégées - Nécessitent authentification */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Dashboard handleLogout={logout} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/hotels"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <HotelList handleLogout={logout} />
            </ProtectedRoute>
          }
        />

        {/* Route par défaut - Redirige vers la page d'accueil */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
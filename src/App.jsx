import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './Dashboard';
import HotelList from './HotelList';
import './App.css';

function App() {
  const navigate = useNavigate();
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="login-container">
            {/* Logo Section */}
            <div className="logo-section">
              <span className="logo-icon">🏛</span>
              <span className="logo-text">RED PRODUCT</span>
            </div>
            {/* Login Card */}
            <div className="login-card">
              {!showForgotPassword ? ( <>
                  <p className="login-subtitle">Connectez-vous en tant que Admin</p>
                  <form 
                    className="login-form"
                    onSubmit={(e) => { 
                      e.preventDefault(); 
                      navigate('/dashboard'); 
                    }}>
                    <input 
                      type="email" 
                      className="input-field"
                      placeholder="E-mail" />
                    <input type="password" className="input-field"placeholder="Mot de passe"/>
                    <div className="checkbox-container">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Gardez-moi connecté</label>
                    </div>
                    <button type="submit" className="login-button"> Se connecter</button>
                  </form> <div className="footer-links">
                    <a href="#" className="forgot-password" onClick={(e) => { e.preventDefault();
                        setShowForgotPassword(true);}}> Mot de passe oublié?</a>
                    <p className="signup-text"> Vous n'avez pas de compte?{' '}
                      <span className="signup-link">S'inscrire</span>
                    </p>
                  </div> </> ) : ( <>
                  <h2 className="forgot-password-title">Mot de passe oublié?</h2>
                  <p className="forgot-password-description">  Entrez votre adresse e-mail ci-dessous et nous vous enverrons des instructions sur la façon de modifier votre mot de passe.</p>
                  <form  className="login-form" onSubmit={(e) => { 
                      e.preventDefault(); 
                      alert('Instructions envoyées!');
                      setShowForgotPassword(false);
                    }}
                  >
                    <input 
                      type="email" 
                      className="input-field"
                      placeholder="Votre e-mail"
                      required
                    />

                    <button type="submit" className="login-button">
                      Envoyer
                    </button>
                  </form>

                  <div className="footer-links">
                    <p className="back-to-login">
                      Revenir à la{' '}
                      <span 
                        className="login-link"
                        onClick={() => setShowForgotPassword(false)}
                      >
                        connexion
                      </span>
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        }
      />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/hotels" element={<HotelList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
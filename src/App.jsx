import { useState } from 'react';
import { FaBookmark } from 'react-icons/fa';
import Dashboard from './Dashboard';
import HotelList from './HotelList';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login'); 

  const handleLogin = (e) => {
    e.preventDefault();
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setCurrentPage('login');
  };

  const handleForgotPassword = () => {
    setCurrentPage('forgot-password');
  };

  const handleBackToLogin = () => {
    setCurrentPage('login');
  };

  const handleGoToSignup = () => {
    setCurrentPage('signup');
  };

  // Navigation
  if (currentPage === 'dashboard') {
    return <Dashboard onGoToHotels={() => setCurrentPage('hotels')} onLogout={handleLogout} />;
  }

  if (currentPage === 'hotels') {
    return <HotelList onGoToDashboard={() => setCurrentPage('dashboard')} onLogout={handleLogout} />;
  }

  // Page Mot de passe oublié
  if (currentPage === 'forgot-password') {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">
            <FaBookmark className="auth-logo-icon" />
            <span className="auth-logo-text">RED PRODUCT</span>
          </div>

          <div className="auth-form-container">
            <h2 className="auth-title">Mot de passe oublié?</h2>
            <p className="auth-description">
              Entrez votre adresse e-mail ci-dessous et nous vous envoyons des instructions sur la façon de modifier votre mot de passe.
            </p>
            
            <form className="auth-form" onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Instructions envoyées ! Vérifiez votre boîte e-mail.');
              setCurrentPage('dashboard');
            }}>
              <input 
                type="email" 
                placeholder="Votre e-mail" 
                className="auth-input" 
                required 
              />
              
              <button type="submit" className="auth-button">
                Envoyer
              </button>
            </form>

            <p className="auth-footer">
              Revenir à la <span className="auth-link" onClick={handleBackToLogin}>connexion</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Page d'inscription
  if (currentPage === 'signup') {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-logo">
            <FaBookmark className="auth-logo-icon" />
            <span className="auth-logo-text">RED PRODUCT</span>
          </div>

          <div className="auth-form-container">
            <h2 className="auth-title">Inscrivez-vous en tant que Admin</h2>
            
            <form className="auth-form" onSubmit={(e) => { 
              e.preventDefault(); 
              alert('Inscription réussie !'); 
              setCurrentPage('login'); 
            }}>
              <input 
                type="text" 
                placeholder="Nom" 
                className="auth-input" 
                required 
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="auth-input" 
                required 
              />
              <input 
                type="password" 
                placeholder="Mot de passe" 
                className="auth-input" 
                required 
              />
              
              <div className="auth-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">Accepter les termes et la politique</label>
              </div>

              <button type="submit" className="auth-button">
                S'inscrire
              </button>
            </form>

            <p className="auth-footer">
              Vous avez déjà un compte? <span className="auth-link" onClick={handleBackToLogin}>Se connecter</span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Page de connexion - NOUVEAU CODE
  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-logo">
          <FaBookmark className="auth-logo-icon" />
          <span className="auth-logo-text">RED PRODUCT</span>
        </div>

        <div className="auth-form-container">
          <h2 className="auth-title">Connectez-vous en tant que Admin</h2>
          
          <form className="auth-form" onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="E-mail" 
              className="auth-input" 
              required 
            />
            <input 
              type="password" 
              placeholder="Mot de passe" 
              className="auth-input" 
              required 
            />
            
            <div className="auth-checkbox">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Gardez-moi connecté</label>
            </div>

            <button type="submit" className="auth-button">
              Se connecter
            </button>
          </form>
        </div>

        <p className="auth-footer-outside">
          <span className="auth-link" onClick={handleForgotPassword}>Mot de passe oublié?</span>
        </p>
        
        <p className="auth-footer-outside">
          Vous n'avez pas de compte? <span className="auth-link" onClick={handleGoToSignup}>S'inscrire</span>
        </p>
      </div>
    </div>
  );
}

export default App;
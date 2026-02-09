import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="logo-section">
        <div className="logo-icon">🏛</div>
        <span className="logo-text">RED PRODUCT</span>
      </div>

      <div className="login-card">
        {!showForgotPassword && !showSignup ? (
          <>
            <h2 className="login-title">Connectez-vous en tant que Admin</h2>
            
            <form className="login-form" onSubmit={handleLogin}>
              <input 
                type="email" 
                className="input-field" 
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              
              <input 
                type="password" 
                className="input-field" 
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="checkbox-container">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Gardez-moi connecté</label>
              </div>

              <button type="submit" className="login-button">
                Se connecter
              </button>
            </form>

            <div className="footer-links">
              <a 
                href="#" 
                className="forgot-password-link"
                onClick={(e) => { 
                  e.preventDefault(); 
                  setShowForgotPassword(true); 
                }}
              >
                Mot de passe oublié ?
              </a>
              <p className="signup-text">
                Vous n'avez pas de compte ?{' '}
                <span 
                  className="signup-link" 
                  onClick={() => setShowSignup(true)}
                >
                  S'inscrire
                </span>
              </p>
            </div>
          </>
        ) : showForgotPassword ? (
          <div className="forgot-password-view">
            <h2 className="login-title">Mot de passe oublié ?</h2>
            <p className="subtitle">Entrez votre email pour réinitialiser votre mot de passe</p>
            <input 
              type="email" 
              className="input-field" 
              placeholder="E-mail"
            />
            <button className="login-button">
              Envoyer le lien
            </button>
            <button 
              onClick={() => setShowForgotPassword(false)}
              className="back-button"
            >
              Retour à la connexion
            </button>
          </div>
        ) : (
          <div className="signup-view">
            <h2 className="login-title">S'inscrire</h2>
            <p className="subtitle">Créez votre compte</p>
            <input 
              type="text" 
              className="input-field" 
              placeholder="Nom complet"
            />
            <input 
              type="email" 
              className="input-field" 
              placeholder="E-mail"
            />
            <input 
              type="password" 
              className="input-field" 
              placeholder="Mot de passe"
            />
            <button className="login-button">
              Créer un compte
            </button>
            <button 
              onClick={() => setShowSignup(false)}
              className="back-button"
            >
              Retour à la connexion
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
import { useNavigate, useLocation } from 'react-router-dom';
import './Dashboard.css';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          </svg>
        </div>
        <span className="sidebar-logo-text">RED PRODUCT</span>
      </div>

      <div className="sidebar-section">
        <p className="sidebar-section-title">Principal</p>
        <nav className="sidebar-nav">
          <button 
            className={`sidebar-item ${location.pathname === '/dashboard' ? 'active' : ''}`}
            onClick={() => navigate('/dashboard')}
          >
            <span className="sidebar-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
              </svg>
            </span>
            Dashboard
          </button>
          <button 
            className={`sidebar-item ${location.pathname === '/hotels' ? 'active' : ''}`}
            onClick={() => navigate('/hotels')}
          >
            <span className="sidebar-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v13h2v-2h18v2h2v-9c0-2.21-1.79-4-4-4z"/>
              </svg>
            </span>
            Liste des hôtels
          </button>
        </nav>
      </div>

      <div className="sidebar-user">
        <img 
          src="https://i.pravatar.cc/150?img=12" 
          alt="User" 
          className="user-avatar"
        />
        <div className="user-info">
          <p className="user-name">Abdoul aziz Ndour</p>
          <p className="user-status">
            <span className="status-dot"></span>
            en ligne
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
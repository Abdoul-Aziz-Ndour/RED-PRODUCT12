import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

function HotelList() {
  const navigate = useNavigate();

  const hotels = [
    {
      id: 1,
      nom: 'Hôtel Terrou-Bi',
      adresse: 'Boulevard Martin Luther King Dakar, 11500',
      prix: '25,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      nom: 'King Fahd Palace',
      adresse: 'Rte des Almadies, Dakar',
      prix: '20,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      nom: 'Radisson Blu Hotel',
      adresse: 'Rte de la Corniche O, Dakar 16868',
      prix: '22,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&h=300&fit=crop'
    },
    {
      id: 4,
      nom: 'Pullman Dakar Teranga',
      adresse: "Place de l'indépendance, 10 Rue Ps, 29, Dakar",
      prix: '30,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1455587734955-081b22074882?w=500&h=300&fit=crop'
    },
    {
      id: 5,
      nom: 'Hôtel Lac Rose',
      adresse: 'Lac Rose, Dakar',
      prix: '25,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500&h=300&fit=crop'
    },
    {
      id: 6,
      nom: 'Hôtel Saly',
      adresse: 'Mbour, Sénégal',
      prix: '20,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500&h=300&fit=crop'
    },
    {
      id: 7,
      nom: 'Palm Beach Resort & Spa',
      adresse: 'BP64, Saly 23000',
      prix: '22,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=500&h=300&fit=crop'
    },
    {
      id: 8,
      nom: 'Pullman Dakar Teranga',
      adresse: "Place de l'indépendance, 10 Rue Ps, 29, Dakar",
      prix: '30,000 XOF par nuit',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&h=300&fit=crop'
    }
  ];

  return (
    <div className="app-layout">
      {/* Sidebar */}
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
            <button className="sidebar-item" onClick={() => navigate('/dashboard')}>
              <span className="sidebar-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                </svg>
              </span>
              Dashboard
            </button>
            <button className="sidebar-item active" onClick={() => navigate('/hotels')}>
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

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="top-bar">
          <h1 className="page-title">Liste des hôtels</h1>
          <div className="top-bar-actions">
            <div className="search-box">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
              <input type="text" placeholder="Recherche" />
            </div>
            <div className="notification-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
              </svg>
              <span className="notification-badge">3</span>
            </div>
            <img 
              src="https://i.pravatar.cc/150?img=12" 
              alt="Profile" 
              className="profile-pic"
            />
            <button className="logout-icon" onClick={() => navigate('/')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Hotels List Content */}
        <div className="hotels-list-content">
          <div className="hotels-header">
            <h2 className="hotels-title">
              Hôtels <span className="hotels-count">8</span>
            </h2>
            <button className="btn-create-hotel">
              + Créer un nouveau hôtel
            </button>
          </div>

          <div className="hotels-grid">
            {hotels.map((hotel) => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image-container">
                  <img 
                    src={hotel.image} 
                    alt={hotel.nom}
                    className="hotel-image"
                  />
                </div>
                <div className="hotel-details">
                  <p className="hotel-address">{hotel.adresse}</p>
                  <h3 className="hotel-name">{hotel.nom}</h3>
                  <p className="hotel-price">{hotel.prix}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HotelList;
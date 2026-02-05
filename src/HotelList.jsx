// src/HotelList.jsx
import React from 'react';
import { FaBookmark, FaThLarge, FaHotel, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './Dashboard.css';
import './HotelList.css';

const HotelList = ({ onGoToDashboard, onLogout }) => {
  const hotels = [
    {
      id: 1,
      name: 'Hôtel Terrou-Bi',
      address: 'Boulevard Martin Luther King Dakar, 11500',
      price: '25.000 XOF',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'King Fahd Palace',
      address: 'Rue des Almadies, Dakar',
      price: '20.000 XOF',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Radisson Blu Hotel',
      address: 'Rue de la Corniche D, Dakar 16868',
      price: '22.000 XOF',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Pullman Dakar Teranga',
      address: "Place de l'Indépendance, 10 Rue Pt. 29, Dakar",
      price: '30.000 XOF',
      image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=400&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Hôtel Lac Rose',
      address: 'Lac Rose, Dakar',
      price: '25.000 XOF',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400&h=300&fit=crop'
    },
    {
      id: 6,
      name: 'Hôtel Saly',
      address: 'Mbour, Sénégal',
      price: '20.000 XOF',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Palm Beach Resort & Spa',
      address: 'BP64, Saly 23000',
      price: '22.000 XOF',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Pullman Dakar Teranga',
      address: "Place de l'Indépendance, 10 Rue Pt. 29, Dakar",
      price: '30.000 XOF',
      image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <FaBookmark className="sidebar-logo-icon" />
          <span className="sidebar-logo-text">RED PRODUCT</span>
        </div>

        <nav className="sidebar-nav">
          <p className="nav-section-title">Principal</p>
          <button className="nav-item" onClick={onGoToDashboard}>
            <FaThLarge className="nav-icon" />
            <span>Dashboard</span>
          </button>
          <button className="nav-item active">
            <FaHotel className="nav-icon" />
            <span>Liste des hôtels</span>
          </button>
        </nav>

        <div className="sidebar-user">
          <img 
            src="https://i.pravatar.cc/40" 
            alt="User" 
            className="user-avatar" 
          />
          <div className="user-info">
            <p className="user-name">Abdoul Aziz Ndour</p>
            <p className="user-status">
              <span className="status-dot"></span>
              en ligne
            </p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="top-header">
          <h1 className="page-title">Liste des hôtels</h1>
          
          <div className="header-actions">
            <div className="search-box">
              <input type="text" placeholder="Recherche" />
            </div>
            <button className="notification-btn">
              <FaBell />
              <span className="notification-badge">3</span>
            </button>
            <img 
              src="https://i.pravatar.cc/40?img=2" 
              alt="Profile" 
              className="profile-avatar" 
            />
            <button onClick={onLogout} className="logout-btn">
              <FaSignOutAlt />
            </button>
          </div>
        </header>

        {/* Hotels Content */}
        <div className="hotels-content">
          <div className="hotels-header">
            <h2 className="hotels-title">
              Hôtels <span className="hotels-count">{hotels.length}</span>
            </h2>
            <button className="create-hotel-btn">+ Créer un nouveau hôtel</button>
          </div>

          <div className="hotels-grid">
            {hotels.map(hotel => (
              <div key={hotel.id} className="hotel-card">
                <div className="hotel-image">
                  <img src={hotel.image} alt={hotel.name} />
                </div>
                <div className="hotel-info">
                  <p className="hotel-address">{hotel.address}</p>
                  <h3 className="hotel-name">{hotel.name}</h3>
                  <p className="hotel-price">{hotel.price} par nuit</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelList;
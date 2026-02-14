import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';

// Composant pour le bouton hamburger - CORRIGÉ : Reste toujours hamburger
const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className="hamburger-btn"
    onClick={onClick}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
);

// Composant pour l'overlay
const SidebarOverlay = ({ isOpen, onClick }) => (
  <div
    className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
    onClick={onClick}
  ></div>
);

// Composant pour le header de la sidebar
const SidebarHeader = ({ onLogoClick }) => (
  <div className="sidebar-header">
    <div
      className="sidebar-logo-icon"
      onClick={onLogoClick}
      style={{ cursor: 'pointer' }}
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
      </svg>
    </div>
    <span className="sidebar-logo-text">RED PRODUCT</span>
  </div>
);

// Composant pour un item de navigation
const NavItem = ({ icon, label, isActive, onClick }) => (
  <button
    className={`sidebar-item ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <svg className="sidebar-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d={icon}/>
    </svg>
    {label}
  </button>
);

// Composant pour la section de navigation
const SidebarNavigation = ({ navigate, closeSidebar }) => {
  const navItems = [
    {
      icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z",
      label: "Dashboard",
      isActive: true,
      path: '/dashboard'
    },
    {
      icon: "M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V7H1v13h2v-2h18v2h2v-9c0-2.21-1.79-4-4-4z",
      label: "Liste des hôtels",
      isActive: false,
      path: '/hotels'
    }
  ];

  return (
    <div className="sidebar-section">
      <p className="sidebar-section-title">PRINCIPAL</p>
      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            label={item.label}
            isActive={item.isActive}
            onClick={() => {
              navigate(item.path);
              closeSidebar();
            }}
          />
        ))}
      </nav>
    </div>
  );
};

// Composant pour l'utilisateur dans la sidebar
const SidebarUser = () => (
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
);

// Composant Sidebar complet
const Sidebar = ({ isOpen, onLogoClick, navigate, closeSidebar }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <SidebarHeader onLogoClick={onLogoClick} />
    <SidebarNavigation navigate={navigate} closeSidebar={closeSidebar} />
    <SidebarUser />
  </aside>
);

// Composant pour la barre de recherche
const SearchBox = () => (
  <div className="search-box">
    <svg fill="currentColor" viewBox="0 0 24 24">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
    <input type="text" placeholder="Recherche" />
  </div>
);

// Composant pour la barre supérieure
const TopBar = ({ onLogout }) => (
  <div className="top-bar">
    <h1 className="page-title">Dashboard</h1>

    <div className="top-bar-actions">
      <SearchBox />

      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        className="profile-pic"
      />

      <button className="logout-icon" onClick={onLogout}>
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/>
        </svg>
      </button>
    </div>
  </div>
);

// Composant pour une carte de statistique
const StatCard = ({ icon, color, number, label, subtitle }) => (
  <div className="stat-card">
    <div className={`stat-icon ${color}`}>
      <svg fill="white" viewBox="0 0 24 24" width="24" height="24">
        <path d={icon}/>
      </svg>
    </div>
    <div className="stat-info">
      <h3 className="stat-number">{number}</h3>
      <p className="stat-label">{label}</p>
      <p className="stat-subtitle">{subtitle}</p>
    </div>
  </div>
);

// Composant pour la grille de statistiques
const StatsGrid = () => {
  const stats = [
    {
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z",
      color: "purple",
      number: "125",
      label: "Formulaires",
      subtitle: "Je ne sais pas quoi mettre"
    },
    {
      icon: "M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z",
      color: "cyan",
      number: "40",
      label: "Messages",
      subtitle: "Je ne sais pas quoi mettre"
    },
    {
      icon: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
      color: "yellow",
      number: "600",
      label: "Utilisateurs",
      subtitle: "Je ne sais pas quoi mettre"
    },
    {
      icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z",
      color: "red",
      number: "25",
      label: "E-mails",
      subtitle: "Je ne sais pas quoi mettre"
    },
    {
      icon: "M12 11.5A2.5 2.5 0 0 0 9.5 9a2.5 2.5 0 0 0-2.5 2.5A2.5 2.5 0 0 0 9.5 14a2.5 2.5 0 0 0 2.5-2.5zM12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13s-7-7.75-7-13a7 7 0 0 1 7-7z",
      color: "magenta",
      number: "40",
      label: "Hôtels",
      subtitle: "Je ne sais pas quoi mettre"
    },
    {
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
      color: "blue",
      number: "02",
      label: "Entités",
      subtitle: "Je ne sais pas quoi mettre"
    }
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          icon={stat.icon}
          color={stat.color}
          number={stat.number}
          label={stat.label}
          subtitle={stat.subtitle}
        />
      ))}
    </div>
  );
};

// Composant pour le contenu du dashboard
const DashboardContent = () => (
  <div className="dashboard-content">
    <div className="welcome-section">
      <h2>Bienvenue sur RED Product</h2>
      <p className="welcome-subtitle">
        Lorem ipsum dolor sit amet consectetur
      </p>
    </div>
    <StatsGrid />
  </div>
);

// Hook personnalisé pour gérer la sidebar responsive
const useSidebarState = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return { sidebarOpen, toggleSidebar, closeSidebar };
};

// Composant principal Dashboard  
function Dashboard({ handleLogout }) {
  const navigate = useNavigate();
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebarState();

  const handleLogoClick = () => {
    handleLogout();
    navigate('/');
  };

  const handleLogoutClick = () => {
    handleLogout();
    navigate('/');
  };

  return (
    <div className="app-layout">
      <HamburgerButton isOpen={sidebarOpen} onClick={toggleSidebar} />
      <SidebarOverlay isOpen={sidebarOpen} onClick={closeSidebar} />
      <Sidebar 
        isOpen={sidebarOpen} 
        onLogoClick={handleLogoClick} 
        navigate={navigate}
        closeSidebar={closeSidebar}
      />
      <main className="main-content">
        <TopBar onLogout={handleLogoutClick} />
        <DashboardContent />
      </main>
    </div>
  );
}

export default Dashboard;
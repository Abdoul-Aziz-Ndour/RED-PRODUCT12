import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';

// ==================== COMPOSANTS UTILITAIRES ====================

// Hook personnalisé pour gérer la sidebar responsive
const useSidebarState = () => {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return { sidebarOpen, toggleSidebar, closeSidebar };
};

// ==================== COMPOSANTS UI ====================

// Composant Hamburger
const HamburgerButton = ({ isOpen, onClick }) => (
  <button
    className={`hamburger-btn ${isOpen ? 'active' : ''}`}
    onClick={onClick}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>
);

// Composant Overlay
const SidebarOverlay = ({ isOpen, onClick }) => (
  <div
    className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
    onClick={onClick}
  ></div>
);

// Composant Header Sidebar
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

// Composant Navigation Sidebar
const SidebarNavigation = ({ navigate, currentPage }) => {
  const navItems = [
    { label: 'Dashboard', path: '/dashboard', isActive: currentPage === 'dashboard' },
    { label: 'Liste des hôtels', path: '/hotels', isActive: currentPage === 'hotels' }
  ];

  return (
    <div className="sidebar-section">
      <p className="sidebar-section-title">PRINCIPAL</p>
      <nav className="sidebar-nav">
        {navItems.map((item, index) => (
          <button
            key={index}
            className={`sidebar-item ${item.isActive ? 'active' : ''}`}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

// Composant User Sidebar
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

// Composant Sidebar Complet
const Sidebar = ({ isOpen, onLogoClick, navigate, currentPage }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <SidebarHeader onLogoClick={onLogoClick} />
    <SidebarNavigation navigate={navigate} currentPage={currentPage} />
    <SidebarUser />
  </aside>
);

// Composant Top Bar
const TopBar = ({ title, onLogout }) => (
  <div className="top-bar">
    <h1 className="page-title">{title}</h1>
    <div className="top-bar-actions">
      <div className="search-box">
        <input type="text" placeholder="Recherche" />
      </div>
      <img
        src="https://i.pravatar.cc/150?img=12"
        alt="Profile"
        className="profile-pic"
      />
      <button className="logout-icon" onClick={onLogout}>
        Logout
      </button>
    </div>
  </div>
);

// ==================== COMPOSANTS HOTEL ====================

// Composant Header Hotels
const HotelsHeader = ({ count, onCreateClick }) => (
  <div className="hotels-header">
    <div className="hotels-title">
      <h2>Hôtels</h2>
      <span className="hotels-count">{count}</span>
    </div>
    <button className="btn-create-hotel" onClick={onCreateClick}>
      + Créer un nouveau hôtel
    </button>
  </div>
);

// Composant Card Hotel
const HotelCard = ({ hotel }) => (
  <div className="hotel-card">
    <div className="hotel-image-container">
      <img src={hotel.image} alt={hotel.nom} className="hotel-image" />
    </div>
    <div className="hotel-details">
      <p className="hotel-address">{hotel.adresse}</p>
      <h3 className="hotel-name">{hotel.nom}</h3>
      <p className="hotel-price">{hotel.prix}</p>
    </div>
  </div>
);

// Composant Grid Hotels
const HotelsGrid = ({ hotels }) => (
  <div className="hotels-grid">
    {hotels.map(hotel => (
      <HotelCard key={hotel.id} hotel={hotel} />
    ))}
  </div>
);

// ==================== COMPOSANTS FORMULAIRE ====================

// Composant Input Form
const FormInput = ({ label, name, value, onChange, type = "text", placeholder, required = true }) => (
  <div className="form-group">
    <label>{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </div>
);

// Composant Select Form
const FormSelect = ({ label, name, value, onChange, options }) => (
  <div className="form-group">
    <label>{label}</label>
    <select name={name} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

// Composant Upload Image
const ImageUploadArea = ({ onImageChange, fileName }) => (
  <div className="form-group-full">
    <label>Ajouter une photo</label>
    <div
      className="image-upload-area"
      onClick={() => document.getElementById('image-upload').click()}
    >
      <div className="upload-label">
        <svg fill="currentColor" viewBox="0 0 24 24" width="32" height="32">
          <path d="M19.5 5.25c0-1.38-1.12-2.5-2.5-2.5H7c-1.38 0-2.5 1.12-2.5 2.5v13.5c0 1.38 1.12 2.5 2.5 2.5h10c1.38 0 2.5-1.12 2.5-2.5V5.25zM17 18.5H7V5.25h10v13.25zm-4-5.5c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1zm-4-4.5c.55 0 1-.45 1-1V5.25H8V9c0 .55.45 1 1 1z"/>
        </svg>
        <p>Ajouter une photo</p>
      </div>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={onImageChange}
        style={{ display: 'none' }}
      />
      {fileName && <p className="file-name">{fileName}</p>}
    </div>
  </div>
);

// Composant Modal Create Hotel
const CreateHotelModal = ({ isOpen, onClose, onSubmit, formData, onInputChange, onImageChange }) => {
  if (!isOpen) return null;

  const currencyOptions = [
    { value: 'F XOF', label: 'F XOF' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
  ];

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h2>CRÉER UN NOUVEAU HÔTEL</h2>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-row">
            <FormInput
              label="Nom de l'hôtel"
              name="name"
              value={formData.name}
              onChange={onInputChange}
              placeholder="CAP Marianne"
            />
            <FormInput
              label="Adresse"
              name="address"
              value={formData.address}
              onChange={onInputChange}
              placeholder="Les îles du saloum, Mar Lodj"
            />
          </div>

          <div className="form-row">
            <FormInput
              label="E-mail"
              name="email"
              type="email"
              value={formData.email}
              onChange={onInputChange}
              placeholder="information@gmail.com"
            />
            <FormInput
              label="Numéro de téléphone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={onInputChange}
              placeholder="+221 77 777 77 77"
            />
          </div>

          <div className="form-row">
            <FormInput
              label="Prix par nuit"
              name="price"
              value={formData.price}
              onChange={onInputChange}
              placeholder="25.000 XOF"
            />
            <FormSelect
              label="Devise"
              name="currency"
              value={formData.currency}
              onChange={onInputChange}
              options={currencyOptions}
            />
          </div>

          <ImageUploadArea
            onImageChange={onImageChange}
            fileName={formData.image?.name}
          />

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Enregistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// ==================== COMPOSANT PRINCIPAL ====================

function HotelList({ handleLogout }) {
  const navigate = useNavigate();
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebarState();

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    currency: 'F XOF',
    image: null
  });

  const hotels = [
    { id: 1, nom: 'Hôtel Terrou-Bi', adresse: 'Boulevard Martin Luther King Dakar, 11500', prix: '25.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&h=300&fit=crop' },
    { id: 2, nom: 'King Fahd Palace', adresse: 'Rte des Almadies, Dakar', prix: '20.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1549294413-26f195200c16?w=500&h=300&fit=crop' },
    { id: 3, nom: 'Radisson Blu Hotel', adresse: 'Rte de la Corniche O, Dakar 16868', prix: '22.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?w=500&h=300&fit=crop' },
    { id: 4, nom: 'Pullman Dakar Teranga', adresse: "Place de l'indépendance, 10 Rue Ps, 29, Dakar", prix: '30.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=500&h=300&fit=crop' },
    { id: 5, nom: 'Hôtel Lac Rose', adresse: 'Lac Rose, Dakar', prix: '25.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=300&fit=crop' },
    { id: 6, nom: 'Hôtel Saly', adresse: 'Mbour, Sénégal', prix: '20.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=500&h=300&fit=crop' },
    { id: 7, nom: 'Palm Beach Resort & Spa', adresse: 'BP64, Saly 23000', prix: '22.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=500&h=300&fit=crop' },
    { id: 8, nom: 'Pullman Dakar Teranga', adresse: "Place de l'indépendance, 10 Rue Ps, 29, Dakar", prix: '30.000 XOF par nuit', image: 'https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=500&h=300&fit=crop' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setFormData(prev => ({ ...prev, image: file }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    alert('Hôtel créé avec succès!');
    setShowCreateModal(false);
    setFormData({
      name: '',
      address: '',
      email: '',
      phone: '',
      price: '',
      currency: 'F XOF',
      image: null
    });
  };

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
        currentPage="hotels"
      />

      <main className="main-content">
        <TopBar title="Liste des hôtels" onLogout={handleLogoutClick} />

        <div className="hotels-list-content">
          <HotelsHeader
            count={hotels.length}
            onCreateClick={() => setShowCreateModal(true)}
          />
          <HotelsGrid hotels={hotels} />
        </div>

        <CreateHotelModal
          isOpen={showCreateModal}
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleSubmit}
          formData={formData}
          onInputChange={handleInputChange}
          onImageChange={handleImageChange}
        />
      </main>
    </div>
  );
}

export default HotelList;
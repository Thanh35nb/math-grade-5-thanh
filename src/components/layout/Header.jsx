import { useState } from 'react';
import { Calculator, Home, BookOpen, Trophy, User, Menu, X } from 'lucide-react';
import './Header.css';

const Header = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (view) => {
    if (onNavigate) {
      onNavigate(view);
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Trang chủ', view: 'home', icon: Home },
    { label: 'Học tập', view: 'dashboard', icon: BookOpen },
  ];

  return (
    <header className="header">
      <div className="container header-container">
        <button onClick={() => handleNavClick('home')} className="logo">
          <div className="logo-icon">
            <Calculator size={28} />
          </div>
          <span className="logo-text">Math<span className="logo-highlight">Grade5</span></span>
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          {navItems.map((item) => (
            <button
              key={item.label}
              className={`nav-link ${currentView === item.view ? 'active' : ''}`}
              onClick={() => handleNavClick(item.view)}
            >
              <item.icon size={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="header-actions">
          <button className="user-button glass-button">
            <User size={20} />
            <span>Học sinh</span>
          </button>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Đóng menu' : 'Mở menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

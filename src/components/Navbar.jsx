import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Zap, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Models', path: '/models' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="glass-nav">
      <div className="container flex justify-between items-center w-full">
        <Link to="/" className="flex items-center gap-1" style={{ zIndex: 60 }}>
          <Zap color="var(--primary)" size={28} />
          <span style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
            Geo<span className="text-gradient">moto</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <ul className="flex gap-4 items-center" style={{ display: 'none' }}>
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                  fontWeight: 600,
                  transition: 'color 0.3s'
                }}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/models" className="btn btn-primary">Pre-book Now</Link>
          </li>
        </ul>

        {/* Desktop query using standard styling here to avoid complex media queries in inline styles */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (min-width: 768px) {
            .desktop-menu { display: flex !important; }
            .mobile-btn { display: none !important; }
          }
          .mobile-menu-overlay {
            position: fixed; top: 0; left: 0; width: 100%; height: 100vh;
            background: rgba(5, 5, 15, 0.95); backdrop-filter: blur(20px);
            z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center;
            transform: translateY(-100%); transition: transform 0.4s ease;
          }
          .mobile-menu-overlay.open { transform: translateY(0); }
        `}} />

        <ul className="desktop-menu gap-4 items-center" style={{ display: 'none' }}>
          {links.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.path}
                style={{
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                  fontWeight: 600,
                  transition: 'color 0.3s',
                  padding: '0.5rem 1rem'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                onMouseLeave={(e) => e.target.style.color = location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)'}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/models" className="btn btn-primary">Pre-book</Link>
          </li>
        </ul>

        {/* Mobile menu toggle */}
        <button className="mobile-btn" onClick={toggleMenu} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer', zIndex: 60 }}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`}>
          <ul className="flex flex-col items-center gap-6" style={{ fontSize: '1.5rem' }}>
            {links.map((link) => (
              <li key={link.name}>
                <Link to={link.path} onClick={toggleMenu} style={{ color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)', fontWeight: 700 }}>
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="mt-4">
              <Link to="/models" className="btn btn-primary" onClick={toggleMenu}>Pre-book Now</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

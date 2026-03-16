import React from 'react';
import { Zap, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{ background: 'rgba(13, 13, 33, 0.4)', borderTop: '1px solid var(--border-color)', padding: '4rem 0 2rem 0', marginTop: 'auto' }}>
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-6 mb-10 md:grid-cols-1">
          <div>
            <Link to="/" className="flex items-center gap-1 mb-4" style={{ display: 'inline-flex' }}>
              <Zap color="var(--primary)" size={24} />
              <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
                Geo<span className="text-gradient">moto</span>
              </span>
            </Link>
            <p className="text-muted" style={{ maxWidth: '300px' }}>
              Accelerating India's transition to sustainable energy with premium, high-performance electric scooters.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Quick Links</h4>
            <Link to="/" className="text-muted" style={{ transition: 'color 0.2s', display: 'inline-block' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Home</Link>
            <Link to="/models" className="text-muted" style={{ transition: 'color 0.2s', display: 'inline-block' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>Our Models</Link>
            <Link to="/about" className="text-muted" style={{ transition: 'color 0.2s', display: 'inline-block' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>About Us</Link>
          </div>

          <div className="flex flex-col gap-2">
            <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}><Facebook size={20} /></a>
              <a href="#" className="text-muted" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}><Twitter size={20} /></a>
              <a href="#" className="text-muted" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}><Instagram size={20} /></a>
              <a href="#" className="text-muted" style={{ transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color = 'var(--primary)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}><Linkedin size={20} /></a>
            </div>
            <p className="text-muted mt-4 text-sm">
              Subscribe to our newsletter for the latest EV updates in India.
            </p>
          </div>
        </div>
        
        <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '2rem', textAlign: 'center' }}>
          <p className="text-muted" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Geomoto EV Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

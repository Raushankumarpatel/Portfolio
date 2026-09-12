import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FileText, Sparkles, Send } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Navbar({ onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <a href="#hero" className="brand-logo">
          <div className="logo-icon-box" style={{ overflow: 'hidden', padding: 0, borderRadius: '50%', border: '2px solid var(--primary-cyan)' }}>
            <img src={portfolioData.personal.avatarImage} alt="Raushan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
          </div>
          <span className="brand-name">
            {portfolioData.personal.name.split(' ')[0]}
            <span className="brand-dot">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`nav-item ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}

          <button onClick={onOpenResume} className="btn btn-secondary btn-nav-resume">
            <FileText size={16} />
            <span>Resume</span>
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <nav className="mobile-nav-list">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`mobile-nav-item ${activeSection === link.id ? 'active' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-primary w-full mt-4"
            >
              <FileText size={18} />
              <span>View Resume</span>
            </button>
          </nav>
        </div>
      )}

      <style>{`
        .navbar-wrapper {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: 1.25rem 0;
          transition: var(--transition-normal);
        }

        .navbar-scrolled {
          padding: 0.75rem 0;
          background: rgba(9, 13, 22, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }

        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .brand-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .logo-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          border: 1px solid rgba(6, 182, 212, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
        }

        .brand-name {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-main);
          letter-spacing: -0.02em;
        }

        .brand-dot {
          color: var(--primary-cyan);
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-item {
          color: var(--text-muted);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: var(--transition-fast);
          position: relative;
        }

        .nav-item:hover, .nav-item.active {
          color: var(--text-main);
        }

        .nav-item.active::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, var(--primary-cyan), var(--primary-violet));
          border-radius: 2px;
        }

        .btn-nav-resume {
          padding: 0.5rem 1.1rem;
          font-size: 0.88rem;
          border-radius: 10px;
        }

        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-main);
          cursor: pointer;
          padding: 0.5rem;
        }

        .mobile-drawer {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .mobile-nav-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .mobile-nav-item {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 600;

        }

        .mobile-nav-item.active {
          color: var(--primary-cyan);
        }

        .w-full {
          width: 100%;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        @media (max-width: 868px) {
          .desktop-nav {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }
      `}</style>
    </header>
  );
}

import React from 'react';
import { ArrowUp, Code2, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="brand-logo">
            <div className="logo-icon-box" style={{ overflow: 'hidden', padding: 0, borderRadius: '50%', border: '2px solid var(--primary-cyan)' }}>
              <img src={portfolioData.personal.avatarImage} alt="Raushan" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }} />
            </div>
            <span className="brand-name">
              {portfolioData.personal.name}
              <span className="brand-dot">.dev</span>
            </span>
          </div>
          <p className="footer-tagline">
            Building software with passion, performance & precision.
          </p>
        </div>

        <div className="footer-copy-row">
          <p className="copyright-text">
            © {new Date().getFullYear()} {portfolioData.personal.name}. Built with React, Vite & Glassmorphism.
          </p>

          <button onClick={scrollToTop} className="back-top-btn" title="Back to Top">
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .footer-wrapper {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(9, 13, 22, 0.95);
          padding: 3rem 0 2rem;
          margin-top: 4rem;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.6rem;
          text-align: center;
        }

        .footer-tagline {
          font-size: 0.9rem;
          color: var(--text-subtle);
        }

        .footer-copy-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          flex-wrap: wrap;
          gap: 1rem;
        }

        .copyright-text {
          font-size: 0.85rem;
          color: var(--text-subtle);
        }

        .back-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.4rem 0.9rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .back-top-btn:hover {
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.1);
        }

        @media (max-width: 600px) {
          .footer-copy-row {
            justify-content: center;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}

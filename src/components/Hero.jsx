import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Sparkles, Terminal, Award, Code, MapPin, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export function Hero({ onOpenResume }) {
  const { personal, education } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personal.roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentRole.length) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % personal.roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, personal.roles]);

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column Text Content */}
        <div className="hero-text-content">
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personal.statusBadge}</span>
          </div>

          <h1 className="hero-heading">
            Hi, I'm <span className="gradient-text">{personal.name}</span> 👋
          </h1>

          <div className="role-typer-wrapper">
            <span className="typer-prefix">I am a </span>
            <span className="typer-text">{displayedText}</span>
            <span className="typer-cursor">|</span>
          </div>

          <p className="hero-subtitle">
            {personal.subtitle}
          </p>

          <div className="hero-location-info">
            <span className="info-chip">
              <MapPin size={15} className="chip-icon" />
              {personal.location}
            </span>
            <span className="info-chip">
              <Award size={15} className="chip-icon" />
              Master of Computer Applications (MCA)
            </span>
          </div>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            
            <button onClick={onOpenResume} className="btn btn-secondary">
              <Download size={18} />
              <span>Resume / CV</span>
            </button>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="GitHub">
              <GithubIcon size={20} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" title="LinkedIn">
              <LinkedinIcon size={20} />
            </a>
          </div>

          {/* Sleek Hero Quick Stats Counter */}
          <div className="hero-stats-bar glass-card">
            <div className="stat-item">
              <span className="stat-num gradient-text">MCA</span>
              <span className="stat-label">Pursuing Degree</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num gradient-text">2 Mo</span>
              <span className="stat-label">Web Dev Intern</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num gradient-text">11 Mo</span>
              <span className="stat-label">Bank RO Experience</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-num gradient-text">MERN</span>
              <span className="stat-label">Full Stack Stack</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual Graphic */}
        <div className="hero-visual">
          <div className="avatar-glow-ring"></div>
          <div className="avatar-glow-ring-2"></div>
          
          <div className="avatar-glass-frame glass-card">
            <img 
              src={personal.avatarImage} 
              alt={personal.name} 
              className="hero-avatar-img"
            />

            {/* Floating Glass Badges */}
            <div className="floating-badge badge-top-left glass-card">
              <Code size={20} className="badge-icon icon-cyan" />
              <div>
                <div className="badge-value">MERN Stack</div>
                <div className="badge-label">Full-Stack Dev</div>
              </div>
            </div>

            <div className="floating-badge badge-top-right glass-card">
              <Sparkles size={20} className="badge-icon icon-pink" />
              <div>
                <div className="badge-value">React.js</div>
                <div className="badge-label">Frontend Specialist</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-right glass-card">
              <Award size={20} className="badge-icon icon-violet" />
              <div>
                <div className="badge-value">2 Months</div>
                <div className="badge-label">Web Dev Intern</div>
              </div>
            </div>

            <div className="floating-badge badge-bottom-left glass-card">
              <Terminal size={20} className="badge-icon icon-green" />
              <div>
                <div className="badge-value">Node & Mongo</div>
                <div className="badge-label">Backend REST APIs</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-section {
          min-height: 100vh;
          padding: 8.5rem 0 5rem;
          display: flex;
          align-items: center;
          position: relative;
        }

        .hero-container {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          align-items: center;
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.1rem;
          border-radius: 9999px;
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.3);
          color: #10b981;
          font-size: 0.88rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 10px #10b981;
          animation: pulseGlow 2s infinite;
        }

        .hero-heading {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .role-typer-wrapper {
          font-size: 1.6rem;
          font-weight: 600;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          min-height: 2.4rem;
          display: flex;
          align-items: center;
          font-family: var(--font-code);
        }

        .typer-text {
          color: var(--primary-cyan);
        }

        .typer-cursor {
          color: var(--primary-violet);
          animation: pulseGlow 0.8s infinite;
          margin-left: 2px;
        }

        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-muted);
          max-width: 580px;
          margin-bottom: 1.5rem;
          line-height: 1.7;
        }

        .hero-location-info {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .info-chip {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.88rem;
          color: var(--text-subtle);
          background: rgba(255, 255, 255, 0.03);
          padding: 0.35rem 0.85rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.06);
        }

        .chip-icon {
          color: var(--primary-cyan);
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
        }

        .socials-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .social-icon-btn {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--transition-normal);
          text-decoration: none;
        }

        .social-icon-btn:hover {
          color: var(--primary-cyan);
          border-color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(6, 182, 212, 0.2);
        }

        /* Hero Quick Stats Bar */
        .hero-stats-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.1rem 1.5rem;
          border-radius: 16px;
          background: rgba(15, 23, 42, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.1);
          max-width: 580px;
          width: 100%;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .stat-num {
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-top: 4px;
        }

        .stat-divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.1);
        }

        /* Right Column Graphic */
        .hero-visual {
          position: relative;
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 100%;
        }

        .avatar-glow-ring {
          position: absolute;
          width: 380px;
          height: 380px;
          max-width: 85vw;
          max-height: 85vw;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.4), var(--primary-cyan), var(--primary-violet));
          opacity: 0.4;
          filter: blur(45px);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .avatar-glow-ring-2 {
          position: absolute;
          width: 420px;
          height: 420px;
          max-width: 92vw;
          max-height: 92vw;
          border-radius: 50%;
          border: 2px dashed rgba(6, 182, 212, 0.25);
          animation: spinOrbit 25s linear infinite;
        }

        .avatar-glass-frame {
          width: 340px;
          max-width: calc(100vw - 2.5rem);
          height: 370px;
          border-radius: 28px;
          padding: 10px;
          position: relative;
          background: linear-gradient(145deg, rgba(255, 255, 255, 0.12), rgba(15, 23, 42, 0.85));
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(6, 182, 212, 0.25);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .avatar-glass-frame:hover {
          transform: scale(1.02);
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.7), 0 0 45px rgba(139, 92, 246, 0.35);
        }

        .hero-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          border-radius: 20px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
        }

        .floating-badge {
          position: absolute;
          padding: 0.65rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
          border-radius: 16px;
          z-index: 10;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
          animation: float 5s ease-in-out infinite;
          backdrop-filter: blur(12px);
        }

        .badge-top-left {
          top: -20px;
          left: -35px;
        }

        .badge-top-right {
          top: 30px;
          right: -40px;
          animation-delay: 1.5s;
        }

        .badge-bottom-right {
          bottom: -20px;
          right: -30px;
          animation-delay: 2.5s;
        }

        .badge-bottom-left {
          bottom: 40px;
          left: -40px;
          animation-delay: 3.8s;
        }

        .badge-icon {
          padding: 6px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.05);
        }

        .icon-cyan { color: var(--primary-cyan); }
        .icon-violet { color: var(--primary-violet); }
        .icon-pink { color: var(--accent-pink); }
        .icon-green { color: #10b981; }

        .badge-value {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-main);
          line-height: 1;
        }

        .badge-label {
          font-size: 0.72rem;
          color: var(--text-subtle);
          margin-top: 2px;
        }

        @media (max-width: 992px) {
          .hero-container {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .hero-heading {
            font-size: 2.6rem;
          }
          .role-typer-wrapper, .hero-subtitle, .hero-location-info, .hero-actions, .hero-socials, .hero-stats-bar {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
          }
          .hero-visual {
            margin-top: 2rem;
          }
          .badge-top-left {
            top: -15px;
            left: 0px;
          }
          .badge-bottom-right {
            bottom: -15px;
            right: 0px;
          }
          .badge-top-right, .badge-bottom-left {
            display: none;
          }
        }

        @media (max-width: 550px) {
          .hero-section {
            padding: 6rem 0 3rem;
          }
          .hero-heading {
            font-size: 2rem;
          }
          .role-typer-wrapper {
            font-size: 1.15rem;
            min-height: 2rem;
          }
          .hero-stats-bar {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            padding: 1rem;
          }
          .stat-divider {
            display: none;
          }
          .stat-item {
            align-items: center;
            text-align: center;
          }
          .avatar-glass-frame {
            height: 310px;
          }
          .floating-badge {
            padding: 0.45rem 0.75rem;
          }
          .badge-value {
            font-size: 0.85rem;
          }
          .badge-label {
            font-size: 0.68rem;
          }
        }
      `}</style>
    </section>
  );
}

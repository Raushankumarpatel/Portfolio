import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const { personal, education, csFundamentals, skillsCategories, projects, experiences, certifications, languages, additionalInfo } = portfolioData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume-backdrop" onClick={onClose}>
      <div className="glass-card resume-modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Controls Bar */}
        <div className="resume-controls-bar">
          <div className="control-title">Curriculum Vitae Preview</div>
          <div className="control-actions">
            <button onClick={handlePrint} className="btn btn-secondary btn-sm">
              <Printer size={16} />
              Print / Save PDF
            </button>
            <button onClick={onClose} className="modal-close-icon">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Paper */}
        <div className="resume-document" id="printable-resume">
          <header className="resume-header">
            <div className="resume-header-flex" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.5rem', marginBottom: '0.8rem' }}>
              <img src={personal.avatarImage} alt={personal.name} style={{ width: '75px', height: '75px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #0284c7', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} />
              <div style={{ textFit: 'contain' }}>
                <h1 className="resume-name" style={{ marginBottom: '0.2rem' }}>{personal.name.toUpperCase()}</h1>
                <p className="resume-address" style={{ fontSize: '0.88rem', color: '#475569' }}>{personal.address}</p>
              </div>
            </div>

            <div className="resume-contact-grid">
              <span><Phone size={13} /> {personal.phone}</span>
              <span><Mail size={13} /> {personal.email}</span>
              <span><GithubIcon size={13} /> <a href={personal.github} target="_blank" rel="noopener noreferrer">github.com/Raushankumarpatel</a></span>
              <span><LinkedinIcon size={13} /> <a href={personal.linkedin} target="_blank" rel="noopener noreferrer">linkedin.com/in/raushan-kumar-patel-161040250</a></span>
            </div>
          </header>

          <hr className="resume-divider" />

          {/* Professional Summary */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">PROFESSIONAL SUMMARY</h2>
            <p className="resume-item-desc">{personal.summary}</p>
          </section>

          {/* Work Experience */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">WORK EXPERIENCE</h2>
            
            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">Web Development Intern – MMD Shopping Pvt. Ltd.</strong>
                <span className="item-date">June 2026 – July 2026</span>
              </div>
              <p className="resume-sub-text">
                <strong>Technologies:</strong> MERN Stack (MongoDB, Express.js, React.js, Node.js), JavaScript, HTML5, CSS3
              </p>
              <ul className="resume-bullet-list">
                <li>Completed a 2-month internship focused on web development, website design, and technical initiatives using the MERN Stack (React, Node.js, Express, MongoDB).</li>
                <li>Contributed to frontend UI design and backend web development activities as part of the development team.</li>
                <li>Applied core web development concepts to practical projects and technical assignments.</li>
                <li>Demonstrated creativity, dedication, and professionalism throughout the internship.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">Relationship Officer (RO) – Utkarsh Bank</strong>
                <span className="item-date">11 Months</span>
              </div>
              <ul className="resume-bullet-list">
                <li>Managed customer relationships and handled customer queries effectively.</li>
                <li>Assisted in financial product promotion and customer onboarding.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">EDUCATION</h2>
            
            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">Master of Computer Applications (MCA) – Pursuing</strong>
              </div>
              <p className="resume-sub-text">KIT College, Affiliated to AKTU University</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">Bachelor of Science (B.Sc.)</strong>
                <span className="item-date">2024</span>
              </div>
              <p className="resume-sub-text">MGKVP, Varanasi – CGPA: 5.9</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">12th (CBSE)</strong>
                <span className="item-date">2020</span>
              </div>
              <p className="resume-sub-text">Happy Home English School, Varanasi – 57.9%</p>
            </div>

            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">10th (CBSE)</strong>
                <span className="item-date">2018</span>
              </div>
              <p className="resume-sub-text">The Scholars Home, Gol Gadda, Varanasi – 51.9%</p>
            </div>
          </section>

          {/* Technical Skills */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">TECHNICAL SKILLS</h2>
            <div className="resume-skills-list">
              <div className="resume-skill-row">
                <strong>Programming Languages: </strong><span>JavaScript, C</span>
              </div>
              <div className="resume-skill-row">
                <strong>Frontend: </strong><span>React, HTML, CSS, Basic Web Development</span>
              </div>
              <div className="resume-skill-row">
                <strong>Backend: </strong><span>Node.js, Express.js</span>
              </div>
              <div className="resume-skill-row">
                <strong>Database: </strong><span>MongoDB</span>
              </div>
              <div className="resume-skill-row">
                <strong>Development: </strong><span>MERN Stack Development</span>
              </div>
              <div className="resume-skill-row">
                <strong>Tools: </strong><span>MS Word, Basic Computer Knowledge</span>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">PROJECTS</h2>
            
            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">Fashion E-Commerce Website</strong>
                <span className="item-tags"><a href="https://github.com/Raushankumarpatel/Fashion-Ecommerce" target="_blank" rel="noopener noreferrer">GitHub Link</a></span>
              </div>
              <ul className="resume-bullet-list">
                <li>Developed a full-stack fashion e-commerce application using React, Node.js, Express.js, and MongoDB.</li>
                <li>Implemented user authentication, shopping cart functionality, product catalogs, and an admin dashboard.</li>
                <li>Created responsive web pages using React and applied component-based UI development.</li>
              </ul>
            </div>

            <div className="resume-item">
              <div className="resume-item-row">
                <strong className="item-bold">HealthSlot - Healthcare & Appointment Booking System</strong>
                <span className="item-tags"><a href="https://github.com/Raushankumarpatel/HealthSlot" target="_blank" rel="noopener noreferrer">GitHub Link</a></span>
              </div>
              <ul className="resume-bullet-list">
                <li>Developed a digital healthcare portal for booking doctor appointment slots and managing schedules.</li>
                <li>Implemented real-time doctor availability search, slot scheduling validation, and patient authentication.</li>
                <li>Built frontend using React and backend REST API services using Node.js, Express, and MongoDB.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">CERTIFICATIONS</h2>
            <div className="resume-item">
              <strong className="item-bold">Web Development Internship Certificate</strong>
              <p className="resume-sub-text">MMD Shopping Pvt. Ltd. – 2-Month Internship</p>
              <p className="resume-sub-text">Location: AIC BHU, Varanasi</p>
              <p className="resume-sub-text">Duration: 1 June 2026 – 30 July 2026 | Certificate ID: 5603</p>
            </div>
          </section>

          {/* Languages */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">LANGUAGES</h2>
            <p className="resume-sub-text">{languages ? languages.join(' | ') : 'Hindi | English'}</p>
          </section>

          {/* Additional Information */}
          <section className="resume-sec">
            <h2 className="resume-sec-title">ADDITIONAL INFORMATION</h2>
            <ul className="resume-bullet-list">
              {additionalInfo && additionalInfo.map((info, idx) => (
                <li key={idx}>{info}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <style>{`
        .resume-backdrop {
          position: fixed;
          inset: 0;
          z-index: 3000;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }

        .resume-modal-container {
          max-width: 840px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          background: #0f172a;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .resume-controls-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.2rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.9);
          sticky: top;
        }

        .control-title {
          font-weight: 700;
          color: var(--primary-cyan);
        }

        .control-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .modal-close-icon {
          background: transparent;
          border: none;
          color: var(--text-muted);
          cursor: pointer;
        }

        .modal-close-icon:hover {
          color: #fff;
        }

        /* Printable Document */
        .resume-document {
          padding: 3rem;
          background: #ffffff;
          color: #1e293b;
          font-family: Arial, sans-serif;
          line-height: 1.5;
        }

        .resume-header {
          text-align: center;
          margin-bottom: 1rem;
        }

        .resume-name {
          font-size: 2rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 0.2rem;
          letter-spacing: -0.5px;
        }

        .resume-tagline {
          font-size: 0.95rem;
          color: #475569;
          font-weight: 600;
          margin-bottom: 0.75rem;
        }

        .resume-contact-grid {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1.2rem;
          font-size: 0.85rem;
          color: #334155;
        }

        .resume-contact-grid span {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .resume-divider {
          border: none;
          border-top: 2px solid #e2e8f0;
          margin: 1rem 0 1.5rem;
        }

        .resume-sec {
          margin-bottom: 1.5rem;
        }

        .resume-sec-title {
          font-size: 0.95rem;
          font-weight: 800;
          color: #0284c7;
          letter-spacing: 1px;
          border-bottom: 1px solid #cbd5e1;
          padding-bottom: 0.25rem;
          margin-bottom: 0.75rem;
        }

        .resume-item {
          margin-bottom: 0.9rem;
        }

        .resume-item-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.92rem;
          margin-bottom: 0.2rem;
        }

        .item-bold {
          color: #0f172a;
        }

        .item-date, .item-highlight {
          font-weight: 600;
          color: #0284c7;
        }

        .item-tags {
          font-size: 0.8rem;
          color: #64748b;
        }

        .resume-item-desc, .resume-sub-text {
          font-size: 0.88rem;
          color: #475569;
        }

        .resume-bullet-list {
          padding-left: 1.2rem;
          font-size: 0.85rem;
          color: #334155;
          margin-top: 0.3rem;
        }

        .resume-skills-list {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          font-size: 0.88rem;
        }

        @media print {
          body * {
            visibility: hidden;
          }
          #printable-resume, #printable-resume * {
            visibility: visible;
          }
          #printable-resume {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            padding: 2cm;
          }
        }
      `}</style>
    </div>
  );
}

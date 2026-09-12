import React from 'react';
import { Award, Trophy, Code2, Users, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function Experience() {
  const { experiences } = portfolioData;

  return (
    <section id="experience" className="experience-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={16} />
            Work & Internships
          </span>
          <h2 className="section-title">
            Experience & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-desc">
            A history of web development internship, client relationship experience, and professional certifications.
          </p>
        </div>

        <div className="timeline-wrapper">
          {experiences.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-icon-node">
                {idx === 0 ? <Code2 size={18} /> : <Users size={18} />}
              </div>

              <div className="glass-card timeline-card">
                <div className="timeline-card-header">
                  <div>
                    <span className="timeline-type-badge">{item.type}</span>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-org">{item.organization} {item.location ? `• ${item.location}` : ''}</p>
                  </div>
                  <div className="timeline-date">
                    <Calendar size={14} />
                    <span>{item.duration}</span>
                  </div>
                </div>

                <p className="timeline-desc">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .experience-section {
          padding: 6rem 0;
          position: relative;
        }

        .timeline-wrapper {
          max-width: 850px;
          margin: 0 auto;
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .timeline-wrapper::before {
          content: '';
          position: absolute;
          top: 20px;
          bottom: 20px;
          left: 24px;
          width: 2px;
          background: linear-gradient(180deg, var(--primary-cyan) 0%, var(--primary-violet) 100%);
          opacity: 0.3;
        }

        .timeline-item {
          display: flex;
          gap: 2rem;
          position: relative;
        }

        .timeline-icon-node {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #0f172a;
          border: 2px solid var(--primary-cyan);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          z-index: 2;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }

        .timeline-card {
          flex-grow: 1;
          padding: 1.75rem;
        }

        .timeline-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 0.75rem;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .timeline-type-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--primary-violet);
          background: rgba(139, 92, 246, 0.12);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          margin-bottom: 0.4rem;
          display: inline-block;
        }

        .timeline-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.3;
        }

        .timeline-org {
          font-size: 0.95rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .timeline-date {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: var(--text-subtle);
          font-family: var(--font-code);
          background: rgba(255, 255, 255, 0.04);
          padding: 0.3rem 0.7rem;
          border-radius: 8px;
        }

        .timeline-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 600px) {
          .timeline-wrapper::before {
            left: 19px;
          }
          .timeline-icon-node {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </section>
  );
}

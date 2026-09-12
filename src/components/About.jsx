import React from 'react';
import { GraduationCap, BookOpen, CheckCircle, Code, Database, Cpu, Layers } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export function About() {
  const { education, csFundamentals } = portfolioData;

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <GraduationCap size={16} />
            Background & Academics
          </span>
          <h2 className="section-title">
            Education & <span className="gradient-text">CS Fundamentals</span>
          </h2>
          <p className="section-desc">
            A solid theoretical computer science foundation backed by practical hands-on software development experience.
          </p>
        </div>

        <div className="about-grid">
          {/* Education Card */}
          <div className="glass-card education-card">
            <div className="card-top-icon">
              <GraduationCap size={28} className="icon-cyan" />
            </div>

            <div className="edu-badge">Academic Timeline</div>

            <div className="edu-history-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', marginBottom: '1.5rem' }}>
              {education.history && education.history.map((item, idx) => (
                <div key={idx} style={{ paddingLeft: '0.8rem', borderLeft: '2px solid var(--primary-cyan)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>{item.level}</h4>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', fontWeight: '600' }}>{item.year}</span>
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: '0.2rem 0' }}>{item.institution}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--primary-violet)', fontWeight: '600' }}>{item.detail}</p>
                </div>
              ))}
            </div>

            <div className="coursework-section">
              <h4 className="coursework-title">
                <BookOpen size={16} />
                Key Focus & Coursework
              </h4>

              <div className="coursework-tags">
                {education.coursework.map((course, idx) => (
                  <span key={idx} className="course-tag">
                    <CheckCircle size={12} className="tag-check" />
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fundamentals Card */}
          <div className="glass-card fundamentals-card">
            <h3 className="fundamentals-heading">
              <Layers size={22} className="icon-violet" />
              Core Competencies & Strengths
            </h3>

            <div className="fundamentals-list">
              {csFundamentals.map((item, idx) => (
                <div key={idx} className="fundamental-item">
                  <div className="fundamental-icon-box">
                    {idx === 0 && <Code size={18} />}
                    {idx === 1 && <Cpu size={18} />}
                    {idx === 2 && <Database size={18} />}
                    {idx === 3 && <Layers size={18} />}
                  </div>
                  <div>
                    <h4 className="fundamental-title">{item.title}</h4>
                    <p className="fundamental-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 6rem 0;
          position: relative;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem;
        }

        .education-card, .fundamentals-card {
          padding: 2.5rem;
        }

        .card-top-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(6, 182, 212, 0.1);
          border: 1px solid rgba(6, 182, 212, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.5rem;
        }

        .edu-badge {
          display: inline-block;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .edu-degree {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.4rem;
          line-height: 1.3;
        }

        .edu-institution {
          color: var(--text-muted);
          font-size: 1.05rem;
          margin-bottom: 1.5rem;
        }

        .cgpa-highlight {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 2rem;
        }

        .cgpa-label {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-subtle);
        }

        .cgpa-val {
          font-size: 1.2rem;
          font-weight: 800;
        }

        .coursework-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .coursework-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
        }

        .course-tag {
          font-size: 0.85rem;
          padding: 0.4rem 0.8rem;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-muted);
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
        }

        .tag-check {
          color: var(--primary-cyan);
        }

        .fundamentals-heading {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 2rem;
        }

        .fundamentals-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .fundamental-item {
          display: flex;
          gap: 1.2rem;
          padding: 1.1rem;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          transition: var(--transition-fast);
        }

        .fundamental-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(139, 92, 246, 0.3);
        }

        .fundamental-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 12px;
          background: rgba(139, 92, 246, 0.15);
          color: var(--primary-violet);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .fundamental-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.25rem;
        }

        .fundamental-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
        }

        @media (max-width: 868px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

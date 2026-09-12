import React, { useState } from 'react';
import { Cpu, Code2, Terminal, Coffee, Layout, Atom, Zap, Sparkles, Sliders, Smartphone, Server, Globe, Database, HardDrive, Lock, GitBranch, CheckSquare, Send, TerminalSquare, Cloud } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

// Icon Map helper
const iconMap = {
  Code2, Cpu, Terminal, Coffee, Layout, Atom, Zap, Sparkles, Sliders, Smartphone, Server, Globe, Database, HardDrive, Lock, GitBranch, CheckSquare, Send, TerminalSquare, Cloud
};

export function Skills() {
  const { skillsCategories } = portfolioData;
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const activeCategory = skillsCategories[activeCategoryIndex];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={16} />
            Technical Expertise
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-desc">
            Categorized overview of programming languages, frameworks, databases, and development tools I work with.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="skills-tabs-row">
          {skillsCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`skills-tab-btn ${activeCategoryIndex === idx ? 'active' : ''}`}
              onClick={() => setActiveCategoryIndex(idx)}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="glass-card skills-card-container">
          <h3 className="category-title">
            <span className="gradient-text">{activeCategory.category}</span> Proficiencies
          </h3>

          <div className="skills-grid">
            {activeCategory.skills.map((skill, idx) => {
              const IconComp = iconMap[skill.icon] || Code2;
              return (
                <div key={idx} className="skill-progress-item">
                  <div className="skill-info-header">
                    <div className="skill-name-badge">
                      <div className="skill-icon-wrap">
                        <IconComp size={18} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <span className="skill-percent">{skill.level}%</span>
                  </div>

                  <div className="skill-bar-track">
                    <div
                      className="skill-bar-fill"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 6rem 0;
          position: relative;
        }

        .skills-tabs-row {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }

        .skills-tab-btn {
          padding: 0.75rem 1.6rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: var(--transition-normal);
        }

        .skills-tab-btn:hover {
          color: var(--text-main);
          background: rgba(255, 255, 255, 0.08);
        }

        .skills-tab-btn.active {
          background: linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%);
          border-color: var(--primary-cyan);
          color: var(--primary-cyan);
          box-shadow: 0 4px 20px rgba(6, 182, 212, 0.2);
        }

        .skills-card-container {
          padding: 3rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .category-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 2rem;
          text-align: center;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem 2.5rem;
        }

        .skill-progress-item {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .skill-info-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-name-badge {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .skill-icon-wrap {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(6, 182, 212, 0.1);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.98rem;
          color: var(--text-main);
        }

        .skill-percent {
          font-size: 0.88rem;
          font-weight: 700;
          color: var(--primary-violet);
          font-family: var(--font-code);
        }

        .skill-bar-track {
          height: 8px;
          background: rgba(255, 255, 255, 0.06);
          border-radius: 4px;
          overflow: hidden;
        }

        .skill-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--primary-cyan) 0%, var(--primary-violet) 100%);
          border-radius: 4px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skills-card-container {
            padding: 1.75rem;
          }
        }
      `}</style>
    </section>
  );
}

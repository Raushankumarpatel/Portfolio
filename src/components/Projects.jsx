import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Sparkles, X, Check, Code } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full Stack'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={16} />
            Featured Work
          </span>
          <h2 className="section-title">
            Recent Software <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc">
            Hands-on projects showcasing full-stack application development, algorithm optimization, and clean UI engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-overlay">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span className="category-badge">{project.category}</span>
                  <div className="project-links">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="View Source Code">
                      <GithubIcon size={18} />
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDesc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="project-tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="glass-card project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)}>
              <X size={20} />
            </button>

            <img src={selectedProject.image} alt={selectedProject.title} className="modal-project-img" />

            <div className="modal-body">
              <div className="modal-meta-row">
                <span className="category-badge">{selectedProject.category}</span>
                <div className="modal-actions">
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    <GithubIcon size={16} />
                    Source Code
                  </a>
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                </div>
              </div>

              <h2 className="modal-project-title">{selectedProject.title}</h2>
              <p className="modal-full-desc">{selectedProject.fullDesc}</p>

              <div className="modal-section">
                <h4 className="modal-subtitle">
                  <Sparkles size={16} className="icon-cyan" />
                  Key Features
                </h4>
                <ul className="modal-features-list">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>
                      <Check size={16} className="check-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-section key-learnings-box">
                <h4 className="modal-subtitle">
                  <Code size={16} className="icon-violet" />
                  Key Learnings & Takeaways
                </h4>
                <p className="learnings-text">{selectedProject.keyLearnings}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .projects-section {
          padding: 6rem 0;
          position: relative;
        }

        .project-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: var(--transition-fast);
        }

        .filter-btn:hover {
          color: var(--text-main);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .filter-btn.active {
          background: var(--primary-cyan);
          border-color: var(--primary-cyan);
          color: #000;
          font-weight: 700;
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.4);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2.5rem;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          border-radius: 20px;
          overflow: hidden;
        }

        .project-image-container {
          position: relative;
          height: 200px;
          overflow: hidden;
        }

        .project-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-img {
          transform: scale(1.06);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: rgba(9, 13, 22, 0.7);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .project-overlay {
          opacity: 1;
        }

        .project-content {
          padding: 1.75rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.75rem;
        }

        .category-badge {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--primary-cyan);
          background: rgba(6, 182, 212, 0.12);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          border: 1px solid rgba(6, 182, 212, 0.25);
        }

        .project-links {
          display: flex;
          gap: 0.8rem;
        }

        .project-links a {
          color: var(--text-muted);
          transition: var(--transition-fast);
        }

        .project-links a:hover {
          color: var(--primary-cyan);
        }

        .project-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.6rem;
          line-height: 1.35;
        }

        .project-short-desc {
          font-size: 0.92rem;
          color: var(--text-muted);
          margin-bottom: 1.25rem;
          line-height: 1.5;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag-pill {
          font-size: 0.75rem;
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-subtle);
          font-family: var(--font-code);
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
          border-radius: 8px;
        }

        /* Modal styling */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          z-index: 2000;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(12px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
        }

        .project-modal-content {
          max-width: 720px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          position: relative;
          background: #0f172a;
          border-radius: 24px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.7);
        }

        .modal-close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          z-index: 10;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .modal-project-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
        }

        .modal-body {
          padding: 2rem;
        }

        .modal-meta-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .modal-actions {
          display: flex;
          gap: 0.75rem;
        }

        .modal-project-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-main);
          margin-bottom: 0.75rem;
        }

        .modal-full-desc {
          color: var(--text-muted);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .modal-section {
          margin-bottom: 1.5rem;
        }

        .modal-subtitle {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .modal-features-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .modal-features-list li {
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .check-icon {
          color: var(--primary-cyan);
          flex-shrink: 0;
          margin-top: 3px;
        }

        .key-learnings-box {
          background: rgba(139, 92, 246, 0.08);
          border: 1px solid rgba(139, 92, 246, 0.2);
          padding: 1.2rem;
          border-radius: 14px;
        }

        .learnings-text {
          font-size: 0.92rem;
          color: var(--text-main);
          font-style: italic;
        }

        @media (max-width: 600px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

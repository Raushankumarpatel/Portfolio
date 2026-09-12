import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { portfolioData } from '../data/portfolioData';

export function Contact() {
  const { personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorMessage('');

    const accessKey = import.meta.env?.VITE_WEB3FORMS_ACCESS_KEY || personal.web3formsAccessKey;

    if (!accessKey) {
      // If Web3Forms access key is not set yet, automatically trigger direct mail client
      handleMailtoFallback();
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio Message from ${formData.name}`,
          message: formData.message,
          from_name: `${formData.name} (Portfolio)`
        })
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(data.message || 'Something went wrong while sending.');
      }
    } catch (err) {
      setLoading(false);
      setErrorMessage('Network error occurred. You can also send directly via email client.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <MessageSquare size={16} />
            Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span> & Collaborate
          </h2>
          <p className="section-desc">
            Currently open for web development internships, full-stack entry-level developer opportunities, and technical projects.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info-col">
            <div className="glass-card contact-info-card">
              <h3 className="info-card-title">
                <Sparkles size={20} className="icon-cyan" />
                Contact Information
              </h3>
              <p className="info-card-sub">
                Feel free to reach out directly via phone, email, or connect on social platforms!
              </p>

              <div className="contact-detail-list">
                <a href={`tel:${personal.phone}`} className="contact-detail-item">
                  <div className="detail-icon-box">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="detail-label">Phone</div>
                    <div className="detail-val">{personal.phone}</div>
                  </div>
                </a>

                <a href={`mailto:${personal.email}`} className="contact-detail-item">
                  <div className="detail-icon-box">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="detail-label">Direct Email</div>
                    <div className="detail-val">{personal.email}</div>
                  </div>
                </a>

                <div className="contact-detail-item">
                  <div className="detail-icon-box">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="detail-label">Location</div>
                    <div className="detail-val">{personal.location}</div>
                  </div>
                </div>

                <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                  <div className="detail-icon-box">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div className="detail-label">LinkedIn Profile</div>
                    <div className="detail-val">linkedin.com/in/raushan-kumar-patel-161040250</div>
                  </div>
                </a>

                <a href={personal.github} target="_blank" rel="noopener noreferrer" className="contact-detail-item">
                  <div className="detail-icon-box">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div className="detail-label">GitHub Repositories</div>
                    <div className="detail-val">github.com/Raushankumarpatel</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-col">
            <div className="glass-card contact-form-card">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle size={48} />
                  </div>
                  <h3 className="success-title">Message Sent Successfully!</h3>
                  <p className="success-desc">
                    Thank you for reaching out. I'll get back to your email as soon as possible.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn btn-secondary mt-4">
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3 className="form-title">Send a Message</h3>

                  {errorMessage && (
                    <div style={{
                      padding: '0.8rem 1rem',
                      borderRadius: '8px',
                      background: 'rgba(239, 68, 68, 0.15)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#f87171',
                      fontSize: '0.88rem',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      <span>{errorMessage}</span>
                      <button 
                        type="button" 
                        onClick={handleMailtoFallback}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: 'var(--primary-cyan)',
                          textDecoration: 'underline',
                          cursor: 'pointer',
                          textAlign: 'left',
                          fontSize: '0.85rem'
                        }}
                      >
                        Send message directly via Mail App ↗
                      </button>
                    </div>
                  )}

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Internship opportunity / Technical Inquiry"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      placeholder={`Hi ${personal.name.split(' ')[0]}, I came across your portfolio...`}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full" disabled={loading}>
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section {
          padding: 6rem 0;
          position: relative;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 2.5rem;
        }

        .contact-info-card, .contact-form-card {
          padding: 2.5rem;
        }

        .info-card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.5rem;
        }

        .info-card-sub {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 2rem;
        }

        .contact-detail-list {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .contact-detail-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          text-decoration: none;
          color: var(--text-main);
          transition: var(--transition-fast);
        }

        .contact-detail-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--primary-cyan);
          transform: translateX(4px);
        }

        .detail-icon-box {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(6, 182, 212, 0.1);
          color: var(--primary-cyan);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .detail-label {
          font-size: 0.75rem;
          color: var(--text-subtle);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .detail-val {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-main);
          word-break: break-all;
          overflow-wrap: anywhere;
        }

        /* Form Styling */
        .form-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 1.5rem;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .form-group label {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-muted);
        }

        .form-group input, .form-group textarea {
          padding: 0.8rem 1rem;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          font-family: var(--font-main);
          font-size: 0.95rem;
          outline: none;
          transition: var(--transition-fast);
        }

        .form-group input:focus, .form-group textarea:focus {
          border-color: var(--primary-cyan);
          box-shadow: 0 0 15px rgba(6, 182, 212, 0.2);
          background: rgba(255, 255, 255, 0.07);
        }

        .form-success-state {
          text-align: center;
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .success-icon-wrap {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.15);
          color: #10b981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .success-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 0.5rem;
        }

        .success-desc {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 400px;
        }

        @media (max-width: 868px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .form-row {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 550px) {
          .contact-info-card, .contact-form-card {
            padding: 1.25rem;
          }
          .contact-detail-item {
            padding: 0.75rem;
            gap: 0.75rem;
          }
        }
      `}</style>
    </section>
  );
}

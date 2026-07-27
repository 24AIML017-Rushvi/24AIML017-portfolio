import React, { useState } from 'react';

const Contact = () => {
  // useState 1: Controlled inputs & message state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // useState 2: Show/Hide help message state
  const [showHelp, setShowHelp] = useState(false);

  // useState 3: Form submission confirmation
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.message) {
      setSubmitted(true);
    }
  };

  const characterCount = formData.message.length;

  return (
    <main className="contact-page page-wrapper section-wrapper">
      <div className="section-title-container">
        <span className="section-subtitle">Get In Touch</span>
        <h2 className="section-title">Contact Me</h2>
      </div>

      {/* Help Toggle Button & Box */}
      <div className="contact-help-container">
        <button 
          type="button" 
          className="btn-secondary help-toggle-btn"
          onClick={() => setShowHelp(!showHelp)}
        >
          {showHelp ? '💡 Hide Form Tips' : '💡 Need Help Filling This Form?'}
        </button>

        {showHelp && (
          <div className="help-box animate-fade-in">
            <h4 className="help-box-title">📋 Contact Form Guidance</h4>
            <ul className="help-box-list">
              <li>Enter your full name and valid email address so I can get back to you.</li>
              <li>Type your message in the message area below. You will see a <strong>live preview</strong> and <strong>character count</strong> update in real-time.</li>
              <li>Feel free to inquire about academic collaborations, AIML projects, or web platform inquiries!</li>
            </ul>
          </div>
        )}
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-card">
          <h3 className="contact-card-title">Send a Message</h3>

          {submitted ? (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <h4>Thank you, {formData.name}!</h4>
              <p>Your message has been captured. I will get back to you soon.</p>
              <button 
                className="btn-primary" 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <div className="label-row">
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <span className="char-count-badge">
                    {characterCount} {characterCount === 1 ? 'character' : 'characters'}
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Type your message here..."
                  rows="5"
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              <button type="submit" className="btn-primary form-submit-btn">
                Send Message 🚀
              </button>
            </form>
          )}
        </div>

        {/* Live Preview Card */}
        <div className="contact-card live-preview-card">
          <div className="preview-header">
            <span className="live-indicator">🔴 Live Preview</span>
            <h3 className="contact-card-title">Real-Time Input Monitor</h3>
          </div>

          <div className="preview-body">
            <div className="preview-item">
              <span className="preview-label">Name:</span>
              <span className="preview-value">
                {formData.name || <em className="placeholder-text">Not entered yet</em>}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Email:</span>
              <span className="preview-value">
                {formData.email || <em className="placeholder-text">Not entered yet</em>}
              </span>
            </div>

            <div className="preview-item">
              <span className="preview-label">Subject:</span>
              <span className="preview-value">
                {formData.subject || <em className="placeholder-text">Not entered yet</em>}
              </span>
            </div>

            <div className="preview-item message-preview-item">
              <span className="preview-label">Live Message Preview:</span>
              <div className="preview-message-box">
                {formData.message ? (
                  <p className="typed-live-text">{formData.message}</p>
                ) : (
                  <p className="placeholder-text">Your typed text will appear live here as you type...</p>
                )}
              </div>
            </div>

            <div className="preview-stats">
              <div className="stat-pill">
                <span className="stat-label">Character Count</span>
                <span className="stat-value">{characterCount}</span>
              </div>
              <div className="stat-pill">
                <span className="stat-label">Word Count</span>
                <span className="stat-value">
                  {formData.message.trim() ? formData.message.trim().split(/\s+/).length : 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

'use client';

import { useState } from 'react';
import { saveContact } from '@/lib/firebase/db';

const contactMethods = [
  { icon: '📍', label: 'Location', value: 'Hyderabad, Telangana, India' },
  { icon: '📞', label: 'WhatsApp', value: '+91 98765 43210' },
  { icon: '✉️', label: 'Email', value: 'coach@hswellness.in' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Sat, 9 AM – 7 PM IST' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await saveContact({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      setSent(true);
    } catch (err) {
      console.error('Contact form error:', err);
      setError('Something went wrong. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Responsive styles */}
      <style>{`
        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 4rem;
          align-items: start;
          max-width: 1100px;
          margin: 0 auto;
        }
        .contact-section {
          padding: 5rem 2rem;
          background: #fff;
        }
        .contact-hero {
          background: linear-gradient(135deg, #f6f7f0, #eaecda);
          padding: 5rem 1.5rem 4rem;
          text-align: center;
        }
        .contact-hero h1 {
          font-size: clamp(1.8rem, 5vw, 3rem);
          color: #27402b;
          margin-bottom: 1rem;
        }
        .contact-hero p {
          color: #50572a;
          font-size: clamp(1rem, 2.5vw, 1.05rem);
          max-width: 520px;
          margin: 0 auto;
        }
        .contact-form-card {
          background: #f9f7f2;
          border-radius: 1.5rem;
          padding: 2.5rem;
          border: 1px solid rgba(131,141,66,0.12);
        }
        .contact-input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.75rem;
          border: 1px solid #d5d9b5;
          background: #fff;
          color: #27402b;
          font-size: 1rem;
          outline: none;
          box-sizing: border-box;
          font-family: inherit;
        }
        .contact-label {
          display: block;
          font-weight: 600;
          color: #404625;
          margin-bottom: 0.5rem;
          font-size: 0.95rem;
        }
        .contact-submit-btn {
          width: 100%;
          padding: 1rem;
          border-radius: 999px;
          font-weight: 700;
          font-size: 1.05rem;
          border: none;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(77,125,83,0.25);
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-section {
            padding: 3rem 1.25rem;
          }
          .contact-hero {
            padding: 4rem 1.25rem 3rem;
          }
          .contact-form-card {
            padding: 1.75rem 1.25rem;
          }
          .contact-input {
            font-size: 1rem;
            padding: 0.9rem 1rem;
          }
          .contact-label {
            font-size: 1rem;
          }
          .contact-submit-btn {
            font-size: 1.1rem;
            padding: 1.1rem;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="contact-hero">
        <p
          style={{
            color: '#838d42',
            fontWeight: 700,
            fontSize: '0.85rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}
        >
          Get in Touch
        </p>
        <h1>We'd Love to Hear From You</h1>
        <p>
          Have questions about our programs, pricing, or how to get started? Reach out — we
          typically respond within 24 hours.
        </p>
      </section>

      {/* Contact grid */}
      <section className="contact-section">
        <div className="contact-grid">
          {/* Left — info cards */}
          <div>
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.5rem)',
                color: '#27402b',
                marginBottom: '2rem',
              }}
            >
              Contact Information
            </h2>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
                marginBottom: '2.5rem',
              }}
            >
              {contactMethods.map((m) => (
                <div
                  key={m.label}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    background: '#f6f7f0',
                    borderRadius: '1rem',
                    padding: '1.25rem',
                    border: '1px solid rgba(131,141,66,0.12)',
                  }}
                >
                  <span style={{ fontSize: '1.6rem' }}>{m.icon}</span>
                  <div>
                    <div
                      style={{
                        fontWeight: 700,
                        color: '#404625',
                        fontSize: '0.85rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {m.label}
                    </div>
                    <div style={{ color: '#50572a', fontSize: '1rem' }}>{m.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                justifyContent: 'center',
                background: '#25D366',
                color: '#fff',
                padding: '1rem 1.5rem',
                borderRadius: '999px',
                fontWeight: 700,
                fontSize: '1.05rem',
                boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
                textDecoration: 'none',
              }}
            >
              <span style={{ fontSize: '1.3rem' }}>💬</span> Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div className="contact-form-card">
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3
                  style={{
                    color: '#27402b',
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: '#677034', fontSize: '1rem' }}>
                  We'll get back to you within 24 hours. Looking forward to your wellness journey!
                </p>
              </div>
            ) : (
              <>
                <h2
                  style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    color: '#27402b',
                    marginBottom: '1.75rem',
                  }}
                >
                  Send a Message
                </h2>
                <form
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
                >
                  {[
                    {
                      id: 'name',
                      label: 'Full Name',
                      type: 'text',
                      placeholder: 'Priya Sharma',
                      key: 'name',
                    },
                    {
                      id: 'email',
                      label: 'Email Address',
                      type: 'email',
                      placeholder: 'priya@example.com',
                      key: 'email',
                    },
                    {
                      id: 'phone',
                      label: 'Phone / WhatsApp',
                      type: 'tel',
                      placeholder: '+91 98765 43210',
                      key: 'phone',
                    },
                  ].map(({ id, label, type, placeholder, key }) => (
                    <div key={id}>
                      <label htmlFor={id} className="contact-label">
                        {label}
                      </label>
                      <input
                        id={id}
                        type={type}
                        placeholder={placeholder}
                        required
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm((f) => ({ ...f, [key]: e.target.value }))}
                        className="contact-input"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" className="contact-label">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your health goals..."
                      required
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      className="contact-input"
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div
                      style={{
                        background: '#fff5f5',
                        border: '1px solid #ffb3b3',
                        borderRadius: '0.75rem',
                        padding: '0.75rem 1rem',
                        color: '#c0392b',
                        fontSize: '0.95rem',
                      }}
                    >
                      ⚠️ {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="contact-submit-btn"
                    style={{
                      background: loading ? '#9ea85e' : 'linear-gradient(135deg, #838d42, #4d7d53)',
                      color: '#fff',
                      cursor: loading ? 'wait' : 'pointer',
                      opacity: loading ? 0.8 : 1,
                    }}
                  >
                    {loading ? 'Sending...' : 'Send Message →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

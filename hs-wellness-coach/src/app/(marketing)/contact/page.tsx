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
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #f6f7f0, #eaecda)',
        padding: '5rem 2rem 4rem', textAlign: 'center',
      }}>
        <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Get in Touch</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#27402b', marginBottom: '1rem' }}>
          We'd Love to Hear From You
        </h1>
        <p style={{ color: '#50572a', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          Have questions about our programs, pricing, or how to get started? Reach out — we typically respond within 24 hours.
        </p>
      </section>

      {/* Contact grid */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '4rem', alignItems: 'start' }}>

          {/* Left — info cards */}
          <div>
            <h2 style={{ fontSize: '1.5rem', color: '#27402b', marginBottom: '2rem' }}>Contact Information</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
              {contactMethods.map((m) => (
                <div key={m.label} style={{
                  display: 'flex', alignItems: 'flex-start', gap: '1rem',
                  background: '#f6f7f0', borderRadius: '1rem', padding: '1.25rem',
                  border: '1px solid rgba(131,141,66,0.12)',
                }}>
                  <span style={{ fontSize: '1.5rem' }}>{m.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: '#404625', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.2rem' }}>{m.label}</div>
                    <div style={{ color: '#50572a' }}>{m.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" style={{
              display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center',
              background: '#25D366', color: '#fff',
              padding: '0.9rem 1.5rem', borderRadius: '999px',
              fontWeight: 700, fontSize: '1rem',
              boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
            }}>
              <span style={{ fontSize: '1.3rem' }}>💬</span> Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <div style={{
            background: '#f9f7f2', borderRadius: '1.5rem', padding: '2.5rem',
            border: '1px solid rgba(131,141,66,0.12)',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: '#27402b', fontSize: '1.4rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                <p style={{ color: '#677034' }}>We'll get back to you within 24 hours. Looking forward to your wellness journey!</p>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.4rem', color: '#27402b', marginBottom: '1.75rem' }}>Send a Message</h2>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {[
                    { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Priya Sharma', key: 'name' },
                    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'priya@example.com', key: 'email' },
                    { id: 'phone', label: 'Phone / WhatsApp', type: 'tel', placeholder: '+91 98765 43210', key: 'phone' },
                  ].map(({ id, label, type, placeholder, key }) => (
                    <div key={id}>
                      <label htmlFor={id} style={{ display: 'block', fontWeight: 600, color: '#404625', marginBottom: '0.4rem', fontSize: '0.9rem' }}>{label}</label>
                      <input
                        id={id} type={type} placeholder={placeholder} required
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={{
                          width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                          border: '1px solid #d5d9b5', background: '#fff',
                          color: '#27402b', fontSize: '0.95rem', outline: 'none',
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="message" style={{ display: 'block', fontWeight: 600, color: '#404625', marginBottom: '0.4rem', fontSize: '0.9rem' }}>Your Message</label>
                    <textarea
                      id="message" rows={4} placeholder="Tell us about your health goals..." required
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                        border: '1px solid #d5d9b5', background: '#fff',
                        color: '#27402b', fontSize: '0.95rem', outline: 'none', resize: 'vertical',
                        boxSizing: 'border-box', fontFamily: 'inherit',
                      }}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <div style={{
                      background: '#fff5f5', border: '1px solid #ffb3b3', borderRadius: '0.75rem',
                      padding: '0.75rem 1rem', color: '#c0392b', fontSize: '0.9rem',
                    }}>
                      ⚠️ {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      background: loading ? '#9ea85e' : 'linear-gradient(135deg, #838d42, #4d7d53)',
                      color: '#fff', padding: '0.9rem', borderRadius: '999px',
                      fontWeight: 700, fontSize: '1rem', border: 'none',
                      cursor: loading ? 'wait' : 'pointer',
                      boxShadow: '0 8px 24px rgba(77,125,83,0.25)',
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

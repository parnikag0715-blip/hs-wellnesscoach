'use client';

import { useState } from 'react';
import Link from 'next/link';
import { saveBooking } from '@/lib/firebase/db';

const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];
const goals = ['Weight Loss', 'Muscle Gain', 'Better Nutrition', 'Energy & Vitality', 'Post-Pregnancy', 'Sports Performance', 'General Wellness'];

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [selectedSlot, setSelectedSlot] = useState('');
  const [selectedGoal, setSelectedGoal] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', note: '' });
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleBook(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await saveBooking({
        name: form.name,
        email: form.email,
        phone: form.phone,
        note: form.note,
        goal: selectedGoal,
        slot: selectedSlot,
        status: 'pending',
      });
      setDone(true);
    } catch (err) {
      console.error('Booking error:', err);
      setError('Something went wrong. Please try again or WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{
          textAlign: 'center', maxWidth: '480px',
          background: '#fff', borderRadius: '2rem', padding: '3rem',
          boxShadow: '0 16px 48px rgba(64,70,37,0.12)', border: '1px solid rgba(131,141,66,0.15)',
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
          <h2 style={{ color: '#27402b', fontSize: '1.8rem', marginBottom: '0.75rem' }}>You're Booked!</h2>
          <p style={{ color: '#50572a', lineHeight: 1.7, marginBottom: '0.5rem' }}>
            Your free 30-minute consultation is confirmed for <strong>{selectedSlot}</strong>.
          </p>
          <p style={{ color: '#677034', fontSize: '0.9rem', marginBottom: '2rem' }}>
            Check your email at <strong>{form.email}</strong> for the meeting link. We can't wait to meet you! 🌿
          </p>
          <Link href="/" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #838d42, #4d7d53)',
            color: '#fff', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 700,
          }}>
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #f6f7f0, #eaecda)',
        padding: '5rem 2rem 4rem', textAlign: 'center',
      }}>
        <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Free Consultation</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#27402b', marginBottom: '1rem' }}>
          Book Your Free 30-Min Call
        </h1>
        <p style={{ color: '#50572a', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          No commitments. Just an open, friendly conversation about your health goals and how we can help you reach them.
        </p>
      </section>

      {/* Step indicator */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0', padding: '2rem 2rem 0' }}>
        {[1, 2, 3].map((s) => (
          <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '50%',
              background: step >= s ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#eaecda',
              color: step >= s ? '#fff' : '#9ea85e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontWeight: 700, fontSize: '0.9rem', transition: 'background 0.3s',
            }}>{s}</div>
            {s < 3 && <div style={{ width: '80px', height: '3px', background: step > s ? '#838d42' : '#eaecda', transition: 'background 0.3s' }} />}
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0', padding: '0.5rem 2rem 0' }}>
        {['Pick a Goal', 'Choose a Slot', 'Your Details'].map((label, i) => (
          <div key={label} style={{ width: i < 2 ? 'calc(80px + 36px)' : '36px', textAlign: 'center', fontSize: '0.75rem', color: '#677034', fontWeight: 500 }}>{label}</div>
        ))}
      </div>

      {/* Steps */}
      <section style={{ padding: '3rem 2rem 5rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto', background: '#fff', borderRadius: '1.5rem', padding: '2.5rem', boxShadow: '0 8px 32px rgba(64,70,37,0.08)', border: '1px solid rgba(131,141,66,0.12)' }}>

          {/* Step 1 — Goal */}
          {step === 1 && (
            <>
              <h2 style={{ color: '#27402b', marginBottom: '0.5rem' }}>What's your primary goal?</h2>
              <p style={{ color: '#677034', marginBottom: '1.75rem', fontSize: '0.9rem' }}>Select the one that resonates most with you.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '2rem' }}>
                {goals.map((g) => (
                  <button key={g} onClick={() => setSelectedGoal(g)} style={{
                    padding: '0.55rem 1.1rem', borderRadius: '999px', fontWeight: 600, fontSize: '0.9rem',
                    border: '2px solid',
                    borderColor: selectedGoal === g ? '#838d42' : '#d5d9b5',
                    background: selectedGoal === g ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#f6f7f0',
                    color: selectedGoal === g ? '#fff' : '#50572a',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>{g}</button>
                ))}
              </div>
              <button onClick={() => selectedGoal && setStep(2)} style={{
                width: '100%', padding: '0.9rem', borderRadius: '999px',
                background: selectedGoal ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#eaecda',
                color: selectedGoal ? '#fff' : '#9ea85e',
                fontWeight: 700, border: 'none', cursor: selectedGoal ? 'pointer' : 'not-allowed', fontSize: '1rem',
              }}>Next: Choose a Time Slot →</button>
            </>
          )}

          {/* Step 2 — Slot */}
          {step === 2 && (
            <>
              <h2 style={{ color: '#27402b', marginBottom: '0.5rem' }}>Pick a time slot</h2>
              <p style={{ color: '#677034', marginBottom: '1.75rem', fontSize: '0.9rem' }}>Available slots for this week (IST).</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem', marginBottom: '2rem' }}>
                {slots.map((s) => (
                  <button key={s} onClick={() => setSelectedSlot(s)} style={{
                    padding: '0.65rem', borderRadius: '0.75rem', fontWeight: 600, fontSize: '0.88rem',
                    border: '2px solid',
                    borderColor: selectedSlot === s ? '#838d42' : '#d5d9b5',
                    background: selectedSlot === s ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#f6f7f0',
                    color: selectedSlot === s ? '#fff' : '#50572a',
                    cursor: 'pointer', transition: 'all 0.2s',
                  }}>{s}</button>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: '0.9rem', borderRadius: '999px', border: '2px solid #d5d9b5', background: '#fff', color: '#50572a', fontWeight: 600, cursor: 'pointer' }}>← Back</button>
                <button onClick={() => selectedSlot && setStep(3)} style={{
                  flex: 2, padding: '0.9rem', borderRadius: '999px',
                  background: selectedSlot ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#eaecda',
                  color: selectedSlot ? '#fff' : '#9ea85e',
                  fontWeight: 700, border: 'none', cursor: selectedSlot ? 'pointer' : 'not-allowed', fontSize: '1rem',
                }}>Next: Your Details →</button>
              </div>
            </>
          )}

          {/* Step 3 — Details */}
          {step === 3 && (
            <>
              <h2 style={{ color: '#27402b', marginBottom: '0.5rem' }}>Almost there!</h2>
              <p style={{ color: '#677034', marginBottom: '1.75rem', fontSize: '0.9rem' }}>
                Booking for <strong>{selectedSlot}</strong> · Goal: <strong>{selectedGoal}</strong>
              </p>
              <form onSubmit={handleBook} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'Priya Sharma', key: 'name' },
                  { id: 'bemail', label: 'Email', type: 'email', placeholder: 'priya@example.com', key: 'email' },
                  { id: 'bphone', label: 'WhatsApp Number', type: 'tel', placeholder: '+91 98765 43210', key: 'phone' },
                ].map(({ id, label, type, placeholder, key }) => (
                  <div key={id}>
                    <label htmlFor={id} style={{ display: 'block', fontWeight: 600, color: '#404625', marginBottom: '0.35rem', fontSize: '0.9rem' }}>{label}</label>
                    <input
                      id={id} type={type} placeholder={placeholder} required
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      style={{
                        width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                        border: '1px solid #d5d9b5', background: '#f9f7f2',
                        color: '#27402b', fontSize: '0.95rem', outline: 'none', boxSizing: 'border-box',
                      }}
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="bnote" style={{ display: 'block', fontWeight: 600, color: '#404625', marginBottom: '0.35rem', fontSize: '0.9rem' }}>Any notes? (optional)</label>
                  <textarea id="bnote" rows={3} placeholder="e.g. I've tried keto before..."
                    value={form.note} onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                    style={{
                      width: '100%', padding: '0.75rem 1rem', borderRadius: '0.75rem',
                      border: '1px solid #d5d9b5', background: '#f9f7f2',
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

                <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
                  <button type="button" onClick={() => setStep(2)} style={{ flex: 1, padding: '0.9rem', borderRadius: '999px', border: '2px solid #d5d9b5', background: '#fff', color: '#50572a', fontWeight: 600, cursor: 'pointer' }}>← Back</button>
                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      flex: 2, padding: '0.9rem', borderRadius: '999px',
                      background: loading ? '#9ea85e' : 'linear-gradient(135deg, #838d42, #4d7d53)',
                      color: '#fff', fontWeight: 700, border: 'none',
                      cursor: loading ? 'wait' : 'pointer', fontSize: '1rem',
                      boxShadow: '0 8px 24px rgba(77,125,83,0.25)',
                      opacity: loading ? 0.8 : 1,
                    }}
                  >
                    {loading ? 'Booking...' : 'Confirm Booking 🌿'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </>
  );
}

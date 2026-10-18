'use client';

import Link from 'next/link';

const programs = [
  {
    icon: '🥗',
    title: 'Weight Management',
    desc: 'Science-backed nutrition plans tailored to your goals — sustainable, enjoyable, and effective.',
  },
  {
    icon: '💪',
    title: 'Active Lifestyle',
    desc: 'Build lasting habits with guided fitness routines that fit your schedule and energy levels.',
  },
  {
    icon: '🌿',
    title: 'Holistic Nutrition',
    desc: 'Understand your body with personalised Herbalife nutrition solutions and expert guidance.',
  },
  {
    icon: '🧘',
    title: 'Mind & Body Wellness',
    desc: 'Stress management, sleep, and mindfulness strategies woven into your wellness journey.',
  },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    result: 'Lost 12 kg in 4 months',
    quote: 'The personalised coaching completely changed my relationship with food. I feel energetic and confident!',
    avatar: 'PS',
  },
  {
    name: 'Arjun Mehta',
    result: 'Gained 6 kg lean muscle',
    quote: 'The structured plan and accountability check-ins kept me on track. Best investment in my health!',
    avatar: 'AM',
  },
  {
    name: 'Sneha Reddy',
    result: '3 months post-delivery transformation',
    quote: 'Safe, nurturing, and incredibly effective. I got my energy and confidence back faster than I imagined.',
    avatar: 'SR',
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        minHeight: 'calc(100vh - 4.5rem)',
        display: 'flex', alignItems: 'center',
        background: 'linear-gradient(135deg, #f6f7f0 0%, #eaecda 40%, #e0ebe0 100%)',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 4vw, 2rem) 4rem',
        position: 'relative', overflow: 'hidden',
      }}>


        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center',
        }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(131,141,66,0.12)', color: '#50572a',
              padding: '0.4rem 1rem', borderRadius: '999px',
              fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem',
            }}>
              <span>🌱</span> Certified Herbalife Wellness Coach
            </div>
            <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', color: '#27402b', marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Transform Your Health,{' '}
              <span style={{ background: 'linear-gradient(135deg, #838d42, #4d7d53)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Transform Your Life
              </span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#50572a', marginBottom: '2.5rem', maxWidth: '480px', lineHeight: 1.7 }}>
              Personalised nutrition, fitness, and wellness coaching — designed around you. Start your journey to a healthier, happier you today.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/book" style={{
                background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                color: '#fff', padding: '0.85rem 2rem', borderRadius: '999px',
                fontWeight: 700, fontSize: '1rem',
                boxShadow: '0 8px 24px rgba(77,125,83,0.3)',
                transition: 'transform 0.2s, box-shadow 0.2s',
                display: 'inline-block',
              }}>
                Book Free Consultation →
              </Link>
              <Link href="/programs" style={{
                background: 'transparent', color: '#50572a',
                padding: '0.85rem 2rem', borderRadius: '999px',
                fontWeight: 600, fontSize: '1rem',
                border: '2px solid rgba(80,87,42,0.3)',
                transition: 'border-color 0.2s',
                display: 'inline-block',
              }}>
                View Programs
              </Link>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', gap: 'clamp(1.5rem, 3.5vw, 2.5rem)', marginTop: '2.5rem', flexWrap: 'wrap' }}>
              {[['200+', 'Clients Transformed'], ['4.9★', 'Average Rating'], ['5+', 'Years Experience']].map(([num, label]) => (
                <div key={label} style={{ minWidth: '90px' }}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#404625' }}>{num}</div>
                  <div style={{ fontSize: '0.8rem', color: '#677034', fontWeight: 500 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero visual card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              background: 'linear-gradient(145deg, #fff, #f2f6f2)',
              borderRadius: '2rem',
              padding: '2.5rem',
              boxShadow: '0 24px 60px rgba(64,70,37,0.15)',
              maxWidth: '380px', width: '100%',
              border: '1px solid rgba(131,141,66,0.15)',
            }}>
              <div style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '1rem' }}>🥗</div>
              <h3 style={{ textAlign: 'center', color: '#27402b', marginBottom: '0.5rem' }}>Your Personalised Plan</h3>
              <p style={{ textAlign: 'center', color: '#677034', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                A roadmap built just for you — nutrition, movement & mindset.
              </p>
              {[
                { label: 'Nutrition Plan', pct: 85, color: '#838d42' },
                { label: 'Fitness Goals', pct: 70, color: '#4d7d53' },
                { label: 'Wellness Score', pct: 92, color: '#9ea85e' },
              ].map(({ label, pct, color }) => (
                <div key={label} style={{ marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: '#50572a', fontWeight: 600, marginBottom: '0.3rem' }}>
                    <span>{label}</span><span>{pct}%</span>
                  </div>
                  <div style={{ background: '#eaecda', borderRadius: '999px', height: '8px' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: color, borderRadius: '999px', transition: 'width 1s ease' }} />
                  </div>
                </div>
              ))}
              <Link href="/book" style={{
                display: 'block', textAlign: 'center', marginTop: '1.5rem',
                background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                color: '#fff', padding: '0.75rem', borderRadius: '999px', fontWeight: 700,
              }}>
                Start Today 🌿
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Programs ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1rem, 4vw, 2rem)', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>What We Offer</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#27402b' }}>Wellness Programs for Every Goal</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '1.5rem' }}>
            {programs.map((p, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, #f6f7f0, #fff)',
                border: '1px solid rgba(131,141,66,0.15)',
                borderRadius: '1.25rem', padding: '1.75rem',
                transition: 'transform 0.25s, box-shadow 0.25s',
                cursor: 'default',
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-6px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 16px 40px rgba(64,70,37,0.12)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{p.icon}</div>
                <h3 style={{ color: '#27402b', marginBottom: '0.5rem', fontSize: '1.15rem' }}>{p.title}</h3>
                <p style={{ color: '#677034', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/programs" style={{
              display: 'inline-block',
              border: '2px solid #838d42', color: '#50572a',
              padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 600,
              transition: 'background 0.2s, color 0.2s',
            }}>
              Explore All Programs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section style={{ padding: 'clamp(3rem, 6vw, 5.5rem) clamp(1rem, 4vw, 2rem)', background: 'linear-gradient(135deg, #eaecda, #e0ebe0)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p style={{ color: '#4d7d53', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Real Results</p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#27402b' }}>Success Stories</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: '1.25rem', padding: '1.75rem',
                boxShadow: '0 4px 24px rgba(64,70,37,0.08)',
                border: '1px solid rgba(131,141,66,0.1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: '0.9rem',
                  }}>{t.avatar}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#27402b' }}>{t.name}</div>
                    <div style={{ fontSize: '0.8rem', color: '#838d42', fontWeight: 600 }}>{t.result}</div>
                  </div>
                </div>
                <p style={{ color: '#50572a', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic' }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ marginTop: '1rem', color: '#9ea85e', fontSize: '1.1rem' }}>★★★★★</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link href="/success-stories" style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #838d42, #4d7d53)',
              color: '#fff', padding: '0.75rem 2rem', borderRadius: '999px', fontWeight: 600,
              boxShadow: '0 8px 24px rgba(77,125,83,0.25)',
            }}>
              View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section style={{
        padding: 'clamp(3.5rem, 6vw, 6rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, #27402b, #404625)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#f6f7f0', marginBottom: '1rem' }}>
            Ready to Begin Your Wellness Journey?
          </h2>
          <p style={{ color: '#b9c086', fontSize: 'clamp(1rem, 2vw, 1.15rem)', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Book a free 30-minute consultation. No commitments — just a friendly conversation about your goals.
          </p>
          <Link href="/book" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9ea85e, #838d42)',
            color: '#fff', padding: '1rem 2.5rem', borderRadius: '999px',
            fontWeight: 700, fontSize: '1.05rem',
            boxShadow: '0 8px 32px rgba(158,168,94,0.35)',
          }}>
            Book Your Free Consultation →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        background: '#1a2010', color: '#b9c086',
        padding: '3rem clamp(1rem, 4vw, 2rem)', textAlign: 'center',
      }}>
        <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>🌿 HS Wellness Coach</div>
        <p style={{ fontSize: '0.85rem', marginBottom: '1.5rem', color: '#677034' }}>
          Certified Herbalife Wellness Coach · Helping you live healthier, every day.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          {([['Privacy Policy', '/legal/privacy-policy'], ['Terms', '/legal/terms'], ['Health Disclaimer', '/legal/health-disclaimer']] as const).map(([label, href]) => (
            <Link key={href} href={href} style={{ color: '#677034', fontSize: '0.85rem', transition: 'color 0.2s' }}>{label}</Link>
          ))}
        </div>
        <p style={{ fontSize: '0.8rem', color: '#404625' }}>
          © {new Date().getFullYear()} HS Wellness Coach. All rights reserved.
        </p>
      </footer>
    </>
  );
}

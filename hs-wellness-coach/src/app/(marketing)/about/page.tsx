import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | HS Wellness Coach',
  description: 'Learn about your certified Herbalife wellness coach — mission, journey, and values.',
};

const values = [
  { icon: '🎯', title: 'Goal-Oriented', desc: 'Every plan is built around your unique goals, lifestyle, and timeline.' },
  { icon: '🔬', title: 'Science-Backed', desc: 'Nutrition and fitness guidance rooted in proven research and certified training.' },
  { icon: '🤝', title: 'Accountability', desc: 'Consistent check-ins and support so you never feel alone on your journey.' },
  { icon: '💚', title: 'Holistic Approach', desc: 'We address nutrition, movement, sleep, and mindset — the full picture.' },
];

const milestones = [
  { year: '2019', text: 'Became a certified Herbalife Independent Distributor and Wellness Coach.' },
  { year: '2020', text: 'Coached first 50 clients through personalised nutrition plans.' },
  { year: '2022', text: 'Expanded to online coaching, reaching clients across India.' },
  { year: '2024', text: '200+ transformations and counting. Featured in regional wellness events.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #f6f7f0, #eaecda)',
        padding: '5rem 2rem 4rem',
        textAlign: 'center',
      }}>
        <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Our Story</p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#27402b', marginBottom: '1.25rem' }}>
          Passionate About Your Health
        </h1>
        <p style={{ maxWidth: '600px', margin: '0 auto', color: '#50572a', fontSize: '1.1rem', lineHeight: 1.75 }}>
          We believe that every person deserves to feel energetic, confident, and healthy.
          Our mission is to make that transformation accessible, enjoyable, and lasting.
        </p>
      </section>

      {/* Coach intro */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{
            background: 'linear-gradient(145deg, #eaecda, #e0ebe0)',
            borderRadius: '2rem', height: '420px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '6rem',
          }}>🧑‍⚕️</div>
          <div>
            <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Your Coach</p>
            <h2 style={{ fontSize: '2rem', color: '#27402b', marginBottom: '1rem' }}>Hello, I'm your Wellness Coach 👋</h2>
            <p style={{ color: '#50572a', lineHeight: 1.8, marginBottom: '1rem' }}>
              As a certified Herbalife Wellness Coach with over 5 years of experience, I've helped 200+ individuals
              reclaim their health through personalised nutrition, fitness guidance, and consistent support.
            </p>
            <p style={{ color: '#677034', lineHeight: 1.8, marginBottom: '1.75rem' }}>
              My own wellness journey started with frustration — fad diets, conflicting advice, and no results.
              That experience drives my commitment to giving every client a clear, science-backed, sustainable path.
            </p>
            <div style={{ display: 'flex', gap: '2rem' }}>
              {[['200+', 'Clients'], ['4.9★', 'Rating'], ['5+', 'Years']].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#404625' }}>{n}</div>
                  <div style={{ fontSize: '0.8rem', color: '#677034' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: '5rem 2rem', background: '#f6f7f0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#27402b', marginBottom: '3rem' }}>What We Stand For</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '1.5rem' }}>
            {values.map((v) => (
              <div key={v.title} style={{
                background: '#fff', borderRadius: '1.25rem', padding: '2rem',
                border: '1px solid rgba(131,141,66,0.15)',
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ color: '#27402b', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ color: '#677034', fontSize: '0.9rem', lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#27402b', marginBottom: '3rem' }}>Our Journey</h2>
          <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '3px solid #d5d9b5' }}>
            {milestones.map((m) => (
              <div key={m.year} style={{ marginBottom: '2.5rem', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: '-2.6rem', top: '0.2rem',
                  width: '18px', height: '18px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                  border: '3px solid #fff',
                  boxShadow: '0 0 0 2px #838d42',
                }} />
                <div style={{ fontWeight: 800, color: '#838d42', marginBottom: '0.25rem' }}>{m.year}</div>
                <p style={{ color: '#50572a', lineHeight: 1.65 }}>{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '5rem 2rem', textAlign: 'center',
        background: 'linear-gradient(135deg, #27402b, #404625)',
      }}>
        <h2 style={{ color: '#f6f7f0', fontSize: '2rem', marginBottom: '1rem' }}>Ready to Start Your Journey?</h2>
        <p style={{ color: '#b9c086', marginBottom: '2rem' }}>Book a free consultation and let's build your wellness plan together.</p>
        <Link href="/book" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #9ea85e, #838d42)',
          color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '999px', fontWeight: 700,
          boxShadow: '0 8px 24px rgba(158,168,94,0.3)',
        }}>
          Book Free Consultation →
        </Link>
      </section>
    </>
  );
}

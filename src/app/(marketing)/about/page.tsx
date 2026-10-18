import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | HS Wellness Coach',
  description:
    'Learn about your certified Herbalife wellness coach — mission, journey, and values.',
};

const values = [
  {
    icon: '🎯',
    title: 'Goal-Oriented',
    desc: 'Every plan is built around your unique goals, lifestyle, and timeline.',
  },
  {
    icon: '🔬',
    title: 'Science-Backed',
    desc: 'Nutrition and fitness guidance rooted in proven research and certified training.',
  },
  {
    icon: '🤝',
    title: 'Accountability',
    desc: 'Consistent check-ins and support so you never feel alone on your journey.',
  },
  {
    icon: '💚',
    title: 'Holistic Approach',
    desc: 'We address nutrition, movement, sleep, and mindset — the full picture.',
  },
];

const milestones = [
  {
    year: '2019',
    text: 'Became a certified Herbalife Independent Distributor and Wellness Coach.',
  },
  { year: '2020', text: 'Coached first 50 clients through personalised nutrition plans.' },
  { year: '2022', text: 'Expanded to online coaching, reaching clients across India.' },
  {
    year: '2024',
    text: '200+ transformations and counting. Featured in regional wellness events.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Responsive styles ── */}
      <style>{`
        .about-hero {
          background: linear-gradient(135deg, #f6f7f0, #eaecda);
          padding: 5rem 1.5rem 4rem;
          text-align: center;
        }
        .about-hero h1 {
          font-size: clamp(1.9rem, 5vw, 3.2rem);
          color: #27402b;
          margin-bottom: 1.25rem;
        }
        .about-hero p {
          max-width: 600px;
          margin: 0 auto;
          color: #50572a;
          font-size: clamp(1rem, 2.5vw, 1.1rem);
          line-height: 1.75;
        }

        /* Coach intro */
        .coach-section {
          padding: 5rem 1.5rem;
          background: #fff;
        }
        .coach-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }
        .coach-image {
          background: linear-gradient(145deg, #eaecda, #e0ebe0);
          border-radius: 2rem;
          height: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 6rem;
        }
        .coach-tag {
          color: #838d42;
          font-weight: 700;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }
        .coach-heading {
          font-size: clamp(1.5rem, 3.5vw, 2rem);
          color: #27402b;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .coach-body {
          color: #50572a;
          line-height: 1.8;
          margin-bottom: 1rem;
          font-size: clamp(0.95rem, 2vw, 1rem);
        }
        .coach-body-2 {
          color: #677034;
          line-height: 1.8;
          margin-bottom: 1.75rem;
          font-size: clamp(0.95rem, 2vw, 1rem);
        }
        .coach-stats {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .coach-stat-num {
          font-size: 1.6rem;
          font-weight: 800;
          color: #404625;
        }
        .coach-stat-label {
          font-size: 0.8rem;
          color: #677034;
        }

        /* Values */
        .values-section {
          padding: 5rem 1.5rem;
          background: #f6f7f0;
        }
        .values-heading {
          text-align: center;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: #27402b;
          margin-bottom: 3rem;
        }
        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }
        .value-card {
          background: #fff;
          border-radius: 1.25rem;
          padding: 2rem;
          border: 1px solid rgba(131,141,66,0.15);
        }
        .value-card p {
          color: #677034;
          font-size: clamp(0.9rem, 2vw, 0.95rem);
          line-height: 1.65;
          margin: 0;
        }

        /* Timeline */
        .timeline-section {
          padding: 5rem 1.5rem;
          background: #fff;
        }
        .timeline-heading {
          text-align: center;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: #27402b;
          margin-bottom: 3rem;
        }
        .timeline-line {
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          padding-left: 2rem;
          border-left: 3px solid #d5d9b5;
        }
        .timeline-item {
          margin-bottom: 2.5rem;
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -2.6rem;
          top: 0.2rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: linear-gradient(135deg, #838d42, #4d7d53);
          border: 3px solid #fff;
          box-shadow: 0 0 0 2px #838d42;
        }
        .timeline-year {
          font-weight: 800;
          color: #838d42;
          margin-bottom: 0.25rem;
          font-size: clamp(0.95rem, 2vw, 1rem);
        }
        .timeline-text {
          color: #50572a;
          line-height: 1.65;
          font-size: clamp(0.95rem, 2vw, 1rem);
          margin: 0;
        }

        /* CTA */
        .cta-section {
          padding: 5rem 1.5rem;
          text-align: center;
          background: linear-gradient(135deg, #27402b, #404625);
        }
        .cta-section h2 {
          color: #f6f7f0;
          font-size: clamp(1.5rem, 4vw, 2rem);
          margin-bottom: 1rem;
        }
        .cta-section p {
          color: #b9c086;
          margin-bottom: 2rem;
          font-size: clamp(0.95rem, 2.5vw, 1rem);
        }

        /* ── Mobile overrides ── */
        @media (max-width: 768px) {
          .about-hero {
            padding: 4rem 1.25rem 3rem;
          }
          .coach-section {
            padding: 3rem 1.25rem;
          }
          .coach-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .coach-image {
            height: 220px;
            font-size: 4rem;
            border-radius: 1.5rem;
          }
          .values-section {
            padding: 3rem 1.25rem;
          }
          .values-grid {
            grid-template-columns: 1fr;
          }
          .value-card {
            padding: 1.5rem;
          }
          .timeline-section {
            padding: 3rem 1.25rem;
          }
          .cta-section {
            padding: 3.5rem 1.25rem;
          }
          .coach-stats {
            gap: 1.5rem;
          }
        }
      `}</style>

      {/* Hero */}
      <section className="about-hero">
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
          Our Story
        </p>
        <h1>Passionate About Your Health</h1>
        <p>
          We believe that every person deserves to feel energetic, confident, and healthy. Our
          mission is to make that transformation accessible, enjoyable, and lasting.
        </p>
      </section>

      {/* Coach intro */}
      <section className="coach-section">
        <div className="coach-grid">
          <div className="coach-image">🧑‍⚕️</div>
          <div>
            <p className="coach-tag">Your Coach</p>
            <h2 className="coach-heading">Hello, I&apos;m your Wellness Coach 👋</h2>
            <p className="coach-body">
              As a certified Herbalife Wellness Coach with over 5 years of experience, I&apos;ve
              helped 200+ individuals reclaim their health through personalised nutrition, fitness
              guidance, and consistent support.
            </p>
            <p className="coach-body-2">
              My own wellness journey started with frustration — fad diets, conflicting advice, and
              no results. That experience drives my commitment to giving every client a clear,
              science-backed, sustainable path.
            </p>
            <div className="coach-stats">
              {[
                ['200+', 'Clients'],
                ['4.9★', 'Rating'],
                ['5+', 'Years'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="coach-stat-num">{n}</div>
                  <div className="coach-stat-label">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2 className="values-heading">What We Stand For</h2>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <div style={{ fontSize: '2.2rem', marginBottom: '0.75rem' }}>{v.icon}</div>
              <h3 style={{ color: '#27402b', marginBottom: '0.5rem' }}>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="timeline-section">
        <h2 className="timeline-heading">Our Journey</h2>
        <div className="timeline-line">
          {milestones.map((m) => (
            <div key={m.year} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-year">{m.year}</div>
              <p className="timeline-text">{m.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Book a free consultation and let&apos;s build your wellness plan together.</p>
        <Link
          href="/book"
          style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9ea85e, #838d42)',
            color: '#fff',
            padding: '0.9rem 2.5rem',
            borderRadius: '999px',
            fontWeight: 700,
            boxShadow: '0 8px 24px rgba(158,168,94,0.3)',
          }}
        >
          Book Free Consultation →
        </Link>
      </section>
    </>
  );
}

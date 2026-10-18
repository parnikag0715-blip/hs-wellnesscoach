import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Programs | HS Wellness Coach',
  description: 'Explore personalised wellness programs — weight management, nutrition, fitness, and more.',
};

const programs = [
  {
    slug: 'weight-management',
    emoji: '⚖️',
    badge: 'Most Popular',
    badgeColor: '#838d42',
    title: 'Weight Management',
    tagline: 'Sustainable fat loss without deprivation',
    desc: 'A structured 12-week program combining personalised meal plans, Herbalife nutrition, and weekly coaching calls. Designed for real, lasting results.',
    features: ['Custom calorie & macro targets', 'Weekly check-ins & adjustments', 'Herbalife shake & supplement guidance', 'Recipe library (100+ meals)', 'WhatsApp support 6 days/week'],
    duration: '12 weeks',
    sessions: '12 coaching calls',
    level: 'All levels',
    color: '#838d42',
  },
  {
    slug: 'active-lifestyle',
    emoji: '🏃',
    badge: 'New',
    badgeColor: '#4d7d53',
    title: 'Active Lifestyle Program',
    tagline: 'Move better, feel stronger every day',
    desc: 'Combine nutrition and movement for a complete lifestyle overhaul. Perfect for beginners wanting to build consistent habits without a gym.',
    features: ['Home & gym workout plans', 'Step-by-step nutrition guide', 'Energy & recovery strategies', 'Sleep optimisation module', 'Progress tracking dashboard'],
    duration: '8 weeks',
    sessions: '8 coaching calls',
    level: 'Beginner – Intermediate',
    color: '#4d7d53',
  },
  {
    slug: 'holistic-nutrition',
    emoji: '🌿',
    badge: null,
    badgeColor: '',
    title: 'Holistic Nutrition',
    tagline: 'Understand your food, transform your health',
    desc: 'A deep dive into the science of eating well. Learn how to read your body, build balanced meals, and use Herbalife products to fill nutritional gaps.',
    features: ['Nutrient deficiency assessment', 'Personalised supplement plan', 'Gut health & digestion module', 'Mindful eating techniques', 'Monthly lab interpretation guidance'],
    duration: '6 weeks',
    sessions: '6 coaching calls',
    level: 'All levels',
    color: '#6a7c2a',
  },
  {
    slug: 'mind-body-wellness',
    emoji: '🧘',
    badge: null,
    badgeColor: '',
    title: 'Mind & Body Wellness',
    tagline: 'Stress less, sleep more, live fully',
    desc: 'Address the root causes of weight gain and poor health — stress, sleep, and mindset. Holistic coaching for your whole self, not just your body.',
    features: ['Stress management techniques', 'Sleep hygiene protocol', 'Mindfulness & meditation intro', 'Emotional eating support', 'Journaling & habit tracking'],
    duration: '8 weeks',
    sessions: '8 coaching calls',
    level: 'All levels',
    color: '#4d7d53',
  },
  {
    slug: 'post-pregnancy',
    emoji: '🤱',
    badge: 'Specialist',
    badgeColor: '#9ea85e',
    title: 'Post-Pregnancy Wellness',
    tagline: 'Safe, nurturing recovery for new moms',
    desc: 'A gentle, medically-aware program for new mothers to restore energy, nourish their body, and feel themselves again — at their own pace.',
    features: ['Safe postpartum nutrition plan', 'Breastfeeding-friendly supplement guide', 'Gentle movement progression', 'Hormonal balance support', 'Dedicated new-mom community'],
    duration: '10 weeks',
    sessions: '10 coaching calls',
    level: 'Postnatal',
    color: '#9ea85e',
  },
  {
    slug: 'sports-performance',
    emoji: '🏋️',
    badge: null,
    badgeColor: '',
    title: 'Sports Performance',
    tagline: 'Fuel your performance, maximise your gains',
    desc: 'For athletes and serious fitness enthusiasts. Precision nutrition, peak-performance supplementation, and recovery protocols to help you train harder.',
    features: ['Performance nutrition planning', 'Pre/intra/post workout fuelling', 'Herbalife sports range guidance', 'Recovery & injury prevention', 'Body composition tracking'],
    duration: '12 weeks',
    sessions: '12 coaching calls',
    level: 'Intermediate – Advanced',
    color: '#50572a',
  },
];

const faqs = [
  { q: 'How do the coaching calls work?', a: 'Sessions are 30-45 minutes via Google Meet or WhatsApp video. We review your progress, adjust your plan, and answer any questions.' },
  { q: 'Do I need to buy Herbalife products?', a: 'Herbalife nutrition is recommended for best results, but plans are adapted for those who prefer food-first approaches.' },
  { q: 'Can I switch programs mid-way?', a: "Yes! If your goals change, we'll transition you to the right program seamlessly at no extra charge." },
  { q: 'Is there a refund policy?', a: "We offer a 7-day satisfaction guarantee on all programs. If you're not happy, we'll refund you in full — no questions asked." },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #f6f7f0, #eaecda)',
        padding: '5rem 2rem 4rem', textAlign: 'center',
      }}>
        <p style={{ color: '#838d42', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
          Wellness Programs
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', color: '#27402b', marginBottom: '1.25rem' }}>
          Find the Program That Fits <em>You</em>
        </h1>
        <p style={{ color: '#50572a', fontSize: '1.05rem', maxWidth: '560px', margin: '0 auto 2rem' }}>
          Every program is personalised to your body, goals, and lifestyle — backed by certified coaching and Herbalife nutrition science.
        </p>
        <Link href="/book" style={{
          display: 'inline-block',
          background: 'linear-gradient(135deg, #838d42, #4d7d53)',
          color: '#fff', padding: '0.85rem 2rem', borderRadius: '999px',
          fontWeight: 700, boxShadow: '0 8px 24px rgba(77,125,83,0.25)',
        }}>
          Book Free Consultation →
        </Link>
      </section>

      {/* Programs grid */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
          {programs.map((p) => (
            <article key={p.slug} style={{
              background: '#f9f7f2', borderRadius: '1.5rem',
              border: '1px solid rgba(131,141,66,0.13)',
              overflow: 'hidden', display: 'flex', flexDirection: 'column',
            }}>
              {/* Card header */}
              <div style={{
                background: `linear-gradient(135deg, ${p.color}22, ${p.color}11)`,
                borderBottom: `2px solid ${p.color}33`,
                padding: '2rem',
                position: 'relative',
              }}>
                {p.badge && (
                  <span style={{
                    position: 'absolute', top: '1.25rem', right: '1.25rem',
                    background: p.badgeColor, color: '#fff',
                    fontSize: '0.72rem', fontWeight: 700, padding: '0.2rem 0.7rem', borderRadius: '999px',
                  }}>{p.badge}</span>
                )}
                <div style={{ fontSize: '2.8rem', marginBottom: '0.75rem' }}>{p.emoji}</div>
                <h2 style={{ color: '#27402b', fontSize: '1.25rem', marginBottom: '0.3rem' }}>{p.title}</h2>
                <p style={{ color: p.color, fontWeight: 600, fontSize: '0.9rem' }}>{p.tagline}</p>
              </div>

              {/* Card body */}
              <div style={{ padding: '1.75rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ color: '#677034', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{p.desc}</p>

                {/* Meta pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {[`📅 ${p.duration}`, `📞 ${p.sessions}`, `👤 ${p.level}`].map((tag) => (
                    <span key={tag} style={{
                      background: '#eaecda', color: '#50572a',
                      fontSize: '0.78rem', fontWeight: 600,
                      padding: '0.3rem 0.75rem', borderRadius: '999px',
                    }}>{tag}</span>
                  ))}
                </div>

                {/* Features list */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.75rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                  {p.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.88rem', color: '#50572a' }}>
                      <span style={{ color: p.color, flexShrink: 0, marginTop: '1px' }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href={`/programs/${p.slug}`} style={{
                  display: 'block', textAlign: 'center',
                  background: `linear-gradient(135deg, ${p.color}, #4d7d53)`,
                  color: '#fff', padding: '0.8rem', borderRadius: '999px',
                  fontWeight: 700, fontSize: '0.95rem',
                }}>
                  Learn More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '5rem 2rem', background: '#f6f7f0' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', color: '#27402b', marginBottom: '3rem' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq) => (
              <div key={faq.q} style={{
                background: '#fff', borderRadius: '1rem', padding: '1.5rem',
                border: '1px solid rgba(131,141,66,0.12)',
              }}>
                <h3 style={{ color: '#27402b', marginBottom: '0.5rem', fontSize: '1rem' }}>❓ {faq.q}</h3>
                <p style={{ color: '#677034', fontSize: '0.9rem', lineHeight: 1.7, margin: 0 }}>{faq.a}</p>
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
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌿</div>
          <h2 style={{ color: '#f6f7f0', fontSize: '2rem', marginBottom: '1rem' }}>Not Sure Which Program to Choose?</h2>
          <p style={{ color: '#b9c086', marginBottom: '2rem', lineHeight: 1.7 }}>
            Book a free 30-minute consultation and we'll guide you to the perfect program for your goals, lifestyle, and budget.
          </p>
          <Link href="/book" style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #9ea85e, #838d42)',
            color: '#fff', padding: '0.9rem 2.5rem', borderRadius: '999px',
            fontWeight: 700, fontSize: '1.05rem',
            boxShadow: '0 8px 32px rgba(158,168,94,0.3)',
          }}>
            Book Free Consultation →
          </Link>
        </div>
      </section>
    </>
  );
}

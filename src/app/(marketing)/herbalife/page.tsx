'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProductItem {
  id: string;
  name: string;
  category: string;
  price: string;
  mrp: string;
  icon: string;
  serving: string;
  posterBullets: string[];
  flavors?: string[];
  desc: string;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'f1-shake',
    name: 'Formula 1 Nutritional Shake Mix',
    category: 'Weight Management',
    price: '₹2,145',
    mrp: '₹2,385',
    icon: '🏃',
    serving: '500g canister (~22 servings)',
    posterBullets: [
      'Helps you manage weight sustainably',
      'Provides 9g high-quality soy protein per scoop',
      'Rich in 18+ essential vitamins & minerals',
      'Multiple delicious flavours',
    ],
    flavors: ['Vanilla', 'Chocolate', 'Mango', 'Strawberry', 'Kulfi', 'Rose Kheer'],
    desc: 'The global #1 meal replacement shake. Balanced, calorie-controlled nutrition designed to keep you satiated for hours while shedding stubborn body fat.',
  },
  {
    id: 'ppp-protein',
    name: 'Personalized Protein Powder (Formula 3)',
    category: 'Protein Nutrition',
    price: '₹1,420',
    mrp: '₹1,595',
    icon: '💪',
    serving: '400g / 200g tub',
    posterBullets: [
      'Supports lean muscle mass & tone',
      'High-quality protein (Soy & Whey blend)',
      'Easy to mix into any shake, soup, or meal',
    ],
    flavors: ['Unflavored (Blends into anything)'],
    desc: 'Pure, fat-free protein with a perfect PDCAAS 1.0 quality score. Curbs between-meal hunger and prevents muscle loss during calorie deficits.',
  },
  {
    id: 'tea-concentrate',
    name: 'Herbalife Tea Concentrate (Afresh)',
    category: 'Tea & Beverages',
    price: '₹795',
    mrp: '₹890',
    icon: '🍵',
    serving: '50g jar (~50 cups)',
    posterBullets: [
      'Refreshing herbal tea blend',
      'Supports metabolism & thermogenesis',
      'Available in a variety of delicious flavours',
    ],
    flavors: ['Lemon', 'Elaichi (Cardamom)', 'Peach', 'Ginger', 'Cinnamon', 'Tulsi'],
    desc: 'Under 4 calories per cup! Packed with antioxidant-rich Orange Pekoe and green tea extracts that ignite energy and replace high-calorie chai.',
  },
  {
    id: 'aloe-concentrate',
    name: 'Herbal Aloe Concentrate',
    category: 'Aloe Beverages',
    price: '₹2,425',
    mrp: '₹2,695',
    icon: '🌱',
    serving: 'Net Volume: 472ml / 500ml',
    posterBullets: [
      'Soothes & hydrates the digestive system',
      'Supports digestive health & nutrient absorption',
      'Purified natural aloe vera with zero bitter aloin',
    ],
    flavors: ['Original Citrus', 'Mango', 'Mandarin'],
    desc: 'Internal shower for your gut. Calms occasional acidity, reduces morning bloating, and prepares intestinal villi for maximum micronutrient uptake.',
  },
  {
    id: 'shakemate',
    name: 'Herbalife ShakeMate (Protein blend)',
    category: 'Shake Preparation',
    price: '₹850',
    mrp: '₹950',
    icon: '🥣',
    serving: '500g canister',
    posterBullets: [
      'Adds essential nutrients & 10.75g protein',
      'Great for preparing healthy shakes with plain water',
      'Helps you stay full for longer without dairy milk',
    ],
    flavors: ['Natural Creamy Milk Flavor'],
    desc: 'Specially formulated milk and soy protein blend. Eliminates the need for skimmed milk—just add water and Formula 1 for a rich, creamy shake.',
  },
  {
    id: 'multivitamin-women',
    name: 'Multivitamin for Women (Formula 2)',
    category: 'Daily Nutrition',
    price: '₹1,475',
    mrp: '₹1,640',
    icon: '💊',
    serving: '90 Tablets (30-day supply)',
    posterBullets: [
      'Supports immunity & hormonal balance',
      'Boosts daily energy levels & combats fatigue',
      'Helps overall wellness, bone density & hair strength',
    ],
    desc: '24 essential vitamins and minerals calibrated for women. High in Calcium and Vitamin D for bone health, and bioavailable Iron and Folic Acid.',
  },
  {
    id: 'cell-u-loss',
    name: 'Herbalife Cell-U-Loss®',
    category: 'Daily Nutrition',
    price: '₹1,580',
    mrp: '₹1,750',
    icon: '💧',
    serving: '90 Tablets bottle',
    posterBullets: [
      'Supports healthy fluid balance & elimination',
      'Natural Corn Silk extract & minerals',
      'Helps overall wellness & smoother skin appearance',
    ],
    desc: 'Releases trapped subcutaneous water weight. Reduces facial and waist puffiness while replenishing essential Potassium and Magnesium electrolytes.',
  },
  {
    id: 'nrg-tablets',
    name: 'Herbalife N-R-G (Raw Guarana)',
    category: 'Daily Nutrition',
    price: '₹840',
    mrp: '₹935',
    icon: '⚡',
    serving: '60 Tablets bottle',
    posterBullets: [
      'Supports immunity & cellular vitality',
      'Boosts natural energy & mental alertness',
      'Helps overall wellness with Amazonian Guarana',
    ],
    desc: 'Gentle, slow-release natural caffeine that clears afternoon brain fog and sustains focus without the jitters of commercial stimulants.',
  },
  {
    id: 'vitamin-c-plus',
    name: 'Herbalife Vitamin C Plus',
    category: 'Daily Nutrition',
    price: '₹980',
    mrp: '₹1,090',
    icon: '🍊',
    serving: '60 Tablets bottle',
    posterBullets: [
      'Supports immunity & white blood cell function',
      'Boosts cellular energy & tissue repair',
      'Potent antioxidant shield with Citrus Bioflavonoids',
    ],
    desc: 'High-potency Vitamin C reinforced with citrus bioflavonoids for maximum absorption. Fortifies your immune system against seasonal sickness.',
  },
  {
    id: 'vritilife-cleanser',
    name: 'Vritilife Facial Cleanser',
    category: 'Skin & Body Care',
    price: '₹750',
    mrp: '₹840',
    icon: '✨',
    serving: '100 ml bottle',
    posterBullets: [
      'Gentle & Refreshing daily cleanse',
      'Lifts grime & sebum without stripping moisture',
      'Ayurvedic botanical herbal extracts',
    ],
    desc: 'Soap-free, pH-balanced Ayurvedic cleanser that purifies pores and leaves facial skin calm, clean, and revitalized.',
  },
  {
    id: 'vritilife-serum',
    name: 'Vritilife Serum (Radiance & Repair)',
    category: 'Skin & Body Care',
    price: '₹1,650',
    mrp: '₹1,850',
    icon: '✨',
    serving: '30 ml dropper bottle',
    posterBullets: [
      'Radiance & Repair concentrated elixir',
      'Fades dullness, sun spots & fine lines',
      'Micro-encapsulated Vitamin C & botanicals',
    ],
    desc: 'The powerhouse treatment of the Vritilife Ayurvedic ritual. Delivers deep dermal antioxidants for a bright, lit-from-within complexion.',
  },
  {
    id: 'vritilife-moisturizer',
    name: 'Vritilife Moisturizer (Hydration & Glow)',
    category: 'Skin & Body Care',
    price: '₹1,150',
    mrp: '₹1,290',
    icon: '✨',
    serving: '50 g jar',
    posterBullets: [
      'Hydration & Glow 24-hour moisture lock',
      'Fortifies skin barrier against dryness & pollution',
      'Silky, non-greasy dewy glow',
    ],
    desc: 'Nourishing plant lipids and herbal extracts that lock in moisture all day for soft, bouncy, radiant skin.',
  },
];

const CATEGORIES = [
  'All',
  'Weight Management',
  'Protein Nutrition',
  'Tea & Beverages',
  'Aloe Beverages',
  'Shake Preparation',
  'Daily Nutrition',
  'Skin & Body Care',
];

export default function HerbalifeLandingPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCat = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.posterBullets.some((b) => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div style={{ background: '#f9f7f2', minHeight: '100vh', paddingTop: '5.5rem', color: '#1e2410' }}>
      {/* ── Top Header Banner (Matching Poster) ── */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '3rem 2rem 2rem',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'rgba(131, 141, 66, 0.12)',
          color: '#495221',
          padding: '0.4rem 1.25rem',
          borderRadius: '999px',
          fontSize: '0.85rem',
          fontWeight: 800,
          marginBottom: '1rem',
          letterSpacing: '0.04em',
        }}>
          <span>🌱</span> HERBALIFE NUTRITION · LIVE YOUR BEST LIFE
        </div>

        <h1 style={{
          fontSize: 'clamp(2.4rem, 4.5vw, 3.8rem)',
          fontWeight: 900,
          color: '#2a3114',
          lineHeight: 1.15,
          maxWidth: '920px',
          margin: '0 auto 0.75rem',
        }}>
          Herbalife Nutrition <span style={{ color: '#4d7d53' }}>Products</span>
        </h1>

        <p style={{
          fontSize: '1.2rem',
          fontWeight: 600,
          color: '#687342',
          letterSpacing: '0.02em',
          marginBottom: '1.5rem',
        }}>
          Better Nutrition &nbsp;|&nbsp; Better Health &nbsp;|&nbsp; A Brighter Future
        </p>

        {/* 4 Trust Badges from Infographic */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.25rem',
          flexWrap: 'wrap',
          margin: '0 auto 2rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.45rem 1.1rem', borderRadius: '999px', border: '1px solid rgba(131,141,66,0.22)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '1.1rem' }}>🍃</span>
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#27402b' }}>Quality Products</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.45rem 1.1rem', borderRadius: '999px', border: '1px solid rgba(131,141,66,0.22)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '1.1rem' }}>👤</span>
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#27402b' }}>Trusted Brand</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.45rem 1.1rem', borderRadius: '999px', border: '1px solid rgba(131,141,66,0.22)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '1.1rem' }}>💚</span>
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#27402b' }}>Healthy Lifestyle</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#ffffff', padding: '0.45rem 1.1rem', borderRadius: '999px', border: '1px solid rgba(131,141,66,0.22)', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <span style={{ fontSize: '1.1rem' }}>🌿</span>
            <span style={{ fontWeight: 700, fontSize: '0.85rem', color: '#27402b' }}>Long-Term Wellness</span>
          </div>
        </div>

        {/* Search */}
        <div style={{ maxWidth: '540px', margin: '0 auto', position: 'relative' }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products (Formula 1, ShakeMate, Tea, Aloe, Vritilife)..."
            style={{
              width: '100%',
              padding: '0.9rem 1.25rem 0.9rem 2.8rem',
              borderRadius: '999px',
              border: '1.5px solid rgba(131, 141, 66, 0.3)',
              background: '#ffffff',
              fontSize: '0.95rem',
              color: '#2a3114',
              boxShadow: '0 6px 20px rgba(64, 70, 37, 0.06)',
              outline: 'none',
              boxSizing: 'border-box',
            }}
          />
          <span style={{ position: 'absolute', left: '1.1rem', top: '50%', transform: 'translateY(-50%)', fontSize: '1.1rem', color: '#838d42' }}>
            🔍
          </span>
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#888', cursor: 'pointer', fontWeight: 700 }}
            >
              ✕
            </button>
          )}
        </div>
      </section>

      {/* ── Category Filter Pills ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 2.5rem', padding: '0 2rem' }}>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          paddingBottom: '0.5rem',
          scrollbarWidth: 'none',
        }}>
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.55rem 1.2rem',
                  borderRadius: '999px',
                  border: isActive ? '1.5px solid #4d7d53' : '1.5px solid rgba(131, 141, 66, 0.25)',
                  background: isActive ? 'linear-gradient(135deg, #838d42, #4d7d53)' : '#ffffff',
                  color: isActive ? '#ffffff' : '#404625',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: isActive ? '0 4px 12px rgba(77, 125, 83, 0.25)' : 'none',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Products Grid ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 4.5rem', padding: '0 clamp(1rem, 4vw, 2rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '1.75rem',
        }}>
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              style={{
                background: '#ffffff',
                borderRadius: '1.25rem',
                border: '1.5px solid rgba(131, 141, 66, 0.22)',
                boxShadow: '0 8px 24px rgba(64, 70, 37, 0.06)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Header card banner */}
                <div style={{
                  background: 'linear-gradient(135deg, #f4f6ee, #eaf0e2)',
                  padding: '1.5rem 1.5rem 1.25rem',
                  borderBottom: '1px solid rgba(131, 141, 66, 0.12)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                    }}>
                      {p.icon}
                    </div>
                    <div>
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#495221', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {p.category}
                      </span>
                      <p style={{ margin: 0, fontSize: '0.78rem', color: '#687342', fontWeight: 600 }}>
                        {p.serving}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div style={{ padding: '1.5rem' }}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#2a3114', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {p.name}
                  </h3>

                  {/* Bullets from poster */}
                  <div style={{ background: '#f8faf3', borderRadius: '10px', padding: '0.85rem 1rem', border: '1px solid #e7efe0', marginBottom: '1rem' }}>
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '0.85rem', color: '#333e1c', lineHeight: 1.5 }}>
                      {p.posterBullets.map((bullet, idx) => (
                        <li key={idx} style={{ marginBottom: idx === p.posterBullets.length - 1 ? 0 : '0.25rem' }}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p style={{ fontSize: '0.86rem', color: '#555e37', lineHeight: 1.5, margin: 0 }}>
                    {p.desc}
                  </p>

                  {p.flavors && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#778051', textTransform: 'uppercase' }}>
                        Flavors:
                      </span>
                      <p style={{ fontSize: '0.8rem', color: '#3c4224', margin: '0.15rem 0 0', fontWeight: 500 }}>
                        {p.flavors.join(', ')}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Pricing & CTA */}
              <div style={{ padding: '1.25rem 1.5rem', borderTop: '1px solid #f0efe8', background: '#fafbf7' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', marginBottom: '0.85rem' }}>
                  <span style={{ fontSize: '1.45rem', fontWeight: 900, color: '#27402b' }}>
                    {p.price}
                  </span>
                  <span style={{ fontSize: '0.85rem', color: '#999', textDecoration: 'line-through' }}>
                    MRP {p.mrp}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#2e7d32', background: '#e8f5e9', padding: '0.15rem 0.45rem', borderRadius: '4px' }}>
                    Coach Price
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.6rem' }}>
                  <Link
                    href="/book"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: '#f2f4ea',
                      color: '#404625',
                      padding: '0.65rem 0.75rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                      border: '1px solid rgba(131, 141, 66, 0.25)',
                    }}
                  >
                    Consult Coach
                  </Link>
                  <a
                    href={`https://wa.me/919999999999?text=${encodeURIComponent(`Hi Coach! I'm interested in ordering ${p.name} (${p.price}). Please guide me on dosage and purchasing.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      background: 'linear-gradient(135deg, #4d7d53, #27402b)',
                      color: '#ffffff',
                      padding: '0.65rem 0.75rem',
                      borderRadius: '8px',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      textDecoration: 'none',
                    }}
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Infographic Bottom Banner: Real Nutrition. Lasting Results. ── */}
      <section style={{ maxWidth: '1200px', margin: '0 auto 5rem', padding: '0 2rem' }}>
        <div style={{
          background: 'linear-gradient(135deg, #eef3e6, #fbfcf9)',
          borderRadius: '1.5rem',
          padding: '3rem 2.5rem',
          border: '2px solid rgba(131, 141, 66, 0.25)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          boxShadow: '0 10px 30px rgba(64, 70, 37, 0.05)',
        }}>
          <div style={{ maxWidth: '640px' }}>
            <span style={{ fontSize: '2rem', display: 'block', marginBottom: '0.5rem' }}>🍃</span>
            <h3 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 900, color: '#27402b', marginBottom: '0.5rem', lineHeight: 1.2 }}>
              Real Nutrition. Lasting Results.
            </h3>
            <p style={{ fontSize: '1.1rem', color: '#555e37', lineHeight: 1.6, margin: 0 }}>
              Choose Herbalife Nutrition products as part of your healthy lifestyle journey with personal coach guidance and support.
            </p>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: 800,
              color: '#4d7d53',
              fontStyle: 'italic',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              Healthy You, Happy You ❤️
            </div>
            <Link
              href="/book"
              style={{
                display: 'inline-block',
                background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                color: '#ffffff',
                padding: '0.85rem 2rem',
                borderRadius: '999px',
                fontWeight: 800,
                fontSize: '0.95rem',
                textDecoration: 'none',
                boxShadow: '0 4px 14px rgba(77, 125, 83, 0.25)',
              }}
            >
              Get Started with Coach HS →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

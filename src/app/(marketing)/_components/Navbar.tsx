'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  ['Programs', '/programs'],
  ['Herbalife Products', '/herbalife'],
  ['About', '/about'],
  ['Contact', '/contact'],
] as const;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.85rem clamp(1rem, 4vw, 2.5rem)',
          background: 'rgba(249, 247, 242, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(131, 141, 66, 0.15)',
          boxShadow: '0 2px 12px rgba(64, 70, 37, 0.04)',
        }}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          aria-label="HS Wellness Coach Homepage"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>🌿</span>
          <span
            style={{
              fontWeight: 800,
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              color: '#32381c',
              letterSpacing: '-0.02em',
            }}
          >
            HS Wellness Coach
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="nav-desktop-links"
          aria-label="Main Navigation"
          style={{
            display: 'flex',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          {NAV_LINKS.map(([label, href]) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                style={{
                  color: isActive ? '#3b6340' : '#495221',
                  fontWeight: isActive ? 700 : 500,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  position: 'relative',
                  padding: '0.25rem 0',
                  transition: 'color 0.2s',
                }}
              >
                {label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#4d7d53',
                      borderRadius: '2px',
                    }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            href="/book"
            style={{
              background: 'linear-gradient(135deg, #838d42, #4d7d53)',
              color: '#ffffff',
              padding: '0.55rem 1.4rem',
              borderRadius: '999px',
              fontWeight: 700,
              fontSize: '0.9rem',
              textDecoration: 'none',
              boxShadow: '0 4px 12px rgba(77, 125, 83, 0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              display: 'inline-block',
            }}
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Hamburger Toggle Button */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
          style={{
            display: 'none',
            background: 'rgba(131, 141, 66, 0.1)',
            border: '1px solid rgba(131, 141, 66, 0.2)',
            borderRadius: '10px',
            padding: '0.5rem 0.65rem',
            fontSize: '1.25rem',
            color: '#27402b',
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            lineHeight: 1,
            minWidth: '44px',
            minHeight: '44px',
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* ── Mobile Navigation Drawer ── */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 60,
            background: 'rgba(26, 32, 16, 0.45)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            animation: 'fadeIn 0.2s ease-out',
          }}
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileMenuOpen(false);
          }}
        >
          <div
            style={{
              background: '#fcfbf8',
              borderBottom: '2px solid rgba(131, 141, 66, 0.25)',
              boxShadow: '0 16px 36px rgba(0, 0, 0, 0.15)',
              padding: '1.25rem clamp(1rem, 4vw, 2rem) 2rem',
              maxHeight: '90vh',
              overflowY: 'auto',
            }}
          >
            {/* Top drawer header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: '1rem',
                borderBottom: '1px solid #ebe9df',
                marginBottom: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ fontSize: '1.4rem' }}>🌿</span>
                <span style={{ fontWeight: 800, fontSize: '1.05rem', color: '#27402b' }}>
                  HS Wellness Coach
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
                style={{
                  background: 'rgba(131, 141, 66, 0.12)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '38px',
                  height: '38px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.1rem',
                  color: '#27402b',
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
            </div>

            {/* Links list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '1.5rem',
              }}
            >
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.85rem 1rem',
                  borderRadius: '10px',
                  background: pathname === '/' ? '#f1f4e8' : 'transparent',
                  color: pathname === '/' ? '#27402b' : '#495221',
                  fontWeight: pathname === '/' ? 800 : 600,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                }}
              >
                <span>🏠</span> Home
              </Link>
              {NAV_LINKS.map(([label, href]) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      padding: '0.85rem 1rem',
                      borderRadius: '10px',
                      background: isActive ? '#f1f4e8' : 'transparent',
                      color: isActive ? '#27402b' : '#495221',
                      fontWeight: isActive ? 800 : 600,
                      fontSize: '1.05rem',
                      textDecoration: 'none',
                    }}
                  >
                    <span>
                      {label.includes('Program') && '📋'}
                      {label.includes('Herbalife') && '🌱'}
                      {label.includes('About') && '👤'}
                      {label.includes('Contact') && '✉️'}
                    </span>
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* CTAs inside drawer */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, #838d42, #4d7d53)',
                  color: '#ffffff',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: 800,
                  fontSize: '1rem',
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(77, 125, 83, 0.25)',
                }}
              >
                📅 Book Free Consultation
              </Link>

              <a
                href="https://wa.me/919999999999?text=Hi%20Coach!%20I%20am%20interested%20in%20a%20personalized%20wellness%20plan."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#f2f5eb',
                  color: '#27402b',
                  padding: '0.85rem 1.5rem',
                  borderRadius: '999px',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  border: '1px solid rgba(131, 141, 66, 0.25)',
                }}
              >
                <span>💬</span> WhatsApp Coach Directly
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

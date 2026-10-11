'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin, Mail } from 'lucide-react';
import PixelCascade from './PixelCascade';
import { usePixelRipple, PixelRippleOverlay } from './PixelRipple';

export default function Footer() {
  const { ripples: instaRipples, triggerRipple: triggerInsta } = usePixelRipple();
  const { ripples: linkedinRipples, triggerRipple: triggerLinkedin } = usePixelRipple();
  const { ripples: xRipples, triggerRipple: triggerX } = usePixelRipple();

  return (
    <section
      id="footer"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '60px 24px 0 24px'
      }}
    >
      <PixelCascade
        className="footer-card-container"
        style={{
          backgroundColor: 'var(--footer-box-bg)',
          border: '4px solid var(--card-border)',
          borderRadius: '0px',
          boxShadow: 'var(--card-shadow-lg)',
          padding: 'clamp(32px, 5vw, 64px)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              gap: '12px'
            }}
          >
            <Image
              src="/gdg-logo.svg"
              alt="GDG Logo"
              width={90}
              height={52}
              style={{ objectFit: 'contain' }}
            />
            <h2
              className="retron-font"
              style={{
                fontSize: 'clamp(1.8rem, 3.2vw, 2.8rem)',
                fontWeight: 900,
                color: 'var(--text-color)'
              }}
            >
              Google Developer Groups
            </h2>
            <p
              style={{
                fontSize: '15px',
                fontWeight: 800,
                color: 'var(--muted-color)'
              }}
            >
              On Campus • Ramdeobaba University
            </p>
          </div>

          <div
            style={{
              borderTop: '3px dashed var(--card-border)',
              width: '100%'
            }}
          />

          <div className="footer-grid">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div
                className="footer-contact-row"
                style={{
                  backgroundColor: 'var(--footer-addr-bg)',
                  color: '#000000',
                  border: '3px solid var(--card-border)',
                  borderRadius: '0px',
                  padding: '18px 24px',
                  boxShadow: 'var(--card-shadow-sm)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  cursor: 'pointer'
                }}
              >
                <div className="footer-contact-icon" style={{ marginTop: '2px', flexShrink: 0 }}>
                  <MapPin size={24} color="#000000" />
                </div>
                <div style={{ fontSize: '15px', lineHeight: 1.5, fontWeight: 700 }}>
                  <div style={{ fontWeight: 900, fontSize: '16px' }}>Ramdeobaba University</div>
                  <div>Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013</div>
                </div>
              </div>

              <a
                href="mailto:gdg@rknec.edu"
                className="footer-contact-row"
                style={{
                  backgroundColor: 'var(--footer-email-bg)',
                  color: '#000000',
                  border: '3px solid var(--card-border)',
                  borderRadius: '0px',
                  padding: '16px 24px',
                  boxShadow: 'var(--card-shadow-sm)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '15px',
                  fontWeight: 900,
                  cursor: 'pointer'
                }}
              >
                <div className="footer-contact-icon" style={{ flexShrink: 0 }}>
                  <Mail size={22} color="#000000" />
                </div>
                <span>gdg@rknec.edu</span>
              </a>
            </div>

            <div
              style={{
                backgroundColor: 'var(--footer-social-bg)',
                border: '3px solid var(--card-border)',
                borderRadius: '0px',
                padding: '24px',
                boxShadow: 'var(--card-shadow-sm)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <span
                style={{
                  fontSize: '15px',
                  fontWeight: 900,
                  color: '#000000',
                  letterSpacing: '0.04em'
                }}
              >
                Follow us On:
              </span>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <a
                  href="https://www.instagram.com/gdg_rbu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerInsta(e)}
                  className="pixel-ripple-host social-btn"
                  aria-label="GDG RBU Instagram"
                  style={{
                    backgroundColor: '#F87171',
                    color: '#000000',
                    border: '3px solid #000000',
                    borderRadius: '0px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '3px 3px 0px #000000',
                    cursor: 'pointer'
                  }}
                >
                  <PixelRippleOverlay ripples={instaRipples} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="0" ry="0"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/company/gdg-rbu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerLinkedin(e)}
                  className="pixel-ripple-host social-btn"
                  aria-label="GDG RBU LinkedIn"
                  style={{
                    backgroundColor: '#60A5FA',
                    color: '#000000',
                    border: '3px solid #000000',
                    borderRadius: '0px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '3px 3px 0px #000000',
                    cursor: 'pointer'
                  }}
                >
                  <PixelRippleOverlay ripples={linkedinRipples} />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                <a
                  href="https://x.com/gdg_rbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => triggerX(e)}
                  className="pixel-ripple-host social-btn"
                  aria-label="GDG RBU on X"
                  style={{
                    backgroundColor: '#4ADE80',
                    color: '#000000',
                    border: '3px solid #000000',
                    borderRadius: '0px',
                    width: '50px',
                    height: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '3px 3px 0px #000000',
                    cursor: 'pointer'
                  }}
                >
                  <PixelRippleOverlay ripples={xRipples} />
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </PixelCascade>

      <div
        style={{
          width: '100%',
          marginTop: '70px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          opacity: 0.95
        }}
      >
        <svg
          viewBox="0 0 1200 110"
          preserveAspectRatio="none"
          style={{ width: '100%', height: '110px', display: 'block' }}
        >
          <g>
            <circle cx="45" cy="55" r="32" fill="#EA4335" />
            <rect x="105" y="24" width="60" height="60" fill="#4285F4" transform="rotate(25 135 54)" />
            <polygon points="205,86 238,24 271,86" fill="#FBBC04" />
            <path d="M 300 86 A 34 34 0 0 1 368 86 Z" fill="#34A853" />
            <rect x="395" y="28" width="68" height="48" fill="#EA4335" />
            <circle cx="510" cy="55" r="34" fill="#4285F4" />
            <polygon points="575,24 635,24 605,86" fill="#FBBC04" />
            <circle cx="680" cy="55" r="34" fill="#34A853" />
            <rect x="740" y="22" width="60" height="60" fill="#EA4335" transform="rotate(32 770 52)" />
            <circle cx="850" cy="55" r="32" fill="#4285F4" />
            <polygon points="915,86 948,24 981,86" fill="#FBBC04" />
            <path d="M 1010 86 A 34 34 0 0 1 1078 86 Z" fill="#34A853" />
            <rect x="1105" y="22" width="60" height="60" fill="#EA4335" transform="rotate(18 1135 52)" />
          </g>
        </svg>
      </div>
    </section>
  );
}

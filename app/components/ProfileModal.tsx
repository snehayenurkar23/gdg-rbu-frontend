'use client';

import React, { useEffect } from 'react';
import { X, Award, Mail } from 'lucide-react';
import { usePixelRipple, PixelRippleOverlay } from './PixelRipple';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { ripples, triggerRipple } = usePixelRipple();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Member Profile"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'var(--modal-overlay)',
        backdropFilter: 'blur(3px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'var(--card-bg)',
          color: 'var(--text-color)',
          border: '4px solid var(--card-border)',
          borderRadius: '0px',
          boxShadow: 'var(--card-shadow-lg)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        <div
          style={{
            backgroundColor: '#4285F4',
            padding: '16px 24px',
            borderBottom: '3.5px solid var(--card-border)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '0px',
                backgroundColor: '#EA4335',
                border: '1.5px solid #000'
              }}
            />
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '0px',
                backgroundColor: '#FBBC04',
                border: '1.5px solid #000'
              }}
            />
            <span
              style={{
                width: '14px',
                height: '14px',
                borderRadius: '0px',
                backgroundColor: '#34A853',
                border: '1.5px solid #000'
              }}
            />
            <h3
              className="retron-font"
              style={{
                color: '#000000',
                fontSize: '16px',
                fontWeight: 'bold',
                marginLeft: '8px',
                textTransform: 'uppercase'
              }}
            >
              GDG Profile
            </h3>
          </div>
          <button
            onClick={(e) => {
              triggerRipple(e);
              onClose();
            }}
            className="pixel-ripple-host"
            aria-label="Close profile modal"
            style={{
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: '2.5px solid #000000',
              borderRadius: '0px',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '2.5px 2.5px 0px #000000'
            }}
          >
            <PixelRippleOverlay ripples={ripples} />
            <X size={20} />
          </button>
        </div>

        <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <div
              style={{
                width: '84px',
                height: '84px',
                borderRadius: '0px',
                border: '3.5px solid var(--card-border)',
                backgroundColor: '#FFC20E',
                boxShadow: '3.5px 3.5px 0px var(--card-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '32px',
                fontWeight: '900',
                color: '#000000'
              }}
            >
              RA
            </div>
            <div style={{ flex: 1 }}>
              <h2
                className="retron-font"
                style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '6px' }}
              >
                Rohit Agrawal
              </h2>
              <div
                style={{
                  display: 'inline-block',
                  backgroundColor: '#34A853',
                  color: '#FFFFFF',
                  padding: '4px 10px',
                  borderRadius: '0px',
                  border: '2px solid var(--card-border)',
                  fontSize: '13px',
                  fontWeight: 'bold',
                  marginBottom: '6px'
                }}
              >
                Web Lead • GDG RBU
              </div>
              <p style={{ fontSize: '14px', color: 'var(--muted-color)' }}>
                Ramdeobaba University, Nagpur
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: 'var(--bg-color)',
              border: '2.5px solid var(--card-border)',
              borderRadius: '0px',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold', fontSize: '14px' }}>
              <Award size={18} color="#FBBC04" />
              <span>Core Specializations</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {['Frontend Dev', 'React / Next.js', 'UI Architecture', 'Community Mentorship'].map((tag) => (
                <span
                  key={tag}
                  style={{
                    backgroundColor: 'var(--card-bg)',
                    border: '2px solid var(--card-border)',
                    borderRadius: '0px',
                    padding: '6px 12px',
                    fontSize: '13px',
                    fontWeight: '700'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '12px',
              justifyContent: 'stretch',
              flexWrap: 'wrap'
            }}
          >
            <a
              href="https://www.linkedin.com/company/gdg-rbu/"
              target="_blank"
              rel="noopener noreferrer"
              className="color-rise-btn"
              style={{
                '--rise-color': '#4285F4',
                flex: '1 1 140px',
                border: '2.5px solid var(--card-border)',
                borderRadius: '0px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-color)',
                boxShadow: '3px 3px 0px var(--card-border)'
              } as React.CSSProperties}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/gdgrbu"
              target="_blank"
              rel="noopener noreferrer"
              className="color-rise-btn"
              style={{
                '--rise-color': '#34A853',
                flex: '1 1 140px',
                border: '2.5px solid var(--card-border)',
                borderRadius: '0px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-color)',
                boxShadow: '3px 3px 0px var(--card-border)'
              } as React.CSSProperties}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="mailto:gdg@rknec.edu"
              className="color-rise-btn"
              style={{
                '--rise-color': '#EA4335',
                flex: '1 1 140px',
                border: '2.5px solid var(--card-border)',
                borderRadius: '0px',
                padding: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: 'bold',
                backgroundColor: 'var(--card-bg)',
                color: 'var(--text-color)',
                boxShadow: '3px 3px 0px var(--card-border)'
              } as React.CSSProperties}
            >
              <Mail size={18} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

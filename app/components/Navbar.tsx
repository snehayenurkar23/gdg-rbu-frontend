'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Sun, Moon, Menu, X, User } from 'lucide-react';
import { usePixelRipple, PixelRippleOverlay } from './PixelRipple';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onOpenProfile: () => void;
}

export default function Navbar({ theme, toggleTheme, onOpenProfile }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ripples, triggerRipple } = usePixelRipple();

  const navLinks = [
    { label: 'Home', href: '#home', color: '#60A5FA' },
    { label: 'Team', href: '#team', color: '#F87171' },
    { label: 'Events', href: '#events', color: '#FACC15' },
    { label: 'Gallery', href: 'https://www.gdgrbu.app/gallery', external: true, color: '#4ADE80' },
    { label: 'Portfolio', href: 'https://www.gdgrbu.app/portfolio-builder', external: true, color: '#818CF8' },
    { label: 'Docs', href: 'https://www.gdgrbu.app/docs', external: true, color: '#38BDF8' }
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '84px',
        backgroundColor: 'var(--nav-bg)',
        borderBottom: '3.5px solid var(--nav-border)',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 clamp(12px, 3vw, 24px)',
        boxShadow: '0 4px 0px rgba(0,0,0,0.06)'
      }}
    >
      <a
        href="#home"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          flexShrink: 0
        }}
      >
        <Image
          src="/gdg-logo.svg"
          alt="GDG RBU Logo"
          width={58}
          height={34}
          priority
          style={{ objectFit: 'contain' }}
        />
      </a>

      <div
        className="desktop-nav-menu"
        style={{
          display: 'none',
          alignItems: 'center',
          gap: '12px'
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className="corner-dash-btn"
            style={{
              backgroundColor: link.color,
              color: '#000000',
              fontWeight: 800,
              fontSize: '15px',
              padding: '10px 20px',
              borderRadius: '8px',
              border: 'none',
              outline: 'none',
              boxShadow: '0 4px 0px #000000',
              cursor: 'pointer'
            }}
          >
            <span className="corner-dash-square" />
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={toggleTheme}
          className="color-rise-btn"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          style={{
            '--rise-color': theme === 'light' ? '#3B82F6' : '#F59E0B',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)',
            border: '2px solid var(--card-border)',
            borderRadius: '0px',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '2.5px 2.5px 0px var(--card-border)'
          } as React.CSSProperties}
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </button>

        <button
          onClick={(e) => {
            triggerRipple(e);
            onOpenProfile();
          }}
          className="pixel-ripple-host profile-nav-button"
          aria-label="Open member profile"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)',
            border: '2px solid var(--card-border)',
            borderRadius: '0px',
            height: '38px',
            padding: '0 8px',
            boxShadow: '2.5px 2.5px 0px var(--card-border)',
            fontWeight: 800,
            fontSize: '13px'
          }}
        >
          <PixelRippleOverlay ripples={ripples} />
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '0px',
              backgroundColor: '#FFC20E',
              border: '1.5px solid var(--card-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000000',
              flexShrink: 0
            }}
          >
            <User size={14} />
          </div>
          <span className="profile-btn-label">Profile</span>
        </button>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-hamburger-btn"
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '38px',
            height: '38px',
            backgroundColor: 'var(--card-bg)',
            color: 'var(--text-color)',
            border: '2px solid var(--card-border)',
            borderRadius: '0px',
            boxShadow: '2.5px 2.5px 0px var(--card-border)'
          }}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div
          className="mobile-menu-drawer"
          style={{
            position: 'absolute',
            top: '84px',
            left: 0,
            right: 0,
            backgroundColor: 'var(--card-bg)',
            borderBottom: '3.5px solid var(--card-border)',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
            boxShadow: '0 8px 0px rgba(0,0,0,0.1)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              onClick={() => setMobileMenuOpen(false)}
              className="corner-dash-btn"
              style={{
                backgroundColor: link.color,
                color: '#000000',
                fontWeight: 800,
                fontSize: '15px',
                padding: '12px 20px',
                borderRadius: '8px',
                border: 'none',
                outline: 'none',
                boxShadow: '0 4px 0px #000000',
                textAlign: 'center'
              }}
            >
              <span className="corner-dash-square" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

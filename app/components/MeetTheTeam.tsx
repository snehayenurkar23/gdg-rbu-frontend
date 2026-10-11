'use client';

import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import PixelCascade from './PixelCascade';

export default function MeetTheTeam() {
  return (
    <section
      id="team"
      style={{
        maxWidth: '1360px',
        margin: '0 auto',
        padding: '90px 24px'
      }}
    >
      <PixelCascade
        className="team-card-container"
        style={{
          backgroundColor: 'var(--team-card-bg, #F5F3EC)',
          border: '4px solid var(--card-border)',
          borderRadius: '0px',
          boxShadow: 'var(--card-shadow-lg)',
          overflow: 'hidden'
        }}
      >
        <div className="team-grid">
          <div
            style={{
              padding: 'clamp(28px, 5vw, 64px)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '26px'
            }}
          >
            <h2
              className="retron-font"
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 3.2rem)',
                lineHeight: 1.15,
                fontWeight: 900,
                color: 'var(--text-color)'
              }}
            >
              Meet the Google Developer Group Team
            </h2>

            <p
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                color: 'var(--muted-color)'
              }}
            >
              Google Developer Groups (GDG) are open and volunteer-run communities for developers interested in Google technologies. Our team focuses on learning, networking, and collaboration through events and hands-on sessions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '8px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: '#34A853',
                    color: '#FFFFFF',
                    borderRadius: '0px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2.5px solid var(--card-border)',
                    boxShadow: '3px 3px 0px var(--card-border)',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 900, marginBottom: '4px', color: 'var(--text-color)' }}>
                    Passionate Community Leaders
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--muted-color)' }}>
                    Our organizers build an inclusive environment where developers can connect, share knowledge, and grow together.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div
                  style={{
                    backgroundColor: '#4285F4',
                    color: '#FFFFFF',
                    borderRadius: '0px',
                    padding: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2.5px solid var(--card-border)',
                    boxShadow: '3px 3px 0px var(--card-border)',
                    flexShrink: 0
                  }}
                >
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 900, marginBottom: '4px', color: 'var(--text-color)' }}>
                    Empowering Developers
                  </h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6, color: 'var(--muted-color)' }}>
                    We host meetups and codelabs to help developers stay current with modern tools and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="team-photo-container"
            style={{
              position: 'relative',
              minHeight: '480px',
              borderLeft: '4px solid var(--card-border)',
              backgroundColor: '#000000',
              overflow: 'hidden'
            }}
          >
            <Image
              src="/team.jpg"
              alt="GDG RBU Team"
              fill
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
              className="team-photo-img"
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </PixelCascade>
    </section>
  );
}

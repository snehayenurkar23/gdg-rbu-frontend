'use client';

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingEvent from './components/UpcomingEvent';
import MeetTheTeam from './components/MeetTheTeam';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import ProfileModal from './components/ProfileModal';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('gdg_theme') as 'light' | 'dark' | null;
    if (savedTheme === 'dark' || savedTheme === 'light') {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('gdg_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  return (
    <>
      <div className="passive-grid" aria-hidden="true" />
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        onOpenProfile={() => setIsProfileOpen(true)}
      />
      <main style={{ position: 'relative', zIndex: 1, overflowX: 'hidden' }}>
        <Hero onOpenProfile={() => setIsProfileOpen(true)} />
        <UpcomingEvent />
        <MeetTheTeam />
        <FAQs />
        <Footer />
      </main>
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </>
  );
}

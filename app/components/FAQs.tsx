'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import PixelCascade from './PixelCascade';
import { usePixelRipple, PixelRippleOverlay } from './PixelRipple';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'What is GDG RBU?',
    answer: 'GDG RBU is focused on empowering students through hands-on workshops, tech talks, hackathons, and real-world project collaboration.'
  },
  {
    question: 'How to join GDG?',
    answer: 'You can join GDG RBU by registering during our annual recruitment drive or by participating in any of our open campus events and workshops.'
  },
  {
    question: 'What does a GDG Lead do?',
    answer: 'A GDG Lead works with Google to cultivate a collaborative developer ecosystem on campus, mentoring peers and organizing community-driven initiatives.'
  },
  {
    question: 'How is GDG related to Google?',
    answer: 'GDG on Campus chapters are student-run university communities supported and recognized by Google Developers to bridge the gap between theory and industry practice.'
  },
  {
    question: 'How to reach us?',
    answer: 'You can reach out to us via email at gdg@rknec.edu or connect through our official Instagram, LinkedIn, and X channels.'
  }
];

function FAQAccordionItem({
  item,
  isOpen,
  onToggle
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const { ripples, triggerRipple } = usePixelRipple();

  return (
    <div
      className="faq-item-card"
      style={{
        backgroundColor: 'var(--faq-bg)',
        border: '3px solid var(--card-border)',
        borderRadius: '0px',
        boxShadow: 'var(--card-shadow-sm)',
        overflow: 'hidden'
      }}
    >
      <button
        onClick={(e) => {
          triggerRipple(e);
          onToggle();
        }}
        className="pixel-ripple-host faq-btn"
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '22px 28px',
          backgroundColor: 'transparent',
          border: 'none',
          color: 'var(--text-color)',
          fontSize: '18px',
          fontWeight: 800,
          textAlign: 'left'
        }}
      >
        <PixelRippleOverlay ripples={ripples} />
        <span>{item.question}</span>
        <div style={{ marginLeft: '16px', flexShrink: 0 }}>
          {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
        </div>
      </button>

      {isOpen && (
        <div
          style={{
            padding: '0 28px 24px 28px',
            borderTop: '2.5px dashed var(--card-border)',
            paddingTop: '20px',
            fontSize: '16px',
            lineHeight: 1.75,
            color: 'var(--muted-color)'
          }}
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faqs"
      style={{
        maxWidth: '1080px',
        margin: '0 auto',
        padding: '90px 24px'
      }}
    >
      <PixelCascade
        className="faqs-card-container"
        style={{
          position: 'relative',
          width: '100%'
        }}
      >
        <h2
          className="retron-font"
          style={{
            fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
            fontWeight: 900,
            textAlign: 'center',
            marginBottom: '48px',
            color: 'var(--text-color)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em'
          }}
        >
          FAQs
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: '16px' }}>
          {faqData.map((item, index) => (
            <FAQAccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === index}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </PixelCascade>
    </section>
  );
}

import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  title: 'GDG RBU | Google Developer Group at Ramdeobaba University',
  description: 'Official website of Google Developer Group at RBU. Discover events, workshops, hackathons, blogs, docs, and the student developer community.',
  icons: {
    icon: '/gdg-logo.svg',
    shortcut: '/gdg-logo.svg',
    apple: '/gdg-logo.svg'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem('gdg_intro_shown')||window.matchMedia('(prefers-reduced-motion: reduce)').matches){document.documentElement.classList.add('intro-dismissed');}}catch(e){}`
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

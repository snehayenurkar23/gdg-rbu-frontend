# GDG RBU — Web Development Frontend

A single-page web application for Google Developer Groups (GDG) on Campus at Ramdeobaba University (RBU), built with Next.js 15 App Router, React 19, TypeScript, and custom CSS.

---

## Purpose

This project reproduces the GDG RBU community and recruitment portal based on the official design brief and Figma specifications. It provides an interactive overview of GDG RBU domains, upcoming orientation events, team leadership, frequently asked questions, and community links with custom retro-modern UI interactions.

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Language**: TypeScript
- **Styling**: Pure CSS / CSS Variables (no Tailwind CSS)
- **Icons**: Lucide React
- **Typography**: Custom Retron2000 font alongside system monospace and sans-serif stacks

---

## Features

- **Static Passive Grid**: Consistent, subtle background grid that remains fixed and static across both light and dark modes.
- **Dark & Light Mode**: Built-in theme switcher with CSS custom variables, persisting preferences via `localStorage`.
- **Navigation Bar**: Fixed header with GDG branding, six colored route buttons with Corner Dash animation, theme toggle, profile trigger, and a responsive mobile drawer menu.
- **Hero Section**: Retron-styled typography, mission statement, interactive Pixel Ripple action buttons, and hero media block.
- **Upcoming Events**: Section sitting directly on the page background featuring Fall 2024 Orientation details, domain recruitment breakdown, event metadata, and a Color Rise registration button.
- **Meet the Team**: Community overview cards with custom checkmark accents and an interactive team photograph that smoothly zooms on hover while clipped strictly within its container.
- **Interactive FAQs**: Accordion question list with Pixel Ripple interactions, smooth hover lift, and unclipped black bottom shadows across all items.
- **Footer**: Brand summary, university address box, contact email box, Pixel Ripple social buttons (Instagram, LinkedIn, X), and a Google-palette geometric shape strip.
- **Member Profile Modal**: Accessible popover dialog highlighting leadership information, specialization tags, and contact links.
- **Micro-Interactions**:
  - **Corner Dash**: Moving square with a white outline traveling around the perimeter of navbar buttons.
  - **Pixel Ripple**: Dynamic pixel-based ripple expanding from click/touch coordinates across buttons and social links.
  - **Color Rise**: Smooth upward color fill transition on hover.
  - **Universal Lift & Press**: Hover lift (`-3px`) on all interactive buttons, cards, and links, with tactile press-down feedback (`+2px`) on click/tap.
  - **Stationary Scroll Transitions**: Smooth viewport-driven opacity fade-in on entry and fade-out on exit with zero layout shift or canvas overhead.
  - **Accessibility**: Comprehensive `prefers-reduced-motion` overrides disabling transforms, animations, and transitions for users requesting reduced motion.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.18.0 or newer recommended)
- npm

### Installation

Clone or open the project folder in your terminal and install dependencies:

```bash
npm install
```

### Running Locally (Windows PowerShell)

Start the Next.js development server:

```powershell
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Production Build

To generate an optimized production build:

```powershell
npm.cmd run build
```

To run the production server locally after building:

```powershell
npm.cmd run start
```

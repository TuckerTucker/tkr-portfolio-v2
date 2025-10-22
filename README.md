# Tucker's Portfolio v2

A modern, minimal portfolio website showcasing product design work through detailed case studies. Built with a focus on performance, accessibility, and thoughtful design.

**Live Site:** [tucker.sh](https://tucker.sh)

## Overview

This portfolio presents Tucker's work in product design, featuring in-depth case studies that walk through the problem-solving process from understanding through impact. The site emphasizes clarity, readability, and a seamless user experience across devices and color schemes.

### Featured Case Studies

- **Context Kit** - AI development toolkit with integrated services and knowledge graph
- **DocuSearch** - Documentation search system with natural language processing
- **Kanban** - Project management interface with drag-and-drop functionality

## Tech Stack

### Core Technologies
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with strict mode enabled
- **Vite** - Lightning-fast build tool and dev server
- **React Router** - Client-side routing for smooth navigation

### UI & Styling
- **Tailwind CSS 3** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components built on Radix UI
- **Tweakcn CSS** - Custom design system using OKLCH color space
- **Lucide React** - Beautiful, consistent icon library
- **next-themes** - Seamless dark mode support

### Design System
The site uses a custom **Tweakcn CSS** design system built on:
- **OKLCH color space** for perceptually uniform colors
- **CSS custom properties** for dynamic theming
- **System font stack** with custom typography (Afacad, Alice, Courier Prime)
- **Responsive spacing** and shadow systems

## Features

- **3 Detailed Case Studies** - Problem → Understanding → Solution → Impact structure
- **Dark Mode Support** - System-aware theme switching with manual override
- **Responsive Design** - Mobile-first approach, optimized for all screen sizes
- **Fast Performance** - Vite build optimization and minimal dependencies
- **Accessible** - WCAG-compliant components from Radix UI primitives
- **Type-Safe** - Full TypeScript coverage for reliability

## Development Setup

### Prerequisites

- **Node.js 18+** (LTS recommended)
- **npm** (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/tuckertucker/tkr-portfolio-v2.git
cd tkr-portfolio-v2

# Install dependencies
npm install
```

### Development Commands

```bash
# Start development server (http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint
npm run lint
```

### Development Server

After running `npm run dev`, the site will be available at:
- **Local:** http://localhost:5173
- **Network:** Your local IP address (shown in terminal)

Hot Module Replacement (HMR) is enabled - changes appear instantly without refresh.

## Project Structure

```
tkr-portfolio-v2/
├── src/
│   ├── components/
│   │   ├── case-studies/     # Case study section components
│   │   ├── layout/            # Header, Footer, ThemeToggle
│   │   ├── sections/          # Hero, About, FeaturedProjects
│   │   └── ui/                # Shadcn/ui components
│   ├── content/
│   │   ├── case-studies/      # Case study data files
│   │   ├── projects.ts        # Project metadata
│   │   ├── work-history.ts    # Work experience data
│   │   └── types.ts           # Content type definitions
│   ├── pages/                 # Route components (Home, case studies)
│   ├── providers/             # ThemeProvider for dark mode
│   ├── styles/                # Tweakcn CSS design system
│   ├── lib/                   # Utilities (cn helper)
│   ├── App.tsx                # Root component with routing
│   ├── main.tsx               # Application entry point
│   └── index.css              # Global styles and CSS variables
├── public/                    # Static assets
├── index.html                 # HTML entry point
├── tailwind.config.ts         # Tailwind configuration
├── vite.config.ts             # Vite configuration
└── tsconfig.json              # TypeScript configuration
```

## Content Management

### Adding a New Case Study

1. **Create content file** in `src/content/case-studies/`
2. **Define metadata** using the `CaseStudy` type
3. **Structure sections** (problem, understanding, solution, impact)
4. **Create page component** in `src/pages/`
5. **Add route** in `src/App.tsx`
6. **Add to project list** in `src/content/projects.ts`

Example:
```typescript
// src/content/case-studies/example.ts
import { CaseStudy } from '../types';

export const exampleCaseStudy: CaseStudy = {
  metadata: {
    title: "Project Title",
    client: "Client Name",
    role: "Your Role",
    duration: "Timeline",
    tags: ["tag1", "tag2"]
  },
  problem: {
    context: "Background...",
    challenges: ["Challenge 1", "Challenge 2"]
  },
  // ... more sections
};
```

### Updating Work History

Edit `src/content/work-history.ts` to add or modify work experience entries.

### Modifying Design Tokens

Design tokens are defined in `src/styles/tweakcn.css` using CSS custom properties. The system uses OKLCH for color definitions, providing better perceptual uniformity than HSL.

## Deployment

### GitHub Pages

This site is configured for deployment to GitHub Pages with a custom domain.

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` folder** to GitHub Pages

3. **Configure custom domain:**
   - Add `CNAME` file to `public/` folder with domain name
   - Configure DNS settings at your registrar

### Custom Domain (tucker.sh)

DNS is configured to point tucker.sh to GitHub Pages. The CNAME record is preserved in the repository.

### Other Hosting Platforms

The built `dist/` folder can be deployed to any static hosting service:
- **Vercel:** `vercel deploy`
- **Netlify:** Drag-and-drop `dist/` folder
- **Cloudflare Pages:** Connect repository
- **AWS S3:** Upload `dist/` contents

## Design System

### Color Palette

The Tweakcn CSS system uses OKLCH color space for precise, perceptually uniform colors:

- **Light Mode:** High contrast with subtle grays
- **Dark Mode:** Comfortable reading with reduced eye strain
- **Primary Accent:** Purple/indigo (oklch(0.6231 0.1880 259.8145))

### Typography

- **Sans Serif:** Afacad (headings and body)
- **Serif:** Alice (emphasis and quotes)
- **Monospace:** Courier Prime (code)

### Component Library

Built on Shadcn/ui components with Radix UI primitives:
- Button, Card, Separator
- ScrollArea for smooth scrolling
- Fully accessible and keyboard navigable

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Vite production build** with code splitting
- **Lazy loading** for route components
- **Optimized assets** with compression
- **Minimal dependencies** for faster load times

## License

© 2025 Tucker. All rights reserved.

---

Built with attention to detail and a focus on the craft of product design.

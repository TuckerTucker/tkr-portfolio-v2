# Tucker Portfolio Tech Stack Specification

**Project:** tucker.sh portfolio v2
**Date:** 2025-10-22
**Status:** Planning phase

---

## Technology Stack

### Core Framework
```yaml
Frontend Framework: React 18 + TypeScript
Build Tool: Vite
Package Manager: npm
Node Version: 18+
TypeScript: Strict mode enabled
```

### UI & Styling
```yaml
Component Library: Shadcn/ui (Radix UI primitives)
CSS Framework: Tailwind CSS
Custom Styling: Tweakcn CSS variables
Color Space: OKLCH (perceptually uniform)
Design Tokens: CSS custom properties
Dark Mode: System default with manual toggle
Responsive: Mobile-first approach
```

### Routing & Navigation
```yaml
Router: React Router v6
Architecture: SPA (Single Page Application)
URL Strategy: Browser history API
Routes: /, /docusearch, /context-kit, /kanban
```

### Typography
```yaml
Sans Serif: Afacad (400, 500, 600, 700)
Serif: Alice (400)
Monospace: Courier Prime (400, 700)
Loading Strategy: Google Fonts (initial), self-hosted (future optimization)
Font Display: swap
```

### Hosting & Deployment
```yaml
Host: GitHub Pages
Domain: tucker.sh (custom domain)
Build Output: Static HTML/CSS/JS
Jekyll: Disabled (via .nojekyll file)
Deployment: GitHub Actions (automated)
Branch: gh-pages (deployment target)
```

### Development Tools
```yaml
Linting: ESLint + TypeScript ESLint
Formatting: Prettier
Version Control: Git + GitHub
IDE: VS Code (recommended)
```

---

## Why These Choices?

### React 18 + Vite
**Rationale:**
- Tucker already knows React (no learning curve)
- Vite provides fast dev server with HMR
- Optimized production builds
- Perfect for content-focused portfolio
- No framework troubleshooting during project

**Benefits:**
- Fast iteration during development
- Familiar patterns and tooling
- Large ecosystem of solutions
- Easy to maintain and update

### TypeScript (Strict Mode)
**Rationale:**
- Required for Shadcn/ui integration
- Catches errors during development
- Better IDE autocomplete and tooling
- Self-documenting code through types

**Benefits:**
- Type safety with components
- Easier refactoring
- Better developer experience
- Prevents common JavaScript pitfalls

### Shadcn/ui Components
**Rationale:**
- Copy/paste model (you own the code)
- Built on Radix UI (accessible by default)
- Fully customizable to match Tweakcn design
- TypeScript support out of box
- No npm package bloat

**Benefits:**
- WCAG 2.1 AA compliant components
- Keyboard navigation built in
- Screen reader support
- Works seamlessly with Tailwind
- Matches "business casual" portfolio tone

### Tweakcn CSS + Tailwind
**Rationale:**
- OKLCH color space for consistent light/dark modes
- Custom design tokens already defined
- Comprehensive shadow and spacing system
- Light/dark mode switching built in
- Tailwind utility classes for rapid development

**Benefits:**
- Perceptually uniform colors across themes
- Custom font stack defined (Afacad, Alice, Courier Prime)
- Easy theme customization
- Performance (CSS variables are fast)
- Developer experience (utility-first CSS)

### SPA with React Router
**Rationale:**
- Clean URLs without page reloads
- Fast navigation between projects
- Preserves scroll position per route
- Easy to implement and maintain
- Better user experience than multi-page

**Benefits:**
- `tucker.sh/docusearch` (clean URLs)
- Instant route transitions
- Client-side state preservation
- Simple GitHub Pages configuration
- Progressive enhancement ready

### GitHub Pages Hosting
**Rationale:**
- Free, reliable static hosting
- Version controlled deployment
- Custom domain support (tucker.sh)
- HTTPS by default
- GitHub Actions integration

**Benefits:**
- No hosting costs
- Automatic deployment on push
- Git-based workflow
- CDN distribution
- 99.9% uptime SLA

### Dark Mode Strategy
**Rationale:**
- System preference shows respect for user choice
- Manual toggle provides control
- Tweakcn CSS includes comprehensive dark theme
- Modern web standard

**Benefits:**
- Reduces eye strain
- Matches user OS preference
- Professional presentation
- Accessibility consideration
- Easy to implement with CSS classes

---

## Tweakcn CSS Design Tokens

Reference: [tweakcn-example.css](./tweakcn-example.css)

### Color System (OKLCH)

#### Light Mode
```css
--background: oklch(1.0000 0 0)           /* Pure white */
--foreground: oklch(0.3211 0 0)           /* Near black */
--primary: oklch(0.6231 0.1880 259.8145)  /* Blue-purple */
--accent: oklch(0.3791 0.1378 265.5222)   /* Deep purple */
--muted: oklch(0.9846 0.0017 247.8389)    /* Very light gray */
--border: oklch(0.9276 0.0058 264.5313)   /* Light gray */
```

#### Dark Mode
```css
--background: oklch(0.2046 0 0)           /* Near black */
--foreground: oklch(0.9219 0 0)           /* Near white */
--primary: oklch(0.6231 0.1880 259.8145)  /* Blue-purple (same) */
--accent: oklch(0.3791 0.1378 265.5222)   /* Deep purple */
--muted: oklch(0.2393 0 0)                /* Dark gray */
--border: oklch(0.3715 0 0)               /* Medium-dark gray */
```

**Note:** Primary colors remain consistent across themes for brand recognition.

### Typography
```css
--font-sans: Afacad, ui-sans-serif, sans-serif, system-ui
--font-serif: Alice, ui-serif, serif
--font-mono: Courier Prime, ui-monospace, monospace
```

### Spacing & Sizing
```css
--radius: 0.375rem              /* 6px - border radius */
--spacing: 0.25rem              /* 4px - base spacing unit */

/* Radius variants */
--radius-sm: calc(var(--radius) - 4px)   /* 2px */
--radius-md: calc(var(--radius) - 2px)   /* 4px */
--radius-lg: var(--radius)               /* 6px */
--radius-xl: calc(var(--radius) + 4px)   /* 10px */
```

### Shadow System
```css
--shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05)
--shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)
--shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)
--shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)
--shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)
--shadow-2xl: 0 1px 3px 0px hsl(0 0% 0% / 0.25)
```

---

## Project Structure

```
tkr-portfolio-v2/
├── public/
│   ├── .nojekyll                 # Prevents Jekyll processing on GitHub Pages
│   ├── assets/
│   │   ├── images/               # Project screenshots, diagrams
│   │   ├── pdfs/                 # Case study PDFs (if any)
│   │   └── icons/                # Favicon, app icons
│   └── fonts/                    # Self-hosted fonts (future optimization)
│       ├── afacad-regular.woff2
│       ├── afacad-medium.woff2
│       ├── afacad-semibold.woff2
│       ├── afacad-bold.woff2
│       ├── alice-regular.woff2
│       └── courier-prime-*.woff2
│
├── src/
│   ├── components/
│   │   ├── ui/                   # Shadcn components (copied, not imported)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── separator.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ThemeToggle.tsx
│   │   │
│   │   ├── sections/             # Homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── FeaturedProjects.tsx
│   │   │   └── ProjectCard.tsx
│   │   │
│   │   └── case-studies/         # Project-specific components
│   │       ├── CaseStudyLayout.tsx
│   │       ├── ProblemSection.tsx
│   │       ├── SolutionSection.tsx
│   │       └── ImpactSection.tsx
│   │
│   ├── pages/
│   │   ├── Home.tsx              # Homepage (Hero + About + Projects)
│   │   ├── Docusearch.tsx        # Primary case study
│   │   ├── ContextKit.tsx        # Secondary case study
│   │   └── Kanban.tsx            # Tertiary case study
│   │
│   ├── styles/
│   │   ├── tweakcn.css           # Custom CSS variables and theme
│   │   ├── globals.css           # Global styles, resets
│   │   └── fonts.css             # Font-face declarations (if self-hosting)
│   │
│   ├── lib/
│   │   └── utils.ts              # Utility functions (cn helper, etc.)
│   │
│   ├── content/                  # Content as TypeScript/JSON
│   │   ├── work-history.ts
│   │   ├── projects.ts
│   │   └── case-studies/
│   │       ├── docusearch.ts
│   │       ├── context-kit.ts
│   │       └── kanban.ts
│   │
│   ├── providers/
│   │   └── ThemeProvider.tsx     # Dark mode context provider
│   │
│   ├── App.tsx                   # Main app with routing
│   ├── main.tsx                  # Entry point
│   └── vite-env.d.ts             # Vite type definitions
│
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment
│
├── .context-kit/                 # Context-kit infrastructure (existing)
│   ├── _ref/                     # Reference materials
│   └── _specs/                   # Specifications (this file)
│
├── .eslintrc.cjs                 # ESLint configuration
├── .gitignore
├── .prettierrc                   # Prettier configuration
├── index.html                    # HTML entry point
├── package.json
├── postcss.config.js             # PostCSS for Tailwind
├── README.md
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.node.json            # TypeScript for Node scripts
└── vite.config.ts                # Vite configuration
```

---

## Initial Setup Commands

### 1. Create Vite + React + TypeScript Project
```bash
npm create vite@latest . -- --template react-ts
```

### 2. Install Core Dependencies
```bash
# React Router for SPA routing
npm install react-router-dom

# Tailwind CSS and dependencies
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Class variance authority (for Shadcn components)
npm install class-variance-authority clsx tailwind-merge

# Lucide React (icons for Shadcn components)
npm install lucide-react

# Theme management (for dark mode)
npm install next-themes
```

### 3. Initialize Shadcn/ui
```bash
npx shadcn@latest init
```

**Configuration options:**
- Style: Default
- Base color: Neutral (we'll override with Tweakcn)
- CSS variables: Yes
- Import alias: @/components

### 4. Add Initial Shadcn Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add separator
npx shadcn@latest add scroll-area
```

### 5. Development Server
```bash
npm run dev
```

### 6. Build for Production
```bash
npm run build
```

### 7. Preview Production Build
```bash
npm run preview
```

---

## Configuration Files

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',  // Use '/' for custom domain, '/repo-name/' otherwise
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})
```

### tailwind.config.ts
```typescript
import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        mono: 'var(--font-mono)',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      boxShadow: {
        xs: 'var(--shadow-xs)',
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
        '2xl': 'var(--shadow-2xl)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config
```

### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

---

## GitHub Actions Deployment

### .github/workflows/deploy.yml
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### public/.nojekyll
```
# This file prevents GitHub Pages from processing files with Jekyll.
# Required for SPA routing and files/folders starting with underscore.
```

---

## Font Loading Strategy

### Option 1: Google Fonts (Initial Implementation)

**In index.html:**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <!-- Google Fonts - Preconnect -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

    <!-- Google Fonts - Load -->
    <link href="https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&family=Alice&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">

    <title>Sean 'Tucker' Harley - UX Designer</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### Option 2: Self-Hosted Fonts (Future Optimization)

**Benefits:**
- No external requests (faster, more private)
- Works offline
- No Google tracking
- Full control over FOUT/FOIT behavior
- Better performance

**Implementation:**

1. Download `.woff2` files (best format)
2. Place in `/public/fonts/` directory
3. Create font-face declarations

**In src/styles/fonts.css:**
```css
/* Afacad Sans */
@font-face {
  font-family: 'Afacad';
  src: url('/fonts/afacad-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Afacad';
  src: url('/fonts/afacad-medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Afacad';
  src: url('/fonts/afacad-semibold.woff2') format('woff2');
  font-weight: 600;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Afacad';
  src: url('/fonts/afacad-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Alice Serif */
@font-face {
  font-family: 'Alice';
  src: url('/fonts/alice-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Courier Prime Mono */
@font-face {
  font-family: 'Courier Prime';
  src: url('/fonts/courier-prime-regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Courier Prime';
  src: url('/fonts/courier-prime-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}
```

**GitHub Pages handles this perfectly** - fonts are just static assets served from `/public/fonts/`.

---

## Dark Mode Implementation

### ThemeProvider Component

**src/providers/ThemeProvider.tsx:**
```typescript
import { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light' | 'dark' | 'system'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined
)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = 'tucker-portfolio-theme',
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  )

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark'
        : 'light'

      root.classList.add(systemTheme)
      return
    }

    root.classList.add(theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider')

  return context
}
```

### Theme Toggle Component

**src/components/layout/ThemeToggle.tsx:**
```typescript
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '@/providers/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
```

**How it works:**
1. Defaults to system preference
2. User can toggle: Light → Dark → System → Light
3. Choice persisted in localStorage
4. Tweakcn `.dark` class applied to root element
5. All CSS variables update automatically

---

## Routing Setup

### React Router Configuration

**src/App.tsx:**
```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Home from '@/pages/Home'
import Docusearch from '@/pages/Docusearch'
import ContextKit from '@/pages/ContextKit'
import Kanban from '@/pages/Kanban'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docusearch" element={<Docusearch />} />
              <Route path="/context-kit" element={<ContextKit />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
```

### SPA Routing on GitHub Pages

**404.html workaround** (required for client-side routing):

Create `public/404.html`:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Sean 'Tucker' Harley</title>
    <script type="text/javascript">
      // Single Page Apps for GitHub Pages
      // https://github.com/rafgraph/spa-github-pages
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
  </body>
</html>
```

Add to `index.html` in `<head>`:
```html
<script type="text/javascript">
  // Single Page Apps for GitHub Pages
  (function(l) {
    if (l.search[1] === '/' ) {
      var decoded = l.search.slice(1).split('&').map(function(s) {
        return s.replace(/~and~/g, '&')
      }).join('?');
      window.history.replaceState(null, null,
          l.pathname.slice(0, -1) + decoded + l.hash
      );
    }
  }(window.location))
</script>
```

---

## Performance Optimization

### Build Optimizations
```typescript
// vite.config.ts build section
build: {
  outDir: 'dist',
  sourcemap: false,
  minify: 'terser',
  rollupOptions: {
    output: {
      manualChunks: {
        vendor: ['react', 'react-dom'],
        router: ['react-router-dom'],
      },
    },
  },
}
```

### Image Optimization
- Use WebP format with fallbacks
- Lazy load images below the fold
- Provide width/height to prevent layout shift
- Consider responsive images with srcset

### Code Splitting
- Routes automatically code-split by React Router
- Lazy load heavy components
- Keep initial bundle under 200kb

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance
- Semantic HTML structure
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images
- Keyboard navigation support
- Focus indicators visible (2px rings)
- Color contrast ratios met (4.5:1 text, 3:1 UI)
- Skip to main content link
- ARIA labels where needed

### Shadcn/ui provides:
- Keyboard navigation
- Screen reader support
- Focus management
- ARIA attributes
- Accessible color contrast

---

## Content Strategy

### Content as Code
Store content in TypeScript files for type safety:

**src/content/projects.ts:**
```typescript
export interface Project {
  id: string
  title: string
  slug: string
  tagline: string
  elevatorPitch: string
  priority: 'primary' | 'secondary' | 'tertiary'
  caseStudyUrl: string
}

export const projects: Project[] = [
  {
    id: 'docusearch',
    title: 'docusearch',
    slug: 'docusearch',
    tagline: 'Making library documentation searchable for developers and AI agents',
    elevatorPitch: '...',
    priority: 'primary',
    caseStudyUrl: '/docusearch',
  },
  // ...
]
```

### Markdown Support (Future)
If case studies need markdown:
```bash
npm install react-markdown remark-gfm
```

---

## Testing Strategy

### Unit Tests (Future)
```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom
```

### Visual Testing (Future)
- Chromatic for component snapshots
- Percy for visual regression

### E2E Tests (Future)
- Playwright for critical user flows

---

## Development Workflow

### Local Development
```bash
npm run dev              # Start dev server (http://localhost:5173)
npm run build            # Build for production
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run format           # Run Prettier
```

### Git Workflow
1. Make changes on feature branch
2. Commit with conventional commit messages
3. Push to GitHub
4. GitHub Actions automatically builds and deploys to gh-pages
5. Changes live at tucker.sh within minutes

---

## Success Metrics

### Performance Targets
- Lighthouse score: 90+ across all categories
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Time to Interactive: <3.5s
- Total bundle size: <200kb (initial load)

### Accessibility Targets
- WCAG 2.1 AA compliance: 100%
- Keyboard navigation: Full support
- Screen reader compatibility: NVDA, JAWS, VoiceOver

### Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: Last 2 versions
- Mobile Chrome: Last 2 versions

---

## Future Enhancements

### Phase 2: Interactivity
- Animated transitions between sections
- Interactive project demos
- Video walkthroughs
- Scroll-triggered animations

### Phase 3: Content Management
- Blog/writing section
- Case study filtering
- Search functionality
- Tags and categories

### Phase 4: Analytics
- Privacy-friendly analytics (Plausible or Fathom)
- Track popular projects
- Understand user journey
- Measure engagement

---

## Resources & References

### Documentation
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [React Router Documentation](https://reactrouter.com)

### Design System
- [Tweakcn Example CSS](./tweakcn-example.css)
- [Site Structure Spec](./site-structure.md)
- [Portfolio Priorities](../_ref/portfolio-2/portfolio-priorities.md)
- [Voice & Style Playbook](../_ref/portfolio-2/tkr-voice-style-playbook.md)

### GitHub Pages
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [SPA GitHub Pages Solution](https://github.com/rafgraph/spa-github-pages)

---

## Next Steps

1. **Initialize Project**
   - Run Vite setup commands
   - Install dependencies
   - Configure Tailwind and Shadcn

2. **Setup Structure**
   - Create directory structure
   - Add Tweakcn CSS variables
   - Configure routing

3. **Implement Theme System**
   - Add ThemeProvider
   - Create ThemeToggle component
   - Test light/dark/system modes

4. **Build Layout Components**
   - Header with navigation
   - Footer with LinkedIn CTA
   - Layout wrapper components

5. **Create Homepage**
   - Hero section with hook
   - About section with work history
   - Featured projects with cards

6. **Build Case Study Pages**
   - CaseStudyLayout component
   - Docusearch (full treatment)
   - Context-kit (full treatment)
   - Kanban (portfolio snippet)

7. **Deploy**
   - Setup GitHub Actions
   - Test deployment
   - Configure custom domain (tucker.sh)

8. **Polish**
   - Optimize images
   - Test accessibility
   - Performance audit
   - Cross-browser testing

---

**Last Updated:** 2025-10-22
**Maintained By:** Sean 'Tucker' Harley
**Status:** Planning phase - ready for implementation

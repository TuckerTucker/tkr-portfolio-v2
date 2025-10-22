# Routing & Theme Integration Contracts

**Owner:** Agent 4 (infrastructure-agent)
**Consumers:** All agents building UI components

---

## Theme Provider Contract

### ThemeProvider Interface
```typescript
type Theme = 'light' | 'dark' | 'system'

interface ThemeProviderState {
  theme: Theme
  setTheme: (theme: Theme) => void
}

// Usage
import { useTheme } from '@/providers/ThemeProvider'

function Component() {
  const { theme, setTheme } = useTheme()
  // ...
}
```

### File Export
**Location:** `src/providers/ThemeProvider.tsx`

**Exports:**
- `ThemeProvider` component (wraps app)
- `useTheme` hook (for consuming components)

**Behavior:**
- Defaults to 'system' preference
- Persists choice in localStorage (key: 'tucker-portfolio-theme')
- Applies `.dark` class to `document.documentElement` when dark mode active
- Responds to system preference changes when theme is 'system'

---

## Routing Contract

### React Router Configuration
```typescript
// App.tsx routing structure
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/docusearch" element={<Docusearch />} />
    <Route path="/context-kit" element={<ContextKit />} />
    <Route path="/kanban" element={<Kanban />} />
  </Routes>
</BrowserRouter>
```

### Navigation Usage
```typescript
import { Link } from 'react-router-dom'

// Internal navigation
<Link to="/docusearch">View Case Study</Link>

// Programmatic navigation
import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()
navigate('/docusearch')
```

---

## Directory Structure

Agent 4 creates the following directories:

```
src/
├── pages/           # Route components (Home, Docusearch, ContextKit, Kanban)
├── components/
│   ├── layout/      # Header, Footer, ThemeToggle
│   ├── sections/    # Homepage sections (Hero, About, FeaturedProjects)
│   └── case-studies/ # Case study components (CaseStudyLayout, ProblemSection, etc.)
├── content/         # Content data files
└── providers/       # ThemeProvider
```

---

## SPA Routing for GitHub Pages

### 404.html
**Location:** `public/404.html`

Handles client-side routing by redirecting 404s back to index.html with path encoded in query string.

### Index.html Script
Add to `<head>` section of `index.html`:

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

## App.tsx Structure

```typescript
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/providers/ThemeProvider'
import Home from '@/pages/Home'
import Docusearch from '@/pages/Docusearch'
import ContextKit from '@/pages/ContextKit'
import Kanban from '@/pages/Kanban'

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <BrowserRouter>
        <div className="min-h-screen bg-background font-sans antialiased">
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/docusearch" element={<Docusearch />} />
              <Route path="/context-kit" element={<ContextKit />} />
              <Route path="/kanban" element={<Kanban />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
```

---

## main.tsx Entry Point

```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

---

## Validation Requirements

Agent 4 must ensure:
1. ✓ ThemeProvider correctly toggles light/dark/system modes
2. ✓ localStorage persistence works
3. ✓ `.dark` class applied to root element
4. ✓ All routes render without errors
5. ✓ 404.html handles client-side routing
6. ✓ Directory structure created
7. ✓ TypeScript compilation succeeds

Consumers must:
1. Import `useTheme` from `@/providers/ThemeProvider`
2. Use React Router `Link` component for navigation
3. Place page components in `src/pages/`
4. Use dark mode classes (e.g., `dark:bg-background`)

---

## Theme Class Application

When theme changes:
- `theme === 'light'` → `<html class="">` (no class)
- `theme === 'dark'` → `<html class="dark">`
- `theme === 'system'` → Detects via `window.matchMedia('(prefers-color-scheme: dark)')` and applies appropriate class

All Tailwind utilities respond to the `.dark` class on root element.

---

## Contract Validation

```typescript
// Test theme provider
import { useTheme } from '@/providers/ThemeProvider'

const { theme, setTheme } = useTheme()
console.assert(['light', 'dark', 'system'].includes(theme))

// Test routing
import { useLocation } from 'react-router-dom'

const location = useLocation()
console.assert(['/', '/docusearch', '/context-kit', '/kanban'].includes(location.pathname))
```

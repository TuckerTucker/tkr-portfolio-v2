# Styling Integration Contracts

**Owner:** Agent 2 (styling-agent)
**Consumers:** All agents building components

---

## CSS Custom Properties (Tweakcn)

### Color Tokens
```css
/* Light mode */
--background: oklch(1.0000 0 0)
--foreground: oklch(0.3211 0 0)
--primary: oklch(0.6231 0.1880 259.8145)
--primary-foreground: oklch(1.0000 0 0)
--secondary: oklch(0.9670 0.0029 264.5419)
--secondary-foreground: oklch(0.4461 0.0263 256.8018)
--muted: oklch(0.9846 0.0017 247.8389)
--muted-foreground: oklch(0.5510 0.0234 264.3637)
--accent: oklch(0.9514 0.0250 236.8242)
--accent-foreground: oklch(0.3791 0.1378 265.5222)
--border: oklch(0.9276 0.0058 264.5313)
--input: oklch(0.9276 0.0058 264.5313)
--ring: oklch(0.6231 0.1880 259.8145)

/* Dark mode (.dark class) */
--background: oklch(0.2046 0 0)
--foreground: oklch(0.9219 0 0)
--card: oklch(0.2686 0 0)
--muted: oklch(0.2393 0 0)
--border: oklch(0.3715 0 0)
```

### Typography Tokens
```css
--font-sans: Afacad, ui-sans-serif, sans-serif, system-ui
--font-serif: Alice, ui-serif, serif
--font-mono: Courier Prime, ui-monospace, monospace
```

### Spacing & Sizing
```css
--radius: 0.375rem
--spacing: 0.25rem

--radius-sm: calc(var(--radius) - 4px)
--radius-md: calc(var(--radius) - 2px)
--radius-lg: var(--radius)
--radius-xl: calc(var(--radius) + 4px)
```

### Shadows
```css
--shadow-xs: 0 1px 3px 0px hsl(0 0% 0% / 0.05)
--shadow-sm: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 1px 2px -1px hsl(0 0% 0% / 0.10)
--shadow-md: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 2px 4px -1px hsl(0 0% 0% / 0.10)
--shadow-lg: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 4px 6px -1px hsl(0 0% 0% / 0.10)
--shadow-xl: 0 1px 3px 0px hsl(0 0% 0% / 0.10), 0 8px 10px -1px hsl(0 0% 0% / 0.10)
```

---

## Tailwind Configuration

### Color Mapping
```typescript
// tailwind.config.ts
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
  },
}
```

---

## Usage Patterns for Consumers

### Background Colors
```tsx
// Light background
<div className="bg-background text-foreground">

// Card background
<div className="bg-card text-card-foreground">

// Muted background
<div className="bg-muted text-muted-foreground">
```

### Text Colors
```tsx
// Primary text
<h1 className="text-foreground">

// Secondary/muted text
<p className="text-muted-foreground">

// Accent text
<span className="text-accent-foreground">
```

### Borders & Shadows
```tsx
// Border
<div className="border border-border">

// Shadow
<div className="shadow-md">
<div className="shadow-lg">
```

### Typography
```tsx
// Sans serif (body text)
<p className="font-sans">

// Serif (optional emphasis)
<h2 className="font-serif">

// Monospace (code)
<code className="font-mono">
```

---

## Dark Mode Implementation

### Theme Toggle
Dark mode activated via `.dark` class on root element:
```tsx
document.documentElement.classList.add('dark')
document.documentElement.classList.remove('dark')
```

### Testing Dark Mode
All components must be tested in both modes:
```tsx
// Light mode (default)
<html>

// Dark mode
<html class="dark">
```

---

## Google Fonts Integration

### index.html Preconnect
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Font Loading
```html
<link href="https://fonts.googleapis.com/css2?family=Afacad:wght@400;500;600;700&family=Alice&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
```

---

## File Deliverables

Agent 2 must provide:
1. `tailwind.config.ts` - Tailwind configuration with Tweakcn mappings
2. `postcss.config.js` - PostCSS configuration
3. `src/styles/tweakcn.css` - All CSS custom properties
4. `src/styles/globals.css` - Global styles and resets
5. `index.html` - Font preconnects and loading

---

## Validation Requirements

Agent 2 must ensure:
1. ✓ All CSS custom properties defined
2. ✓ Tailwind config maps to CSS variables
3. ✓ Light and dark mode both have complete token sets
4. ✓ Fonts load correctly
5. ✓ PostCSS processes Tailwind correctly

Consumers must:
1. Use Tailwind utility classes (not direct CSS variables)
2. Test components in both light and dark mode
3. Use semantic color names (background, foreground, muted, etc.)
4. Use font stack variables (font-sans, font-serif, font-mono)

---

## Contract Validation

```bash
# Build should succeed
npm run build

# Dev server should start
npm run dev

# Tailwind should process correctly
# Check that classes like bg-background, text-foreground work
# Check that dark mode classes apply correctly
```

```tsx
// Component test
function TestComponent() {
  return (
    <div className="bg-background text-foreground p-4 rounded-lg border border-border shadow-md font-sans">
      <h1 className="text-2xl font-bold text-primary">Test</h1>
      <p className="text-muted-foreground">Muted text</p>
    </div>
  )
}
```

Expected behavior:
- Light mode: white background, dark text
- Dark mode: dark background, light text
- Fonts apply correctly
- Border and shadow visible

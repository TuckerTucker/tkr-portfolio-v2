# Example Test Setup for tkr-portfolio-v2

This document provides complete example configurations and test files to get started with testing.

## 1. Install Dependencies

```bash
npm install --save-dev vitest @vitest/ui @vitest/coverage-v8
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev @testing-library/user-event happy-dom
```

## 2. Create vitest.config.ts

Create this file in the project root:

```typescript
/// <reference types="vitest" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.config.*',
        '**/dist/**',
      ],
      thresholds: {
        lines: 80,
        branches: 80,
        functions: 80,
        statements: 80,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 3. Create Test Setup File

Create `src/test/setup.ts`:

```typescript
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import * as matchers from '@testing-library/jest-dom/matchers'

// Extend Vitest's expect with jest-dom matchers
expect.extend(matchers)

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock matchMedia for components that use prefers-reduced-motion
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})
```

## 4. Update package.json Scripts

Add these scripts to your `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:watch": "vitest --watch",
    "test:run": "vitest run"
  }
}
```

## 5. Example Test: lib/utils.ts

Create `src/lib/utils.test.ts`:

```typescript
import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn utility', () => {
  it('should merge single className', () => {
    expect(cn('text-red-500')).toBe('text-red-500')
  })

  it('should merge multiple classNames', () => {
    expect(cn('text-red-500', 'bg-blue-500')).toBe('text-red-500 bg-blue-500')
  })

  it('should handle conditional classes', () => {
    const isActive = true
    expect(cn('base-class', isActive && 'active-class')).toBe('base-class active-class')
  })

  it('should handle Tailwind class conflicts correctly', () => {
    // tailwind-merge should keep the last conflicting class
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })

  it('should handle undefined and null values', () => {
    expect(cn('text-red-500', undefined, 'bg-blue-500', null)).toBe('text-red-500 bg-blue-500')
  })

  it('should handle empty input', () => {
    expect(cn()).toBe('')
  })

  it('should handle array of classes', () => {
    expect(cn(['text-red-500', 'bg-blue-500'])).toBe('text-red-500 bg-blue-500')
  })

  it('should merge complex Tailwind variants', () => {
    expect(cn('hover:text-red-500', 'hover:text-blue-500')).toBe('hover:text-blue-500')
  })
})
```

## 6. Example Test: ui/button.tsx

Create `src/components/ui/button.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './button'
import userEvent from '@testing-library/user-event'

describe('Button', () => {
  it('should render with default variant', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('should render all variants correctly', () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const
    
    variants.forEach((variant) => {
      const { container } = render(<Button variant={variant}>Test</Button>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('should render all sizes correctly', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const
    
    sizes.forEach((size) => {
      const { container } = render(<Button size={size}>Test</Button>)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  it('should handle click events', async () => {
    const user = userEvent.setup()
    let clicked = false
    const handleClick = () => { clicked = true }
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    await user.click(screen.getByRole('button'))
    expect(clicked).toBe(true)
  })

  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('should merge custom className', () => {
    const { container } = render(<Button className="custom-class">Test</Button>)
    expect(container.firstChild).toHaveClass('custom-class')
  })

  it('should forward ref correctly', () => {
    const ref = { current: null }
    render(<Button ref={ref}>Test</Button>)
    expect(ref.current).toBeInstanceOf(HTMLButtonElement)
  })
})
```

## 7. Example Test: sections/Hero.tsx

Create `src/components/sections/Hero.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('should render the main heading', () => {
    render(<Hero />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent('Designing software people')
    expect(heading).toHaveTextContent('love')
    expect(heading).toHaveTextContent('to use')
  })

  it('should render the description paragraph', () => {
    render(<Hero />)
    
    expect(screen.getByText(/For 20 years/i)).toBeInTheDocument()
    expect(screen.getByText(/AI agents/i)).toBeInTheDocument()
  })

  it('should have proper semantic structure', () => {
    const { container } = render(<Hero />)
    
    const section = container.querySelector('section')
    expect(section).toBeInTheDocument()
  })
})
```

## 8. Example Test: App.tsx (Router)

Create `src/App.test.tsx`:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App'

describe('App', () => {
  it('should render home page by default', () => {
    render(<App />)
    // Add specific home page element check
    expect(screen.getByRole('banner')).toBeInTheDocument() // Header
  })

  it('should render all routes', () => {
    const routes = ['/', '/docusearch', '/context-kit', '/kanban', '/blog']
    
    routes.forEach((route) => {
      const { container } = render(
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      )
      
      // Verify main content area renders
      expect(container.querySelector('main')).toBeInTheDocument()
    })
  })

  it('should have Header and Footer on all pages', () => {
    render(<App />)
    
    expect(screen.getByRole('banner')).toBeInTheDocument() // Header
    expect(screen.getByRole('contentinfo')).toBeInTheDocument() // Footer
  })
})
```

## 9. Example Test: Carousel.tsx (Complex Component)

Create `src/components/ui/Carousel.test.tsx`:

```typescript
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('should render all slides', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    )
    
    expect(screen.getByText('Slide 1')).toBeInTheDocument()
    expect(screen.getByText('Slide 2')).toBeInTheDocument()
    expect(screen.getByText('Slide 3')).toBeInTheDocument()
  })

  it('should show first slide by default', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    expect(screen.getByText('Slide 1 of 2')).toBeInTheDocument()
  })

  it('should navigate to next slide when next button clicked', async () => {
    const user = userEvent.setup({ delay: null })
    
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    await user.click(screen.getByLabelText('Next slide'))
    
    await waitFor(() => {
      expect(screen.getByText('Slide 2 of 2')).toBeInTheDocument()
    })
  })

  it('should navigate to previous slide when previous button clicked', async () => {
    const user = userEvent.setup({ delay: null })
    
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    // Go to slide 2 first
    await user.click(screen.getByLabelText('Next slide'))
    
    // Then go back to slide 1
    await user.click(screen.getByLabelText('Previous slide'))
    
    await waitFor(() => {
      expect(screen.getByText('Slide 1 of 2')).toBeInTheDocument()
    })
  })

  it('should auto-advance when autoPlay is enabled', () => {
    render(
      <Carousel autoPlay autoPlayInterval={5000}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    expect(screen.getByText('Slide 1 of 2')).toBeInTheDocument()
    
    // Advance time by 5 seconds
    vi.advanceTimersByTime(5000)
    
    expect(screen.getByText('Slide 2 of 2')).toBeInTheDocument()
  })

  it('should pause auto-play on mouse enter', async () => {
    const user = userEvent.setup({ delay: null })
    
    const { container } = render(
      <Carousel autoPlay autoPlayInterval={5000}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    const carousel = container.querySelector('[role="region"]')
    
    // Hover over carousel
    await user.hover(carousel!)
    
    // Advance time - should NOT auto-advance
    vi.advanceTimersByTime(5000)
    
    expect(screen.getByText('Slide 1 of 2')).toBeInTheDocument()
  })

  it('should navigate with keyboard arrows', async () => {
    const user = userEvent.setup({ delay: null })
    
    const { container } = render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    const carousel = container.querySelector('[role="region"]')
    carousel?.focus()
    
    await user.keyboard('{ArrowRight}')
    
    await waitFor(() => {
      expect(screen.getByText('Slide 2 of 2')).toBeInTheDocument()
    })
  })

  it('should render dot indicators for navigation', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    )
    
    const dots = screen.getAllByRole('tab')
    expect(dots).toHaveLength(3)
  })

  it('should navigate to specific slide when dot clicked', async () => {
    const user = userEvent.setup({ delay: null })
    
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
      </Carousel>
    )
    
    await user.click(screen.getByLabelText('Go to slide 3'))
    
    await waitFor(() => {
      expect(screen.getByText('Slide 3 of 3')).toBeInTheDocument()
    })
  })

  it('should have proper ARIA attributes', () => {
    render(
      <Carousel>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>
    )
    
    expect(screen.getByRole('region', { name: 'Carousel' })).toBeInTheDocument()
    expect(screen.getByRole('tablist', { name: 'Slides' })).toBeInTheDocument()
  })
})
```

## 10. Run Tests

```bash
# Run all tests
npm test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode (for development)
npm run test:watch

# Run tests once (for CI)
npm run test:run
```

## 11. View Coverage Report

After running `npm run test:coverage`, open:
- **HTML Report:** `coverage/index.html` in your browser
- **Terminal:** Coverage summary printed to console

## 12. Add to GitHub Actions

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm run test:run
      
      - name: Generate coverage
        run: npm run test:coverage
      
      - name: Check coverage thresholds
        run: npm run test:coverage -- --reporter=json
```

## Next Steps

1. Install dependencies: `npm install --save-dev vitest ...`
2. Create vitest.config.ts
3. Create src/test/setup.ts
4. Start with simple tests (utils.ts)
5. Progress to component tests (button.tsx)
6. Tackle complex components (Carousel.tsx)
7. Add integration tests (App.tsx routing)
8. Setup E2E tests with Playwright

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Library User Events](https://testing-library.com/docs/user-event/intro)
- [Playwright E2E Testing](https://playwright.dev/)

---

**Estimated Time to Setup:** 4 hours  
**Estimated Time to 80% Coverage:** 3-4 weeks (part-time)

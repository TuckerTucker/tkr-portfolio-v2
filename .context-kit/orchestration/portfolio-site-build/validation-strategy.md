# Validation Strategy & Quality Assurance

**Project:** Tucker Portfolio Site Build
**Strategy:** Progressive validation with gates between waves
**Goal:** Guarantee successful integration through continuous testing

---

## Validation Philosophy

### Progressive Validation
- Test after each wave, not at the end
- Catch integration issues early
- Prevent cascading failures
- Enable fast failure recovery

### Multi-Level Testing
1. **Unit Level:** Individual components work
2. **Integration Level:** Components connect correctly
3. **System Level:** Entire site functions
4. **Quality Level:** Meets all standards

---

## Wave 1 Validation Gate

### Prerequisites
All Wave 1 agents (1-6) must report complete

### Automated Tests

#### Build Validation
```bash
# Must succeed without errors
npm run build

# Expected output:
# ✓ built in XXXms
# ✓ No TypeScript errors
# ✓ No build warnings
```

#### Dev Server Validation
```bash
# Must start without errors
npm run dev

# Expected output:
# ✓ Server running at http://localhost:5173
# ✓ No console errors
# ✓ No missing dependencies
```

#### TypeScript Compilation
```bash
# Must compile without errors
npx tsc --noEmit

# Expected output:
# ✓ No type errors
# ✓ All imports resolve
# ✓ Content types validate
```

### Manual Validation Checklist

#### Foundation
- [ ] Project builds successfully
- [ ] Dev server starts on port 5173
- [ ] No console errors in browser
- [ ] Vite config includes GitHub Pages base path
- [ ] .nojekyll file exists in public/

#### Styling System
- [ ] Tailwind CSS processing works
- [ ] Tweakcn CSS variables defined (light mode)
- [ ] Tweakcn CSS variables defined (dark mode)
- [ ] Fonts load from Google Fonts
- [ ] Font stack applies: Afacad, Alice, Courier Prime

#### Components
- [ ] Shadcn Button component renders
- [ ] Shadcn Card component renders
- [ ] Shadcn Separator component renders
- [ ] cn() utility function works
- [ ] Lucide icons import correctly

#### Infrastructure
- [ ] React Router navigates to /
- [ ] React Router navigates to /docusearch
- [ ] React Router navigates to /context-kit
- [ ] React Router navigates to /kanban
- [ ] 404.html exists for SPA routing
- [ ] ThemeProvider context works
- [ ] useTheme hook accessible

#### Theme System
- [ ] Dark mode toggle switches classes
- [ ] Light mode CSS variables apply
- [ ] Dark mode CSS variables apply
- [ ] System preference detected
- [ ] Theme preference persists in localStorage

#### Content
- [ ] Content types compile (TypeScript)
- [ ] work-history.ts exports correctly
- [ ] projects.ts exports correctly
- [ ] docusearch case study exports
- [ ] context-kit case study exports
- [ ] kanban case study exports

#### Layout
- [ ] Header component renders
- [ ] Footer component renders
- [ ] ThemeToggle component renders
- [ ] Navigation links present (even if routes empty)
- [ ] LinkedIn CTA in footer

### Integration Tests

#### Styling Integration
```tsx
// Test that Tailwind + Tweakcn work together
function StyleTest() {
  return (
    <div className="bg-background text-foreground p-4 border border-border">
      <h1 className="text-primary font-sans">Test</h1>
      <p className="text-muted-foreground">Muted text</p>
    </div>
  )
}
// Should render with correct colors in both modes
```

#### Theme Integration
```tsx
// Test that theme toggle updates CSS variables
function ThemeTest() {
  const { theme, setTheme } = useTheme()
  return <button onClick={() => setTheme('dark')}>Toggle</button>
}
// Should add/remove .dark class on html element
```

#### Content Integration
```tsx
// Test that content imports work
import { projects } from '@/content/projects'
import { workHistory } from '@/content/work-history'

// Should compile and access data
console.log(projects[0].title) // "docusearch"
console.log(workHistory.summary)
```

### Blocker Criteria

**Gate BLOCKED if:**
- ❌ Build fails with errors
- ❌ TypeScript compilation fails
- ❌ Dev server fails to start
- ❌ Theme toggle doesn't work
- ❌ Content imports fail
- ❌ Any manual checklist item fails

**Gate PASSED if:**
- ✅ All automated tests pass
- ✅ All manual checklist items pass
- ✅ All integration tests pass

---

## Wave 2 Validation Gate

### Prerequisites
All Wave 2 agents (7-9) must report complete

### Automated Tests

#### Route Validation
```bash
# Homepage must render
curl http://localhost:5173/ | grep "I solve big problems"

# Expected: Match found
```

#### Build Validation
```bash
# Must build with homepage included
npm run build
ls dist/index.html

# Expected: File exists
```

### Manual Validation Checklist

#### Homepage - Hero Section
- [ ] Hero section renders at top of homepage
- [ ] Primary hook displays: "I solve big problems in small ways..."
- [ ] Hero typography uses Afacad font
- [ ] Hero spacing appropriate (not cramped)
- [ ] Dark mode styling correct

#### Homepage - About Section
- [ ] About section renders below Hero
- [ ] Work history narrative displays (Shaw → Worldplay → Nutrien → AI/Agent UX)
- [ ] Creative background mentioned
- [ ] Dual interface bridge sentence present
- [ ] Typography readable (line height, sizing)
- [ ] Dark mode styling correct

#### Homepage - Featured Projects
- [ ] Three project cards render
- [ ] docusearch card is hero size (larger)
- [ ] context-kit card is standard size
- [ ] kanban card is standard size
- [ ] Cards have correct project titles
- [ ] Elevator pitches display
- [ ] Links route to case study pages
- [ ] Cards responsive (stack on mobile)
- [ ] Dark mode styling correct

#### Homepage - Layout & Spacing
- [ ] Sections have appropriate spacing between them
- [ ] Separators between sections (if applicable)
- [ ] Smooth scroll behavior works
- [ ] No layout shift on load
- [ ] Responsive on mobile (320px+)
- [ ] Responsive on tablet (768px+)
- [ ] Responsive on desktop (1024px+)

#### Homepage - Navigation
- [ ] Header renders at top
- [ ] Navigation links functional
- [ ] Theme toggle in header
- [ ] Footer renders at bottom
- [ ] LinkedIn CTA in footer
- [ ] Footer links functional

### Integration Tests

#### Section Integration
```tsx
// Homepage should render all sections in order
<Home />
// Expected DOM structure:
// <Header />
// <Hero />
// <About />
// <FeaturedProjects />
// <Footer />
```

#### Project Card Links
```tsx
// Clicking project cards should navigate
<ProjectCard
  project={docusearchProject}
  onClick={() => navigate('/docusearch')}
/>
// Should navigate to /docusearch route
```

#### Responsive Behavior
```css
/* Cards should stack on mobile */
@media (max-width: 768px) {
  .project-cards { grid-template-columns: 1fr; }
}
```

### Blocker Criteria

**Gate BLOCKED if:**
- ❌ Homepage doesn't render
- ❌ Any section missing
- ❌ Project cards don't display
- ❌ Navigation broken
- ❌ Dark mode broken on homepage
- ❌ Responsive layout broken

**Gate PASSED if:**
- ✅ Homepage renders completely
- ✅ All sections present and styled
- ✅ Project cards sized correctly
- ✅ Navigation functional
- ✅ Dark mode works
- ✅ Responsive on all breakpoints

---

## Wave 3 Validation Gate

### Prerequisites
All Wave 3 agents (10-13) must report complete

### Automated Tests

#### Route Validation
```bash
# All case study routes must render
curl http://localhost:5173/docusearch | grep "docusearch"
curl http://localhost:5173/context-kit | grep "context-kit"
curl http://localhost:5173/kanban | grep "kanban"

# Expected: All match
```

#### Word Count Validation
```bash
# Docusearch: 800-1200 words
# Context-kit: 800-1000 words
# Kanban: 400-600 words

# Use word counter script
node scripts/count-words.js src/pages/Docusearch.tsx
# Expected: 800-1200

node scripts/count-words.js src/pages/ContextKit.tsx
# Expected: 800-1000

node scripts/count-words.js src/pages/Kanban.tsx
# Expected: 400-600
```

### Manual Validation Checklist

#### Case Study Layout (All Pages)
- [ ] CaseStudyLayout component used consistently
- [ ] Problem → Understanding → Solution → Impact structure
- [ ] Section headings clear and hierarchical
- [ ] Typography readable and consistent
- [ ] Spacing between sections appropriate
- [ ] Project metadata footer displays
- [ ] Dark mode styling correct
- [ ] Responsive layout works

#### Docusearch Case Study (Primary)
- [ ] Page renders at /docusearch
- [ ] Problem section: documentation search challenges
- [ ] Understanding section: research methodology
- [ ] Solution section: IA decisions, search design
- [ ] Impact section: outcomes
- [ ] Dual interface pattern referenced
- [ ] Project metadata: role, stack, skills
- [ ] Word count: 800-1200
- [ ] Content follows Tucker's voice

#### Context-Kit Case Study (Secondary)
- [ ] Page renders at /context-kit
- [ ] Problem section: 20-30% context overhead
- [ ] Understanding section: AGx research methodology
- [ ] Solution section: _project.yml explanation
- [ ] Impact section: 70% token reduction
- [ ] AGx framed as UX evolution (not separate)
- [ ] Agent feedback quotes included
- [ ] Dual interface pattern fully explained
- [ ] Project metadata present
- [ ] Word count: 800-1000
- [ ] Content follows Tucker's voice

#### Kanban Case Study (Tertiary)
- [ ] Page renders at /kanban
- [ ] Problem section (brief)
- [ ] Understanding section (brief)
- [ ] Solution section: dual interface (board + specs)
- [ ] Impact section (brief)
- [ ] Project metadata present
- [ ] Word count: 400-600
- [ ] Content follows Tucker's voice

### Integration Tests

#### Cross-Project Narrative
```
Test dual interface theme:
- Kanban: Visual board + spec files
- Docusearch: Visual UI + structured data
- Context-kit: Markdown + YAML

Should show pattern evolution across projects
```

#### AGx Evolution Framing
```
Test that context-kit positions AGx as:
- Extension of traditional UX
- Same principles, different users
- Not a separate discipline

Should connect to 20-year work history
```

#### Navigation Between Pages
```tsx
// Should navigate smoothly
Home → Click docusearch card → Docusearch page
Docusearch → Click Header link → Home
Home → Click context-kit card → ContextKit page
// No 404s, no broken routes
```

### Blocker Criteria

**Gate BLOCKED if:**
- ❌ Any case study page doesn't render
- ❌ Problem → Understanding → Solution → Impact structure broken
- ❌ Word counts outside spec ranges
- ❌ Dual interface narrative unclear
- ❌ AGx positioned as separate discipline
- ❌ Tucker's voice inconsistent
- ❌ Dark mode broken on any page

**Gate PASSED if:**
- ✅ All three case study pages render
- ✅ Framework structure clear
- ✅ Word counts within ranges
- ✅ Dual interface narrative emerges
- ✅ AGx positioned as UX evolution
- ✅ Content voice consistent
- ✅ Dark mode works everywhere

---

## Wave 4 Validation Gate (FINAL)

### Prerequisites
All Wave 4 agents (14-19) must report complete

### Automated Tests

#### Accessibility Audit
```bash
# Run axe-core accessibility tests
npm run test:a11y

# Expected:
# ✓ No violations
# ✓ WCAG 2.1 AA compliant
```

#### Lighthouse Audit
```bash
# Run Lighthouse on all pages
npm run lighthouse

# Expected scores (all pages):
# Performance: 90+
# Accessibility: 90+
# Best Practices: 90+
# SEO: 90+
```

#### Build & Deploy
```bash
# Build must succeed
npm run build

# Deploy to gh-pages
git push origin main  # Triggers GitHub Actions

# Expected:
# ✓ Build succeeds
# ✓ Deploy succeeds
# ✓ Site accessible at tucker.sh
```

### Manual Validation Checklist

#### Content Voice & Narrative
- [ ] All content follows Tucker's voice (direct, conversational)
- [ ] Problem → Understanding → Solution → Impact framework clear
- [ ] Dual interface narrative emerges naturally across projects
- [ ] AGx positioned as UX evolution, not separate discipline
- [ ] Content allocation: docusearch (40-50%), context-kit (30-35%), kanban (15-20%)
- [ ] No buzzwords without explanation
- [ ] "I" statements showing ownership
- [ ] Concrete examples over abstract claims

#### Accessibility (WCAG 2.1 AA)
- [ ] Semantic HTML throughout (header, nav, main, footer, article)
- [ ] Proper heading hierarchy (h1 → h2 → h3, no skips)
- [ ] Alt text for all images
- [ ] Keyboard navigation works (tab through all interactive elements)
- [ ] Focus indicators visible (2px rings)
- [ ] Color contrast ratios: 4.5:1 text, 3:1 UI
- [ ] Skip-to-main-content link present
- [ ] ARIA labels where needed
- [ ] Screen reader tested (VoiceOver/NVDA)
- [ ] No keyboard traps

#### Performance
- [ ] Images optimized (WebP with fallbacks)
- [ ] Lazy loading for below-fold images
- [ ] Bundle size <200kb initial load
- [ ] Code splitting enabled
- [ ] First Contentful Paint <1.5s
- [ ] Largest Contentful Paint <2.5s
- [ ] Time to Interactive <3.5s
- [ ] No layout shift (CLS <0.1)

#### Cross-Browser Compatibility
- [ ] Chrome desktop: All features work
- [ ] Chrome mobile: All features work
- [ ] Firefox desktop: All features work
- [ ] Firefox mobile: All features work
- [ ] Safari desktop: All features work
- [ ] Safari mobile: All features work
- [ ] Edge desktop: All features work
- [ ] Dark mode works in all browsers
- [ ] Routing works in all browsers

#### Deployment
- [ ] GitHub Actions workflow succeeds
- [ ] Site deployed to gh-pages branch
- [ ] tucker.sh resolves correctly
- [ ] HTTPS enabled
- [ ] CNAME file correct
- [ ] No 404 errors on routes
- [ ] Assets load correctly

#### Final Quality Checks
- [ ] All links functional (navigation, footer, project cards)
- [ ] LinkedIn CTA prominent and works
- [ ] Theme toggle works everywhere
- [ ] Mobile experience matches desktop priority
- [ ] Business casual tone consistent
- [ ] No typos or grammar errors
- [ ] No console errors
- [ ] No missing images
- [ ] Fonts load correctly

### Integration Tests

#### End-to-End User Journey
```
Test complete user flow:

1. Visit tucker.sh
   ✓ Homepage loads
   ✓ Hero hook displays

2. Read About section
   ✓ Work history narrative clear
   ✓ Dual interface bridge sentence present

3. Click docusearch card
   ✓ Navigates to /docusearch
   ✓ Case study loads
   ✓ Problem → Understanding → Solution → Impact clear

4. Use Header navigation to go to context-kit
   ✓ Navigates to /context-kit
   ✓ AGx methodology explained
   ✓ Framed as UX evolution

5. Toggle dark mode
   ✓ Theme switches
   ✓ Colors update correctly
   ✓ Preference persists

6. Test on mobile
   ✓ Responsive layout works
   ✓ Touch targets adequate (44px+)
   ✓ No horizontal scroll

7. Use keyboard only
   ✓ Tab through all elements
   ✓ Focus visible
   ✓ Can navigate entire site

8. Click LinkedIn CTA
   ✓ Opens LinkedIn profile
   ✓ Link works correctly
```

#### Lighthouse Audit Results
```
Run on all pages:
- /
- /docusearch
- /context-kit
- /kanban

Expected scores (each page):
Performance:      90+ ✓
Accessibility:    90+ ✓
Best Practices:   90+ ✓
SEO:              90+ ✓
```

#### Screen Reader Test
```
Test with VoiceOver (Mac) or NVDA (Windows):

✓ Page landmarks announced
✓ Headings read correctly
✓ Images have alt text read
✓ Links have descriptive text
✓ Forms (if any) have labels
✓ Navigation makes sense aurally
✓ No confusing interactive elements
```

### Blocker Criteria

**Launch BLOCKED if:**
- ❌ Accessibility violations present
- ❌ Lighthouse score <90 on any page
- ❌ Site doesn't deploy successfully
- ❌ tucker.sh doesn't resolve
- ❌ Dark mode broken anywhere
- ❌ Navigation broken in any browser
- ❌ Content voice inconsistent
- ❌ Mobile experience broken

**Launch APPROVED if:**
- ✅ WCAG 2.1 AA compliant
- ✅ Lighthouse 90+ all pages
- ✅ Deployed to tucker.sh successfully
- ✅ Works in all target browsers
- ✅ Dark mode functional everywhere
- ✅ Keyboard navigation complete
- ✅ Content voice consistent
- ✅ Mobile experience matches desktop
- ✅ All documentation complete

---

## Continuous Validation

### During Development
- Run `npm run build` frequently
- Check TypeScript errors: `npx tsc --noEmit`
- Test dark mode after every component change
- Test responsive layout continuously

### Pre-Commit
- Build succeeds
- No TypeScript errors
- No ESLint errors
- Component works in both themes

### Post-Merge
- GitHub Actions build succeeds
- Deployed site loads correctly
- No regressions in functionality

---

## Recovery Procedures

### If Wave Gate Fails

1. **Identify failure:** Which validation item failed?
2. **Assign to agent:** Which agent owns the failing component?
3. **Create fix task:** Clear description of what needs fixing
4. **Re-validate:** Run failed tests again
5. **Proceed:** Only move forward when gate passes

### If Integration Breaks

1. **Rollback:** Return to last passing gate
2. **Review contracts:** Which interface was violated?
3. **Update specs:** Clarify ambiguous contracts
4. **Retry:** Re-run agent with updated contract
5. **Validate:** Ensure integration works

### If Deployment Fails

1. **Check logs:** GitHub Actions error logs
2. **Test locally:** `npm run build && npm run preview`
3. **Fix issue:** Update deployment config
4. **Re-deploy:** Push fix to trigger new deploy
5. **Verify:** Confirm tucker.sh loads correctly

---

## Success Metrics

### Wave 1 Success
- ✅ Foundation builds and runs
- ✅ All dependencies installed
- ✅ Theme system functional
- ✅ Content structure valid

### Wave 2 Success
- ✅ Homepage renders completely
- ✅ All sections present
- ✅ Navigation functional
- ✅ Responsive and accessible

### Wave 3 Success
- ✅ All case studies render
- ✅ Content voice consistent
- ✅ Narrative clear
- ✅ Word counts in spec

### Wave 4 Success (Launch)
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ Cross-browser tested
- ✅ Deployed successfully
- ✅ Documentation complete

---

**Validation Approach:** Progressive gates between waves
**Quality Standard:** WCAG 2.1 AA + Lighthouse 90+
**Testing Strategy:** Automated + Manual + Integration
**Success Guarantee:** No wave proceeds until previous gate passes

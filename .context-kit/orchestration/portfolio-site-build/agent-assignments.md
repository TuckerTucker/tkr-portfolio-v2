# Agent Assignments & Territorial Boundaries

**Project:** Tucker Portfolio Site Build
**Total Agents:** 19 agents across 4 waves
**Strategy:** Clear file ownership, zero overlaps, interface-driven coordination

---

## Wave 1: Foundation & Infrastructure (Agents 1-6)

### Agent 1: Project Initialization & Build Configuration
**Agent ID:** `foundation-agent`
**Wave:** 1
**Duration:** Foundation setup

**File Ownership:**
```
✓ /vite.config.ts
✓ /tsconfig.json
✓ /tsconfig.node.json
✓ /package.json
✓ /package-lock.json
✓ /public/.nojekyll
✓ /.gitignore
```

**Responsibilities:**
- Initialize Vite + React + TypeScript
- Configure build for GitHub Pages
- Install all dependencies
- Configure TypeScript strict mode with path aliases
- Create npm scripts
- Add .nojekyll for GitHub Pages

**Dependencies:** None (starting agent)

---

### Agent 2: Styling System Setup
**Agent ID:** `styling-agent`
**Wave:** 1
**Duration:** Style foundation

**File Ownership:**
```
✓ /tailwind.config.ts
✓ /postcss.config.js
✓ /src/styles/tweakcn.css
✓ /src/styles/globals.css
✓ /index.html (font loading section only)
```

**Responsibilities:**
- Install and configure Tailwind CSS
- Create Tweakcn CSS variables file
- Configure Tailwind to use CSS custom properties
- Add Google Fonts to index.html
- Create global styles with resets

**Dependencies:** Agent 1 (package.json must exist)

---

### Agent 3: Shadcn/ui Component Library
**Agent ID:** `shadcn-agent`
**Wave:** 1
**Duration:** Component setup

**File Ownership:**
```
✓ /components.json
✓ /src/components/ui/button.tsx
✓ /src/components/ui/card.tsx
✓ /src/components/ui/separator.tsx
✓ /src/components/ui/scroll-area.tsx
✓ /src/lib/utils.ts
```

**Responsibilities:**
- Initialize Shadcn/ui
- Add required components (Button, Card, Separator, ScrollArea)
- Create cn() utility helper
- Install lucide-react for icons

**Dependencies:** Agent 1 (package.json), Agent 2 (Tailwind config)

---

### Agent 4: Routing & Theme Infrastructure
**Agent ID:** `infrastructure-agent`
**Wave:** 1
**Duration:** Core infrastructure

**File Ownership:**
```
✓ /src/App.tsx
✓ /src/main.tsx
✓ /src/providers/ThemeProvider.tsx
✓ /public/404.html
✓ /src/pages/.gitkeep
✓ /src/components/layout/.gitkeep
✓ /src/components/sections/.gitkeep
✓ /src/content/.gitkeep
```

**Responsibilities:**
- Install React Router
- Create App.tsx with route definitions
- Create ThemeProvider with localStorage
- Add 404.html for SPA routing
- Add redirect script to index.html
- Create directory structure

**Dependencies:** Agent 1 (package.json)

---

### Agent 5: Content Extraction & Structuring
**Agent ID:** `content-agent`
**Wave:** 1
**Duration:** Content preparation

**File Ownership:**
```
✓ /src/content/types.ts
✓ /src/content/work-history.ts
✓ /src/content/projects.ts
✓ /src/content/case-studies/docusearch.ts
✓ /src/content/case-studies/context-kit.ts
✓ /src/content/case-studies/kanban.ts
```

**Responsibilities:**
- Create TypeScript interfaces for all content
- Extract work history from reference materials
- Extract project metadata
- Structure all three case studies
- Ensure type safety

**Dependencies:** Agent 1 (TypeScript config)

---

### Agent 6: Layout Components Foundation
**Agent ID:** `layout-agent`
**Wave:** 1
**Duration:** Layout setup

**File Ownership:**
```
✓ /src/components/layout/Header.tsx
✓ /src/components/layout/Footer.tsx
✓ /src/components/layout/ThemeToggle.tsx
```

**Responsibilities:**
- Create Header with navigation
- Create Footer with LinkedIn CTA
- Create ThemeToggle button
- Integrate ThemeToggle into Header
- Style for mobile/desktop

**Dependencies:** Agent 3 (Button component), Agent 4 (ThemeProvider)

---

## Wave 2: Homepage Implementation (Agents 7-9)

### Agent 7: Homepage Hero & About Sections
**Agent ID:** `homepage-agent`
**Wave:** 2
**Duration:** Homepage core

**File Ownership:**
```
✓ /src/components/sections/Hero.tsx
✓ /src/components/sections/About.tsx
✓ /src/pages/Home.tsx (partial - Hero + About)
```

**Responsibilities:**
- Create Hero component with hook
- Create About component with work history
- Add creative background mention
- Add dual interface bridge
- Create partial Home page

**Dependencies:** Agent 5 (content/work-history), Agent 2 (styles)

---

### Agent 8: Project Cards & Featured Projects
**Agent ID:** `projects-agent`
**Wave:** 2
**Duration:** Project cards

**File Ownership:**
```
✓ /src/components/sections/ProjectCard.tsx
✓ /src/components/sections/FeaturedProjects.tsx
```

**Responsibilities:**
- Create ProjectCard component
- Implement hero card variant
- Implement standard card variant
- Create FeaturedProjects component
- Add all three projects with proper sizing
- Ensure responsive grid

**Dependencies:** Agent 3 (Card component), Agent 5 (content/projects)

---

### Agent 9: Homepage Integration & Polish
**Agent ID:** `homepage-integration-agent`
**Wave:** 2
**Duration:** Homepage finalization

**File Ownership:**
```
✓ /src/pages/Home.tsx (finalize)
```

**Responsibilities:**
- Integrate FeaturedProjects into Home
- Add smooth scrolling
- Proper spacing between sections
- Add Separators
- Test responsive layout
- Verify dark mode

**Dependencies:** Agent 7 (Hero, About), Agent 8 (FeaturedProjects), Agent 3 (Separator)

---

## Wave 3: Case Study Pages (Agents 10-13)

### Agent 10: Case Study Layout Components
**Agent ID:** `case-study-layout-agent`
**Wave:** 3
**Duration:** Layout system

**File Ownership:**
```
✓ /src/components/case-studies/CaseStudyLayout.tsx
✓ /src/components/case-studies/ProblemSection.tsx
✓ /src/components/case-studies/UnderstandingSection.tsx
✓ /src/components/case-studies/SolutionSection.tsx
✓ /src/components/case-studies/ImpactSection.tsx
✓ /src/components/case-studies/ProjectMetadata.tsx
```

**Responsibilities:**
- Create CaseStudyLayout component
- Create all section components
- Style typography for case studies
- Add image placeholder support
- Ensure responsive layout
- Create metadata footer

**Dependencies:** Agent 2 (styles), Agent 3 (UI components)

---

### Agent 11: Docusearch Case Study (Primary)
**Agent ID:** `docusearch-agent`
**Wave:** 3
**Duration:** Primary case study

**File Ownership:**
```
✓ /src/pages/Docusearch.tsx
```

**Responsibilities:**
- Create Docusearch page
- Add all four sections (Problem, Understanding, Solution, Impact)
- Include dual interface references
- Add project metadata
- Ensure 800-1200 word length

**Dependencies:** Agent 10 (CaseStudyLayout), Agent 5 (content/docusearch)

---

### Agent 12: Context-Kit Case Study (Secondary)
**Agent ID:** `context-kit-agent`
**Wave:** 3
**Duration:** Secondary case study

**File Ownership:**
```
✓ /src/pages/ContextKit.tsx
```

**Responsibilities:**
- Create ContextKit page
- Add all four sections with AGx focus
- Frame AGx as UX evolution
- Include agent feedback quotes
- Add dual interface explanation
- Ensure 800-1000 word length

**Dependencies:** Agent 10 (CaseStudyLayout), Agent 5 (content/context-kit)

---

### Agent 13: Kanban Case Study (Tertiary)
**Agent ID:** `kanban-agent`
**Wave:** 3
**Duration:** Tertiary case study

**File Ownership:**
```
✓ /src/pages/Kanban.tsx
```

**Responsibilities:**
- Create Kanban page with condensed layout
- Add all four sections (brief)
- Focus on dual interface pattern
- Keep length 400-600 words

**Dependencies:** Agent 10 (CaseStudyLayout), Agent 5 (content/kanban)

---

## Wave 4: Polish, Accessibility & Deployment (Agents 14-19)

### Agent 14: Content Voice & Narrative Review
**Agent ID:** `content-review-agent`
**Wave:** 4
**Duration:** Content review

**File Ownership:**
```
⚠️  REVIEW ONLY - No direct file edits
→  Creates PRs with suggested changes
```

**Responsibilities:**
- Review all content for Tucker's voice
- Verify Problem → Understanding → Solution → Impact framework
- Check dual interface narrative emerges naturally
- Verify AGx positioned as UX evolution
- Review content allocation ratios
- Create review report with suggestions

**Dependencies:** All previous agents (Wave 1-3 complete)

---

### Agent 15: Accessibility Audit & Remediation
**Agent ID:** `accessibility-agent`
**Wave:** 4
**Duration:** A11y compliance

**File Ownership:**
```
✓ /src/components/layout/SkipToContent.tsx (new)
⚠️  Multiple files (add a11y attributes only)
```

**Responsibilities:**
- Audit semantic HTML
- Add alt text for images
- Test keyboard navigation
- Verify color contrast (WCAG 2.1 AA)
- Add skip-to-main link
- Add ARIA labels where needed
- Test with screen reader
- Create compliance report

**Dependencies:** All component agents (Wave 1-3)

---

### Agent 16: Performance Optimization
**Agent ID:** `performance-agent`
**Wave:** 4
**Duration:** Performance

**File Ownership:**
```
✓ /vite.config.ts (performance section)
✓ /public/assets/** (optimized images)
⚠️  /src/pages/** (add lazy loading)
```

**Responsibilities:**
- Optimize images (WebP, proper sizing)
- Add lazy loading
- Review bundle size (<200kb target)
- Enable code splitting
- Add preload hints
- Run Lighthouse audit
- Create performance report

**Dependencies:** Agent 1 (vite.config), all page agents

---

### Agent 17: Deployment Infrastructure
**Agent ID:** `deployment-agent`
**Wave:** 4
**Duration:** Deployment setup

**File Ownership:**
```
✓ /.github/workflows/deploy.yml
✓ /public/CNAME
✓ /docs/deployment.md
```

**Responsibilities:**
- Create GitHub Actions workflow
- Configure build on push
- Set up GitHub Pages deployment
- Add CNAME for tucker.sh
- Test deployment
- Document deployment process

**Dependencies:** Agent 1 (build config), all previous agents

---

### Agent 18: Cross-Browser Testing & Final QA
**Agent ID:** `qa-agent`
**Wave:** 4
**Duration:** Testing & QA

**File Ownership:**
```
⚠️  TESTING ONLY
→  Creates bug fix PRs if needed
```

**Responsibilities:**
- Test Chrome (desktop/mobile)
- Test Firefox (desktop/mobile)
- Test Safari (desktop/mobile)
- Test Edge (desktop)
- Verify dark mode everywhere
- Test all routing
- Test all links
- Verify LinkedIn CTA
- Final Lighthouse audit
- Create QA report

**Dependencies:** All previous agents

---

### Agent 19: Documentation & Handoff
**Agent ID:** `documentation-agent`
**Wave:** 4
**Duration:** Documentation

**File Ownership:**
```
✓ /README.md (update)
✓ /docs/development.md
✓ /docs/deployment.md
✓ /docs/design-system.md
✓ /docs/architecture.md
```

**Responsibilities:**
- Update README with overview
- Document development workflow
- Document deployment process
- Add contributing guidelines
- Create troubleshooting guide
- Document design system
- Add architecture overview

**Dependencies:** All previous agents

---

## Conflict Prevention Rules

### File Ownership
- ✓ Each file owned by exactly one agent
- ✓ New files preferred over shared file edits
- ✓ Clear handoff at integration points

### Exceptions (Multiple Agents)
1. **index.html** - Agents 2, 4 edit different sections
2. **vite.config.ts** - Agents 1, 16 edit different sections
3. **Component files** - Agent 15 adds a11y attributes only
4. **Page files** - Agent 16 adds lazy loading only

### Coordination Protocol
- Agents 2 & 4 coordinate on index.html via comments
- Agents 1 & 16 coordinate on vite.config via sections
- Agent 15 only adds attributes, no logic changes
- Agent 16 only adds lazy loading, no content changes

---

## Agent Communication

### Status Reporting
Each agent must report:
```
START:    "Agent [ID] starting wave [N]"
PROGRESS: "Agent [ID] completed [X/Y] tasks"
BLOCKED:  "Agent [ID] blocked on [dependency]"
COMPLETE: "Agent [ID] complete, files: [list]"
VALIDATE: "Agent [ID] contracts validated"
```

### Integration Handoff
When providing interface for others:
```
PROVIDE: "Agent [ID] published [interface] at [location]"
```

When consuming interface:
```
CONSUME: "Agent [ID] consuming [interface] from [provider]"
VALIDATE: "Agent [ID] verified [interface] contract"
```

---

## Territory Map (Visual)

```
Wave 1 - Foundation
├── Agent 1: Root configs (vite, ts, package)
├── Agent 2: Styling (tailwind, css, fonts)
├── Agent 3: UI components (shadcn)
├── Agent 4: Infrastructure (routing, theme)
├── Agent 5: Content (types, data)
└── Agent 6: Layout (header, footer)

Wave 2 - Homepage
├── Agent 7: Hero & About sections
├── Agent 8: Project cards
└── Agent 9: Homepage integration

Wave 3 - Case Studies
├── Agent 10: Case study layout system
├── Agent 11: Docusearch page
├── Agent 12: Context-kit page
└── Agent 13: Kanban page

Wave 4 - Polish & Deploy
├── Agent 14: Content review (read-only)
├── Agent 15: Accessibility (a11y attributes)
├── Agent 16: Performance (optimization)
├── Agent 17: Deployment (CI/CD)
├── Agent 18: QA (testing)
└── Agent 19: Documentation (docs)
```

---

## Success Criteria

### Zero Conflicts
- No overlapping file edits
- Clear ownership boundaries
- Interface-driven coordination

### Complete Coverage
- All 121 tasks assigned
- No task duplication
- Clear dependencies

### Progressive Validation
- Each wave validated before next
- Integration tests at gates
- Contract compliance verified

---

**Total Agents:** 19
**Total Waves:** 4
**Conflict Risk:** Zero (territorial boundaries)
**Integration Risk:** Low (interface contracts)
**Success Probability:** High (specification-driven)

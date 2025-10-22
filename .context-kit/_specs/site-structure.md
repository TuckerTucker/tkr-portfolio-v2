# Tucker Portfolio Site Structure Specification

**Project:** tucker.sh portfolio v2
**Date:** 2025-10-22
**Status:** Planning phase

---

## High-Level Decisions

### Navigation Architecture
**Type:** Hybrid
- Homepage with project overviews
- Separate deep-dive pages for each case study
- Allows progressive disclosure while maintaining focused reading experience

### Entry Point Hook
**Primary:** "I solve big problems in small ways—creating software people love to use"
- Direct, conversational, memorable
- Establishes practical problem-solver identity
- Aligns with Tucker's voice (not corporate speak)

### Content Strategy
**Tone:** Business casual
- Professional but approachable
- No buzzwords without explanation
- Show process over polish

**Initial Scope:** Static content
- Build interactivity in future iterations
- Focus on clear storytelling first

**Call to Action:** Connect on LinkedIn
- Primary goal: professional networking
- Positioned in footer

**Responsive Strategy:** Same content priority across devices
- No adjusted hierarchy for mobile
- Ensure full content accessibility on all screen sizes

---

## Site Map

```
tucker.sh/
├── Home (/)
│   ├── Hero Section
│   ├── About Section
│   ├── Featured Projects Section
│   └── Footer with CTA
│
├── /docusearch (Primary project - 40-50% focus)
│   └── Full case study
│
├── /context-kit (Secondary project - 30-35% focus)
│   └── Full case study
│
└── /kanban (Tertiary project - 15-20% focus)
    └── Portfolio snippet (condensed case study)
```

---

## Homepage Structure

### 1. Hero Section
**Content:**
- Primary hook: "I solve big problems in small ways—creating software people love to use"
- Brief subtitle or context (1-2 sentences)

**Purpose:**
- Immediate personality establishment
- Clear value proposition
- Inviting, not intimidating

---

### 2. About Section

**Structure:**

#### Opening (2-3 sentences)
Brief introduction establishing personality and core philosophy

#### 20-Year Journey (150-200 words)
**Arc:** Shaw → Worldplay → Nutrien → Current (AI/Agent UX)

**Key Narrative Points:**
- **Shaw Communications (2005-2017):** Senior UX Designer
  - Learned to design for customer mental models vs. internal systems
  - Example: Support portal rebuilt around "my internet is slow" (customer language) not "Connectivity Issues → Performance" (internal structure)
  - Phone portal redesign based on call center data and usability testing

- **Worldplay Networks (2017-2022):** Manager of UX Design & Lead Designer
  - Applied principles across diverse users (sports orgs, Indigenous communities, enterprise customers)
  - VFLive Dashboard: Turned chaotic debugging into systematic problem-solving for Customer Success teams
  - Admin Portal: System language ("ingest endpoint") → Task language ("upload video")
  - Library Redesign: Usability testing revealed hidden functionality issues
  - Indigenous Digital Sovereignty: Designing for cultural preservation and community control

- **Nutrien (2023):** Lead UX Designer
  - Collaborative UX at enterprise scale (37,000 employees globally)
  - Multi-file uploader: Usability testing revealed data loss patterns → clear feedback design
  - Operating Standards navigation: Two-column layout maintained context while browsing

- **Current Focus:** Same principles, new users → AI agents
  - 20 years of understanding how users think and solve problems
  - Now applying those skills to agent experience design

#### Creative Background (1-2 sentences)
Songwriting and podcast production taught distillation and storytelling—skills evident in every design decision

**Supporting credentials:**
- Off-Hours Creative course (breaking down complexity)
- Podcast production (communication, distillation)
- Songwriting (concept distillation, narrative structure)

#### Bridge to Dual Interface Theme (1 sentence)
"I design systems where people and AI agents work with the same information, each through interfaces optimized for how they think."

**Purpose:**
- Plants seed for dual interface narrative
- Doesn't fully explain (that happens in context-kit case study)
- Creates curiosity and continuity

---

### 3. Featured Projects Section

**Layout:** Three project cards with visual hierarchy reflecting priority

#### docusearch [HERO CARD - Largest, Featured]
**Content:**
- Project title: "docusearch"
- Elevator pitch (3-4 sentences)
- Visual: Screenshot or diagram
- CTA: "Read full case study →" links to /docusearch

**Positioning:**
- Most prominent visual treatment
- Demonstrates complete UX process
- Shows shipped solution with real-world usage

#### context-kit [STANDARD CARD - Medium]
**Content:**
- Project title: "tkr-context-kit"
- Elevator pitch (3-4 sentences)
- Visual: Screenshot or diagram
- CTA: "Learn more →" links to /context-kit

**Positioning:**
- Innovation showcase
- AGx methodology demonstration
- Supporting infrastructure for primary work

#### kanban [STANDARD CARD - Medium]
**Content:**
- Project title: "tkr-kanban"
- One-liner (1-2 sentences)
- Visual: Screenshot or diagram
- CTA: "Learn more →" links to /kanban

**Positioning:**
- Supporting evidence
- Validates dual interface pattern
- Traditional UX demonstration

---

### 4. Footer
**Content:**
- LinkedIn connection CTA
- Contact information (if applicable)
- Copyright/attribution

---

## Project Case Study Pages

### /docusearch (Primary - Full Treatment)
**Structure:** Full case study following Problem → Understanding → Solution → Impact framework

**Content Sources:**
- [Full Case Study](../_ref/portfolio-2/docusearch_portfolio_case_study.md)
- [Elevator Pitch](../_ref/portfolio-2/docusearch_elevator_pitch.md)
- [Talking Points](../_ref/portfolio-2/docusearch_talking_points.md)
- [Visual Walkthrough](../_ref/portfolio-2/docusearch_visual_walkthrough.md)

**Key Elements:**
- Problem space (documentation search challenges)
- User research methodology
- Information architecture decisions
- Search system design
- Dual interface implementation (human visual + agent structured data)
- Real-world impact

**Length:** 800-1200 words

---

### /context-kit (Secondary - Full Treatment)
**Structure:** Full case study following Problem → Understanding → Solution → Impact framework

**Content Sources:**
- [Full Case Study](../_ref/portfolio-2/tkr-context-kit_case_study.md)
- [Elevator Pitch](../_ref/portfolio-2/tkr-context-kit_elevator_pitch.md)
- [Portfolio Snippet](../_ref/portfolio-2/tkr-context-kit_portfolio_snippet.md)

**Key Elements:**
- Problem: Agents re-learning project structure every conversation (20-30% context overhead)
- Understanding: AGx research—asking agents what formats they prefer
- Solution: `_project.yml` with semantic anchors, progressive disclosure
- Impact: Near-zero context loading, 70% token reduction
- **AGx Framing:** Position as "evolution of traditional UX" applied to AI agents
- **Dual Interface Explanation:** Full explanation of the pattern happens here

**Narrative Approach:**
- Frame agent design as extension of traditional UX, not departure
- Show agent feedback quotes ("YAML's indentation makes hierarchy clear")
- Demonstrate iterative research process
- Connect to 20-year history of understanding user mental models

**Length:** 800-1000 words

---

### /kanban (Tertiary - Portfolio Snippet)
**Structure:** Condensed case study following Problem → Understanding → Solution → Impact framework

**Content Sources:**
- [Portfolio Snippet](../_ref/portfolio-2/tkr-kanban_portfolio_snippet.md)
- [Full Case Study](../_ref/portfolio-2/tkr-kanban_case_study.md) (reference if needed)
- [Elevator Pitch](../_ref/portfolio-2/tkr-kanban_elevator_pitch.md)

**Key Elements:**
- Dual interface design (visual board + spec files)
- Traditional UX process
- Practical problem-solving
- Collaborative workflow

**Length:** 400-600 words

---

## Cross-Project Narrative Thread

### Unifying Theme: Dual Interface Design
All three projects demonstrate the same core innovation in different contexts:

1. **tkr-kanban:** Humans drag cards on visual board, agents read/write markdown spec files
2. **tkr-docusearch:** Humans search through visual UI, agents consume structured documentation via API
3. **tkr-context-kit:** Humans read markdown docs, agents parse YAML context maps

### Narrative Progression

**Homepage About:** One-sentence hint
> "I design systems where people and AI agents work with the same information, each through interfaces optimized for how they think."

**docusearch Case Study:** Pattern in action
- Show dual interface implementation
- Demonstrate practical application
- Focus on problem-solving, not pattern naming

**context-kit Case Study:** Pattern explanation & AGx methodology
- Full explanation of dual interface thinking
- AGx research process
- Frame as evolution of traditional UX principles
- Show how 20 years of UX research applies to agent users

**kanban Case Study:** Early exploration
- Proof of concept for the pattern
- Shows iterative development of the idea
- Validates approach across multiple projects

---

## Content Principles

### Voice & Style
Reference: [Tucker Voice & Style Playbook](../_ref/portfolio-2/tkr-voice-style-playbook.md)

**Framework:** Problem → Understanding → Solution → Impact

**Characteristics:**
- Direct and practical
- Conversational but professional
- Active voice, "I" statements
- Show process over polish
- Concrete examples over abstract claims
- Short punchy sentences mixed with explanatory ones

**Avoid:**
- Buzzwords without explanation
- Corporate speak
- Listing tools/software proficiency
- Technical implementation focus (unless it shows UX thinking)
- Metrics we don't have

### Tucker's 3-Layer Depth Strategy

Applied across all content:

1. **One-liner** (Tweet-length essence)
   - Used in project cards, navigation

2. **Elevator pitch** (30-second version)
   - Used on homepage project cards
   - Quick reference for conversations

3. **Full case study** (Deep dive)
   - Separate pages for interested readers
   - Complete Problem → Understanding → Solution → Impact narrative

---

## AGx Positioning Strategy

### Approach: "Evolution of Traditional UX"

**Not:** "I do AI UX now (different from regular UX)"
**Instead:** "I apply the same UX principles I've used for 20 years to a new type of user: AI agents"

### Key Messaging

**Traditional UX Principle:** Understand user mental models
**Applied to Agents:** Research how agents prefer to consume information

**Traditional UX Principle:** Design interfaces matching how users think
**Applied to Agents:** YAML hierarchy vs. JSON brackets (based on agent feedback)

**Traditional UX Principle:** Progressive disclosure reduces cognitive load
**Applied to Agents:** Meta → Tech → Architecture → Operations depth levels

**Traditional UX Principle:** Consistency creates better user experience
**Applied to Agents:** Semantic anchors create canonical context

### Where AGx Surfaces

**Homepage About:** Implied in journey arc (Shaw/Worldplay → Current: agents as users)

**context-kit Case Study:** Full AGx methodology explanation
- Show research process (asking agents questions)
- Present agent feedback quotes
- Demonstrate iterative design
- Frame as natural extension of UX career

**Skills/Approach:** Never separate "AI UX" from "Traditional UX"
- It's all UX
- Different users require different interface designs
- Same principles, different implementation

---

## Design Considerations

### Visual Hierarchy
- Hero card for docusearch visually larger/more prominent
- Two standard cards for context-kit and kanban
- Clear visual distinction without burying secondary projects

### Typography
- Headlines emphasize project names
- Body copy maintains business casual readability
- Code/technical elements styled distinctly (if applicable)

### Imagery
**Priority:** Process over polish
- Sketches, whiteboards, iteration notes
- Before/After comparisons
- Decision-making artifacts
- Real project files/screenshots

**Caption Style:**
```
[Image]
Brief description of what's shown (1 sentence)
Why it matters (1 sentence)
```

Example:
> Discovery session notes showing customer success team interview findings.
> This research revealed which metrics mattered most for debugging live streams.

### Accessibility
- WCAG 2.1 AA compliance minimum
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all images
- Keyboard navigation support

### Performance
- Optimized images
- Minimal JavaScript (static content focus)
- Fast load times across devices

---

## Reference Materials

### Project Content Sources
Located in `.context-kit/_ref/portfolio-2/`:

**docusearch:**
- `docusearch_portfolio_case_study.md`
- `docusearch_elevator_pitch.md`
- `docusearch_talking_points.md`
- `docusearch_visual_walkthrough.md`

**context-kit:**
- `tkr-context-kit_case_study.md`
- `tkr-context-kit_elevator_pitch.md`
- `tkr-context-kit_portfolio_snippet.md`

**kanban:**
- `tkr-kanban_case_study.md`
- `tkr-kanban_elevator_pitch.md`
- `tkr-kanban_portfolio_snippet.md`

**Work History:**
- `work-history-summary.md`

**Guidelines:**
- `tkr-voice-style-playbook.md`
- `portfolio-priorities.md`
- `portfolio_narrative_three_projects.md`
- `portfolio_quick_reference.md`

---

## Success Metrics

### Content Goals
- Clear project hierarchy maintained (40-50% / 30-35% / 15-20%)
- Tucker's voice consistent throughout
- Dual interface narrative emerges naturally
- AGx positioned as UX evolution, not separate discipline
- 20-year work history demonstrates consistent methodology

### User Goals
- Understand Tucker's approach in <1 minute (homepage)
- Deep dive into projects of interest (case study pages)
- See process and thinking, not just outputs
- Connect the dual interface thread across projects
- Take action (LinkedIn connection)

### Technical Goals
- Fast load times
- Accessible to all users
- Works consistently across devices
- Easy to maintain and update
- Foundation for future interactivity

---

## Implementation Notes

**Phase 1:** Static content (current scope)
- Focus on clear storytelling
- Establish structure and voice
- Validate content hierarchy

**Phase 2:** Interactivity (future)
- Embedded demos
- Interactive visualizations
- Video walkthroughs
- Animation/transitions

**Phase 3:** Advanced features (future)
- Case study filtering
- Search functionality
- Blog/writing section
- Dynamic content updates

---

## Next Steps

1. Draft About section content based on work history summary
2. Extract elevator pitches for homepage project cards
3. Adapt case studies for web format
4. Design visual hierarchy for project cards
5. Create wireframes/mockups for review
6. Implement static site
7. Content review and refinement
8. Launch

---

**Last Updated:** 2025-10-22
**Maintained By:** Tucker Harley
**Status:** Planning phase - ready for content drafting

# Portfolio Interactive Demos - Planning Documentation

This directory contains implementation plans for interactive component demos to be built for the tkr-portfolio-v2 case study pages.

## Overview

Rather than static screenshots, these plans outline how to create **live, interactive component demos** that showcase actual UX patterns and design decisions from the DocuSearch and Kanban projects.

## Documents

### 1. `page_outline.md`
High-level content structure for the **DocuSearch case study page** following the Tucker Framework (Problem → Understanding → Solution → Impact).

**Key sections:**
- RAG visibility problem
- Dual interface design (humans + AI agents)
- Visual library + API/MCP access patterns
- Media synchronization features

### 2. `implementation_plan.md` (DocuSearch)
Complete implementation plan for **4 interactive DocuSearch demos**:

1. **Document Card State Showcase** - Processing states (uploading, processing, completed, failed)
2. **Citation Interaction Demo** - Bidirectional highlighting between inline citations and reference cards
3. **Processing Progress Animation** - Stage-by-stage progress visualization
4. **Audio Player with Transcript Sync** - Bidirectional media/text synchronization

**Tech stack:** React 18 + CSS custom properties extracted from DocuSearch
**Status:** Ready for implementation
**Estimated scope:** 20 tasks, ~4-6 demos depending on selections

### 3. `kanban_page_outline.md`
High-level content structure for the **Kanban case study page** emphasizing dual-interface design and AGx (Agent Experience) principles.

**Key sections:**
- Same data, different interfaces (visual vs programmatic)
- File-based architecture as common ground
- MCP integration and natural language tool descriptions
- Agent interviews and iterative design process

### 4. `kanban_implementation_plan.md` (Kanban)
Complete implementation plan for **4 interactive Kanban demos**:

1. **Card Interaction States** - Collapse, dependencies, subtasks, smart column styling
2. **Dual Interface Comparison** - Split view showing visual board + JSON representation in sync
3. **MCP Tool Call Visualization** - Interactive tool simulator with natural language → tool call → response
4. **Spec-to-Board Generation** - Animated workflow showing requirements → generated kanban board

**Tech stack:** React 18 + Vanilla JS → React conversion + @dnd-kit for drag-drop
**Status:** Ready for implementation
**Estimated scope:** 21 tasks, 4 demos with educational annotations

## Demo Philosophy

All demos follow these principles:

1. **No backend dependencies** - Fully client-side with mock data
2. **Exact visual fidelity** - Preserve production styling and behavior
3. **Educational value** - Show *why* design decisions matter, not just *what* was built
4. **Interactive** - Users can click, drag, toggle, not just watch
5. **Dual-interface focus** - Demonstrate both human and AI agent interaction patterns

## Common Infrastructure

Both demo suites require:

- **Mock data generators** - Realistic sample data following production formats
- **CSS extraction** - Design tokens and component styles from source projects
- **React compatibility** - Adapt components to React 18 in portfolio
- **Responsive design** - Mobile/tablet/desktop layouts
- **Demo wrapper components** - Consistent presentation with descriptions

## Implementation Sequence

### Phase 1: DocuSearch Demos (Recommended First)
- Simpler component architecture (React 19 → React 18)
- Fewer dependencies (no drag-drop library)
- Visual focus with clear state demonstrations
- **Start here** for faster initial progress

### Phase 2: Kanban Demos
- More complex (Vanilla JS → React conversion)
- Requires drag-drop library integration
- Dual-interface visualization more abstract
- **Build after** DocuSearch experience

## Success Metrics

Demos are complete when:

- ✅ All components work standalone without errors
- ✅ Visual design matches production exactly
- ✅ Interactions are smooth and responsive
- ✅ Educational value is clear (design principles explained)
- ✅ Mobile/tablet/desktop all render correctly
- ✅ Load time < 1 second
- ✅ Zero console warnings/errors

## Next Steps

1. Review both implementation plans
2. Decide which demos to build first (recommend: DocuSearch Demo 1 + Demo 2)
3. Set up demo directory structure in portfolio
4. Begin component porting and adaptation
5. Test integration with case study content

## Questions to Resolve

- [ ] Which demos are highest priority for each project?
- [ ] Should demos auto-cycle or require user interaction?
- [ ] Include "view code" toggles to show underlying JSON/props?
- [ ] Add download/export functionality for demo board data?
- [ ] Create shared design system for both demo suites?

---

**Last Updated:** 2025-11-11
**Status:** Planning complete, ready for implementation
**Location:** `/tkr-docusearch/.context-kit/_ref/porfolio_demos/`

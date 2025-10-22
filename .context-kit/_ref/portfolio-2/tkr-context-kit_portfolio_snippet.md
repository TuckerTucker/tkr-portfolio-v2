# tkr-context-kit
## Context Architecture for AI Agent Collaboration

---

**Challenge:**  
AI agents were spending 20-30% of every conversation re-discovering my project structure, component relationships, and operational patterns. Different agents would get slightly different context, leading to inconsistent understanding. I needed a way to give agents comprehensive, consistent project knowledge upfront so they could focus on actual work.

**My Role:**  
Solo designer, developer, and AGx researcher—information architecture design, agent experience research, full-stack implementation.

---

## Understand

### The Core Problem

Working with AI agents on complex projects was frustrating. Every conversation started with:
- "What directories exist?"
- "How does UserProfile relate to AuthContext?"
- "What's your state management approach?"
- "How do I run tests?"

**This context discovery consumed 20-30% of every conversation.** Worse, different agents would ask the same questions differently, getting slightly different answers, leading to inconsistent understanding.

I needed to **front-load context** so agents could start working immediately.

### Agent Experience (AGx) Research

This project required deep understanding of how AI agents consume information. I regularly asked:
- "What information helps you understand this project better?"
- "What's missing from the context?"
- "What format makes information easiest to parse?"
- "What's redundant or distracting?"

**What I learned from agents:**
1. Hierarchical structure beats flat descriptions (YAML > JSON)
2. Semantic anchors reduce token usage dramatically
3. Progressive disclosure is valuable—let agents choose context depth
4. File paths beat database IDs for concreteness
5. Explicit relationships matter—don't make agents infer connections

These insights shaped the entire information architecture. I wasn't just documenting—I was **designing specifically for AI agent consumption patterns**.

---

## Solve

### Design Decisions

**1. The _project.yml Context Map**

The breakthrough came with developing a comprehensive YAML structure that gives agents immediate project understanding:

```yaml
meta:
  name: tkr-context-kit
  type: development_toolkit
  
tech_stack: &tech-stack
  frontend: React 19
  state: Zustand
  
architecture:
  pattern: ~service_oriented
  services:
    - dashboard: *service-dashboard
```

**What this enables:**
- **Meta section** - High-level understanding instantly
- **Semantic anchors** (`&tech-stack`) - Define once, reference everywhere
- **Semantic definitions** (`~service_oriented`) - Shared vocabulary
- **Progressive detail** - Drill down as needed

**2. Semantic Anchors for Token Efficiency**

I discovered agents were repeating similar context patterns. The anchor system lets me define something once and reference it multiple times without bloating token count.

**Impact:** Reduced _project.yml from ~1000 lines to ~300 lines while maintaining full information.

**3. Explicit Semantic Definitions**

Agents were inferring concepts inconsistently. By explicitly defining terms like `~service_oriented` and `~graceful_degradation`, I created shared vocabulary that stays consistent across conversations.

```yaml
semantic:
  ~service_oriented: "Architecture where independent services communicate via APIs"
  ~graceful_degradation: "System continues functioning when components fail"
```

This is like creating a **domain-specific language for my project** that any agent immediately understands.

### The Broader Context-Kit System

The _project.yml is the foundation, but the full toolkit includes:

**Service-Oriented Architecture:**
- Unified React 19 dashboard (port 42001)
- Knowledge Graph backend API with SQLite+FTS5 (port 42003)
- Centralized logging service
- MCP integration for persistent AI memory

**Why service-oriented?** I wanted modularity—ability to enable or disable parts rather than managing a monolithic application.

**Agent Specialization Strategy:**
- **context-init agent** coordinates parallel agents
- **Knowledge graph agent** updates component relationships
- **Documentation agent** refreshes markdown docs
- **Structure agent** maintains _project.yaml
- **Consolidation agent** synthesizes all updates

**Workflow Integration:**
Context updating is part of my commit commands—the system stays current automatically.

---

## Create

### Technical Implementation

**Stack:**
- TypeScript strict mode across all modules
- React 19 with ReactFlow for visualization
- SQLite + FTS5 for searchable knowledge storage
- Node.js backend services
- Vite build system with multi-module support

**Architecture Patterns:**
- Service Registry for discoverability
- Base Service abstraction for common functionality
- Observer pattern for health monitoring
- WebSocket with HTTP fallback for reliability
- Graceful degradation with mock data fallbacks

**Security:**
- Input validation on all boundaries
- Path traversal protection
- Security-first design principles

### Development Process

**AGx Research Methodology:**
I conducted iterative research with AI agents about context preferences:

**Question:** "What format makes project structure easiest to parse?"  
**Agent preference:** YAML over JSON—indentation shows hierarchy clearly

**Question:** "How much detail do you need upfront?"  
**Agent preference:** Progressive disclosure—meta first, details on demand

**Question:** "What's most useful for understanding component relationships?"  
**Agent preference:** Explicit definitions, not inferred connections

This mirrors traditional UX research—understanding user mental models, uncovering needs—except the user is an AI agent.

### The YAML Format Decision

We discussed pros and cons of YAML vs. JSON vs. Mermaid for agent consumption.

**Agents preferred YAML because:**
- Hierarchical indentation makes structure immediately clear
- Semantic anchors reduce token repetition
- Comments integrate naturally without separate fields
- Less visual noise than JSON brackets

I validated this by having agents work with both formats. YAML parsing was consistently faster and they made fewer structural errors.

---

## Verify

### Impact Measurement

**Context Loading Time:**
- **Before:** 20-30% of every conversation spent on context discovery
- **After:** Near-zero—agents start with full context

**Token Efficiency:**
- **Before:** ~1000 lines of context without semantic anchors
- **After:** ~300 lines with semantic anchors, same information

**Consistency:**
- **Before:** Different agents got slightly different context
- **After:** Canonical _project.yml ensures consistent understanding

**Maintenance:**
- **Before:** Manual documentation updates
- **After:** Parallel agent updates keep context current automatically

### What Changed

**For agents:**
Conversations start with comprehensive understanding. They spend time on actual work instead of asking clarifying questions about structure, patterns, or procedures.

**For me:**
I can have productive conversations immediately. No warmup period, no repeated explanations, no inconsistent understanding between agents or conversations.

**Technical validation:**
- Agents make fewer incorrect assumptions about project structure
- YAML format reduces token usage by ~70% vs. verbose JSON
- Parallel updates maintain documentation accuracy
- Service-oriented architecture enables modular development

---

## Reflection

### What Worked

**Agent Experience research was essential.** Just like human users, AI agents have preferred ways of consuming information. Understanding these preferences through research—not assumptions—shaped everything.

**Semantic anchors dramatically improved efficiency.** Defining patterns once and referencing them everywhere reduced token usage while maintaining full context.

**Progressive disclosure serves agents too.** Not every conversation needs full context depth. Letting agents choose their level (meta → tech → architecture → operations) improves efficiency.

**YAML was the right format choice.** Agent feedback confirmed hierarchical structure and semantic anchors work better than JSON's bracket-heavy syntax.

### What I'd Do Differently

**Formalize the AGx research process** - I did this informally but should document it as a methodology

**Build knowledge graph earlier** - Still work-in-progress but should have been prioritized

**Create context templates** - Reusable structures for common project types

**Add context validation** - Automated checks that structure is well-formed

**What I'd keep:** YAML format, semantic anchors, progressive disclosure, and parallel agent update strategy. These proved essential.

### What This Taught Me

**AI agents are users too.** They deserve thoughtful UX design that considers their needs, preferences, and interaction patterns. Traditional UX principles apply—progressive disclosure, consistent mental models, reducing cognitive load—but implementation details differ.

**Consistency matters more than expected.** When agents got slightly different context across conversations, they made subtly different decisions. Inconsistency compounds. Canonical context creates reliable understanding.

**Design with agents, not just for them.** My best insights came from conversations with agents about what they needed. This is information architecture specifically optimized for their consumption patterns.

**The same principles apply.** My background in stakeholder interviews and usability testing taught me how to uncover user mental models. With agents, the methodology is similar—ask questions, observe behavior, iterate on design.

---

## Future Directions

**History system for recurring bugs**  
Allow agents to create debugging plans based on what actually worked before in this codebase.

**Architectural change tracking with reasoning**  
Document not just what changed, but why—giving future agents decision-making context.

**Enhanced knowledge graph queries**  
Let agents ask "What components depend on AuthContext?" and get immediate, visual answers.

**Cross-project context sharing**  
Reusable patterns and conventions across multiple projects.

---

**Project Status:** Production-ready toolkit  
**Technologies:** TypeScript, React 19, ReactFlow, SQLite+FTS5, Node.js, Vite  
**Architecture:** Multi-service toolkit with unified dashboard  

**Skills Demonstrated:**
- Agent Experience (AGx) research and design
- Information architecture for AI consumption
- Service-oriented architecture
- Semantic design patterns
- Progressive disclosure systems
- Full-stack development

**View Full Case Study:** [Link to detailed walkthrough]

---

*tkr-context-kit represents exploration of a new design discipline: creating information architectures specifically for AI agent consumption. When we design for agent efficiency while maintaining human accessibility, we enable new forms of human-AI collaboration.*

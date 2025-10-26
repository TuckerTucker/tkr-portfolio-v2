# tkr-context-kit: Designing Context Architecture for AI Agents

**I created tkr-context-kit to solve a fundamental problem I was experiencing with AI agents:** they were spending too much time in every conversation relearning my project structure and functionality. I realized I needed to design a system that would give agents comprehensive context upfront, allowing them to focus on actual work rather than constantly re-discovering what my modules do or how my components are structured.

## The Problem: Agents Re-Discover Everything, Every Time

Working with AI agents on complex projects was frustrating. At the start of every conversation, they'd need to:

- Ask about project structure ("What directories exist?")
- Inquire about component relationships ("How does UserProfile relate to AuthContext?")
- Discover architectural patterns ("What's your state management approach?")
- Learn operational procedures ("How do I run tests? Deploy changes?")

**This context discovery consumed 20-30% of every conversation.** Worse, different agents would ask the same questions in different ways, getting slightly different answers, leading to inconsistent understanding.

I needed a way to **front-load context** so agents could start working immediately with comprehensive, consistent project knowledge.

## Understanding the Agent's Perspective

This project required deep **Agent Experience (AGx) research**. I regularly asked my AI agents:
- "What information would help you understand this project better?"
- "What's missing from the context I'm providing?"
- "What format makes this information easiest to parse?"
- "What's redundant or distracting?"

**What I learned from agents:**

1. **Hierarchical structure beats flat descriptions** - Agents prefer YAML's indentation over JSON's brackets
2. **Semantic anchors reduce token usage** - Define once, reference many times
3. **Progressive disclosure is valuable** - Agents want to choose their context depth
4. **File paths beat database IDs** - Filesystem references feel more concrete
5. **Explicit relationships matter** - Don't make agents infer connections

These insights shaped the entire system design. I wasn't just documenting—I was creating an **information architecture specifically optimized for AI agent consumption**.

## Solution: The _project.yml Context Map

The breakthrough came when I developed the **_project.yml file structure**. This became the core of everything—a comprehensive context map that gives AI agents immediate understanding of my project's architecture, design tokens, component relationships, and operational patterns.

### The Structure: Progressive Context Disclosure

```yaml
meta:
  name: tkr-context-kit
  type: development_toolkit
  primary_language: typescript
  
tech_stack: &tech-stack
  frontend: React 19
  visualization: ReactFlow
  state: Zustand
  build: Vite
  
architecture:
  pattern: ~service_oriented
  services:
    - dashboard: *service-dashboard
    - knowledge-graph: *service-kg
    - logging: *service-logging
```

**What this enables:**
- **Meta section** gives high-level understanding instantly
- **Semantic anchors** (`&tech-stack`) let me define once, reference everywhere
- **Semantic definitions** (`~service_oriented`) create shared vocabulary
- **Progressive detail** allows agents to drill down as needed

Agents can quickly scan anchors and semantic definitions to build their mental model, then drill into specifics only when necessary.

## Key Design Principles

### 1. Semantic Anchors for Token Efficiency

I discovered that agents were repeating similar context patterns, so the anchor system lets me define something like `&tech-stack` once and reference it multiple times without bloating token count.

**Before semantic anchors:**
```yaml
dashboard:
  frontend: React 19, Vite, TypeScript
  state: Zustand
  
knowledge-graph:
  frontend: React 19, Vite, TypeScript
  state: Zustand
```

**After semantic anchors:**
```yaml
tech_stack: &tech-stack
  frontend: React 19, Vite, TypeScript
  state: Zustand

dashboard:
  stack: *tech-stack
  
knowledge-graph:
  stack: *tech-stack
```

This reduced my _project.yml from ~1000 lines to ~300 lines while maintaining full information.

### 2. Semantic Definitions as Shared Vocabulary

I realized agents were inferring conceptual relationships inconsistently. By explicitly defining terms like `~service_oriented` and `~graceful_degradation`, I'm giving them a shared vocabulary that stays consistent across conversations.

```yaml
semantic:
  ~service_oriented: "Architecture where independent services communicate via APIs"
  ~graceful_degradation: "System continues functioning when components fail"
  ~observer_pattern: "Services monitor each other's health independently"
```

This is like creating a **domain-specific language for my project** that any agent can immediately understand.

### 3. Progressive Disclosure of Information

The structure supports different context depths:

**Level 1 (Meta):** Quick project overview  
**Level 2 (Tech Stack):** Technology choices and patterns  
**Level 3 (Architecture):** Component relationships and communication  
**Level 4 (Operations):** Execution procedures and troubleshooting  

Agents consume what they need. Simple questions use Level 1-2. Complex refactoring dives into Level 3-4.

## The Broader Context-Kit System

The _project.yml is the foundation, but the full context-kit includes:

### Service-Oriented Architecture
- **Unified React 19 dashboard** (port 42001) aggregating all toolkit functionality
- **Knowledge Graph backend API** with SQLite+FTS5 storage (port 42003)
- **Centralized logging service** with structured output
- **MCP integration** for persistent AI memory across sessions

**Why service-oriented?** I wanted modularity—the ability to enable or disable parts of the kit rather than managing a monolithic application. Services can operate independently but are orchestrated through the dashboard.

### The Knowledge Graph (Work in Progress)

The knowledge graph gives agents **relationship-based understanding** of UI components, React hooks, and architectural connections. I envision agents querying this to understand not just what components exist, but how they relate to each other and why certain architectural decisions were made.

Currently developing:
- Entity and relationship management
- Component dependency visualization
- ReactFlow-based interactive graph
- Static and dynamic code analysis

### Agent Specialization Strategy

I combine prompts I've been refining for years with new agents created specifically for the context-kit. The **context-init agent** uses parallel agents to update different parts simultaneously:

1. **Knowledge graph agent** - Updates component relationships
2. **Documentation agent** - Refreshes claude.local.md
3. **Structure agent** - Maintains _project.yaml

Each agent saves analysis to individual markdown files, then a **consolidation agent** uses all reports to make required updates.

This parallel approach came from understanding that context updates involve multiple perspectives—structure, relationships, documentation—that can be generated independently then synthesized.

### The _ref and _spec Directories

These directories serve as **documentation specifically designed for AI consumption**:

**_ref/** - Reference materials:
- UI wireframes
- Design tokens
- Architecture diagrams
- Decision records

**_spec/** - Specifications:
- Feature requirements
- API contracts
- Component interfaces
- Process workflows

Humans can read these (they're markdown), but they're optimized for agents to reference during development.

## Technical Implementation

**Stack:**
- TypeScript strict mode across all modules
- React 19 with ReactFlow for visualization
- SQLite + FTS5 for searchable knowledge storage
- Node.js backend services
- Vite build system with multi-module support

**Architecture Highlights:**
- Service Registry pattern for discoverability
- Base Service abstraction for common functionality
- Observer pattern for health monitoring (30-second intervals)
- WebSocket support with HTTP fallback for reliability
- Graceful degradation with mock data fallbacks

**Security & Safety:**
- Input validation on all service boundaries
- Path traversal protection
- Security-first design principles
- Independent versioning per module

## The Workflow Integration

Context updating is now part of my commit commands—the system stays current without me thinking about it. The workflow:

1. I make code changes
2. Pre-commit hook triggers context-init agent
3. Parallel agents analyze changes
4. Consolidation agent updates _project.yml, docs, knowledge graph
5. Changes commit with updated context

**This means agents always work with current information.** No stale documentation, no outdated structure references.

## AGx Design Philosophy

What I'm really doing is **Agent Experience (AGx) design**. I regularly ask my AI agents:
- "What do you need to better understand this context?"
- "What's missing?"
- "What's redundant?"
- "What isn't required?"

The YAML format itself came from these conversations. We discussed pros and cons of YAML vs. JSON vs. Mermaid for agent consumption. **The agents preferred YAML's hierarchical structure and semantic anchors** for quick context parsing.

This represents a fundamental shift: **designing primarily for AI agent efficiency while maintaining human accessibility**.

## Design Decisions: Learning from Agent Feedback

### Why YAML Over JSON?

**Agent feedback:**
- "YAML's indentation makes hierarchy immediately clear"
- "Semantic anchors reduce token repetition"
- "Comments integrate naturally without separate fields"
- "Less visual noise than JSON brackets"

I validated this by having agents work with both formats. YAML parsing was consistently faster and they made fewer structural errors.

### Why File-Based Documentation?

Agents work better with files than database queries. Having _project.yml, _ref/, and _spec/ as actual files means:
- Agents can use standard file operations
- Version control tracks documentation changes
- No database abstraction layer
- Natural integration with git workflows

### Why Explicit Semantic Definitions?

Without explicit definitions, agents inferred concepts differently across conversations. `~service_oriented` might mean "microservices" to one agent and "modular architecture" to another. 

Explicit definitions create **consistent shared understanding** across all agent interactions.

## Impact: From Context Discovery to Immediate Work

**What changed for agents:**

Conversations now start with full context. Agents understand project structure, architectural patterns, and operational procedures immediately. They spend time on actual work instead of asking clarifying questions.

**What changed for me:**

I can have productive conversations with agents immediately. No warmup period, no repeated explanations, no inconsistent understanding between different agents or conversations.

**Technical validation:**

- Context loading reduced from 20-30% of conversation to near-zero
- Agents make fewer incorrect assumptions about project structure
- Parallel context updates keep documentation current automatically
- YAML format reduces token usage by ~70% vs. verbose JSON

## Future Directions

I'm particularly excited about developing:

**History system for recurring bugs and solutions**  
Allow agents to create thorough debugging plans based on what actually worked before in this codebase.

**Architectural change tracking with reasoning**  
Document not just what changed, but why—giving future agents insight into decision-making context.

**Enhanced knowledge graph queries**  
Let agents ask "What components depend on AuthContext?" and get immediate, visual answers.

**Cross-project context sharing**  
Reusable patterns and conventions across multiple projects.

## Lessons: Designing for Agent Consumption

### Agents Have Preferences, Not Just Requirements

Just like human users, AI agents have preferred ways of consuming information. Through AGx research, I learned:
- Hierarchical > flat
- Explicit > inferred
- Files > databases
- Semantic anchors > repetition

These aren't requirements—agents can work with anything—but preferences dramatically affect efficiency.

### Progressive Disclosure Works for Agents Too

Not every agent interaction needs full context depth. Letting agents choose their level of detail (meta → tech → architecture → operations) means they can be efficient.

This mirrors traditional UX progressive disclosure—start simple, reveal complexity as needed.

### Consistency Matters More Than You Think

When agents got slightly different context in different conversations, they made subtly different decisions. Inconsistency compounds. The _project.yml creates **canonical context** that every agent references.

### Design With Agents, Not Just For Them

My best insights came from conversations with agents about what they needed. This isn't documentation—it's **information architecture specifically optimized for their consumption patterns**.

## What I'd Do Differently

If starting over, I'd:

- **Formalize the AGx research process** - I did this informally but should document it as a methodology
- **Build knowledge graph earlier** - It's still work-in-progress but should have been prioritized
- **Create context templates** - Reusable structures for common project types
- **Add context validation** - Automated checks that structure is well-formed

What I'd keep: YAML format, semantic anchors, progressive disclosure, and the parallel agent update strategy. These proved essential.

## Reflection: The New UX Frontier

tkr-context-kit represents exploration of a new design discipline: **creating information architectures specifically for AI agent consumption**.

Traditional UX design principles apply—progressive disclosure, consistent mental models, reducing cognitive load—but the implementation details differ. Agents "read" hierarchical structures differently than people browse interfaces.

**The core insight:** AI agents are users too. They deserve thoughtful UX design that considers their needs, preferences, and interaction patterns. When we design for agent efficiency while maintaining accessibility for people, we enable new forms of collaboration between people and AI.

---

**Project Type:** Development toolkit (open-source)  
**My Role:** Solo designer + developer + AGx researcher  
**Tech Stack:** TypeScript, React 19, ReactFlow, SQLite, Node.js, Vite  

**Skills Demonstrated:**
- Agent Experience (AGx) research and design
- Information architecture for AI consumption
- Service-oriented architecture
- Progressive disclosure systems
- Semantic design patterns
- Multi-modal context management
- Full-stack development

---

*This toolkit demonstrates advanced full-stack development skills, microservices architecture, and innovative AI integration for enhanced developer productivity. More importantly, it represents the evolution from designing for people to designing for collaboration between people and AI.*

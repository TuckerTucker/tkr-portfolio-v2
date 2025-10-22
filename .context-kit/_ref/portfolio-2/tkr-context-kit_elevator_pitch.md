# tkr-context-kit: Context Architecture for AI Agents

## One-Liner
I designed a context system that gives AI agents comprehensive project understanding upfront—eliminating the 20-30% of every conversation spent re-discovering structure and patterns.

## The Problem (30-second version)
AI agents were spending the start of every conversation asking about project structure, component relationships, and operational procedures. This context discovery consumed 20-30% of our time together. Different agents would get slightly different answers, leading to inconsistent understanding. I needed to front-load context so agents could start working immediately with comprehensive, consistent project knowledge.

## The Solution
The _project.yml file became my breakthrough—a comprehensive context map using YAML's hierarchical structure with semantic anchors and progressive disclosure. Agents can quickly scan the meta section for high-level understanding, then drill into architecture, operations, or specifics as needed.

**Key Innovation:** Semantic anchors reduce token usage by 70%. Define `&tech-stack` once, reference it everywhere. Explicit semantic definitions like `~service_oriented` create shared vocabulary that stays consistent across all agent conversations.

**AGx Research Insight:** I asked agents what format they preferred. They chose YAML over JSON because indentation makes hierarchy clear, anchors reduce repetition, and comments integrate naturally.

## The Impact
- **Context loading** reduced from 20-30% of conversations to near-zero
- **Semantic anchors** reduced _project.yml from ~1000 lines to ~300 lines while maintaining full information
- **Parallel agent updates** keep documentation current automatically
- **Consistent understanding** across all agents and conversations

**The broader system includes:**
- Service-oriented architecture with React 19 dashboard
- Knowledge graph (work-in-progress) for component relationships
- Specialized agents for context maintenance
- _ref and _spec directories optimized for AI consumption

## Skills Showcased
- **AGx Design** - Agent Experience research and information architecture
- **Semantic design patterns** - Anchors, progressive disclosure, shared vocabulary
- **Service-oriented architecture** - Modular, independent services
- **Full-stack development** - TypeScript, React 19, Node.js, SQLite
- **Design with agents** - Iterative feedback from AI users

---

**Technologies:** TypeScript, React 19, ReactFlow, SQLite+FTS5, Node.js, Vite  
**Architecture:** Multi-service toolkit with unified dashboard  
**Outcome:** Production toolkit that dramatically reduces agent context loading time

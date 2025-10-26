# The AI UX Journey: Three Projects, One Evolution

## Portfolio Narrative

These three projects tell the story of my evolution from traditional UX design to Agent Experience (AGx) design—learning how to create systems where humans and AI agents collaborate naturally.

---

## The Progression

### TaskBoardAI: Discovering Dual Interfaces
**The Question:** "How do I design for two users at once?"

I started by solving a personal problem—markdown to-do lists were hard to maintain. But the real discovery was realizing that **people and AI agents need different interfaces to the same data**.

- **People** want visual, drag-and-drop kanban boards
- **AI agents** want structured JSON files they can parse and edit
- **Both** need to work with the same tasks without synchronization

**Key Learning:** File-based architecture serves both audiences naturally. Don't force abstractions—let each user interact through their preferred mode.

**Skills Developed:**
- Dual-interface design thinking
- Understanding AI agent preferences through observation
- MCP integration for natural language interaction

---

### tkr-context-kit: Designing for Agent Consumption
**The Question:** "What if I designed primarily for AI agents?"

TaskBoardAI taught me that agents have preferences. With context-kit, I went deeper—conducting systematic Agent Experience research to understand how agents consume information most effectively.

The breakthrough was the _project.yml structure with semantic anchors and progressive disclosure. But more importantly, I developed a **research methodology for understanding AI agent needs**.

**Key Learning:** AI agents are users who deserve thoughtful UX design. Traditional UX principles apply (progressive disclosure, consistent mental models, reducing cognitive load) but implementation details differ.

**Skills Developed:**
- Agent Experience (AGx) research methodology
- Information architecture for AI consumption
- Semantic design patterns (anchors, definitions, hierarchies)
- Designing with agents through iterative feedback

---

### DocuSearch: Production-Scale Human-AI Collaboration
**The Question:** "What does production AI UX look like?"

DocuSearch synthesizes everything learned from the previous projects into a production-ready system. It combines:
- **Dual interfaces** (visual library + semantic search) from TaskBoardAI
- **Context architecture** (comprehensive upfront knowledge) from context-kit
- **Multi-modal understanding** (images + text) as a new dimension
- **Real-time collaboration** (WebSocket updates for humans and agents)

**Key Learning:** Transparency serves everyone. Humans need visual feedback, AI needs structured data, but both benefit from seeing what's actually in the system. This shared requirement—visibility—enables trust.

**Skills Developed:**
- Multi-modal system design
- Real-time feedback for async AI processing
- Source verification and citation design
- Production polish while maintaining dual-interface simplicity

---

## The Common Thread: Agent Experience (AGx) Design

All three projects explore the same core question: **How do we design systems where people and AI agents collaborate naturally?**

### What Traditional UX Taught Me

My background in stakeholder interviews and usability testing taught me how to uncover user mental models and ask the right design questions. I learned that the key to designing intuitive interfaces is understanding not just what users want to accomplish, but how they think about the problem space.

**These skills translate directly to understanding how users want to collaborate with AI agents.**

### What AGx Design Added

Working with AI agents as users required expanding my UX toolkit:

**From TaskBoardAI:**
- Agents prefer file operations to database queries
- MCP provides automatic context better than prompt engineering
- Observing actual usage reveals agent interaction patterns

**From tkr-context-kit:**
- Agents have format preferences (YAML > JSON for hierarchies)
- Semantic anchors reduce cognitive load (token usage)
- Progressive disclosure works for agents too
- Explicit > inferred for consistency

**From DocuSearch:**
- Multi-modal understanding changes retrieval quality
- Real-time feedback builds trust for both humans and agents
- Source verification enables confidence in AI responses
- File-native architecture serves collaboration naturally

---

## The Design Philosophy

### 1. Design for Both Users Explicitly

Don't assume one interface serves everyone. People and AI agents have different needs. Design explicitly for both:

- **People:** Visual feedback, intuitive interactions, emotional reassurance
- **AI Agents:** Structured data, clear hierarchies, semantic context

When both interfaces serve their user well, collaboration feels natural.

### 2. Research with AI Agents, Not Just About Them

Traditional UX: Interview users, observe behavior, uncover needs  
AGx UX: Interview agents, observe behavior, uncover needs

The methodology is similar. The questions are:
- "What format helps you understand this best?"
- "What's missing from the context?"
- "What's redundant or confusing?"
- "How would you prefer to interact with this?"

### 3. Transparency as Foundation

Whether it's:
- TaskBoardAI's visible JSON files
- context-kit's explicit semantic definitions
- DocuSearch's source citations with page images

**Making systems transparent serves both humans and AI agents.** Visibility enables trust, verification, and effective collaboration.

### 4. File-Native When Possible

All three projects use file-based architectures because:
- Both people and AI agents understand files
- Version control comes naturally
- No database abstraction layer
- Direct access when needed
- Simple deployment

This isn't dogma—databases have their place—but for collaboration tools, files serve both audiences well.

---

## Skills Demonstrated Across Projects

### Traditional UX Skills
✅ User research and stakeholder interviews  
✅ Information architecture  
✅ Interaction design  
✅ Iterative prototyping  
✅ Usability validation  
✅ Visual design systems  

### AI UX (AGx) Skills
✅ Agent Experience research methodology  
✅ Dual-interface design patterns  
✅ Context architecture for AI consumption  
✅ Multi-modal system design  
✅ File-native collaboration systems  
✅ Real-time feedback for async AI processes  
✅ Source verification and citation design  

### Technical Skills
✅ Full-stack development (React, TypeScript, Node.js, Python)  
✅ ML integration (ColPali, ChromaDB, Whisper, MCP)  
✅ Service-oriented architecture  
✅ Real-time systems (WebSocket)  
✅ API design (REST + MCP protocols)  
✅ Database design (SQLite, ChromaDB, JSON files)  

### Process Skills
✅ Rapid iteration and prototyping  
✅ Documentation-driven development  
✅ Dogfooding as validation  
✅ Design systems thinking  
✅ Parallel agent orchestration  

---

## The Evolution in Practice

### Project Complexity Progression

**TaskBoardAI:**  
Single data type (tasks), dual interfaces, file-based storage

**tkr-context-kit:**  
Multiple data types (structure, relationships, operations), information architecture focus

**DocuSearch:**  
21 file formats, multi-modal understanding, production-scale system

### AGx Research Maturity

**TaskBoardAI:**  
Informal observation of agent behavior, discovering preferences

**tkr-context-kit:**  
Systematic agent interviews, documented methodology, iterative feedback

**DocuSearch:**  
Applied AGx principles from start, designed with agents throughout development

### Production Readiness

**TaskBoardAI:**  
NPM package, working tool, personal use

**tkr-context-kit:**  
Production toolkit, automated updates, service architecture

**DocuSearch:**  
Production-ready system, comprehensive testing, documentation, 15-day build cycle

---

## What This Portfolio Demonstrates

### For Traditional UX Roles

These projects show mastery of core UX skills—research, information architecture, interaction design, validation—applied to a new problem space. The methodology transfers; the domain expands.

### For AI UX Roles

These projects demonstrate pioneering work in Agent Experience design:
- Systematic research methodology with AI users
- Dual-interface design patterns
- Production implementation of AGx principles
- Information architecture specifically for agent consumption

### For Product/Technical Roles

These projects prove ability to:
- Build production-ready systems independently
- Architect multi-service applications
- Integrate ML technologies (ColPali, Whisper, ChromaDB)
- Design and implement APIs (REST, MCP, WebSocket)
- Ship iteratively with comprehensive documentation

---

## The Core Message

**AI UX isn't traditional UX with a chatbot added**—it's fundamentally designing for collaboration between people and AI agents, where both need natural interfaces to the same information.

The future of UX involves designing for **at least two user types**: people and AI agents. Systems that optimize for both will enable new forms of collaboration we're only beginning to explore.

These three projects represent my exploration of this frontier—learning how to design systems where people and AI work together naturally, each through interfaces that respect their needs and interaction patterns.

---

## Project Status Summary

| Project | Status | Distribution | Tech Stack |
|---------|--------|--------------|------------|
| **TaskBoardAI** | Production | NPM package | Node.js, Express, MCP, vanilla JS |
| **tkr-context-kit** | Production | Open-source toolkit | TypeScript, React 19, SQLite, Node.js |
| **DocuSearch** | Production | Open-source | React 19, Python 3.14, ColPali, Whisper |

All three projects are actively maintained, documented, and available for review.

---

## Contact

**Portfolio:** www.tucker.sh  
**LinkedIn:** www.linkedin.com/li/tuckerharleybrown  
**Email:** connect@tucker.sh  

*I solve big problems in small ways—creating software where people and AI collaborate naturally.*

# TaskBoardAI
## Kanban Board for People-AI Collaboration

---

**Challenge:**  
I was managing tasks in markdown files—simple and version-controllable, but frustrating to maintain. Lists don't show status visually, reorganizing means manual text editing, and AI agents struggle with unstructured markdown. I needed visual kanban for myself and structured data for AI agents, without maintaining two systems.

**My Role:**  
Solo designer and developer—interaction design, file architecture, MCP integration, full-stack implementation.

---

## Understand

### The Core Problem
I wanted to use markdown for tasks because they're simple, but maintaining them became tedious:
- **No visual status** - Reading nested lists doesn't show project health
- **Manual reorganization** - Moving tasks between sections means cut/paste
- **AI confusion** - Agents had to parse unstructured text and rewrite entire files
- **Missing metadata** - Markdown doesn't naturally capture task states

**The insight:** AI agents and people have fundamentally different interaction preferences. I could create a system where I'd enjoy visual, drag-and-drop kanban while agents could efficiently parse and modify structured data—both working with the same tasks.

### Research Through Dogfooding

My validation process was practical: **I used TaskBoardAI daily while building other projects**. When errors appeared or workflows felt clunky, I'd iterate immediately. This real-time feedback loop revealed what mattered.

**What I learned:**
- Visual feedback is essential even though data lives in files
- AI agents need unambiguous data structures—optional fields cause confusion
- State changes happen constantly—optimize for card movement
- MCP's automatic context makes agent interactions dramatically smoother

---

## Solve

### Design Decisions

**1. File-Based Architecture**
I chose JSON files over a database because both people and AI agents work naturally with files:
- AI agents prefer file operations to database queries
- I can version control tasks in git
- No database setup—just files on disk
- Both UI and agents work with identical data

**2. Card-First Data Structure**
Instead of "columns containing cards," I designed "cards that reference columns." Each card is an independent JSON file with a `columnId` attribute.

**Why this matters:**
- Moving a card = changing one attribute (not restructuring arrays)
- Performance stays responsive with 100+ cards
- AI agents work with individual cards, not nested structures
- The system optimizes for the most frequent operation

**3. Model Context Protocol (MCP) Integration**
MCP provides automatic context instead of requiring me to explain TaskBoardAI's structure in every prompt.

**Before MCP:**  
"Create a JSON file with fields: title (string), description (string), columnId (string matching existing columns)..."

**After MCP:**  
"Add a card for fixing the authentication bug."

The agent handles data structure, formatting, and placement automatically.

### Technical Implementation

**Backend:**
- Node.js + Express for REST API
- JSON file-based storage with atomic writes
- MCP SDK for AI integration
- Security headers with Helmet.js

**Frontend:**
- Vanilla JavaScript (no framework overhead)
- Native drag-and-drop API
- Responsive design for mobile/desktop
- Simple, hackable codebase

**Features Developed:**
- Markdown descriptions with subtasks, tags, dependencies
- Multi-board management with project isolation
- Web UI + CLI tools (both work with same files)
- Webhook support for external integrations

---

## Create

### Development Approach

I built TaskBoardAI iteratively, using it to manage its own development. This dogfooding revealed:

**Performance insights:**
- Card movement is the most frequent operation → optimize for it
- Visual feedback matters even with file-based storage
- MCP transforms agent collaboration from transactional to conversational

**Architecture validation:**
- File-based design works well for personal/team scale
- Card-first structure delivers responsive performance
- Vanilla JavaScript keeps codebase accessible

### Key Technical Wins

**Atomic File Operations:**  
Write to temporary files, then rename—prevents corruption from crashes or concurrent access.

**MCP Server Integration:**  
Agents can create, update, move, and delete cards through natural language without JSON knowledge.

**Multi-Board Isolation:**  
Each board is independent—different projects don't interfere, boards can live alongside code repositories.

**CLI + Web UI Parity:**  
Both interfaces work with identical JSON files—no synchronization, no translation layer.

---

## Verify

### Real-World Usage

**Personal validation:**  
I use TaskBoardAI daily to manage all my projects. The dual-interface design means I switch between visual board (when thinking about project status) and agent conversations (when planning work)—both feel natural for their context.

**Technical validation:**
- File-based architecture proves viable for personal/team task management
- Card-first design delivers responsive performance with 100+ cards  
- MCP integration enables natural language task management
- Vanilla JavaScript keeps the codebase maintainable

### What Changed

**For me:**  
Visual board shows project status instantly. AI agents help create and organize tasks through conversation. The system fits my workflow instead of forcing me into rigid structures.

**For AI collaboration:**  
MCP integration transformed task management from "explaining data structures" to "discussing actual work." Reduced friction made collaboration feel natural.

**Technical proof points:**
- NPM package with global CLI commands
- Comprehensive test suite with Jest
- Full API documentation with JSDoc
- Production-ready deployment

---

## Reflection

### What Worked

**File-based architecture was the right choice.** Both people and AI agents work naturally with files. Version control comes free. Deployment is trivial. The simplicity serves both audiences without compromising either.

**Optimizing for card movement paid off.** By making it a single-attribute change rather than array restructuring, the system stays responsive. Observing my own usage patterns revealed what to optimize.

**MCP changed everything.** Natural language task management instead of JSON formatting. Agents handle translation between conversation and data structures automatically.

### What I'd Do Differently

**Add batch operations sooner** - Moving multiple cards at once would be useful  
**Build CLI alongside web UI** - CLI tools came later but should have been first-class from the start  
**Create board templates earlier** - Different workflows (agile, GTD, personal) could have pre-configured boards  

**What I'd keep:** File-based architecture, card-first design, and MCP integration. These decisions proved correct through actual usage.

### What This Taught Me

**Dual-interface design requires understanding both users.** People need visual feedback and intuitive interactions. AI agents need unambiguous data structures and file-based operations. Serving both well requires intentional architectural choices.

**Dogfooding reveals truth.** Using TaskBoardAI to manage TaskBoardAI's development exposed every rough edge. Features that seemed useful in planning turned out to be rarely used. Real usage differs from imagined usage—always test with actual work.

**MCP transforms collaboration.** When context is automatic, conversations focus on actual work instead of data formatting. This reduced friction makes AI feel like a collaborator, not a tool.

---

**Project Status:** Production-ready, actively used  
**Distribution:** Open-source NPM package  
**Technologies:** Node.js, Express, MCP SDK, vanilla JavaScript, JSON storage  

**View Full Case Study:** [Link to detailed walkthrough]

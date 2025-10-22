# TaskBoardAI: Designing Kanban for Human-AI Collaboration

**I created TaskBoardAI to solve a workflow problem I was experiencing firsthand.** I knew I could manage to-do lists through markdown files, but I found them challenging to maintain and update effectively. I needed a solution that would let both AI agents and humans view and interact with the same task information, but in ways that felt natural to each.

## The Problem: Markdown Lists Are Great Until They're Not

I was managing tasks in markdown files because they're simple, version-controllable, and easy to edit. But maintaining them became frustrating:

- **Hard to visualize** - Reading nested bullet points doesn't show you project status at a glance
- **Tedious to reorganize** - Moving tasks between sections means cutting and pasting text
- **AI agents struggle** - When I asked agents to update tasks, they'd have to parse unstructured text and rewrite entire sections
- **No status tracking** - Markdown doesn't naturally capture "in progress" vs "blocked" vs "done"

I wanted the visual, drag-and-drop experience of a kanban board for myself, but I also wanted AI agents to efficiently parse and modify the underlying data. Most importantly, **both of us needed to work with the same information** without constant translation or synchronization.

## Understanding the Dual-User Problem

This was fundamentally a **dual-interface design challenge**. I needed to understand how both users—human (me) and AI agents—naturally wanted to interact with task information.

**What I needed as a human:**
- Visual board showing task distribution across columns
- Drag-and-drop to move cards between states
- Quick scanning to understand project status
- Web interface accessible from any device

**What AI agents needed:**
- Structured data they could parse reliably
- File-based operations (their comfort zone)
- Clear task attributes without ambiguity
- Ability to create, update, and reorganize tasks programmatically

**The key insight:** AI agents and humans have fundamentally different interaction preferences. I could create a kanban board where I'd enjoy the visual, drag-and-drop experience of moving cards between columns, while AI agents could efficiently parse and modify the underlying data structure through file operations.

## Solution: One Data Structure, Two Natural Interfaces

I chose a **file-based architecture** specifically because it serves both users well. As a human, I can still read the kanban structure directly if needed, and AI agents can leverage their existing file editing capabilities rather than requiring database management skills.

### The File-Based Architecture

Tasks are stored in JSON files organized by board:
```
boards/
  personal/
    board.json
    cards/
      card-001.json
      card-002.json
```

This structure emerged from understanding how AI agents actually work best—**they're more comfortable with file operations than database queries**. When an agent needs to update a task, they just edit a JSON file. When I want to move a card, the web UI updates the same file.

### Card-First Design

Rather than storing "columns with cards," I designed a **card-first architecture**. Each card is an independent entity with a `columnId` attribute. This means:

- Moving a card = changing one attribute (not restructuring the whole board)
- Cards can be reassigned to any column with a single change
- Performance stays responsive even with many cards
- AI agents can work with individual cards without loading entire boards

This architectural decision came from watching how I actually used kanban boards—constantly reorganizing, not just viewing static structures.

### The Model Context Protocol (MCP) Integration

The MCP integration was a game-changer in my development process. Instead of cluttering my prompts with JSON examples every time I wanted an AI agent to interact with the board, the MCP server provides that context automatically.

When I tell an agent "create a card for fixing the authentication bug," the MCP server handles:
- Understanding TaskBoardAI's data structure
- Creating properly formatted JSON
- Placing the card in the correct column
- Updating the board state

This made conversations with AI agents feel much more natural when managing tasks.

## Key Features Developed

### Markdown Support with Rich Metadata
Cards support markdown descriptions with:
- **Subtasks** - Break down work into smaller pieces
- **Tags** - Categorize and filter cards
- **Dependencies** - Link cards that block each other
- **Due dates** - Track time-sensitive work

### Multi-Board Management
Different projects get separate boards with complete isolation:
- No cross-contamination of tasks
- Each board has its own columns and workflow
- External board locations support repository integration
- Boards can live alongside project code

### Web Interface + CLI Tools
- **Web UI:** Drag-and-drop interface for visual task management
- **CLI:** Command-line tools for automation and scripting
- Both interfaces work with the same JSON files
- No synchronization needed—changes are immediate

### Built for AI Integration
- MCP server enables seamless integration with Claude, Cursor, Windsurf
- JSON-based persistence optimized for AI context understanding
- Clear data structures without ambiguity
- Webhook support for external service integration

## Design Decisions: Serving Both Users

### Why File-Based Instead of Database?

I chose JSON files over a traditional database because:

1. **AI agents prefer file operations** - They're built to read and write files
2. **Human-readable backups** - I can version control my tasks in git
3. **Simple deployment** - No database setup, just files on disk
4. **Direct access** - Both UI and agents work with the same files
5. **Portable** - Move boards between machines by copying directories

The tradeoff is scalability (thousands of cards might be slow), but for personal/team task management, files work beautifully.

### Why Card-First Architecture?

Traditional kanban apps store data as "columns containing cards." I inverted this to "cards that reference columns" because:

**Performance:** Changing one attribute is faster than restructuring arrays  
**Flexibility:** Cards can move between columns without complex operations  
**AI-friendly:** Agents work with individual card files, not nested structures  
**Responsiveness:** UI updates feel instant because changes are minimal

This design emerged from dogfooding—using TaskBoardAI to manage TaskBoardAI's development. I noticed that card movement was the most frequent operation, so I optimized for it.

### Why MCP Over Direct API?

The Model Context Protocol provides context automatically rather than requiring me to explain TaskBoardAI's structure in every prompt. This means:

- **Natural conversations** - "Add a card" instead of "Create JSON with these specific fields"
- **Consistent formatting** - MCP ensures proper data structures
- **Reduced errors** - Agents don't guess at field names or formats
- **Better integration** - Works with multiple AI tools (Claude, Cursor, Windsurf)

MCP transformed TaskBoardAI from "a tool I built" to "a tool I actually use daily."

## The Validation Process

My validation was practical and iterative—**I used TaskBoardAI daily while creating other software projects**. When errors appeared in the terminal or console, I'd discuss them directly with AI agents to find solutions.

This real-time feedback loop between myself, AI agents, and the tool itself became an invaluable testing environment for understanding how human-AI collaboration actually works in practice.

**What I learned from dogfooding:**

1. **Visual feedback matters** - Even though data is in files, humans need the web UI for quick status checks
2. **AI agents are literal** - Ambiguous field names or optional attributes caused confusion; clarity is essential
3. **State changes are frequent** - Optimizing for card movement was the right choice
4. **Context is everything** - MCP's automatic context made agent interactions dramatically smoother

## Technical Stack

**Backend:**
- Node.js + Express.js for REST API
- JSON file-based storage with atomic writes
- MCP SDK for AI integration
- Helmet.js for security headers

**Frontend:**
- Vanilla JavaScript (deliberately simple)
- Native drag-and-drop API
- Responsive design for mobile/desktop
- No framework overhead—just HTML/CSS/JS

**Testing & Documentation:**
- Jest for unit and integration tests
- JSDoc for API documentation
- Comprehensive test coverage
- NPM package with global CLI commands

**Why vanilla JavaScript?** I wanted TaskBoardAI to be approachable and hackable. No build pipeline, no framework lock-in—just files you can read and modify. This aligns with the file-based philosophy: keep things simple and transparent.

## Impact: From Frustration to Flow

**What changed for me:**

I now manage all my projects through TaskBoardAI. The visual board shows me project status instantly, while AI agents help me create and organize tasks through natural conversation. The dual-interface design means I use whichever interaction mode fits the moment—dragging cards when thinking visually, talking to agents when planning work.

**What changed for AI agent collaboration:**

The MCP integration transformed how I work with AI on tasks. Instead of explaining data structures or formatting requirements, I just say "add a card for X" and the agent handles it correctly. This reduced friction made task management feel collaborative rather than transactional.

**Technical validation:**

- File-based architecture proves viable for personal/team task management
- Card-first design delivers responsive performance with 100+ cards
- MCP integration enables natural language task management
- Vanilla JavaScript keeps the codebase accessible and maintainable

## Lessons: Designing for Collaborative Workflows

### File-Based Beats Database-Based (For This Use Case)

The decision to use JSON files instead of a database proved correct. Both humans and AI agents work naturally with files. Version control comes free. Deployment is trivial. The simplicity serves both audiences without compromising either.

### Optimize for the Most Frequent Operation

Card movement happens constantly. By making it a single-attribute change rather than array restructuring, the system stays responsive and predictable. Observing my own usage patterns revealed what to optimize.

### MCP Changes the Collaboration Dynamic

Before MCP: "Create a JSON file with fields: title (string), description (string), columnId (string matching existing columns), tags (array)..."

After MCP: "Add a card for fixing the authentication bug."

The difference is dramatic. MCP handles the translation between natural language and data structures, letting me focus on the actual work.

### Dogfooding Reveals Truth

Using TaskBoardAI to manage TaskBoardAI's development exposed every rough edge. Features that seemed useful in planning turned out to be rarely used. Operations I thought would be occasional happened constantly. Real usage patterns differ from imagined ones—testing with actual work reveals what matters.

## What I'd Do Differently

If starting over, I'd:

- **Add batch operations sooner** - Moving multiple cards at once would be useful
- **Build the CLI alongside the web UI** - I added CLI tools later but they should have been first-class from the start
- **Create more board templates** - Different workflows (agile, GTD, personal tasks) could have template boards
- **Add card linking earlier** - Dependencies came late but proved valuable

But I wouldn't change the core decisions: file-based architecture, card-first design, or MCP integration. These proved correct through actual usage.

## Looking Forward

TaskBoardAI demonstrates that **task management can serve both humans and AI agents naturally**. The dual-interface approach—visual for humans, file-based for agents—enables new workflows where both parties contribute.

Future directions include:

- **Collaborative features** - Multiple users with real-time sync
- **Timeline views** - Gantt-style visualization from task dependencies  
- **Automation rules** - "When card moves to Done, archive after 7 days"
- **Integration webhooks** - Connect to GitHub, Slack, etc.

But the core lesson remains: **design for the actual interaction patterns of both users**—human and AI—and the system will feel natural to both.

---

**Project Type:** Personal productivity tool (open-source)  
**My Role:** Solo designer + developer  
**Tech Stack:** Node.js, Express, MCP SDK, vanilla JavaScript, JSON storage  
**Distribution:** NPM package with global CLI + web interface  

**Skills Demonstrated:**
- Dual-interface UX design
- File-native architecture patterns
- MCP integration for AI collaboration
- API design (REST + MCP protocols)
- Full-stack development
- Dogfooding as validation methodology

---

*What started as solving my own markdown to-do list frustrations evolved into a deeper exploration of how humans and AI can collaborate effectively on task management, with each party interacting through their preferred interface while working with the same underlying data.*

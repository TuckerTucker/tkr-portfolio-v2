## tkr-kanban Project Page Structure

### Page Flow (Tucker Framework)
**Problem → Understanding → Solution → Impact**

---

### 1. **Hero/Hook Section**
- **Problem Statement** (2 sentences)
  - Pain point: Markdown to-do lists are hard to maintain; needed system both I and AI agents could use naturally
  - Core insight: Same data, different interfaces—humans need visual drag-and-drop, agents need structured files
  
- **Visual**: Side-by-side showing human drag-and-drop UI + AI agent MCP tool call

---

### 2. **Understand Phase**
**Title**: "Designing for Two Kinds of Users"

- **The Personal Problem**:
  - Managing to-do lists in markdown files was challenging
  - Wanted both visual kanban board AND AI agent access
  - Realized: AI agents and humans have fundamentally different interaction preferences

- **The Research Question**:
  - "How do humans and AI want to interact with the same information?"
  - Humans: Visual scanning, drag-and-drop, immediate feedback
  - AI agents: File operations, structured data, batch modifications

- **Mental Model Discovery**:
  - Asking AI agents what they need: "What context formats work best for you?"
  - Discovering agents prefer YAML over JSON for hierarchy and semantic anchors
  - Understanding agents are more comfortable with files than databases

- **Artifacts to show**:
  - Sketch/notes on "same data, different interface" concept
  - Comparison: How Tucker interacts vs how agents interact
  - Early chat with agent about context format preferences

---

### 3. **Solve Phase**
**Title**: "File-Based Architecture as Dual Interface"

- **Core Design Decision: Files as Common Ground**
  - Why files: Humans can read JSON/YAML directly, agents use existing editing skills
  - No database = no query language barrier for agents
  - Git-friendly = version control for free
  - Each board is a single JSON file both parties can access

- **MCP as Agent-First Interface**
  - No prompt clutter—schema lives in the protocol
  - Natural language tool descriptions help agents choose correctly
  - Embedded guidance in responses (tips objects teach agents usage)
  - Example: Agent says "create board for project X" → MCP tools handle it

- **The Spec→Board Workflow**:
  - How agents translate requirements documents into kanban cards
  - Batch operations for atomic multi-card creation
  - Template-based board generation from specifications

- **Artifacts to show**:
  - Architecture diagram: File in center, human UI on left, MCP tools on right
  - MCP tool example with natural language description
  - Board format specification excerpt (BOARD_FORMAT.md)
  - Real example: Spec document → generated board JSON

---

### 4. **Create Phase**
**Title**: "Building the Dual Experience"

- **For Human Users** (Select 3 key patterns):
  - **Contextual inline feedback**: Card shows its own state (uploading, processing, complete)
  - **Two-step delete confirmation**: Expands in place, no modal interruption
  - **Smart column detection**: Name column "Backlog" → automatically gets todo styling

- **For AI Agent Users** (Select 3 key patterns):
  - **Batch operations**: Create 10 cards, update 5, move 3 in one atomic operation
  - **Embedded guidance**: API responses include tips on what to do next
  - **Format flexibility**: Agents can request 'summary', 'compact', or 'full' formats

- **The Iteration with Agents**:
  - Real conversations: "What's missing? What's redundant? What isn't required?"
  - YAML vs JSON discussion—agents preferred YAML's hierarchy
  - Semantic anchors discovered by watching agent processing patterns
  - Quote from docs: "I'm doing AGx design—Agent Experience design"

- **Artifacts to show**:
  - Card state progression (visual for humans)
  - Batch operation JSON example (structural for agents)
  - Chat excerpt: Agent feedback improving context format
  - Semantic anchors example: &tech-stack defined once, referenced multiple times

---

### 5. **Verify Phase**
**Title**: "Daily Use as Testing Environment"

- **Personal Validation**:
  - Used daily while creating other software projects
  - Errors spotted in terminal/console became improvement opportunities
  - Iterative feedback loop: me + agents + tool itself

- **Agent Validation**:
  - Claude Desktop integration testing
  - Natural language commands working reliably
  - Agents creating/managing boards without human intervention

- **The Evidence**:
  - 50 documented design patterns (30% AI-focused, 30% human-focused, 40% hybrid)
  - Proof agents were ALWAYS intended users, not retrofitted

- **Artifacts to show**:
  - Claude Desktop screenshot: Natural conversation managing board
  - Terminal output: Successful agent operations
  - Design philosophy count: 15 AI-agent-centered patterns

---

### 6. **Impact/Reflection Section**
**Title**: "What AI Agents Taught Me About Design"

- **Key Insights**:
  - AI agents ARE users—they need user research, personas, mental models
  - Conducted "user interviews" with AI agents about context preferences
  - File-based architecture enables collaboration without coordination
  - Dual interfaces require thinking about interaction modality from day one

- **The Bigger Picture**:
  - This is AGx design (Agent Experience design)
  - Traditional UX methods apply: stakeholder interviews → agent interviews
  - Skills from human UX transfer directly to agent UX

- **What Stayed, What Changed**:
  - Core structure proven effective (wouldn't change much)
  - Future: History system for recurring bugs, architectural decision logs
  - Focus: Streamline interactions while maintaining dual-interface philosophy

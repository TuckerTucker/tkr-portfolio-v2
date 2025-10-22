# TaskBoardAI - Kanban for Human-AI Collaboration

## One-Liner
I designed a kanban board where humans drag cards visually while AI agents edit JSON files—both working with the same tasks naturally.

## The Problem (30-second version)
I managed tasks in markdown files because they're simple and version-controllable, but maintaining them was frustrating. Lists don't show status visually, reorganizing means cutting and pasting text, and AI agents struggle to parse unstructured markdown. I needed visual kanban for myself and structured data for AI agents—without maintaining two separate systems.

## The Solution
TaskBoardAI uses file-based architecture with dual interfaces. I interact through a drag-and-drop web UI. AI agents interact through JSON files and MCP integration. Both work with the same task data—no synchronization needed.

**Key Innovation:** Card-first architecture. Instead of "columns containing cards," each card is independent with a `columnId` attribute. Moving a card = changing one attribute. This makes the system responsive for humans and simple for AI agents.

## The Impact
- **File-native design** means both humans and AI agents work naturally with tasks
- **MCP integration** enables conversations like "add a card for fixing the authentication bug"
- **Card-first architecture** keeps the UI responsive even with 100+ cards
- **Open-source NPM package** with web interface + CLI tools

**Personal validation:** I use TaskBoardAI daily to manage all my projects. The dual-interface design means I switch between visual board and agent conversations depending on the task—both feel natural.

## Skills Showcased
- **Dual-interface UX** - Different interaction modes for the same data
- **File-native architecture** - Serving both humans and AI without databases
- **MCP integration** - Enabling natural language task management
- **API design** - REST endpoints + MCP server
- **Dogfooding validation** - Using the tool to build the tool

---

**Technologies:** Node.js, Express, MCP SDK, vanilla JavaScript, JSON storage  
**Distribution:** NPM package with global CLI commands  
**Outcome:** Production tool used daily for personal project management

# Kanban Interactive Demo Suite Implementation Plan

**Goal:** Create 4 interactive component demos for tkr-portfolio-v2 Kanban case study showcasing card states, dual-interface architecture, smart column detection, and MCP tool interactions.

**Constraints:**
- Vanilla JavaScript (kanban) vs React + TypeScript (portfolio)
- Need to adapt or rebuild components in React
- No backend dependencies - all demos must work standalone
- Demonstrate both human and AI agent interaction patterns

**Priority:** Quality (accurate representation of dual-interface philosophy)

---

## Demo Concept Overview

Based on page outline and kanban architecture, these demos illustrate:
1. **Visual UX patterns** - How humans interact (drag-drop, collapse, delete)
2. **Agent UX patterns** - How AI agents interact (batch operations, structured data)
3. **Dual interface** - Same data, different interaction modalities
4. **File-based architecture** - JSON as common ground between human and agent

---

## Task List

### Foundation & Infrastructure

1. **Create demo directory structure in portfolio**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/`
   - Subdirectories: `card-states/`, `dual-interface/`, `mcp-tools/`, `spec-to-board/`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/`
   - Shared utilities: `mockData.ts`, `boardFormat.ts`, `helpers.ts`

2. **Extract and adapt design system**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/base/_variables.css`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/components/_card.css`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/components/_column.css`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/kanban-demo.css`
   - Create scoped stylesheet with `.kanban-demo` wrapper class compatible with Tailwind
   - Adapt card state colors (todo: blue, doing: yellow, review: orange, done: green)

3. **Create mock board data generator**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/docs/BOARD_FORMAT.md`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/mockData.ts`
   - Board JSON factory following `BOARD_FORMAT.md` specification
   - Sample cards with subtasks, tags, dependencies
   - Multiple column types to demonstrate smart detection
   - TypeScript interfaces for type safety

### Demo 1: Card Interaction States

**Purpose:** Show human visual interaction patterns - collapse, delete, drag, dependency highlighting

4. **Build React Card component**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Card.js`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/card-states/Card.tsx`
   - Convert from Vanilla JS class to React functional component
   - Collapsible state with smooth transition
   - Subtasks with checkmark visualization
   - Tags and dependencies rendering
   - Markdown content support (use react-markdown)

5. **Create Card demo wrapper**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/card-states/CardStatesDemo.tsx`
   - Display 3-4 cards demonstrating different features:
     - Card with subtasks (some checked, some not)
     - Card with dependencies (click to highlight)
     - Card with tags and markdown content
     - Collapsed card showing minimal state
   - Interactive collapse/expand buttons
   - Dependency click → highlight target card (3s timeout)

6. **Add smart column styling**
   - **Build in:** Same `CardStatesDemo.tsx` component
   - Show same card in different column types (todo, doing, review, done)
   - Header color changes based on column type
   - Demonstrate automatic detection logic from `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Column.js` (lines 9-49)

### Demo 2: Dual Interface Comparison

**Purpose:** Show same data accessed by human (visual) vs agent (structured)

7. **Create split-view demo component**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/DualInterfaceDemo.tsx`
   - Left side: Visual kanban board (human interface)
   - Right side: JSON representation (agent interface)
   - Same underlying data object powering both views

8. **Build mini kanban board display**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Column.js`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/MiniBoard.tsx`
   - Simplified React kanban with 3 columns
   - 2-3 cards per column (reuse Card component from Demo 1)
   - Drag-and-drop enabled (use @dnd-kit/core)
   - Updates JSON in real-time

9. **Add JSON viewer panel**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/JsonViewer.tsx`
   - Syntax-highlighted JSON display (use react-syntax-highlighter)
   - Updates when board changes (cards moved, edited, deleted)
   - Optional: Toggle between JSON and YAML formats
   - Show how agents see the same data

10. **Add interaction highlighting**
    - **Build in:** Same `DualInterfaceDemo.tsx` component
    - When user drags card → highlight corresponding JSON update
    - Click JSON field → highlight corresponding UI element
    - Demonstrates bidirectional sync

### Demo 3: MCP Tool Call Visualization

**Purpose:** Show how AI agents interact via MCP tools with natural language descriptions

11. **Create MCP tool showcase component**
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/cards.js`
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/boards.js`
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/mcp-tools/McpToolsDemo.tsx`
    - Display 3-4 key MCP tool signatures:
      - `create-card` - with natural language description
      - `batch-cards` - showing multiple card creation at once
      - `update-card` - modifying existing card
      - `get-board` - with format options (summary/compact/full)

12. **Build interactive tool simulator**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/mcp-tools/ToolSimulator.tsx`
    - Input field for "agent request" (natural language)
    - Button to "execute" → shows MCP tool call
    - Display tool response with embedded guidance/tips
    - Example: "Create 3 cards for user auth feature" → batch-cards tool call

13. **Add guidance demonstration**
    - **Build in:** Same `McpToolsDemo.tsx` component
    - Show tool responses include "tips" object
    - Example: After creating cards, suggest "You can now use move-card to organize them"
    - Highlight how protocol teaches agents usage patterns

### Demo 4: Spec-to-Board Generation

**Purpose:** Show workflow of agent translating requirements into kanban board

14. **Create spec input component**
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/templates.js`
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/spec-to-board/SpecToBoardDemo.tsx`
    - Text area with sample requirements document
    - Example spec: Feature description with acceptance criteria
    - Button to "Generate Board"

15. **Build board generation visualization**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/spec-to-board/GenerationVisualization.tsx`
    - Animated sequence showing:
      1. Spec text → parsed into structure
      2. Columns created (Todo, In Progress, Review, Done)
      3. Cards generated from requirements
      4. Dependencies detected and linked
      5. Tags applied automatically
    - Step-by-step reveal (not instant)

16. **Add template demonstration**
    - **Build in:** Same `SpecToBoardDemo.tsx` component
    - Show different spec formats:
      - User story format
      - Technical specification
      - Bug report list
    - Each generates appropriate board structure
    - Demonstrate batch operations atomicity

### Integration with Portfolio

17. **Create demo section wrapper component**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/KanbanDemos.tsx`
    - Renders each demo in collapsible/tabbed sections
    - Headers with clear descriptions
    - Responsive layout
    - Code snippets showing JSON/tool signatures

18. **Update Kanban case study content**
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/content/case-studies/kanban.ts` (if exists, else create)
    - **Edit:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/pages/Kanban.tsx`
    - Add demos to `kanban.ts` content structure:
      - Demo 1 → "Create Phase - For Human Users"
      - Demo 2 → "Solve Phase - File-Based Architecture as Dual Interface"
      - Demo 3 → "Create Phase - For AI Agent Users"
      - Demo 4 → "Solve Phase - The Spec→Board Workflow"
    - Write descriptions linking demos to design decisions

19. **Test React compatibility**
    - Verify all hooks, state management work correctly
    - Test drag-and-drop library integration
    - Ensure JSON parsing/display performs well
    - Check markdown rendering

20. **Visual QA and polish**
    - Compare colors/styling with actual kanban app
    - Verify column type detection logic matches
    - Test responsive behavior
    - Smooth all animations

21. **Add educational annotations (optional)**
    - Hover tooltips explaining design decisions
    - "Why this matters" callouts
    - Links to BOARD_FORMAT.md or MCP tool docs
    - AGx design principles highlighted

---

## Dependencies Map

- **Tasks 1-3:** No dependencies (foundation)
- **Tasks 4-6:** Depend on 1-3
- **Tasks 7-10:** Depend on 1-3, 4-6 (reuse Card component)
- **Tasks 11-13:** Depend on 1-3
- **Tasks 14-16:** Depend on 1-3, 4-6 (reuse Card/Board rendering)
- **Tasks 17-18:** Depend on 4-16 (all demos complete)
- **Tasks 19-21:** Depend on 17-18 (integration complete)

---

## Optimal Execution Order

**Sequential approach:** Build infrastructure (1-3) → demos can be built in parallel (4-16) → integrate (17-18) → polish (19-21)

**Parallelization opportunity:** Tasks 4-6, 11-13 can start immediately after 1-3. Tasks 7-10 and 14-16 require Card component from 4-6.

**Recommended order for solo development:**
1. Foundation (tasks 1-3)
2. Demo 1: Card States (tasks 4-6) - foundational component
3. Demo 2: Dual Interface (tasks 7-10) - reuses card, high-impact visual
4. Demo 3: MCP Tools (tasks 11-13) - independent, shows agent side
5. Demo 4: Spec-to-Board (tasks 14-16) - builds on cards + generation concept
6. Integration (tasks 17-18)
7. Polish (tasks 19-21)

---

## Component Source Locations

### Kanban Source Files (Read From)

**Demo 1 (Card States):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Card.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Column.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/components/_card.css`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/base/_variables.css`

**Demo 2 (Dual Interface):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Card.js` (reuse from Demo 1)
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Column.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/docs/BOARD_FORMAT.md`

**Demo 3 (MCP Tools):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/cards.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/boards.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/templates.js`

**Demo 4 (Spec-to-Board):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/templates.js`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/cards.js`
- Combination of Card + Column components (already read)

**Shared:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/docs/BOARD_FORMAT.md`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/base/_variables.css`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/components/_column.css`

### Portfolio Build Locations

**Demo 1 (Card States):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/card-states/Card.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/card-states/CardStatesDemo.tsx`

**Demo 2 (Dual Interface):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/DualInterfaceDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/MiniBoard.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/dual-interface/JsonViewer.tsx`

**Demo 3 (MCP Tools):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/mcp-tools/McpToolsDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/mcp-tools/ToolSimulator.tsx`

**Demo 4 (Spec-to-Board):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/spec-to-board/SpecToBoardDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/spec-to-board/GenerationVisualization.tsx`

**Shared:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/mockData.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/boardFormat.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/helpers.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/shared/kanban-demo.css`

**Integration:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/KanbanDemos.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/content/case-studies/kanban.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/pages/Kanban.tsx`

---

## Mock Data Requirements

### Board Mock Data (All Demos)
```javascript
{
  "projectName": "Demo Kanban Board",
  "id": "demo-board-1",
  "columns": [
    { "id": "col-1", "name": "To Do" },
    { "id": "col-2", "name": "In Progress" },
    { "id": "col-3", "name": "Review" },
    { "id": "col-4", "name": "Done" }
  ],
  "cards": [
    {
      "id": "card-1",
      "title": "Design user authentication flow",
      "content": "Create wireframes and user flows for **login**, **signup**, and **password reset**.",
      "columnId": "col-1",
      "position": 0,
      "collapsed": false,
      "subtasks": [
        "✓ Research best practices",
        "Create wireframes",
        "Review with team"
      ],
      "tags": ["design", "auth", "high-priority"],
      "dependencies": [],
      "priority": "high"
    },
    {
      "id": "card-2",
      "title": "Implement OAuth integration",
      "content": "Add support for Google and GitHub OAuth providers.",
      "columnId": "col-2",
      "position": 0,
      "collapsed": false,
      "subtasks": [
        "✓ Set up OAuth credentials",
        "Implement Google provider",
        "Implement GitHub provider",
        "Add error handling"
      ],
      "tags": ["backend", "auth"],
      "dependencies": ["card-1"],
      "priority": "high"
    },
    {
      "id": "card-3",
      "title": "Write integration tests",
      "content": "Comprehensive test coverage for authentication flows.",
      "columnId": "col-3",
      "position": 0,
      "collapsed": false,
      "subtasks": [
        "✓ Test login flow",
        "Test signup flow",
        "Test OAuth flows"
      ],
      "tags": ["testing", "auth"],
      "dependencies": ["card-2"]
    },
    {
      "id": "card-4",
      "title": "Documentation update",
      "content": "Update API docs with new auth endpoints.",
      "columnId": "col-4",
      "position": 0,
      "collapsed": true,
      "subtasks": ["✓ Write API reference", "✓ Add code examples"],
      "tags": ["docs"],
      "dependencies": []
    }
  ],
  "next-steps": [
    "Begin security audit of auth system",
    "Plan two-factor authentication feature"
  ]
}
```

### MCP Tool Mock Data (Demo 3)
```javascript
const mcpTools = [
  {
    name: "create-card",
    description: "Creates a new card in a specified column of a board. Provide card details like title, content (markdown supported), subtasks, tags, and dependencies.",
    input: {
      boardId: "string (required)",
      columnId: "string (required)",
      cardData: {
        title: "string (required)",
        content: "string (optional, markdown)",
        subtasks: "array of strings (optional)",
        tags: "array of strings (optional)",
        dependencies: "array of card IDs (optional)"
      }
    },
    example: {
      request: "Create a card for implementing user login",
      toolCall: {
        boardId: "demo-board-1",
        columnId: "col-1",
        cardData: {
          title: "Implement user login",
          content: "Build login form with email/password validation",
          tags: ["auth", "frontend"]
        }
      },
      response: {
        success: true,
        cardId: "card-5",
        tips: "You can now use 'move-card' to organize it, or 'update-card' to add subtasks."
      }
    }
  },
  {
    name: "batch-cards",
    description: "Creates multiple cards atomically in a single operation. Useful for generating boards from specifications.",
    input: {
      boardId: "string (required)",
      cards: "array of card data objects"
    },
    example: {
      request: "Create 3 cards for user profile feature",
      toolCall: {
        boardId: "demo-board-1",
        cards: [
          { title: "Design profile page", columnId: "col-1", tags: ["design"] },
          { title: "Build profile API", columnId: "col-1", tags: ["backend"] },
          { title: "Connect frontend to API", columnId: "col-1", tags: ["frontend"], dependencies: ["card-6", "card-7"] }
        ]
      },
      response: {
        success: true,
        created: 3,
        cardIds: ["card-6", "card-7", "card-8"],
        tips: "All cards created successfully. Consider using 'get-board' with format:'summary' to see the updated board."
      }
    }
  },
  {
    name: "get-board",
    description: "Retrieves board data with flexible formatting options. Use 'summary' for overview, 'compact' for structure, 'full' for complete details.",
    input: {
      boardId: "string (required)",
      format: "'summary' | 'compact' | 'full' (optional, default: 'full')"
    },
    example: {
      request: "Show me board overview",
      toolCall: {
        boardId: "demo-board-1",
        format: "summary"
      },
      response: {
        projectName: "Demo Kanban Board",
        columnCount: 4,
        cardCount: 8,
        distribution: {
          "To Do": 3,
          "In Progress": 2,
          "Review": 2,
          "Done": 1
        },
        tips: "Use format:'compact' to see card titles, or format:'full' for complete details."
      }
    }
  }
];
```

### Spec-to-Board Mock Data (Demo 4)
```javascript
const sampleSpecs = {
  userStory: `
# User Authentication Feature

## User Stories
- As a user, I want to log in with email/password so I can access my account
- As a user, I want to sign up for a new account
- As a user, I want to reset my password if I forget it
- As a user, I want to log in with Google or GitHub for convenience

## Acceptance Criteria
- Login form validates email format and password strength
- OAuth providers redirect correctly
- Password reset sends email with secure token
- Sessions persist across browser restarts
  `,

  technicalSpec: `
# API Refactoring Project

## Objectives
1. Migrate REST endpoints to GraphQL
2. Implement rate limiting
3. Add request/response logging
4. Update API documentation

## Tasks
- Design GraphQL schema
- Build GraphQL resolvers
- Set up Apollo Server
- Implement Redis-based rate limiting
- Add Winston logger middleware
- Generate API docs with GraphQL Playground
  `,

  bugReport: `
# Bug Fix Batch - Nov 2024

## Critical
- [BUG-101] Login fails on Safari mobile
- [BUG-102] File upload timeout after 30s

## High Priority
- [BUG-103] Search results pagination broken
- [BUG-104] Email notifications not sending

## Medium Priority
- [BUG-105] Dark mode toggle flickers
- [BUG-106] Profile image upload aspect ratio wrong
  `
};

// Expected generated board structure
const generatedBoard = {
  userStory: {
    columns: ["To Do", "In Progress", "Testing", "Done"],
    cards: [
      {
        title: "Email/password login",
        content: "Implement login form with validation",
        tags: ["auth", "frontend"],
        subtasks: ["Validate email format", "Check password strength", "Handle errors"]
      },
      {
        title: "User signup flow",
        content: "Build registration with email verification",
        tags: ["auth", "frontend", "backend"],
        dependencies: [] // Could link to login card
      },
      {
        title: "Password reset",
        content: "Secure token generation and email sending",
        tags: ["auth", "backend", "email"]
      },
      {
        title: "OAuth integration",
        content: "Google and GitHub providers",
        tags: ["auth", "oauth"],
        subtasks: ["Google OAuth", "GitHub OAuth", "Redirect handling"]
      }
    ]
  }
};
```

---

## Success Criteria

Each demo should:
1. ✅ Work standalone without backend dependencies
2. ✅ Accurately represent kanban design philosophy
3. ✅ Demonstrate both human and agent interaction patterns
4. ✅ Show file-based architecture advantages
5. ✅ Be responsive (mobile/tablet/desktop)
6. ✅ Include clear educational value (why dual-interface matters)
7. ✅ Highlight AGx design principles
8. ✅ Load quickly with smooth interactions

---

## Integration Points in Portfolio Case Study

Based on `kanban_page_outline.md`:

- **Demo 1 (Card States)** → "Create Phase - For Human Users" (contextual feedback, two-step delete, smart detection)
- **Demo 2 (Dual Interface)** → "Solve Phase - File-Based Architecture as Dual Interface" (same data, different interfaces)
- **Demo 3 (MCP Tools)** → "Create Phase - For AI Agent Users" (batch operations, embedded guidance, format flexibility)
- **Demo 4 (Spec-to-Board)** → "Solve Phase - The Spec→Board Workflow" (agent translation, template-based generation)

Each demo should have:
- Section title
- 1-2 sentence explanation of design principle
- Interactive demo component
- Optional: Quote from design philosophy or agent conversation

---

## Technical Considerations

### Vanilla JS → React Conversion
- Card component uses ES6 classes → convert to React functional components with hooks
- DOM manipulation → React state management
- Event listeners → React event handlers
- Drag-and-drop → use @dnd-kit/core library

### Styling Approach
- Extract CSS variables from kanban
- Scope to `.kanban-demo` container
- Maintain column type color scheme (todo/doing/review/done)
- Preserve card hover effects and transitions

### Dependencies to Add
- `react-markdown` - for card content rendering
- `@dnd-kit/core` - drag-and-drop functionality
- `react-syntax-highlighter` - JSON/code display
- Optional: `framer-motion` - smooth animations

### Performance
- Keep demo boards small (3-4 columns, 8-10 cards max)
- Lazy load markdown/JSON if needed
- Debounce JSON sync updates
- Use React.memo for card components

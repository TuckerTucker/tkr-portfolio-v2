

To Gather:

- Remarkable Sketches?
- Figma documents

App Screenshots:

- library
- DocumentCard
  - Processing Stages
  - Error
  - Audio Player
  - Document Details
  - Research Citations
    - In Claude Desktop
    - In Research page


---

## tkr-docusearch Project Page Structure

### Page Flow (Tucker Framework)
**Problem → Understanding → Solution → Impact**

---

### 1. **Hero/Hook Section**
- **Problem Statement** (2 sentences)
  - Pain point: RAG tools create a "black box"—once embeddings are made, you lose visibility into what documents exist and their state
  - Core insight: Both humans and AI agents need to see what's in the RAG library, not just query it
  
- **Visual**: Split view showing visual library UI + API/MCP programmatic access to same document data

---

### 2. **Understand Phase**
**Title**: "The RAG Visibility Problem"

- **The Discovery**:
  - RAG tools separate documents from embeddings
  - After embedding creation: "black box" problem emerges
  - Can't see: What documents are available, their processing state, accuracy/relevance
  - Disconnect between source documents and search capability

- **User Needs Mapping**:
  - **Humans need**: Visual library to browse, inspect states, verify what's indexed
  - **AI agents need**: Programmatic access to query document metadata, states, processing info
  - **Both need**: Same underlying truth about what's in the system

- **The Research Question**:
  - "How do we make RAG document libraries transparent instead of opaque?"
  - What information matters when managing a document collection?
  - How should humans browse vs how should agents query?

- **Artifacts to show**:
  - Diagram: Traditional RAG (docs → embeddings → black box) vs tkr-docusearch (docs → embeddings + persistent library state)
  - Sketch: Dual interface concept (visual library + API/MCP)
  - Notes on document states that need visibility (uploading, processing, indexed, failed)

---

### 3. **Solve Phase**
**Title**: "Dual Interface RAG Library"

- **Core Design Decision: Persistent Document State**
  - Documents remain visible and inspectable after embedding
  - Processing states tracked: uploading → processing → indexed → available
  - Error states preserved: users/agents can see what failed and why
  - Metadata accessible through both visual and programmatic interfaces

- **Visual Library Interface (For Humans)**:
  - Grid view of all documents with thumbnails and states
  - Document detail pages showing full metadata
  - Contextual inline feedback on each card
  - Progressive disclosure: collapse/expand, empty states, loading states

- **API + MCP Interface (For Agents)**:
  - REST API for programmatic document management
  - MCP tools for agent integration (similar to kanban approach)
  - Query endpoints for filtering, searching metadata
  - Same document state information available as visual UI

- **Bridging the Gap**:
  - Both interfaces access same document registry
  - State changes visible immediately to both users and agents
  - No "black box"—always know what's indexed and its status

- **Artifacts to show**:
  - Architecture diagram: Document registry in center, visual UI on left, API/MCP on right
  - Document card anatomy showing state indicators
  - API endpoint example showing document metadata structure
  - MCP tool definition for document queries

---

### 4. **Create Phase**
**Title**: "Building Library Transparency"

- **Visual Library Patterns** (Select 3-4):
  - **Contextual state feedback**: Each document card shows its own processing state
  - **Progressive disclosure**: Empty states guide uploads, collapsed cards enable scanning
  - **Document detail pages**: Click card → full metadata, processing history, error logs
  - **Human-readable formatting**: File sizes, dates, durations all formatted naturally

- **Programmatic Access Patterns** (Select 2-3):
  - **REST API endpoints**: GET documents, filter by state, query metadata
  - **MCP integration**: Agents can search library, check document states, trigger reprocessing
  - **Structured responses**: JSON metadata mirrors what visual UI displays

- **State Management for Transparency**:
  - Document processing states tracked throughout lifecycle
  - Error states preserved with detailed messages
  - Real-time updates via WebSocket (visual) and polling/webhooks (API)
  - Connection status indicator shows system health

- **The Media Sync Feature** (Optional deep-dive):
  - Audio documents: Transcript sections link to timestamps
  - Click transcript → seek audio to that point
  - Active audio position highlights corresponding transcript section
  - Bidirectional synchronization between content and media

---

### 6. **Impact/Reflection Section**
**Title**: "Making RAG Libraries Inspectable"

- **Key Insights**:
  - RAG tools need transparency, not just embedding accuracy
  - Dual interfaces serve different needs: humans browse, agents query
  - Document state visibility enables debugging and trust
  - Same design philosophy as tkr-kanban: one data source, multiple access patterns

- **The Parallel to tkr-kanban**:
  - Both projects tackle "same data, different interface" problem
  - Both recognize humans and agents need different interaction modes
  - Both maintain single source of truth accessible through multiple views
  - Skills from kanban dual-interface design applied to RAG library context

- **What This Demonstrates**:
  - Information architecture: Making complex systems transparent
  - Interaction design: Contextual feedback, progressive disclosure
  - Dual interface thinking: Visual + programmatic access by design
  - State management: Real-time updates across different interfaces

- **The Bigger Picture**:
  - This approach could apply to other "black box" developer tools
  - Visibility and transparency as core UX principles for technical tools
  - Human-agent collaboration requires thoughtful interface design

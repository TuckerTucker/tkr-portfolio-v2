# DocuSearch: Designing Transparency into RAG Systems

**I built DocuSearch to solve a problem I kept running into:** most RAG systems let you upload documents, but once they're in, they become invisible. You can't review them for outdated information, you can't see what the AI is actually working with, and you can't manage them like regular files. I needed a system that worked naturally for both humans and AI agents—where I could browse, read, and listen to documents while the AI could semantically search across everything.

## The Problem: Black Box Document Systems

Traditional RAG systems treat documents like database entries—once uploaded, they disappear into embeddings and vector stores. This creates real problems:

- **No visibility** - You can't see what documents are actually in the system
- **No verification** - Can't check if information is current or correct
- **No natural interaction** - Humans need visual browsing, AI needs semantic search
- **Limited formats** - Most systems handle PDFs but struggle with audio, presentations, or mixed media

I realized this was fundamentally a **dual-interface design problem**. Humans and AI agents need different ways to interact with the same information, but most systems only optimize for one.

## Understanding the Users (Both Human and AI)

My research process involved both traditional UX methods and something newer—what I call **Agent Experience (AGx) research**. I asked AI agents what context formats they preferred and how they wanted to consume document information.

**What I learned from humans:**
- Need to **see thumbnails** and previews before diving into documents
- Want to **verify sources** when AI gives answers
- Prefer browsing over searching when exploring content
- Need confidence that information is current

**What I learned from AI agents:**
- Prefer **hierarchical semantic search** over keyword matching
- Work best with **multi-modal understanding** (both text and visual context)
- Need structured metadata but benefit from unstructured context
- Prefer filesystem operations over database queries

The key insight: **both humans and AI agents need transparency**, just in different forms.

## Solution: File-Native Semantic Search

I designed DocuSearch around three core principles:

### 1. Dual Interface for Dual Users
**Humans interact through visual browsing:**
- Card-based library with thumbnails
- Audio player with waveform visualization
- Image carousel for presentations
- Full-text transcripts for audio files

**AI agents interact through semantic search:**
- ColPali v1.2 multi-modal retrieval (understands both images and text)
- ChromaDB vector store for similarity search
- REST API for programmatic access
- Structured metadata for precise filtering

### 2. File-Native Architecture
Instead of hiding documents in a database, I built everything on the filesystem:
- Documents live in a real directory structure
- AI agents can use standard file operations
- Humans can access files directly if needed
- The system orchestrates between file storage and vector embeddings

This emerged from understanding how AI agents actually prefer to work—they're more comfortable with file operations than database queries.

### 3. Maximum Format Support
Using Docling as a unified parser, the system handles **21 document formats**:
- PDF, DOCX, PPTX, XLSX (with visual processing)
- MP3, WAV (with ID3 metadata and Whisper transcription)
- HTML, Markdown, plain text
- Images (JPEG, PNG, TIFF)

## The Technical Implementation

**Processing Pipeline:**
1. User uploads document to Copyparty file server
2. Webhook triggers DocuSearch processing
3. Docling extracts structure, text, and metadata
4. LibreOffice renders visual slides for PPTX
5. Whisper ASR transcribes audio files
6. ColPali generates multi-modal embeddings
7. ChromaDB stores vectors for semantic search
8. React UI updates in real-time via WebSocket

**Technology Stack:**
- **Backend:** Python 3.14, FastAPI, ColPali v1.2, ChromaDB
- **Frontend:** React 19, TypeScript, Zustand, React Query 5
- **Processing:** Docling 2.57.0, Whisper ASR, LibreOffice (headless)
- **Storage:** Filesystem-based with Copyparty integration

## The Build Process: 15 Days, 207 Commits

I built DocuSearch in 15 consecutive days (October 6-20, 2025) with daily commits. This wasn't just coding—it was an iterative design process where I constantly evaluated both human and AI agent needs.

**Week 1: Foundation & Core Features**
- Days 1-2: Production-ready system with ColPali + ChromaDB
- Days 3-4: Custom React UI replacing generic file browser
- Days 5-7: Audio processing, deletion workflow, theme system

**Week 2: Polish & Advanced Features**
- Days 8-10: Details pages, audio player, Whisper integration
- Days 11-13: VTT captions, research bot with citations
- Days 14-15: React 19 migration, final polish

**Key Development Insights:**
- Created **24 wireframes** to iterate on UI before coding
- Wrote **15+ planning documents** for AI agents to reference
- Used **parallel agent orchestration** for complex features
- Tested with both human users and AI agent workflows

## Design Decisions: Human-AI Collaboration

### The Kraft Paper Theme
I designed a warm, tactile theme system inspired by kraft paper notebooks—something that feels personal for document management rather than corporate. Five color schemes (Sand, Clay, Slate, Moss, Ocean) give users customization without overwhelming choice.

The theme serves humans while the underlying structure serves AI agents. This dual-layer design runs throughout the system.

### Real-Time Processing Feedback
When documents upload, users see:
- **Immediate thumbnails** (even before processing completes)
- **Stage-by-stage progress** (parsing, embedding, transcribing)
- **File-type-specific status messages** (more informative than generic "processing")

This transparency builds trust—users understand what's happening behind the scenes.

### The Research Interface
When users ask questions, they don't just get answers—they see:
- **Original source documents** with highlighted relevant pages
- **Citations** linking directly to page images
- **Confidence indicators** showing retrieval quality

I designed this after realizing users needed to **verify AI responses**, not just consume them.

## Impact: Transparency Changes Everything

**What changed for users:**
- **"I can finally see what documents I've added"** - Visual library made the invisible visible
- **"I trust the answers more because I can check sources"** - Citations enable verification
- **"It handles my meeting recordings now"** - Audio transcription opened new use cases
- **"Feels like browsing my files, not using a database"** - Natural filesystem interaction

**What changed for AI agents:**
- Multi-modal search understands document structure, not just text
- Semantic retrieval finds relevant content even without keyword matches
- File-based architecture allows standard agent workflows
- Structured metadata enables precise filtering when needed

**Technical Results:**
- Processes **21 document formats** with unified pipeline
- **Sub-second semantic search** across 100+ documents
- **Real-time updates** via WebSocket (no polling needed)
- **98% test coverage** with comprehensive error handling

## Lessons: Designing for Two Audiences

This project reinforced that **AI UX isn't just traditional UX with a chatbot**—it's designing systems where humans and AI agents collaborate naturally.

**Key principles I validated:**

1. **Transparency serves everyone** - Humans need visual feedback, AI needs structured data, but both benefit from seeing what's happening

2. **File-native beats database-native** - Agents prefer filesystem operations, humans want direct access, so why hide everything in a database?

3. **Multi-modal search changes everything** - When AI understands document structure (not just text), retrieval quality dramatically improves

4. **Real-time feedback is crucial** - Both humans and agents need to know when documents are ready for use

## What I'd Do Differently

If starting over, I'd:
- **Start with wireframes earlier** - I created 24 wireframes but some came after initial coding
- **Add collaborative features sooner** - Multi-user document sharing would expand use cases
- **Build batch upload from day one** - Single file uploads became a bottleneck during testing
- **Document the Agent Experience research process** - I did AGx research informally but should have captured it systematically

## Looking Forward

DocuSearch demonstrates that **RAG systems don't have to be black boxes**. By designing for both human visibility and AI semantic understanding, we can create tools that feel natural while leveraging AI capabilities.

The next evolution involves:
- **Collaborative features** - Shared document libraries with permissions
- **Active learning** - Let users provide feedback on search results to improve embeddings
- **Cross-document synthesis** - Connect related concepts across multiple documents
- **Export workflows** - Generate reports from semantic clusters

But the core insight remains: **design for transparency, and both humans and AI agents benefit**.

---

**Project Stats:**
- **Duration:** 15 days (October 6-20, 2025)
- **Commits:** 207 (100% daily activity)
- **Formats Supported:** 21 document types
- **Tech Stack:** React 19, Python 3.14, ColPali, ChromaDB, Whisper ASR
- **Lines of Code:** ~15,000 (backend + frontend)

**Skills Demonstrated:**
- Dual-interface design (human + AI agent UX)
- Multi-modal system architecture
- Real-time processing with feedback loops
- Semantic search + traditional UX patterns
- File-native system design
- Agent Experience (AGx) research and design

---

*DocuSearch is open-source and available for experimentation. It represents my exploration of how humans and AI can collaborate more effectively when we design the interfaces specifically for that collaboration.*

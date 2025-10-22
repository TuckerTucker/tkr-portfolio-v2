# DocuSearch - Transparent RAG System

## One-Liner
I designed a document search system where humans can browse visually while AI agents search semantically—both working with the same files.

## The Problem (30-second version)
Most RAG systems turn documents into invisible database entries. Once uploaded, you can't review them, verify if information is outdated, or even see what's in the system. I needed both visual browsing for humans and semantic search for AI agents, working with the same documents naturally.

## The Solution
DocuSearch treats documents like files, not database rows. Humans interact through a visual library with thumbnails, audio players, and image carousels. AI agents interact through multi-modal semantic search using ColPali and ChromaDB. Both see the same documents—just through their preferred interface.

**Key Innovation:** File-native architecture. Documents live in a real directory structure that both humans and AI can access directly, orchestrated through embeddings for semantic search.

## The Impact
- Supports **21 document formats** including audio transcription and presentation rendering
- **Sub-second semantic search** across 100+ documents with source verification
- **Real-time processing feedback** so users understand what's happening
- Built in **15 days with 207 commits**, demonstrating rapid iteration

## Skills Showcased
- **AGx Design** - Agent Experience research to understand AI preferences
- **Dual-interface UX** - Same data, two natural interaction modes
- **Multi-modal systems** - Combining visual and text understanding
- **File-native architecture** - Prioritizing natural workflows over databases
- **Real-time feedback design** - Building trust through transparency

---

**Technologies:** React 19, Python 3.14, ColPali v1.2, ChromaDB, Whisper ASR, Docling  
**Timeline:** October 6-20, 2025 (15 consecutive days)  
**Outcome:** Production-ready system with comprehensive documentation

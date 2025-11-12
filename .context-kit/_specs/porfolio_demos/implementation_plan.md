# Interactive Demo Suite Implementation Plan

**Goal:** Create 4 interactive component demos for tkr-portfolio-v2 DocuSearch case study showcasing document card states, citation interactions, processing progress, and audio player synchronization.

**Constraints:**
- React 18 compatibility (portfolio) vs React 19 (docusearch source)
- Tailwind CSS (portfolio) vs CSS custom properties (docusearch)
- No backend dependencies - all demos must work standalone
- Maintain exact visual fidelity to production components

**Priority:** Quality (accurate representation of production UX)

---

## Task List

### Foundation & Infrastructure

1. **Create demo directory structure in portfolio**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/`
   - Subdirectories: `document-cards/`, `citations/`, `processing/`, `audio-player/`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/`
   - Shared utilities: `mockData.ts`, `helpers.ts`

2. **Extract and adapt CSS design system**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/styles/global.css`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/docusearch-demo.css`
   - Create scoped demo stylesheet with `.docusearch-demo` wrapper class to avoid Tailwind conflicts
   - Test color tokens, spacing, shadows, transitions in portfolio context

3. **Create mock data generators**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/mockData.ts`
   - Document mock data factory (4 states: uploading, processing, completed, failed)
   - Citation/reference mock data (sample answer text with 3-4 citations)
   - Audio metadata mock (title, artist, duration, transcript segments)
   - TypeScript interfaces for type safety

### Demo 1: Document Card State Showcase

4. **Port DocumentCard component dependencies**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/hooks/useDocumentCard.js`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentBadge.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentThumbnail.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentMetadata.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentActions.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ProcessingInfo.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ErrorInfo.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DeleteButton.jsx`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/document-cards/` (convert to TypeScript)
   - Replace `react-router-dom` Link with mock component (just renders as div)

5. **Create DocumentCard demo wrapper**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/document-cards/DocumentCardDemo.tsx`
   - Grid layout showing 4 cards side-by-side (or 2x2 on mobile)
   - Mock delete handler (console.log only)
   - Static mock data for each state
   - Label each card with its state for clarity

6. **Add variant demonstration**
   - **Build in:** Same `DocumentCardDemo.tsx` component
   - Include both document (tall 385x285) and audio (square 300x300) variants
   - Show at least one audio card in completed state

### Demo 2: Citation Interaction

7. **Port citation components**
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/research/CitationLink.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/research/ReferenceCard.jsx`
   - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/utils/urlBuilder.js`
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/citations/` (convert to TypeScript)
   - Adapt urlBuilder functions for mock URLs

8. **Create citation demo wrapper**
   - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/citations/CitationDemo.tsx`
   - Mock answer text with embedded citations [1], [2], [3]
   - Reference cards list below answer
   - State management for active/hovered citation
   - Scroll-to-reference behavior with smooth animation

9. **Implement bidirectional interactions**
   - **Build in:** Same `CitationDemo.tsx` component
   - Click citation → scroll to reference + highlight
   - Hover citation → preview highlight on reference
   - Hover reference → highlight inline citation
   - Auto-clear highlights after interaction

### Demo 3: Processing Progress Animation

10. **Create ProcessingInfo standalone demo**
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ProcessingInfo.jsx`
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/common/LoadingSpinner.jsx`
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/processing/ProcessingDemo.tsx`
    - Wrapper that auto-cycles through processing stages
    - Timer-based progression: "Uploading..." → "Extracting text..." → "Generating embeddings..." → "Creating thumbnails..." → "Complete"

11. **Add progress bar animation**
    - **Build in:** Same `ProcessingDemo.tsx` component
    - Smoothly increment from 0% to 100% over 8-10 seconds
    - Sync progress percentage with stage transitions
    - Loop infinitely or add restart button

### Demo 4: Audio Player with Transcript Sync

12. **Port AudioPlayer component**
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/media/AudioPlayer.jsx`
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/media/AlbumArt.jsx`
    - **Read from:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/ui/Accordion.jsx` (or build simple alternative)
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/audio-player/` (convert to TypeScript)
    - Remove WebSocket/real-time dependencies
    - Simplify to use static audio file and VTT/transcript

13. **Create sample audio assets**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/public/demos/docusearch/audio/`
    - Short audio file (30-60 seconds, public domain or creative commons)
    - VTT caption file with 4-5 segments
    - Markdown transcript with timestamps
    - Album art placeholder image

14. **Build accordion/transcript component**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/audio-player/TranscriptAccordion.tsx`
    - List of transcript segments with timestamps
    - Click segment → seek audio to that time
    - Active segment highlights during playback
    - Throttled sync updates (300ms as per original)

15. **Implement bidirectional sync**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/audio-player/AudioPlayerDemo.tsx`
    - Audio timeupdate → highlight active transcript segment
    - Click transcript → seek audio + highlight
    - Smooth scroll to active segment
    - Visual feedback for sync state

### Integration with Portfolio

16. **Create demo section component for case study**
    - **Build in:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/DocuSearchDemos.tsx`
    - Wrapper component that renders each demo in collapsible sections
    - Section headers with descriptions
    - Responsive layout (stack on mobile)

17. **Update DocuSearch case study content**
    - **Edit:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/content/case-studies/docusearch.ts`
    - **Edit:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/pages/Docusearch.tsx`
    - Add demos to `docusearch.ts` content structure
    - Map demos to appropriate page sections per outline
    - Write brief descriptions for each demo

18. **Test React 18 compatibility**
    - Verify all hooks work in React 18
    - Test for warnings in console
    - Check for deprecated patterns
    - Ensure refs, forwardRef work correctly

19. **Visual QA and polish**
    - Compare side-by-side with production DocuSearch
    - Verify all colors, spacing, typography match
    - Test responsive behavior on mobile/tablet/desktop
    - Smooth all animations and transitions

20. **Add demo controls (optional enhancement)**
    - Play/pause buttons for auto-cycling demos
    - Reset buttons to restart animations
    - State toggles for manual control
    - Speed controls for slower/faster demonstrations

---

## Dependencies Map

- **Tasks 1-3:** No dependencies (foundation)
- **Tasks 4-6:** Depend on 1-3
- **Tasks 7-9:** Depend on 1-3
- **Tasks 10-11:** Depend on 1-3
- **Tasks 12-15:** Depend on 1-3
- **Tasks 16-17:** Depend on 4-15 (all demos complete)
- **Tasks 18-20:** Depend on 16-17 (integration complete)

---

## Optimal Execution Order

**Sequential approach:** Build infrastructure (1-3) → demos can be built in parallel (4-15) → integrate (16-17) → polish (18-20)

**Parallelization opportunity:** Tasks 4-6, 7-9, 10-11, and 12-15 can be worked on independently after foundation (1-3) is complete.

**Recommended order for solo development:**
1. Foundation (tasks 1-3)
2. Demo 1: Document Cards (tasks 4-6) - highest priority, showcases core UX
3. Demo 2: Citations (tasks 7-9) - key innovation
4. Demo 3: Processing (tasks 10-11) - quick win, builds on Demo 1 components
5. Demo 4: Audio Player (tasks 12-15) - most complex, save for last
6. Integration (tasks 16-17)
7. Polish (tasks 18-20)

---

## Component Source Locations

### DocuSearch Source Files (Read From)

**Demo 1 (Document Cards):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentCard.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentBadge.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentThumbnail.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentMetadata.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentActions.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ProcessingInfo.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ErrorInfo.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DeleteButton.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/hooks/useDocumentCard.js`

**Demo 2 (Citations):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/research/CitationLink.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/research/ReferenceCard.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/utils/urlBuilder.js`

**Demo 3 (Processing):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/ProcessingInfo.jsx` (already in Demo 1)
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/common/LoadingSpinner.jsx`

**Demo 4 (Audio Player):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/media/AudioPlayer.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/media/AlbumArt.jsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/ui/Accordion.jsx`

**Shared Styles:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/styles/global.css`

### Portfolio Build Locations

**Demo 1 (Document Cards):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/document-cards/DocumentCardDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/document-cards/[converted components].tsx`

**Demo 2 (Citations):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/citations/CitationDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/citations/[converted components].tsx`

**Demo 3 (Processing):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/processing/ProcessingDemo.tsx`

**Demo 4 (Audio Player):**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/audio-player/AudioPlayerDemo.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/audio-player/TranscriptAccordion.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/public/demos/docusearch/audio/[audio assets]`

**Shared:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/mockData.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/helpers.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/shared/docusearch-demo.css`

**Integration:**
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/DocuSearchDemos.tsx`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/content/case-studies/docusearch.ts`
- `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/pages/Docusearch.tsx`

---

## Mock Data Requirements

### Document Mock Data (Demo 1)
```javascript
{
  uploading: {
    doc_id: 'mock-1',
    filename: 'quarterly_report.pdf',
    file_type: 'pdf',
    upload_date: '2025-11-11T12:00:00Z',
    status: 'uploading',
    processing_stage: 'Uploading...',
    processing_progress: 0.45
  },
  processing: {
    doc_id: 'mock-2',
    filename: 'presentation_slides.pptx',
    file_type: 'pptx',
    upload_date: '2025-11-11T11:30:00Z',
    status: 'processing',
    processing_stage: 'Generating embeddings...',
    processing_progress: 0.73
  },
  completed: {
    doc_id: 'mock-3',
    filename: 'research_paper.pdf',
    file_type: 'pdf',
    upload_date: '2025-11-11T10:00:00Z',
    thumbnail_url: '/path/to/mock/thumbnail.png',
    status: 'completed'
  },
  failed: {
    doc_id: 'mock-4',
    filename: 'corrupted_file.pdf',
    file_type: 'pdf',
    upload_date: '2025-11-11T09:00:00Z',
    status: 'failed',
    error_message: 'File corrupted or unsupported format'
  },
  audio_completed: {
    doc_id: 'mock-5',
    filename: 'podcast_episode.mp3',
    file_type: 'mp3',
    upload_date: '2025-11-11T08:00:00Z',
    cover_art_url: '/path/to/mock/cover.png',
    status: 'completed'
  }
}
```

### Citation Mock Data (Demo 2)
```javascript
{
  answerText: "DocuSearch uses ColPali v1.2 for multi-modal document retrieval [1], which processes both text and visual information. The system stores embeddings in ChromaDB [2] and uses a two-stage search pipeline [3] to achieve sub-second query times.",
  references: [
    {
      id: 1,
      filename: 'colpali_paper.pdf',
      extension: 'pdf',
      page: 3,
      thumbnail_path: '/mock/thumbnail1.png',
      doc_id: 'ref-1',
      chunk_id: 'chunk-1'
    },
    {
      id: 2,
      filename: 'chromadb_docs.pdf',
      extension: 'pdf',
      page: 12,
      thumbnail_path: '/mock/thumbnail2.png',
      doc_id: 'ref-2',
      chunk_id: 'chunk-2'
    },
    {
      id: 3,
      filename: 'search_architecture.pdf',
      extension: 'pdf',
      page: 7,
      thumbnail_path: '/mock/thumbnail3.png',
      doc_id: 'ref-3',
      chunk_id: 'chunk-3'
    }
  ]
}
```

### Audio Mock Data (Demo 4)
```javascript
{
  document: {
    doc_id: 'audio-demo',
    filename: 'sample_podcast.mp3',
    metadata: {
      vtt_available: true,
      has_album_art: true,
      album_art_url: '/mock/album-art.png',
      raw_metadata: {
        title: 'Sample Podcast Episode',
        artist: 'Demo Creator',
        duration: 45.0
      }
    }
  },
  chunks: [
    { id: 'chunk-1', start_time: 0, end_time: 12, text: 'Introduction to the topic...' },
    { id: 'chunk-2', start_time: 12, end_time: 25, text: 'Key concept explanation...' },
    { id: 'chunk-3', start_time: 25, end_time: 35, text: 'Practical example...' },
    { id: 'chunk-4', start_time: 35, end_time: 45, text: 'Conclusion and takeaways...' }
  ]
}
```

---

## Success Criteria

Each demo should:
1. ✅ Work standalone without backend dependencies
2. ✅ Match production visual design exactly
3. ✅ Demonstrate core interaction patterns clearly
4. ✅ Be responsive (mobile/tablet/desktop)
5. ✅ Include accessible markup (ARIA labels, keyboard navigation)
6. ✅ Run smoothly in React 18 without warnings
7. ✅ Auto-cycle or provide clear controls for demonstration
8. ✅ Load quickly (<1s) with no network requests

---

## Integration Points in Portfolio Case Study

Based on `page_outline.md`:

- **Demo 1 (Document Cards)** → "Create Phase - Visual Library Patterns"
- **Demo 2 (Citations)** → "Create Phase - Bridging the Gap" or standalone feature section
- **Demo 3 (Processing)** → "Solve Phase - Persistent Document State"
- **Demo 4 (Audio Player)** → "Create Phase - The Media Sync Feature (deep-dive)"

Each demo should have:
- Section title
- 1-2 sentence description of what's being demonstrated
- The interactive demo component
- Optional: Brief technical note (e.g., "Bidirectional sync with 300ms throttling")

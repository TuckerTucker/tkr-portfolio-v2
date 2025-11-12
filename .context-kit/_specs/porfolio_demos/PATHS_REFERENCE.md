# Portfolio Demos - Directory Path Reference

Quick reference for all file paths involved in building the interactive demos.

## Projects

- **Portfolio:** `/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/`
- **DocuSearch:** `/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/`
- **Kanban:** `/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/`

---

## DocuSearch Demos

### Source Files (Read From)

**Components:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/
├── document/
│   ├── DocumentCard.jsx
│   ├── DocumentBadge.jsx
│   ├── DocumentThumbnail.jsx
│   ├── DocumentMetadata.jsx
│   ├── DocumentActions.jsx
│   ├── ProcessingInfo.jsx
│   ├── ErrorInfo.jsx
│   └── DeleteButton.jsx
├── research/
│   ├── CitationLink.jsx
│   └── ReferenceCard.jsx
├── media/
│   ├── AudioPlayer.jsx
│   └── AlbumArt.jsx
├── ui/
│   └── Accordion.jsx
└── common/
    └── LoadingSpinner.jsx
```

**Utilities & Styles:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/
├── hooks/
│   └── useDocumentCard.js
├── utils/
│   └── urlBuilder.js
└── styles/
    └── global.css
```

### Build Locations (Portfolio)

**Demo Components:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/docusearch/
├── shared/
│   ├── mockData.ts
│   ├── helpers.ts
│   └── docusearch-demo.css
├── document-cards/
│   ├── DocumentCardDemo.tsx
│   └── [converted components].tsx
├── citations/
│   ├── CitationDemo.tsx
│   └── [converted components].tsx
├── processing/
│   └── ProcessingDemo.tsx
├── audio-player/
│   ├── AudioPlayerDemo.tsx
│   └── TranscriptAccordion.tsx
└── DocuSearchDemos.tsx (main wrapper)
```

**Assets:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/public/demos/docusearch/audio/
├── sample.mp3
├── sample.vtt
└── album-art.png
```

**Integration Files:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/
├── content/case-studies/
│   └── docusearch.ts
└── pages/
    └── Docusearch.tsx
```

---

## Kanban Demos

### Source Files (Read From)

**Components:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/
├── Card.js
├── Column.js
├── Modal.js
├── NextSteps.js
└── Settings.js
```

**Styles:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/css/
├── base/
│   └── _variables.css
└── components/
    ├── _card.css
    └── _column.css
```

**MCP Tools:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/server/mcp/tools/
├── cards.js
├── boards.js
└── templates.js
```

**Documentation:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-kanban/docs/
└── BOARD_FORMAT.md
```

### Build Locations (Portfolio)

**Demo Components:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/components/demos/kanban/
├── shared/
│   ├── mockData.ts
│   ├── boardFormat.ts
│   ├── helpers.ts
│   └── kanban-demo.css
├── card-states/
│   ├── Card.tsx
│   └── CardStatesDemo.tsx
├── dual-interface/
│   ├── DualInterfaceDemo.tsx
│   ├── MiniBoard.tsx
│   └── JsonViewer.tsx
├── mcp-tools/
│   ├── McpToolsDemo.tsx
│   └── ToolSimulator.tsx
├── spec-to-board/
│   ├── SpecToBoardDemo.tsx
│   └── GenerationVisualization.tsx
└── KanbanDemos.tsx (main wrapper)
```

**Integration Files:**
```
/Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2/src/
├── content/case-studies/
│   └── kanban.ts
└── pages/
    └── Kanban.tsx
```

---

## Quick Command Reference

### Navigate to Portfolio
```bash
cd /Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2
```

### Create DocuSearch Demo Structure
```bash
cd /Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2
mkdir -p src/components/demos/docusearch/{shared,document-cards,citations,processing,audio-player}
mkdir -p public/demos/docusearch/audio
```

### Create Kanban Demo Structure
```bash
cd /Volumes/tkr-riffic/@tkr-projects/tkr-portfolio-v2
mkdir -p src/components/demos/kanban/{shared,card-states,dual-interface,mcp-tools,spec-to-board}
```

### Read Source Files Examples
```bash
# DocuSearch Card component
cat /Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/components/document/DocumentCard.jsx

# Kanban Card component
cat /Volumes/tkr-riffic/@tkr-projects/tkr-kanban/app/js/components/Card.js

# DocuSearch styles
cat /Volumes/tkr-riffic/@tkr-projects/tkr-docusearch/frontend/src/styles/global.css

# Kanban board format spec
cat /Volumes/tkr-riffic/@tkr-projects/tkr-kanban/docs/BOARD_FORMAT.md
```

---

## File Naming Conventions

### TypeScript Conversion
- Source `.jsx` → Build `.tsx`
- Source `.js` → Build `.ts`

### Component Files
- React components: `PascalCase.tsx`
- Utilities/helpers: `camelCase.ts`
- Styles: `kebab-case.css`
- Mock data: `mockData.ts` or `mock-data.ts`

### Directory Structure
```
demos/
  docusearch/          # Project name (lowercase)
    shared/            # Shared utilities
    demo-name/         # Specific demo (kebab-case)
      DemoName.tsx     # Main demo component (PascalCase)
      Component.tsx    # Supporting components
```

---

## Implementation Workflow

1. **Read source files** from DocuSearch or Kanban projects
2. **Convert to TypeScript** and adapt for React 18
3. **Build in portfolio** `/src/components/demos/[project]/`
4. **Extract styles** to scoped CSS files
5. **Create mock data** generators
6. **Integrate** with case study pages

---

**Last Updated:** 2025-11-11
**Purpose:** Central reference for all file paths in demo implementation
**Related Docs:**
- `implementation_plan.md` (DocuSearch)
- `kanban_implementation_plan.md` (Kanban)
- `README.md` (Overview)

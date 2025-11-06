import { CaseStudyContent } from '../types'

export const docusearchCaseStudy: CaseStudyContent = {
  id: 'docusearch',
  title: 'DocuSearch',
  tagline: 'Designing Transparency into RAG Systems',

  problem: {
    title: 'Black Box Document Systems',
    content: [
      'I built DocuSearch to solve a problem I kept running into with most RAG systems. Once you upload documents they become invisible. You can\'t review them for outdated information, you can\'t see what the AI is actually working with.',
      'With most RAG systems disappear into embeddings and vector stores.',
      'No visibility - You can\'t see what documents are actually in the system',
      'No verification - Can\'t check if information is current or correct',
      'No natural interaction - People need visual browsing, AI needs semantic search',
      'Limited formats - Most systems handle PDFs but struggle with audio, presentations, or mixed media',
      'I realized this was fundamentally a dual-interface design problem.',
    ],
  },

  understanding: {
    title: 'Understanding the Users (Both People and AI)',
    content: [
      'My research process involved UX methods focused on the Agent Experience (AGx) research. I asked AI agents what context formats they preferred and how they wanted to consume document information.',
      'What I\'ve learned about people:',
      '• Thumbnails and previews are helpful before diving into documents',
      '• Need to verify sources when AI gives answers',
      '• Need confidence that information is current',
      'What I learned from AI agents:',
      '• Multi-modal (both text and visual context) strengthens understanding',
      '• Can parse unstructured context but benefit from structure and heirarchy',
      '• Existing formats (like json or yaml) work best because they are part of models training '

    ],
    keyInsights: [
      'Both people and AI agents need transparency, just in different forms',
      'Multi-modal search (understanding both images and text) dramatically improves inference quality'
    ],
  },

  solution: {
    title: 'Multi-modal Semantic Search',
    content: [
      'I designed DocuSearch around three core principles:',
      '',
      '1. Each type of user gets their ideal way to access the data',
      'People interact through visual browsing: Card-based library with thumbnails, audio player with waveform visualization, image carousel for presentations, and full-text transcripts for audio files.',
      '',
      'AI agents interact through semantic search: ColPali v1.2 multi-modal retrieval for enhanced similarity search and detailed structured metadata for precise filtering.',
      '',
      '2. Maximum Format Support',
      'Using Docling as a unified parser, the system handles 21 document formats: PDF, DOCX, PPTX, XLSX (with visual processing), MP3, WAV (with ID3 metadata and Whisper transcription), HTML, Markdown, plain text, and Images (JPEG, PNG, TIFF).',
      '3. No Toast',
      'All status, progress and error messages are contextual to their associated document'
    ],
    features: [
      'Real-time processing with stage-by-stage progress feedback',
      'WebSocket real-time updates',
      'Research interface with source citations',
      'Audio transcription with VTT captions '
    ],
  },

  impact: {
    title: 'Transparency Changes Everything',
    content: [
      'What changed for me:',
      '• Visual library made the invisible visible',
      '• Citations enable verification',
      '',
      'What changed for AI agents:',
      '• Multi-modal search understands document structure, not just text',
      '• Semantic retrieval finds relevant content even without keyword matches',
      '• File-based architecture allows standard agent workflows',
      '• Structured metadata enables precise filtering when needed',
      '',
      'This project reinforced that the future of UX includes intellegence as a user',
      '',
    ],
    metrics: [
      'Built in 15 consecutive days (October 6-20, 2025) with 207 commits',
      'Processes 21 document formats with unified pipeline',
      'Sub-second semantic search across 100+ documents',
      'Real-time updates via WebSocket',
      '98% test coverage with comprehensive error handling',
      '~15,000 lines of code (backend + frontend)',
    ],
  },

  metadata: {
    role: 'Solo Designer & Developer',
    type: 'Open-source Project',
    stack: [
      'React 19',
      'TypeScript',
      'Python 3.14',
      'FastAPI',
      'ColPali v1.2',
      'ChromaDB',
      'Whisper ASR',
      'Docling 2.57.0',
      'Zustand',
      'React Query 5',
    ],
    skills: [
      'Dual-interface design (people + AI agent UX)',
      'Agent Experience (AGx) research and design',
      'Multi-modal system architecture',
      'Semantic search + traditional UX patterns',
      'File-native system design',
      'Real-time processing with feedback loops',
      'Full-stack development',
    ],
    year: '2025',
    githubUrl: 'https://github.com/tuckertucker/tkr-docusearch',
  },
}

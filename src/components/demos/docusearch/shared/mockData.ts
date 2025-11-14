/**
 * Mock data generators for DocuSearch demos
 */

import type { Document, Citation, Reference, TranscriptSegment } from './types';

// Mock documents for different states
export const mockDocuments: Record<string, Document> = {
  uploading: {
    doc_id: '1',
    filename: 'quarterly-report.pdf',
    file_type: 'pdf',
    upload_date: new Date().toISOString(),
    status: 'uploading',
    processing_stage: 'Uploading...',
    processing_progress: 0.35,
  },

  processing: {
    doc_id: '2',
    filename: 'market-analysis.pdf',
    file_type: 'pdf',
    upload_date: new Date(Date.now() - 300000).toISOString(),
    status: 'processing',
    processing_stage: 'Generating embeddings...',
    processing_progress: 0.67,
  },

  completed: {
    doc_id: '929a4b57-aedc-44cf-a686-b19cb50466ae',
    filename: '10 Rules of Creativity - Off-Hours Creative.pdf',
    file_type: 'pdf',
    upload_date: new Date('2025-10-31T18:49:29Z').toISOString(),
    thumbnail_url: '/images/docusearch/thumbnails/10-rules-of-creativity.jpg',
    status: 'completed',
  },

  failed: {
    doc_id: '929a4b57-aedc-44cf-a686-b19cb50466ae',
    filename: '10 Rules of Creativity - Off-Hours Creative.pdf',
    file_type: 'pdf',
    upload_date: new Date('2025-10-31T18:49:29Z').toISOString(),
    status: 'failed',
    error_message: 'File corrupted or unsupported format',
  },

  audioCompleted: {
    doc_id: 'a27c845f-5ab2-472a-95a3-95ed92ce53bd',
    filename: 'Creative Myth 1.mp3',
    file_type: 'mp3',
    upload_date: new Date('2025-11-12T22:58:52.325939Z').toISOString(),
    cover_art_url: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxyZWN0IHg9Ii01MS4yIiB5PSItNTEuMiIgd2lkdGg9IjYxNC40IiBoZWlnaHQ9IjYxNC40IiBmaWxsPSIjNjc2NzY3Ii8+CiA8cGF0aCBkPSJtMjMyLjgyIDIwNi4xNWMtMS44MDA4IDAtMy40Mzc1LTAuNzQyMTktNC42MzY3LTEuOTI1OC0xLjE4MzYtMS4xODM2LTEuOTI1OC0yLjgyMDMtMS45MjU4LTQuNjM2N3YtMzEuMjczYzAtMS44MDA4IDAuNzQyMTktMy40Mzc1IDEuOTI1OC00LjYzNjcgMS4xODM2LTEuMTgzNiAyLjgyMDMtMS45MjU4IDQuNjM2Ny0xLjkyNTggMS44MDA4IDAgMy40Mzc1IDAuNzQyMTkgNC42MzY3IDEuOTI1OCAxLjE4MzYgMS4xODM2IDEuOTI1OCAyLjgyMDMgMS45MjU4IDQuNjM2N3YzMS4yNzNjMCAxLjgwMDgtMC43NDIxOSAzLjQzNzUtMS45MjU4IDQuNjM2Ny0xLjE4MzYgMS4xODM2LTIuODIwMyAxLjkyNTgtNC42MzY3IDEuOTI1OHptLTUyLjM4MyA4NC4yMTFjMCAxLjE0NDUtMC45MzM1OSAyLjA3ODEtMi4wNzgxIDIuMDc4MWgtMjkuNTM1YzAuNjI4OTEgNy4xMDU1IDMuODA0NyAxMy41MTYgOC41ODk4IDE4LjMwMSA1LjM3ODkgNS4zNzg5IDEyLjc4NSA4LjcwMzEgMjAuOTM0IDguNzAzMSA4LjE0ODQgMCAxNS41NjYtMy4zMzU5IDIwLjkzNC04LjcwMzEgNS4zNzg5LTUuMzc4OSA4LjcwMzEtMTIuNzg1IDguNzAzMS0yMC45MzR2LTQxLjMzNmMwLTguMTQ4NC0zLjMzNTktMTUuNTY2LTguNzAzMS0yMC45MzQtNS4zNzg5LTUuMzc4OS0xMi43ODUtOC43MDMxLTIwLjkzNC04LjcwMzEtOC4xNDg0IDAtMTUuNTY2IDMuMzM1OS0yMC45MzQgOC43MDMxLTQuNzczNCA0Ljc3MzQtNy45MzM2IDExLjE0OC04LjU3ODEgMTguMjExaDI5LjUzNWMxLjE0NDUgMCAyLjA3ODEgMC45MzM1OSAyLjA3ODEgMi4wNzgxczAtMC45MzM1OS0yLjA3ODEgMi4wNzgxaC0yOS42NDh2MTAuMDM5aDI5LjY0OGMxLjE0NDUgMCAyLjA3ODEgMC45MzM1OSAyLjA3ODEgMi4wNzgxcy0wLjkzMzU5IDIuMDc4MS0yLjA3ODEgMi4wNzgxaC0yOS42NDh2MTAuMDM5aDI5LjY0OGMxLjE0NDUgMCAyLjA3ODEgMC45MzM1OSAyLjA3ODEgMi4wNzgxIDAgMS4xNDQ1LTAuOTMzNTkgMi4wNzgxLTIuMDc4MSAyLjA3ODFoLTI5LjY0OHYxMC4wMzloMjkuNjQ4YzEuMTQ0NSAwIDIuMDc4MSAwLjkzMzU5IDIuMDc4MSAyLjA3ODF6bTE5NC4xMS0xNTguMjVjLTIuMzc4OS0yLjM3ODktNS42NTYyLTMuODU1NS05LjI2OTUtMy44NTU1aC0xOTIuODljLTMuNjEzMyAwLTYuODkwNiAxLjQ3MjctOS4yNjk1IDMuODU1NS0yLjM3ODkgMi4zNzg5LTMuODU1NSA1LjY1NjItMy44NTU1IDkuMjY5NXY2OC43NDJjMCAxLjE0NDUgMC45MzM1OSAyLjA3ODEgMi4wNzgxIDIuMDc4MSAxLjE0NDUgMCAyLjA3ODEtMC45MzM1OSAyLjA3ODEtMi4wNzgxbC0wLjAxMTcxOC02OC43NDJjMC0yLjQ2ODggMS4wMDc4LTQuNzEwOSAyLjY0NDUtNi4zNDc3IDEuNjI1LTEuNjI1IDMuODc4OS0yLjY0NDUgNi4zNDc3LTIuNjQ0NWgxOTIuODhjMi40Njg4IDAgNC43MTA5IDEuMDA3OCA2LjM0NzcgMi42NDQ1IDEuNjI1IDEuNjI1IDIuNjQ0NSAzLjg3ODkgMi42NDQ1IDYuMzQ3N3Y4NC41MjdjMCAyLjQ2ODgtMS4wMDc4IDQuNzEwOS0yLjY0NDUgNi4zNDc3LTEuNjI1IDEuNjI1LTMuODc4OSAyLjY0NDUtNi4zNDc3IDIuNjQ0NWgtMTQ4LjIxYy0xLjE0NDUgMC0yLjA3ODEgMC45MzM1OS0yLjA3ODEgMi4wNzgxczAuOTMzNTkgMi4wNzgxIDIuMDc4MSAyLjA3ODFoMTQ4LjIxYzMuNjEzMyAwIDYuODkwNi0xLjQ3MjcgOS4yNjk1LTMuODU1NSAyLjM3ODktMi4zNzg5IDMuODU1NS01LjY1NjIgMy44NTU1LTkuMjY5NXYtODQuNTU1YzAtMy42MTMzLTEuNDcyNy02Ljg5MDYtMy44NTU1LTkuMjY5NXptLTE5MC4xOSA2Ny4yODFjMS44MDA4IDAgMy40Mzc1LTAuNzQyMTkgNC42MzY3LTEuOTI1OCAxLjE4MzYtMS4xODM2IDEuOTI1OC0yLjgyMDMgMS45MjU4LTQuNjM2N3YtMTcuNzQ2YzAtMS44MDA4LTAuNzQyMTktMy40Mzc1LTEuOTI1OC00LjYzNjctMS4xODM2LTEuMTgzNi0yLjgyMDMtMS45MjU4LTQuNjM2Ny0xLjkyNTgtMS44MDA4IDAtMy40Mzc1IDAuNzQyMTktNC42MzY3IDEuOTI1OC0xLjE4MzYgMS4xODM2LTEuOTI1OCAyLjgyMDMtMS45MjU4IDQuNjM2N3YxNy43NDZjMCAxLjgwMDggMC43NDIxOSAzLjQzNzUgMS45MjU4IDQuNjM2NyAxLjE4MzYgMS4xODM2IDIuODIwMyAxLjkyNTggNC42MzY3IDEuOTI1OHptMjkuMDIgMTAuMjI3YzEuMTgzNi0xLjE4MzYgMS45MjU4LTIuODIwMyAxLjkyNTgtNC42MzY3di00Mi4wODJjMC0xLjgwMDgtMC43NDIxOS0zLjQzNzUtMS45MjU4LTQuNjM2Ny0xLjE4MzYtMS4xODM2LTIuODIwMy0xLjkyNTgtNC42MzY3LTEuOTI1OC0xLjgwMDggMC0zLjQzNzUgMC43NDIxOS00LjYzNjcgMS45MjU4LTEuMTgzNiAxLjE4MzYtMS45MjU4IDIuODIwMy0xLjkyNTggNC42MzY3djQyLjA4MmMwIDEuODAwOCAwLjc0MjE5IDMuNDM3NSAxLjkyNTggNC42MzY3IDEuMTgzNiAxLjE4MzYgMi44MjAzIDEuOTI1OCA0LjYzNjcgMS45MjU4IDEuODAwOCAwIDMuNDM3NS0wLjc0MjE5IDQuNjM2Ny0xLjkyNTh6bTQ3Ljk4OCAwYzEuMTgzNi0xLjE4MzYgMS45MjU4LTIuODIwMyAxLjkyNTgtNC42MzY3di00Mi4wODJjMC0xLjgwMDgtMC43NDIxOS0zLjQzNzUtMS45MjU4LTQuNjM2Ny0xLjE4MzYtMS4xODM2LTIuODIwMy0xLjkyNTgtNC42MzY3LTEuOTI1OC0xLjgwMDggMC0zLjQzNzUgMC43NDIxOS00LjYzNjcgMS45MjU4LTEuMTgzNiAxLjE4MzYtMS45MjU4IDIuODIwMy0xLjkyNTggNC42MzY3djQyLjA4MmMwIDEuODAwOCAwLjc0MjE5IDMuNDM3NSAxLjkyNTggNC42MzY3IDEuMTgzNiAxLjE4MzYgMi44MjAzIDEuOTI1OCA0LjYzNjcgMS45MjU4IDEuODAwOCAwIDMuNDM3NS0wLjc0MjE5IDQuNjM2Ny0xLjkyNTh6bTcyLjc3My0xMS41MzljMS4xODM2LTEuMTgzNiAxLjkyNTgtMi44MjAzIDEuOTI1OC00LjYzNjd2LTE4Ljk4YzAtMS44MDA4LTAuNzQyMTktMy40Mzc1LTEuOTI1OC00LjYzNjctMS4xODM2LTEuMTgzNi0yLjgyMDMtMS45MjU4LTQuNjM2Ny0xLjkyNTgtMS44MDA4IDAtMy40Mzc1IDAuNzQyMTktNC42MzY3IDEuOTI1OC0xLjE4MzYgMS4xODM2LTEuOTI1OCAyLjgyMDMtMS45MjU4IDQuNjM2N3YxOC45OGMwIDEuODAwOCAwLjc0MjE5IDMuNDM3NSAxLjkyNTggNC42MzY3IDEuMTgzNiAxLjE4MzYgMi44MjAzIDEuOTI1OCA0LjYzNjcgMS45MjU4IDEuODAwOCAwIDMuNDM3NS0wLjc0MjE5IDQuNjM2Ny0xLjkyNTh6bS0yNC45MjYgMTIuMDI3YzEuMTgzNi0xLjE4MzYgMS45MjU4LTIuODIwMyAxLjkyNTgtNC42MzY3di00My4wNjJjMC0xLjgwMDgtMC43NDIxOS0zLjQzNzUtMS45MjU4LTQuNjM2Ny0xLjE4MzYtMS4xODM2LTIuODIwMy0xLjkyNTgtNC42MzY3LTEuOTI1OC0xLjgwMDggMC0zLjQzNzUgMC43NDIxOS00LjYzNjcgMS45MjU4LTEuMTgzNiAxLjE4MzYtMS45MjU4IDIuODIwMy0xLjkyNTggNC42MzY3djQzLjA2MmMwIDEuODAwOCAwLjc0MjE5IDMuNDM3NSAxLjkyNTggNC42MzY3IDEuMTgzNiAxLjE4MzYgMi44MjAzIDEuOTI1OCA0LjYzNjcgMS45MjU4IDEuODAwOCAwIDMuNDM3NS0wLjc0MjE5IDQuNjM2Ny0xLjkyNTh6bS0yMy45MTggMTUuOTY5YzEuMTgzNi0xLjE4MzYgMS45MjU4LTIuODIwMyAxLjkyNTgtNC42MzY3di03NC45OGMwLTEuODAwOC0wLjc0MjE5LTMuNDM3NS0xLjkyNTgtNC42MzY3LTEuMTgzNi0xLjE4MzYtMi44MjAzLTEuOTI1OC00LjYzNjctMS45MjU4LTEuODAwOCAwLTMuNDM3NSAwLjc0MjE5LTQuNjM2NyAxLjkyNTgtMS4xODM2IDEuMTgzNi0xLjkyNTggMi44MjAzLTEuOTI1OCA0LjYzNjd2NzQuOThjMCAxLjgwMDggMC43NDIxOSAzLjQzNzUgMS45MjU4IDQuNjM2NyAxLjE4MzYgMS4xODM2IDIuODIwMyAxLjkyNTggNC42MzY3IDEuOTI1OCAxLjgwMDggMCAzLjQzNzUtMC43NDIxOSA0LjYzNjctMS45MjU4em03My4wMDQtMjEuMTIxYzEuMTgzNi0xLjE4MzYgMS45MjU4LTIuODIwMyAxLjkyNTgtNC42MzY3di0zMi43NThjMC0xLjgwMDgtMC43NDIxOS0zLjQzNzUtMS45MjU4LTQuNjM2Ny0xLjE4MzYtMS4xODM2LTIuODIwMy0xLjkyNTgtNC42MzY3LTEuOTI1OC0xLjgwMDggMC0zLjQzNzUgMC43NDIxOS00LjYzNjcgMS45MjU4LTEuMTgzNiAxLjE4MzYtMS45MjU4IDIuODIwMy0xLjkyNTggNC42MzY3djMyLjc1OGMwIDEuODAwOCAwLjc0MjE5IDMuNDM3NSAxLjkyNTggNC42MzY3IDEuMTgzNiAxLjE4MzYgMi44MjAzIDEuOTI1OCA0LjYzNjcgMS45MjU4IDEuODAwOCAwIDMuNDM3NS0wLjc0MjE5IDQuNjM2Ny0xLjkyNTh6bS0xMzcuMjcgODAuODU5Yy0xLjE0NDUgMC0yLjA4OTggMC45MzM1OS0yLjA4OTggMi4wODk4djQuNjk5MmMwIDIyLjM4My0xOC4xOTkgNDAuNTgyLTQwLjU4MiA0MC41ODItMjIuMzgzIDAtNDAuNTgyLTE4LjE5OS00MC41ODItNDAuNTgydi00LjY5OTJjMC0xLjE0NDUtMC45MzM1OS0yLjA4OTgtMi4wODk4LTIuMDg5OC0xLjE0NDUgMC0yLjA4OTggMC45MzM1OS0yLjA4OTggMi4wODk4djQuNjk5MmMwIDIyLjc1OCAxNy4wNzggNDEuNTY2IDM5LjA5NCA0NC4zNTktMC4wMTE3MTkgMC4xMzY3Mi0wLjA1MDc4MSAwLjI2NTYyLTAuMDUwNzgxIDAuNDAyMzR2MzQuNDM4YzAgMC4yODkwNi0wLjIyNjU2IDAuNTE1NjItMC41MTU2MiAwLjUxNTYyaC0xNC4xMDVjLTEuNTc0MiAwLTIuOTk2MSAwLjY0MDYzLTQuMDMxMiAxLjY3NTgtMS4wMzEyIDEuMDMxMi0xLjY3NTggMi40Njg4LTEuNjc1OCA0LjAzMTIgMCAxLjU3NDIgMC42NDA2MiAyLjk5NjEgMS42NzU4IDQuMDMxMiAxLjAzMTIgMS4wMzEyIDIuNDY4OCAxLjY3NTggNC4wMzEyIDEuNjc1OGg0MC42NjhjMS41NzQyIDAgMi45OTYxLTAuNjQwNjIgNC4wMzEyLTEuNjc1OCAxLjAzMTItMS4wMzEyIDEuNjc1OC0yLjQ2ODggMS42NzU4LTQuMDMxMiAwLTEuNTc0Mi0wLjY0MDYyLTIuOTk2MS0xLjY3NTgtNC4wMzEyLTEuMDMxMi0xLjAzMTItMi40Njg4LTEuNjc1OC00LjAzMTItMS42NzU4aC0xNC4xMDVjLTAuMjg5MDYgMC0wLjUxNTYyLTAuMjI2NTYtMC41MTU2Mi0wLjUxNTYydi0zNC40MzhjMC0wLjEzNjcyLTAuMDM5MDYyLTAuMjY1NjMtMC4wNTA3ODEtMC40MDIzNCAyMi4wMDQtMi43OTY5IDM5LjA5NC0yMS42MDIgMzkuMDk0LTQ0LjM1OXYtNC42OTkyYzAtMS4xNDQ1LTAuOTMzNTktMi4wODk4LTIuMDg5OC0yLjA4OTh6IiBmaWxsPSIjZDJkMmQyIi8+Cjwvc3ZnPgo=',
    status: 'completed',
  },
};

// Mock citations for citation demo (real DocuSearch output - "Who is Tucker")
export const mockCitations: Citation[] = [
  {
    id: 1,
    text: 'In the podcast episode "Inspiration Comes From The Work," Tucker introduces himself as the host of The Spark & The Art Creativity Podcast',
    page: 1,
  },
  {
    id: 3,
    text: "Sean \"Tucker\" Harley's résumé identifies him as a UX & Design Leader with over 20 years of experience",
    page: 2,
  },
  {
    id: 4,
    text: 'He is passionate about creating digital experiences that balance user goals with business objectives',
    page: 2,
  },
];

// Mock answer text with citations (real DocuSearch output - "Who is Tucker")
export const mockAnswerText = `Based on the provided materials, Tucker refers to Sean "Tucker" Harley, a UX and design professional and also the host of The Spark & The Art: Creativity Podcast.

In the podcast episode "Inspiration Comes From The Work," Tucker introduces himself as the host of The Spark & The Art Creativity Podcast, which alternates between creative interviews and episodes offering insight and inspiration on the creative process [1].

Separately, Sean "Tucker" Harley's résumé identifies him as a UX & Design Leader with over 20 years of experience in user-centered digital product design and leadership. His background includes leading UX projects for companies such as Nutrien and Worldplay Networks, mentoring design teams, and conducting usability testing and research [3]. He is passionate about creating digital experiences that balance user goals with business objectives [4].

In summary, Tucker is Sean "Tucker" Harley — a UX and design leader who also produces and hosts The Spark & The Art podcast focused on creativity and personal inspiration.`;

// Mock references matching citations (real DocuSearch output - "Who is Tucker")
export const mockReferences: Reference[] = [
  {
    id: 1,
    document_id: '85d15d60-f97b-41bb-be4c-a85f036ecce6',
    document_name: 'Inspiration_comes_from_the_work.mp3',
    excerpt: 'Tucker introduces himself as the host of The Spark & The Art Creativity Podcast, which alternates between creative interviews and episodes offering insight and inspiration on the creative process.',
    page: 1,
  },
  {
    id: 2,
    document_id: '85d15d60-f97b-41bb-be4c-a85f036ecce6',
    document_name: 'Inspiration_comes_from_the_work.mp3',
    excerpt: 'Additional context about The Spark & The Art podcast and Tucker\'s approach to exploring creativity through conversations and reflections.',
    page: 1,
  },
  {
    id: 3,
    document_id: '2f548abe-6977-4c52-9ac2-53c50a4610e3',
    document_name: "Sean  'Tucker' Harley - Resume.pdf",
    excerpt: 'UX & Design Leader with over 20 years of experience in user-centered digital product design and leadership. Background includes leading UX projects for companies such as Nutrien and Worldplay Networks, mentoring design teams, and conducting usability testing and research.',
    page: 2,
  },
  {
    id: 4,
    document_id: '2f548abe-6977-4c52-9ac2-53c50a4610e3',
    document_name: "Sean  'Tucker' Harley - Resume.pdf",
    excerpt: 'Passionate about creating digital experiences that balance user goals with business objectives, with expertise in design systems, user research, and cross-functional team leadership.',
    page: 2,
  },
  {
    id: 5,
    document_id: '2f548abe-6977-4c52-9ac2-53c50a4610e3',
    document_name: "Sean  'Tucker' Harley - Resume.pdf",
    excerpt: 'Lead UX Designer at Nutrien with experience in responsive design, user journey mapping, and creating accessible design systems. Previous experience includes roles at Worldplay Networks and various design consulting positions.',
    page: 1,
  },
];

// Mock transcript for audio player demo (from Creative Myth 1.mp3 - a27c845f-5ab2-472a-95a3-95ed92ce53bd)
export const mockTranscript: TranscriptSegment[] = [
  {
    id: 'seg-1',
    start_time: 1.04,
    end_time: 8.94,
    text: "Myth 1. Ideas come in a flash. Ideas may feel like they come in a flash, but it's",
  },
  {
    id: 'seg-2',
    start_time: 8.94,
    end_time: 14.56,
    text: "actually after your brain has done a lot of work. If you get frustrated and can't",
  },
  {
    id: 'seg-3',
    start_time: 14.56,
    end_time: 18.42,
    text: "seem to figure out a certain problem or get past a certain limitation in",
  },
  {
    id: 'seg-4',
    start_time: 18.42,
    end_time: 23.64,
    text: "your understanding, can't quite seem to make your hand do the thing you need it",
  },
  {
    id: 'seg-5',
    start_time: 23.64,
    end_time: 29.6,
    text: "to to make the paint stroke or hit the correct note, take a break. The break",
  },
  {
    id: 'seg-6',
    start_time: 29.6,
    end_time: 35.16,
    text: "needs to be meditative though. A break where the body is busy but the mind is",
  },
  {
    id: 'seg-7',
    start_time: 35.16,
    end_time: 40.7,
    text: "free. Washington dishes going for a walk, playing an instrument or a different",
  },
  {
    id: 'seg-8',
    start_time: 40.7,
    end_time: 46.56,
    text: "instrument if that's what you're stuck on. It can't be watching TV or playing video",
  },
  {
    id: 'seg-9',
    start_time: 46.56,
    end_time: 52.44,
    text: "games or catching up on social feeds though. That stuff engages your brain and",
  },
  {
    id: 'seg-10',
    start_time: 52.44,
    end_time: 57.92,
    text: "leaves your body alone. We need the opposite. You may find that driving somewhere",
  },
  {
    id: 'seg-11',
    start_time: 57.92,
    end_time: 63.02,
    text: "or having a shower, great times for ideas to just show up. It's because your",
  },
  {
    id: 'seg-12',
    start_time: 63.02,
    end_time: 67.24,
    text: "body is busy doing the thing it's done thousands of times before and your",
  },
  {
    id: 'seg-13',
    start_time: 67.24,
    end_time: 73.78,
    text: "brain can just hum along working on the problem. Sleeping is also amazing at",
  },
  {
    id: 'seg-14',
    start_time: 73.78,
    end_time: 79.76,
    text: "helping with this. In the book, why we sleep? It describes in great detail how",
  },
  {
    id: 'seg-15',
    start_time: 79.76,
    end_time: 85.96,
    text: "sleep and dreams help rewire the brain. Here's my Laman's explanation.",
  },
  {
    id: 'seg-16',
    start_time: 87.2,
    end_time: 96.3,
    text: "REM rapid eye movement and N-RAM or non-RAM non-RAPID eye movement do different",
  },
  {
    id: 'seg-17',
    start_time: 96.3,
    end_time: 103.66,
    text: "things. N-RAM is where we spend most of our sleeping time. This is when the brain",
  },
  {
    id: 'seg-18',
    start_time: 103.66,
    end_time: 108.18,
    text: "is pruning memories and moving things from short-term memories to long-term memories.",
  },
  {
    id: 'seg-19',
    start_time: 108.84,
    end_time: 113.4,
    text: "This is also when the physical limitations we encounter when playing an instrument or",
  },
  {
    id: 'seg-20',
    start_time: 113.4,
    end_time: 119,
    text: "drawing or singing are sorted out. You may find after a frustrating session of",
  },
  {
    id: 'seg-21',
    start_time: 119,
    end_time: 124.98,
    text: "practice that after a good night's sleep the challenging thing is much easier.",
  },
  {
    id: 'seg-22',
    start_time: 126.3,
    end_time: 132.14,
    text: "R-R-M sleep is when we dream. This is the time when your brain is processing",
  },
  {
    id: 'seg-23',
    start_time: 132.14,
    end_time: 138.1,
    text: "emotions and creating understanding of the world. It's also the time when all of",
  },
  {
    id: 'seg-24',
    start_time: 138.1,
    end_time: 143.92,
    text: "logic of N-RAM is completely washed away. This allows the mind to take very",
  },
  {
    id: 'seg-25',
    start_time: 143.92,
    end_time: 149.14,
    text: "disparate concepts and combine them into new and wonderful creative ideas.",
  },
  {
    id: 'seg-26',
    start_time: 149.92,
    end_time: 155.66,
    text: "And the very best R-R-M comes in the last two hours of seven to eight hours of",
  },
  {
    id: 'seg-27',
    start_time: 155.66,
    end_time: 161.36,
    text: "sleep. So don't just try to fit in a five-hour rest after midnight. You need to",
  },
  {
    id: 'seg-28',
    start_time: 161.36,
    end_time: 171.08,
    text: "get good sleep to get good ideas. Exercise. Explore some brain-freeing thought-builder",
  },
  {
    id: 'seg-29',
    start_time: 171.08,
    end_time: 178.36,
    text: "breaks. Notice when your ideas seem to come to you most often. You may want to",
  },
  {
    id: 'seg-30',
    start_time: 178.36,
    end_time: 182.14,
    text: "mark the times down somewhere to help you keep track of this if it isn't something",
  },
  {
    id: 'seg-31',
    start_time: 182.14,
    end_time: 189.34,
    text: "you've already noticed. Now, using what you've already listed, what are some",
  },
  {
    id: 'seg-32',
    start_time: 189.34,
    end_time: 197.3,
    text: "brain-freeing break time activities available to you? And lastly, now be honest, do you",
  },
  {
    id: 'seg-33',
    start_time: 197.3,
    end_time: 203.58,
    text: "force yourself to work through tiredness and put off sleep? Consider doing an experiment",
  },
  {
    id: 'seg-34',
    start_time: 203.58,
    end_time: 208.02,
    text: "where you let yourself take a break and get a full seven hours of sleep.",
  },
];

// Processing stages for animation demo
export const processingStages = [
  { stage: 'Uploading...', progress: 0.15 },
  { stage: 'Extracting text...', progress: 0.35 },
  { stage: 'Generating embeddings...', progress: 0.55 },
  { stage: 'Creating thumbnails...', progress: 0.75 },
  { stage: 'Finalizing...', progress: 0.95 },
  { stage: 'Complete', progress: 1.0 },
];

// Helper: Format date like DocuSearch
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

// Helper: Format duration (seconds to MM:SS)
export function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Helper: Get display name from filename
export function getDisplayName(filename: string): string {
  const parts = filename.split('.');
  if (parts.length > 1) parts.pop();
  let name = parts.join('.');
  name = name.replace(/[_-]/g, ' ');
  name = name.replace(/\s+\d{10,}$/, '');
  return name.replace(/\s+/g, ' ').trim();
}

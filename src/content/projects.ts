import { Project } from './types'

export const projects: Project[] = [
  {
    id: 'docusearch',
    title: 'DocuSearch',
    slug: 'docusearch',
    tagline: 'Designing Transparency into RAG Systems',
    elevatorPitch:
      'I built DocuSearch to solve a problem I kept running into: most RAG systems let you upload documents, but once they\'re in, they become invisible. I needed a system that worked naturally for both people and AI agents—where I could browse, read, and listen to documents while the AI could semantically search across everything.',
    oneLiner:
      'A dual-interface RAG system where people browse documents visually while AI agents search semantically—both working with the same transparent, file-native architecture.',
    priority: 'primary',
    caseStudyUrl: '/docusearch',
    category: 'AI UX Innovation',
    skills: [
      'Dual Interface Design',
      'Agent Experience (AGx) Research',
      'Multi-modal System Architecture',
      'Information Architecture',
      'Full-stack Development',
      'React 19',
      'Python',
      'FastAPI',
      'ColPali',
      'ChromaDB',
      'Semantic Search',
    ],
    githubUrl: 'https://github.com/tuckertucker/tkr-docusearch',
  },
  {
    id: 'context-kit',
    title: 'tkr-context-kit',
    slug: 'context-kit',
    tagline: 'Designing Context Architecture for AI Agents',
    elevatorPitch:
      'I created tkr-context-kit to solve a fundamental problem I was experiencing with AI agents: they were spending too much time in every conversation relearning my project structure and functionality. I realized I needed to design a system that would give agents comprehensive context upfront, allowing them to focus on actual work rather than constantly re-discovering what my modules do or how my components are structured.',
    oneLiner:
      'A context architecture system that front-loads comprehensive project knowledge to AI agents through YAML semantic anchors, reducing context discovery overhead by 70%.',
    priority: 'secondary',
    caseStudyUrl: '/context-kit',
    category: 'AGx Design Methodology',
    skills: [
      'Agent Experience (AGx) Research',
      'Information Architecture',
      'YAML Schema Design',
      'Service-Oriented Architecture',
      'Progressive Disclosure',
      'Knowledge Graph Design',
      'TypeScript',
      'React 19',
      'ReactFlow',
      'SQLite',
      'MCP Integration',
    ],
    githubUrl: 'https://github.com/tuckertucker/tkr-context-kit',
  },
  {
    id: 'kanban',
    title: 'TaskBoardAI',
    slug: 'kanban',
    tagline: 'Kanban Board for People-AI Collaboration',
    elevatorPitch:
      'I was managing tasks in markdown files—simple and version-controllable, but frustrating to maintain. I needed visual kanban for myself and structured data for AI agents, without maintaining two systems. TaskBoardAI provides a dual interface where I enjoy drag-and-drop kanban while agents efficiently parse and modify structured JSON files.',
    oneLiner:
      'A file-based kanban system where people use visual boards and AI agents read/write JSON—both working with identical task data.',
    priority: 'tertiary',
    caseStudyUrl: '/kanban',
    category: 'Dual Interface Design',
    skills: [
      'Dual Interface Design',
      'File-based Architecture',
      'MCP Integration',
      'User Research',
      'Iterative Design',
      'Node.js',
      'Express',
      'Vanilla JavaScript',
      'JSON Storage',
    ],
    githubUrl: 'https://github.com/tuckertucker/taskboardai',
  },
]

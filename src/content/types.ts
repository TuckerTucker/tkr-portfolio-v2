/**
 * Content type definitions for Tucker's portfolio
 *
 * These types define the structure of all portfolio content including
 * projects, work history, and case studies.
 */

export interface Project {
  id: string
  title: string
  slug: string
  tagline: string
  elevatorPitch: string
  oneLiner?: string
  priority: 'primary' | 'secondary' | 'tertiary'
  caseStudyUrl: string
  category: string
  skills: string[]
  githubUrl?: string
}

export interface WorkHistoryEntry {
  company: string
  role: string
  period: string
  description: string
  highlights: string[]
}

export interface WorkHistory {
  summary: string
  entries: WorkHistoryEntry[]
  creativeBackground: string
  bridgeSentence: string
}

export interface CaseStudyContent {
  id: string
  title: string
  tagline: string
  problem: {
    title: string
    content: string[]
  }
  understanding: {
    title: string
    content: string[]
    keyInsights?: string[]
  }
  solution: {
    title: string
    content: string[]
    features?: string[]
  }
  impact: {
    title: string
    content: string[]
    metrics?: string[]
  }
  metadata: {
    role: string
    type: string
    stack: string[]
    skills: string[]
    year?: string
    githubUrl?: string
  }
}

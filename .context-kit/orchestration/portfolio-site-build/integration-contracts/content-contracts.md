# Content Integration Contracts

**Owner:** Agent 5 (content-agent)
**Consumers:** Agents 7-13 (homepage and case study agents)

---

## TypeScript Interfaces

### Project Interface
```typescript
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
}
```

### Work History Interface
```typescript
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
```

### Case Study Interface
```typescript
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
  }
}
```

---

## File Exports

### src/content/types.ts
```typescript
export * from './types'
```

### src/content/projects.ts
```typescript
import { Project } from './types'

export const projects: Project[] = [
  // docusearch, context-kit, kanban
]
```

### src/content/work-history.ts
```typescript
import { WorkHistory } from './types'

export const workHistory: WorkHistory = {
  summary: "...",
  entries: [...],
  creativeBackground: "...",
  bridgeSentence: "..."
}
```

### src/content/case-studies/docusearch.ts
```typescript
import { CaseStudyContent } from '../types'

export const docusearchCaseStudy: CaseStudyContent = {
  // Full case study content
}
```

### src/content/case-studies/context-kit.ts
```typescript
import { CaseStudyContent } from '../types'

export const contextKitCaseStudy: CaseStudyContent = {
  // Full case study content
}
```

### src/content/case-studies/kanban.ts
```typescript
import { CaseStudyContent } from '../types'

export const kanbanCaseStudy: CaseStudyContent = {
  // Full case study content (condensed)
}
```

---

## Validation Requirements

Agent 5 must ensure:
1. ✓ All TypeScript interfaces compile
2. ✓ All content files export correct types
3. ✓ Content matches specifications from reference materials
4. ✓ No TypeScript errors in content files
5. ✓ All required fields populated

Consumers must:
1. Import types from `@/content/types`
2. Import content from respective files
3. Use interfaces for type safety
4. Handle optional fields gracefully

---

## Content Source Mapping

Reference materials → Content files:

| Source | Destination | Content Type |
|--------|-------------|--------------|
| `work-history-summary.md` | `src/content/work-history.ts` | WorkHistory |
| `portfolio-priorities.md` | `src/content/projects.ts` | Project[] |
| `docusearch_portfolio_case_study.md` | `src/content/case-studies/docusearch.ts` | CaseStudyContent |
| `tkr-context-kit_case_study.md` | `src/content/case-studies/context-kit.ts` | CaseStudyContent |
| `tkr-kanban_portfolio_snippet.md` | `src/content/case-studies/kanban.ts` | CaseStudyContent |

---

## Contract Validation

```typescript
// Test that all content files import correctly
import { projects } from '@/content/projects'
import { workHistory } from '@/content/work-history'
import { docusearchCaseStudy } from '@/content/case-studies/docusearch'
import { contextKitCaseStudy } from '@/content/case-studies/context-kit'
import { kanbanCaseStudy } from '@/content/case-studies/kanban'

// Verify types
console.assert(projects.length === 3)
console.assert(workHistory.entries.length > 0)
console.assert(docusearchCaseStudy.metadata.role !== undefined)
```

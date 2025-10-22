import { CaseStudyLayout } from '@/components/case-studies/CaseStudyLayout'
import { kanbanCaseStudy } from '@/content/case-studies/kanban'

export default function Kanban() {
  return <CaseStudyLayout content={kanbanCaseStudy} />
}

import {
  CaseStudyLayout,
  ProblemSection,
  UnderstandingSection,
  SolutionSection,
  ImpactSection,
  ProjectMetadata,
} from '@/components/case-studies'
import { contextKitCaseStudy } from '@/content/case-studies/context-kit'

export default function ContextKit() {
  return (
    <CaseStudyLayout
      title={contextKitCaseStudy.title}
      tagline={contextKitCaseStudy.tagline}
    >
      <ProblemSection
        title={contextKitCaseStudy.problem.title}
        content={contextKitCaseStudy.problem.content}
      />

      <UnderstandingSection
        title={contextKitCaseStudy.understanding.title}
        content={contextKitCaseStudy.understanding.content}
        highlights={contextKitCaseStudy.understanding.keyInsights}
        showConversation={true}
      />

      <SolutionSection
        title={contextKitCaseStudy.solution.title}
        content={contextKitCaseStudy.solution.content}
        highlights={contextKitCaseStudy.solution.features}
      />

      <ImpactSection
        title={contextKitCaseStudy.impact.title}
        content={contextKitCaseStudy.impact.content}
        highlights={contextKitCaseStudy.impact.metrics}
      />

      <ProjectMetadata
        role={contextKitCaseStudy.metadata.role}
        type={contextKitCaseStudy.metadata.type}
        stack={contextKitCaseStudy.metadata.stack}
        skills={contextKitCaseStudy.metadata.skills}
        year={contextKitCaseStudy.metadata.year}
      />
    </CaseStudyLayout>
  )
}

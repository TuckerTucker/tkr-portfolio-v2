import { ReactNode } from 'react'
import { CaseStudyContent } from '@/content/types'
import ProblemSection from './ProblemSection'
import UnderstandingSection from './UnderstandingSection'
import SolutionSection from './SolutionSection'
import ImpactSection from './ImpactSection'
import ProjectMetadata from './ProjectMetadata'

// Support both the old API (content prop) and new API (children prop)
interface CaseStudyLayoutPropsWithContent {
  content: CaseStudyContent
  children?: never
  title?: never
  tagline?: never
}

interface CaseStudyLayoutPropsWithChildren {
  children: ReactNode
  title: string
  tagline: string
  content?: never
}

type CaseStudyLayoutProps =
  | CaseStudyLayoutPropsWithContent
  | CaseStudyLayoutPropsWithChildren

export function CaseStudyLayout(props: CaseStudyLayoutProps) {
  // Old API: render complete case study from content object
  if (props.content) {
    const { content } = props
    return (
      <article className="min-h-screen bg-background">
        {/* Header Section */}
        <header className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {content.title}
              </h1>
              <p className="mt-4 md:mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
                {content.tagline}
              </p>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
            <ProblemSection
              title={content.problem.title}
              content={content.problem.content}
            />

            <UnderstandingSection
              title={content.understanding.title}
              content={content.understanding.content}
              highlights={content.understanding.keyInsights}
            />

            <SolutionSection
              title={content.solution.title}
              content={content.solution.content}
              highlights={content.solution.features}
            />

            <ImpactSection
              title={content.impact.title}
              content={content.impact.content}
              highlights={content.impact.metrics}
            />

            <ProjectMetadata
              role={content.metadata.role}
              type={content.metadata.type}
              stack={content.metadata.stack}
              skills={content.metadata.skills}
              year={content.metadata.year}
              githubUrl={content.metadata.githubUrl}
            />
          </div>
        </main>
      </article>
    )
  }

  // New API: render with children components
  const { children, title, tagline } = props
  return (
    <article className="min-h-screen bg-background">
      {/* Header Section */}
      <header className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h1>
            <p className="mt-4 md:mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
              {tagline}
            </p>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
          {children}
        </div>
      </main>
    </article>
  )
}

export default CaseStudyLayout

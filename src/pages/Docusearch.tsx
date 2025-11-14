import ProblemSection from '@/components/case-studies/ProblemSection'
import UnderstandingSection from '@/components/case-studies/UnderstandingSection'
import SolutionSection from '@/components/case-studies/SolutionSection'
import ImpactSection from '@/components/case-studies/ImpactSection'
import ProjectMetadata from '@/components/case-studies/ProjectMetadata'
import { docusearchCaseStudy } from '@/content/case-studies/docusearch'
import DocuSearchDemos from '@/components/demos/docusearch/DocuSearchDemos'

export default function Docusearch() {
  const content = docusearchCaseStudy

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

      {/* Hero Image */}
      <section className="border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-6xl mx-auto">
            <img
              src="/images/docusearch/docusearch-multimodal-rag-library-hero.png"
              alt="DocuSearch multimodal RAG library showing diverse document types including PDFs, images, and audio files"
              className="w-full rounded-lg shadow-lg border"
            />
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
          <ProblemSection title={content.problem.title} content={content.problem.content} />

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

          {/* Interactive Demos Section */}
          <section className="-mx-4 md:-mx-8 lg:-mx-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 px-4 md:px-8 lg:px-12">
              Interactive Demos
            </h2>
            <DocuSearchDemos />
          </section>

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

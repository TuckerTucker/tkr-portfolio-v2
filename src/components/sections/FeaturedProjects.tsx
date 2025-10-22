import { projects } from '@/content/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  // Get the three featured projects in the specified order
  const docusearch = projects.find((p) => p.id === 'docusearch')
  const contextKit = projects.find((p) => p.id === 'context-kit')
  const kanban = projects.find((p) => p.id === 'kanban')

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Exploring the intersection of human and AI agent experiences
          </p>
        </div>

        <div className="grid gap-6 md:gap-8 lg:grid-cols-3">
          {/* Hero project - DocuSearch takes full width on mobile, spans 2 cols on desktop */}
          {docusearch && (
            <div className="lg:col-span-2">
              <ProjectCard project={docusearch} variant="hero" />
            </div>
          )}

          {/* Standard projects stack vertically */}
          <div className="flex flex-col gap-6 md:gap-8">
            {contextKit && <ProjectCard project={contextKit} variant="standard" />}
            {kanban && <ProjectCard project={kanban} variant="standard" />}
          </div>
        </div>
      </div>
    </section>
  )
}

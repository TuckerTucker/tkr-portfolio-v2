import { projects } from '@/content/projects'
import { ProjectCard } from './ProjectCard'

export function FeaturedProjects() {
  // Get the three featured projects in the specified order
  const docusearch = projects.find((p) => p.id === 'docusearch')
  const contextKit = projects.find((p) => p.id === 'context-kit')
  const kanban = projects.find((p) => p.id === 'kanban')

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 text-muted-foreground md:text-lg">
            Exploring the intersection of people and AI agent experiences
          </p>
        </div>

        <div className="grid gap-6 md:gap-8">
          {/* Hero project - DocuSearch takes full width */}
          {docusearch && (
            <div>
              <ProjectCard project={docusearch} variant="hero" />
            </div>
          )}

          {/* Standard projects in a 2-column grid below */}
          <div className="grid gap-6 md:gap-8 md:grid-cols-2">
            {contextKit && <ProjectCard project={contextKit} variant="standard" />}
            {kanban && <ProjectCard project={kanban} variant="standard" />}
          </div>
        </div>
      </div>
    </section>
  )
}

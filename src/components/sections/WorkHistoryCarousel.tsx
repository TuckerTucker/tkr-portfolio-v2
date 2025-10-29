import { WorkHistoryEntry } from '@/content/types'
import { Carousel } from '@/components/ui/Carousel'
import { CompanySlide } from './CompanySlide'
import { ProjectSlide } from './ProjectSlide'

interface WorkHistoryCarouselProps {
  entry: WorkHistoryEntry
  autoPlay?: boolean
  className?: string
}

/**
 * WorkHistoryCarousel - Displays a company's work history with projects
 *
 * Renders a carousel containing:
 * - First slide: Company overview (CompanySlide)
 * - Subsequent slides: Individual projects (ProjectSlide)
 *
 * @example
 * ```tsx
 * <WorkHistoryCarousel entry={workHistory.entries[0]} autoPlay={true} />
 * ```
 */
export function WorkHistoryCarousel({
  entry,
  autoPlay = false,
  className,
}: WorkHistoryCarouselProps) {
  return (
    <div className={className}>
      <Carousel autoPlay={autoPlay} autoPlayInterval={8000}>
        {/* Company overview slide */}
        <CompanySlide
          company={entry.company}
          role={entry.role}
          period={entry.period}
          description={entry.description}
          image={entry.companyImage}
          imageAlt={entry.companyImageAlt}
          companyColor={entry.companyColor}
          companyColorAccent={entry.companyColorAccent}
        />

        {/* Project detail slides */}
        {entry.projects.map((project, index) => (
          <ProjectSlide
            key={`${entry.company}-project-${index}`}
            title={project.title}
            description={project.description}
            outcomes={project.outcomes}
            image={project.image}
            imageAlt={project.imageAlt}
            companyColor={entry.companyColor}
            companyColorAccent={entry.companyColorAccent}
          />
        ))}
      </Carousel>
    </div>
  )
}

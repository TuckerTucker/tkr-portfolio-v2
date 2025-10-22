import { Project } from '@/content/types'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-react'

interface ProjectCardProps {
  project: Project
  variant?: 'hero' | 'standard'
}

export function ProjectCard({ project, variant = 'standard' }: ProjectCardProps) {
  const isHero = variant === 'hero'

  return (
    <a
      href={project.caseStudyUrl}
      className="group block transition-transform hover:scale-[1.02]"
    >
      <Card
        className={cn(
          'h-full transition-all hover:shadow-lg dark:hover:shadow-primary/20',
          isHero && 'border-primary/50 dark:border-primary/30'
        )}
      >
        <CardHeader className={cn(isHero && 'p-8')}>
          <div className="mb-2 flex items-center gap-2">
            <span className="text-xs font-medium text-muted-foreground">
              {project.category}
            </span>
            {isHero && (
              <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                Featured
              </span>
            )}
          </div>
          <CardTitle
            className={cn(
              'transition-colors group-hover:text-primary',
              isHero ? 'text-3xl md:text-4xl' : 'text-2xl'
            )}
          >
            {project.title}
          </CardTitle>
          <CardDescription
            className={cn('mt-2', isHero ? 'text-base md:text-lg' : 'text-sm')}
          >
            {project.tagline}
          </CardDescription>
        </CardHeader>

        <CardContent className={cn(isHero && 'px-8')}>
          <p className={cn('text-muted-foreground', isHero ? 'text-base' : 'text-sm')}>
            {project.oneLiner || project.elevatorPitch}
          </p>
        </CardContent>

        <CardFooter className={cn('pt-4', isHero && 'px-8 pb-8')}>
          <div className="flex items-center gap-2 text-sm font-medium text-primary transition-gap group-hover:gap-3">
            <span>{isHero ? 'Read full case study' : 'Learn more'}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </CardFooter>
      </Card>
    </a>
  )
}

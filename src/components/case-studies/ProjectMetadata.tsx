import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProjectMetadataProps {
  role: string
  type: string
  stack: string[]
  skills: string[]
  year?: string
  githubUrl?: string
}

export default function ProjectMetadata({
  role,
  type,
  stack,
  skills,
  year,
  githubUrl,
}: ProjectMetadataProps) {
  return (
    <footer className="mt-16 pt-12 border-t">
      {/* GitHub Link */}
      {githubUrl && (
        <div className="mb-8">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="gap-2 border-border/40 hover:border-border"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <Github className="h-5 w-5" />
              GitHub
            </a>
          </Button>
        </div>
      )}

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Role & Type */}
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Role
            </h3>
            <p className="text-base font-medium text-foreground">{role}</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Type
            </h3>
            <p className="text-base font-medium text-foreground">{type}</p>
          </div>
          {year && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                Year
              </h3>
              <p className="text-base font-medium text-foreground">{year}</p>
            </div>
          )}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-md border"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="md:col-span-2 lg:col-span-1">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
            Skills Applied
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-sm font-medium bg-accent text-accent-foreground rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

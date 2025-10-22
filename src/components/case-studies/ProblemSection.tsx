interface ProblemSectionProps {
  title: string
  content: string[]
  highlights?: string[]
}

export default function ProblemSection({
  title,
  content,
  highlights,
}: ProblemSectionProps) {
  return (
    <section className="space-y-6">
      {/* Section Heading */}
      <div className="space-y-2">
        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Problem
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>

      {/* Content Paragraphs */}
      <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
        {content.map((paragraph, index) => {
          // Empty strings become visual breaks
          if (paragraph === '') {
            return <div key={index} className="h-4" />
          }

          // Bullet points (starting with '•' or '-')
          if (paragraph.startsWith('•') || paragraph.startsWith('-')) {
            return (
              <p key={index} className="pl-6 -indent-6">
                {paragraph}
              </p>
            )
          }

          // Regular paragraphs
          return <p key={index}>{paragraph}</p>
        })}
      </div>

      {/* Optional Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mt-8 p-6 bg-muted/50 rounded-lg border">
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Key Issues
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-base leading-relaxed">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

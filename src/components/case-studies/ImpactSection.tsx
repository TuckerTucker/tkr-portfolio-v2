interface ImpactSectionProps {
  title: string
  content: string[]
  highlights?: string[]
}

export default function ImpactSection({
  title,
  content,
  highlights,
}: ImpactSectionProps) {
  return (
    <section className="space-y-6">
      {/* Section Heading */}
      <div className="space-y-2">
        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Impact
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

          // Numbered list items (like "1. Agents have preferences")
          if (/^\d+\./.test(paragraph)) {
            return (
              <p key={index} className="font-medium text-foreground">
                {paragraph}
              </p>
            )
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

      {/* Optional Highlights (Metrics) */}
      {highlights && highlights.length > 0 && (
        <div className="mt-8 p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Measurable Impact
          </h3>
          <ul className="space-y-2">
            {highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-primary mt-1 text-lg">▸</span>
                <span className="text-base leading-relaxed font-medium">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

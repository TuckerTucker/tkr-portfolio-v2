import { YamlViewer } from './YamlViewer'

interface SolutionSectionProps {
  title: string
  content: string[]
  highlights?: string[]
  showYaml?: boolean
  yamlContent?: string
}

export default function SolutionSection({
  title,
  content,
  highlights,
  showYaml = false,
  yamlContent = '',
}: SolutionSectionProps) {
  return (
    <section className="space-y-6">
      {/* Section Heading */}
      <div className="space-y-2">
        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Solution
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>

      {/* Two-column layout when YAML is shown */}
      {showYaml ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column: YAML Content */}
          <div>
            <YamlViewer yamlContent={yamlContent} />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8">
            {/* Content Paragraphs */}
            <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
              {content.map((paragraph, index) => {
                // Empty strings become visual breaks
                if (paragraph === '') {
                  return <div key={index} className="h-4" />
                }

                // Numbered headings (like "1. Semantic Anchors")
                if (/^\d+\./.test(paragraph)) {
                  return (
                    <h3
                      key={index}
                      className="text-xl md:text-2xl font-semibold text-foreground mt-8 first:mt-0"
                    >
                      {paragraph}
                    </h3>
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

            {/* Optional Highlights (Features) */}
            {highlights && highlights.length > 0 && (
              <div className="p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
                <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1">✓</span>
                      <span className="text-base leading-relaxed">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Content Paragraphs */}
          <div className="space-y-4 text-lg leading-relaxed text-foreground/90">
            {content.map((paragraph, index) => {
              // Empty strings become visual breaks
              if (paragraph === '') {
                return <div key={index} className="h-4" />
              }

              // Numbered headings (like "1. Semantic Anchors")
              if (/^\d+\./.test(paragraph)) {
                return (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-foreground mt-8 first:mt-0"
                  >
                    {paragraph}
                  </h3>
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

          {/* Optional Highlights (Features) */}
          {highlights && highlights.length > 0 && (
            <div className="mt-8 p-6 bg-primary/5 rounded-lg border-2 border-primary/20">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Key Features
              </h3>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span className="text-base leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}
    </section>
  )
}

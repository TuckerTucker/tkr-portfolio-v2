import { ConversationView } from '@/components/conversation/ConversationView'
import { contextKitConversation } from '@/content/yaml-conversation'

interface UnderstandingSectionProps {
  title: string
  content: string[]
  highlights?: string[]
  showConversation?: boolean
}

export default function UnderstandingSection({
  title,
  content,
  highlights,
  showConversation = false,
}: UnderstandingSectionProps) {
  return (
    <section className="space-y-6">
      {/* Section Heading */}
      <div className="space-y-2">
        <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          Understanding
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {title}
        </h2>
      </div>

      {/* Two-column layout when conversation is shown */}
      {showConversation ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-stretch">
          {/* Left Column: Conversation */}
          <div className="flex flex-col min-h-0">
            <ConversationView conversation={contextKitConversation} />
          </div>

          {/* Right Column: Content */}
          <div className="space-y-8 flex flex-col">
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

            {/* Optional Highlights (Key Insights) */}
            {highlights && highlights.length > 0 && (
              <div className="p-6 bg-accent/50 rounded-lg border">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  Key Insights
                </h3>
                <ul className="space-y-3">
                  {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary mt-1 font-bold">→</span>
                      <span className="text-base leading-relaxed font-medium">
                        {highlight}
                      </span>
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

          {/* Optional Highlights (Key Insights) */}
          {highlights && highlights.length > 0 && (
            <div className="mt-8 p-6 bg-accent/50 rounded-lg border">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Key Insights
              </h3>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-primary mt-1 font-bold">→</span>
                    <span className="text-base leading-relaxed font-medium">
                      {highlight}
                    </span>
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

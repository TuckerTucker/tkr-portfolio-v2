import { workHistory } from '@/content/work-history'
import { WorkHistoryCarousel } from './WorkHistoryCarousel'

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">
          About
        </h2>

        <div className="space-y-8 text-base md:text-lg leading-relaxed text-foreground">
          <p>{workHistory.summary}</p>

          <p className="font-medium text-foreground">
            {workHistory.bridgeSentence}
          </p>

          {/* Work history carousels */}
          <div className="space-y-12 mt-8">
            {workHistory.entries.map((entry) => (
              <WorkHistoryCarousel
                key={entry.company}
                entry={entry}
                autoPlay={false}
                className="w-full"
              />
            ))}
          </div>

          <p className="mt-8">
            <em>Now I'm applying the same principles to new users: AI agents.</em>
            <br />
            Whether the users are humans or agents, the core approach remains
            the same—understand their mental models, then design interfaces
            that work with those models.
          </p>
        </div>
      </div>
    </section>
  )
}

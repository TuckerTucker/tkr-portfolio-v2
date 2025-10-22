import { workHistory } from '@/content/work-history'

export default function About() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans text-3xl md:text-4xl font-bold text-foreground mb-8">
          About
        </h2>

        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground">
          <p>{workHistory.summary}</p>

          <div className="space-y-4">
            <p>
              At Shaw Communications (2005-2017), I learned to design for real
              customer mental models versus internal systems. Instead of
              organizing our support portal by internal department structure, I
              rebuilt it around how customers actually described their
              problems—"my internet is slow" rather than navigating through
              "Connectivity Issues → Performance → Download Speed."
            </p>

            <p>
              At Worldplay Networks (2017-2022), I applied those principles
              across diverse users—from Hockey Canada's live streaming events
              to Indigenous communities preserving their languages and culture.
              I transformed an admin portal built for technical staff into a
              customer-facing SaaS interface, translating "ingest endpoint" into
              "upload video" and reducing new site setup from 12 hours to 2
              minutes.
            </p>

            <p>
              At Nutrien (2023), I brought collaborative UX to enterprise scale,
              conducting usability tests with employees across different roles
              and locations. Watching real employees interact with the system
              revealed not just immediate fixes but opportunities that shaped
              the product roadmap.
            </p>

            <p>
              Now I'm applying the same principles to new users: AI agents.
              Whether the users are humans or agents, the core approach remains
              the same—understand their mental models, then design interfaces
              that work with those models.
            </p>
          </div>

          <p className="text-muted-foreground italic">
            {workHistory.creativeBackground}
          </p>

          <p className="font-medium text-foreground">
            {workHistory.bridgeSentence}
          </p>
        </div>
      </div>
    </section>
  )
}

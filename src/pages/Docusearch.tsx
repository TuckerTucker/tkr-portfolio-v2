import { docusearchCaseStudy } from '@/content/case-studies/docusearch'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export default function Docusearch() {
  const { title, tagline, problem, understanding, solution, impact, metadata } = docusearchCaseStudy

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground">{tagline}</p>
      </header>

      {/* Problem Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">{problem.title}</h2>
        <div className="space-y-4">
          {problem.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Understanding Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">{understanding.title}</h2>
        <div className="space-y-4">
          {understanding.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {understanding.keyInsights && understanding.keyInsights.length > 0 && (
          <Card className="mt-8 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Key Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {understanding.keyInsights.map((insight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-primary font-bold">•</span>
                    <span className="text-base">{insight}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </section>

      <Separator className="my-12" />

      {/* Solution Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">{solution.title}</h2>
        <div className="space-y-4">
          {solution.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {solution.features && solution.features.length > 0 && (
          <Card className="mt-8 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {solution.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-primary font-bold">•</span>
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </section>

      <Separator className="my-12" />

      {/* Impact Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">{impact.title}</h2>
        <div className="space-y-4">
          {impact.content.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed whitespace-pre-line">
              {paragraph}
            </p>
          ))}
        </div>

        {impact.metrics && impact.metrics.length > 0 && (
          <Card className="mt-8 bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {impact.metrics.map((metric, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-3 text-primary font-bold">•</span>
                    <span className="text-base">{metric}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </section>

      <Separator className="my-12" />

      {/* Project Metadata */}
      <section className="mb-12">
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">Project Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Role
              </h3>
              <p className="text-base">{metadata.role}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Type
              </h3>
              <p className="text-base">{metadata.type}</p>
            </div>

            {metadata.year && (
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Year
                </h3>
                <p className="text-base">{metadata.year}</p>
              </div>
            )}

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {metadata.stack.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-primary/10 text-primary text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                Skills Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {metadata.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-foreground text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}

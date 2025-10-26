import { Link } from 'react-router-dom'
import { blogArticles } from '@/content/blog/articles'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Blog
            </h1>
            <p className="mt-4 md:mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Thoughts on UX design, AI collaboration, and building better interfaces
            </p>
          </div>
        </div>
      </header>

      {/* Article List */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-6">
            {blogArticles.map((article) => (
              <Link
                key={article.id}
                to={`/blog/${article.slug}`}
                className="group block transition-transform hover:scale-[1.01]"
              >
                <Card className="h-full transition-all hover:shadow-lg dark:hover:shadow-primary/20 overflow-hidden">
                  {article.image && (
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      <img
                        src={article.image}
                        alt={article.imageAlt || article.title}
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {article.description}
                    </CardDescription>
                  </CardHeader>
                  {article.tags && article.tags.length > 0 && (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-xs font-medium bg-muted text-foreground rounded-md border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

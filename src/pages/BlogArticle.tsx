import { useParams, Link, useNavigate } from 'react-router-dom'
import { blogArticles } from '@/content/blog/articles'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ChevronRight, Linkedin } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function BlogArticle() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const article = blogArticles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                to="/blog"
                className="hover:text-foreground transition-colors"
              >
                Blog
              </Link>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{article.title}</span>
            </nav>
          </div>
        </div>
      </div>

      {/* Back Button */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/blog')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      {article.image && (
        <div className="w-full aspect-[21/9] bg-muted overflow-hidden">
          <img
            src={article.image}
            alt={article.imageAlt || article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {article.title}
            </h1>
            <p className="mt-4 md:mt-6 text-xl text-muted-foreground leading-relaxed">
              {article.description}
            </p>
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-sm font-medium bg-muted text-foreground rounded-md border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <article className="max-w-4xl mx-auto prose prose-slate dark:prose-invert prose-lg max-w-none">
          {article.content.map((paragraph, index) => (
            <ReactMarkdown key={index}>{paragraph}</ReactMarkdown>
          ))}

          {/* LinkedIn Embed or Link */}
          {article.linkedinEmbed && (
            <div className="mt-12 not-prose">
              <div className="flex flex-col items-center gap-4">
                <iframe
                  src={article.linkedinEmbed}
                  height="895"
                  width="504"
                  frameBorder="0"
                  allowFullScreen
                  title="Embedded LinkedIn post"
                  className="border rounded-lg shadow-lg w-full max-w-[504px]"
                />
                <p className="text-sm text-muted-foreground">
                  If the embed doesn't load,{' '}
                  <a
                    href={article.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    view on LinkedIn
                    <Linkedin className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>
          )}

          {/* LinkedIn Link Card (fallback if no embed) */}
          {!article.linkedinEmbed && article.linkedinUrl && (
            <div className="mt-12 not-prose">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">View on LinkedIn</CardTitle>
                      <CardDescription>See the original post and discussion</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    size="lg"
                    className="w-full gap-2"
                  >
                    <a
                      href={article.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                      Open LinkedIn Post
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </article>
      </main>

      {/* Back Button Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/blog')}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

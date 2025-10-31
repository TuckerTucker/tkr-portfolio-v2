import { Linkedin, Download, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Primary CTA Section */}
        <div className="flex flex-col items-center justify-center gap-6 mb-8">
          <div className="text-center max-w-2xl">
            <h2 className="text-2xl font-semibold mb-3">Let's connect</h2>
            <p className="text-muted-foreground mb-6">
              Interested in working together or discussing UX design for AI agents?
              <br />
              Connect with me on LinkedIn or download my resume.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="gap-2"
              >
                <a
                  href="https://www.linkedin.com/in/tuckerharleybrown"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-border/40 hover:border-border"
              >
                <a
                  href="/Sean-Harley-Resume.pdf"
                  download
                  className="inline-flex items-center"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-border/40">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} Sean 'Tucker' Harley. Code:{' '}
              <a
                href="https://github.com/tuckertucker/tkr-portfolio-v2/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline decoration-border/40 hover:decoration-foreground"
              >
                MIT
              </a>
              {' '}· Content:{' '}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors underline decoration-border/40 hover:decoration-foreground"
              >
                CC BY 4.0
              </a>
            </p>
            <div className="flex items-center gap-4">
              <p>
                UX Designer specializing in interfaces for humans and AI agents
              </p>
              <a
                href="https://github.com/tuckertucker/tkr-portfolio-v2"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
                aria-label="View portfolio source on GitHub"
              >
                <Github className="h-4 w-4" />
                <span className="text-xs">Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Linkedin, Download } from 'lucide-react'
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
                  href="https://www.linkedin.com/in/tuckerharley"
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
                className="gap-2"
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
            <p>© {currentYear} Tucker Harley. All rights reserved.</p>
            <p>
              UX Designer specializing in interfaces for humans and AI agents
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

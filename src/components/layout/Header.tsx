import { Link, useLocation } from 'react-router-dom'
import { ThemeToggle } from './ThemeToggle'
import { Menu, X, Download } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export function Header() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/docusearch', label: 'docusearch' },
    { path: '/context-kit', label: 'context-kit' },
    { path: '/kanban', label: 'kanban' },
  ]

  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <Link
            to="/"
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200"
          >
            Tucker Harley
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-foreground bg-accent'
                    : 'text-foreground/60 hover:text-foreground hover:bg-accent/50'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Resume Download Button */}
            <a
              href="/Sean-Harley-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </nav>

          {/* Right side: Theme toggle & Mobile menu button */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/60 hover:bg-accent hover:text-foreground transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/40">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-accent text-foreground'
                      : 'text-foreground/60 hover:bg-accent/50 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Resume Download Button (Mobile) */}
              <a
                href="/Sean-Harley-Resume.pdf"
                download
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-3 py-2 text-base font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

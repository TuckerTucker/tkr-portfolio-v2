import * as React from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
}

export function ImageLightbox({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}: ImageLightboxProps) {
  const modalRef = React.useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Check if user prefers reduced motion
  const prefersReducedMotion = React.useMemo(() => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Focus trap - keep focus within modal
  React.useEffect(() => {
    if (!isOpen || !modalRef.current) return

    const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault()
          lastElement?.focus()
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleTab)
    firstElement?.focus()

    return () => {
      document.removeEventListener('keydown', handleTab)
    }
  }, [isOpen])

  // Click outside to close
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  if (!isOpen || !mounted) return null

  const modalContent = (
    <div
      ref={modalRef}
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/90',
        prefersReducedMotion ? '' : 'animate-in fade-in duration-200'
      )}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Expanded image view"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className={cn(
          'absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white',
          'hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50',
          'transition-colors',
          prefersReducedMotion ? '' : 'duration-200'
        )}
        aria-label="Close expanded image"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image */}
      <img
        src={imageSrc}
        alt={imageAlt}
        className={cn(
          'max-h-[90vh] max-w-[90vw] object-contain',
          prefersReducedMotion ? '' : 'animate-in zoom-in-95 duration-300'
        )}
        onClick={(e) => e.stopPropagation()}
      />

      {/* Screen reader announcement */}
      <div className="sr-only" role="status" aria-live="polite">
        Image expanded. Press Escape or click outside to close.
      </div>
    </div>
  )

  return createPortal(modalContent, document.body)
}

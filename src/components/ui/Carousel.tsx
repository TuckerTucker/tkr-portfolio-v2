import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface CarouselProps {
  children: React.ReactNode
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export function Carousel({
  children,
  className,
  autoPlay = false,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [touchStart, setTouchStart] = React.useState<number | null>(null)
  const [touchEnd, setTouchEnd] = React.useState<number | null>(null)
  const [isPaused, setIsPaused] = React.useState(false)
  const carouselRef = React.useRef<HTMLDivElement>(null)
  const autoPlayTimerRef = React.useRef<ReturnType<typeof setInterval> | null>(null)

  // Convert children to array for easier manipulation
  const slides = React.Children.toArray(children)
  const totalSlides = slides.length

  // Minimum swipe distance (in px) to trigger slide change
  const minSwipeDistance = 50

  // Navigate to specific slide
  const goToSlide = React.useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return
      setCurrentIndex(index)
    },
    [totalSlides]
  )

  // Navigate to previous slide
  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }, [totalSlides])

  // Navigate to next slide
  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }, [totalSlides])

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard events when carousel is focused
      if (!carouselRef.current?.contains(document.activeElement)) return

      if (e.key === "ArrowLeft") {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === "ArrowRight") {
        e.preventDefault()
        goToNext()
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [goToPrevious, goToNext])

  // Handle auto-play
  React.useEffect(() => {
    if (!autoPlay || isPaused || totalSlides <= 1) return

    autoPlayTimerRef.current = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current)
      }
    }
  }, [autoPlay, autoPlayInterval, isPaused, goToNext, totalSlides])

  // Handle touch events
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Check if user prefers reduced motion
  const prefersReducedMotion = React.useMemo(() => {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches
  }, [])

  return (
    <div
      ref={carouselRef}
      className={cn("relative w-full", className)}
      role="region"
      aria-label="Carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Slides container */}
      <div className="relative overflow-hidden rounded-lg bg-muted">
        <div
          className={cn(
            "flex",
            prefersReducedMotion ? "" : "transition-transform duration-500 ease-out"
          )}
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${totalSlides}`}
              aria-hidden={index !== currentIndex}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {totalSlides > 1 && (
        <>
          {/* Previous button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 shadow-md"
            onClick={goToPrevious}
            aria-label="Previous slide"
            tabIndex={0}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          {/* Next button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 hover:bg-background/90 shadow-md"
            onClick={goToNext}
            aria-label="Next slide"
            tabIndex={0}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </>
      )}

      {/* Dot indicators */}
      {totalSlides > 1 && (
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
          role="tablist"
          aria-label="Slides"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 rounded-full transition-all",
                prefersReducedMotion ? "" : "duration-300",
                currentIndex === index
                  ? "w-8 bg-primary"
                  : "w-2 bg-white/50 hover:bg-white/70"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
              role="tab"
              aria-selected={currentIndex === index}
              tabIndex={currentIndex === index ? 0 : -1}
            />
          ))}
        </div>
      )}

      {/* Screen reader announcements */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Slide {currentIndex + 1} of {totalSlides}
      </div>
    </div>
  )
}

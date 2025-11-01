import { useState } from 'react'
import { Expand } from 'lucide-react'
import { ImageLightbox } from '@/components/ui/ImageLightbox'

interface ProjectSlideProps {
  title: string
  description: string
  outcomes: string[]
  image?: string
  imageAlt?: string
}

export function ProjectSlide({
  title,
  description,
  outcomes,
  image,
  imageAlt = '',
}: ProjectSlideProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  const handleImageClick = () => {
    if (image) {
      setIsLightboxOpen(true)
    }
  }

  return (
    <article
      className="relative w-full max-w-[840px] mx-auto overflow-hidden rounded-xl bg-muted shadow-lg"
      aria-label={`Project: ${title}`}
    >
      {/* Mobile-first layout: stacks vertically on small screens, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:h-[425px]">
        {/* Image Section */}
        <div className="relative w-full md:w-[375px] h-[250px] md:h-full flex-shrink-0 bg-muted-foreground/20 group">
          {image ? (
            <>
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover cursor-pointer"
                loading="lazy"
                onClick={handleImageClick}
              />
              {/* Expand icon overlay - visible on hover */}
              <button
                onClick={handleImageClick}
                className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
                aria-label="Expand image"
              >
                <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
                  <Expand className="h-8 w-8 text-white" />
                </div>
              </button>
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground/40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-16 h-16"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
            </div>
          )}

          {/* Project highlight badge with dark grey background */}
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm px-4 py-2 bg-black/50 pointer-events-none">
            <span className="text-sm font-medium text-white tracking-wide">
              Project Highlight
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 space-y-4">
          {/* Project title - prominent */}
          <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
            {description}
          </p>

          {/* Outcomes/Highlights */}
          {outcomes.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Key Outcomes
              </h3>
              <ul className="space-y-1.5" aria-label="Project outcomes">
                {outcomes.slice(0, 3).map((outcome, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-sm text-foreground/80"
                  >
                    <span
                      className="inline-block w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-1.5"
                      aria-hidden="true"
                    />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Image Lightbox Modal */}
      {image && (
        <ImageLightbox
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
          imageSrc={image}
          imageAlt={imageAlt}
        />
      )}
    </article>
  )
}

interface CompanySlideProps {
  company: string
  role: string
  period: string
  description: string
  image?: string
  imageAlt?: string
  companyColor?: string
}

export function CompanySlide({
  company,
  role,
  period,
  description,
  image,
  imageAlt = '',
  companyColor,
}: CompanySlideProps) {
  return (
    <article
      className="relative w-full max-w-[840px] mx-auto overflow-hidden rounded-xl bg-muted shadow-lg"
      aria-label={`${company} - ${role}`}
    >
      {/* Mobile-first layout: stacks vertically on small screens, side-by-side on md+ */}
      <div className="flex flex-col md:flex-row md:h-[425px]">
        {/* Image Section */}
        <div
          className="relative w-full md:w-[375px] h-[250px] md:h-full flex-shrink-0"
          style={{
            backgroundColor: companyColor || 'hsl(var(--muted-foreground) / 0.2)',
          }}
        >

          {image ? (
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-full object-contain p-8"
              loading="lazy"
            />
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

          {/* Period overlay with dark grey background */}
          <div className="absolute bottom-0 left-0 right-0 backdrop-blur-sm px-4 py-2 bg-black/50">
            <time className="text-sm font-medium text-white tracking-wide">
              {period}
            </time>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center p-6 md:p-8 space-y-4">
          {/* Company name - prominent */}
          <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
            {company}
          </h2>

          {/* Role subtitle */}
          <h3 className="text-lg md:text-xl font-medium text-muted-foreground">
            {role}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-foreground/80 leading-relaxed line-clamp-3 md:line-clamp-4">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import { FeaturedProjects } from '@/components/sections/FeaturedProjects'
import { Separator } from '@/components/ui/separator'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Separator */}
      <Separator className="my-8 md:my-12" />

      {/* About Section */}
      <About />

      {/* Separator */}
      <Separator className="my-8 md:my-12" />

      {/* Featured Projects Section */}
      <FeaturedProjects />
    </main>
  )
}

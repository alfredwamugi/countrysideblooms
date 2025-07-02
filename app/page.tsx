import { Hero } from "@/components/home/hero"
import { FeaturedProducts } from "@/components/home/featured-products"
import { Gallery } from "@/components/home/gallery"
import { CTASection } from "@/components/home/cta-section"
import { FloatingLogos } from "@/components/floating-logos"

export default function HomePage() {
  return (
    <div className="relative">
      <FloatingLogos />
      <Hero />
      <FeaturedProducts />
      <Gallery />
      <CTASection />
    </div>
  )
}

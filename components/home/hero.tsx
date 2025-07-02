"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useIsMobile } from "@/hooks/use-mobile"

const heroImages = [
  "/countrysidebloomsnyk (8).webp",
  "/countrysidebloomsnyk (18).webp",
  "/countrysidebloomsnyk (20).webp",
  "/countrysidebloomsnyk (39).webp",
]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useIsMobile()

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-[80vh] md:h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Overlay */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 md:bg-black/40 z-10" />
            <Image
              src={image}
              alt={`Countryside Blooms Floral Arrangement ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <h1 className="font-great-vibes text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-4 md:mb-6 text-white drop-shadow-2xl animate-fade-in">
          Welcome to CountrySide Blooms
        </h1>
        <p className="text-lg sm:text-xl md:text-3xl mb-3 md:mb-4 drop-shadow-lg font-medium">
          Where Every Bloom Tells a Story
        </p>
        <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 max-w-3xl mx-auto drop-shadow-md leading-relaxed">
          Discover beautifully designed flower arrangements that capture the beauty and uniqueness of our natural
          surroundings. Fresh flowers, exceptional service, and unforgettable moments.
        </p>
        <div className="flex justify-center items-center">
          <Button
            asChild
            size={isMobile ? "default" : "lg"}
            className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-6 py-2 md:px-8 md:py-4 text-base md:text-lg font-semibold hover-lift shadow-lg"
          >
            <Link href="/bouquets">View Products</Link>
          </Button>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white scale-125" : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

// All gallery images except the ones used in the hero
const galleryImages = [
  "/countrysidebloomsnyk (1).webp",
  "/countrysidebloomsnyk (2).webp",
  "/countrysidebloomsnyk (3).webp",
  "/countrysidebloomsnyk (4).webp",
  "/countrysidebloomsnyk (5).webp",
  "/countrysidebloomsnyk (6).webp",
  "/countrysidebloomsnyk (7).webp",
  "/countrysidebloomsnyk (9).webp",
  "/countrysidebloomsnyk (10).webp",
  "/countrysidebloomsnyk (11).webp",
  "/countrysidebloomsnyk (12).webp",
  "/countrysidebloomsnyk (13).webp",
  "/countrysidebloomsnyk (14).webp",
  "/countrysidebloomsnyk (15).webp",
  "/countrysidebloomsnyk (16).webp",
  "/countrysidebloomsnyk (17).webp",
  "/countrysidebloomsnyk (19).webp",
  "/countrysidebloomsnyk (21).webp",
  "/countrysidebloomsnyk (22).webp",
  "/countrysidebloomsnyk (23).webp",
  "/countrysidebloomsnyk (24).webp",
  "/countrysidebloomsnyk (25).webp",
  "/countrysidebloomsnyk (26).webp",
  "/countrysidebloomsnyk (27).webp",
  "/countrysidebloomsnyk (28).webp",
  "/countrysidebloomsnyk (29).webp",
  "/countrysidebloomsnyk (30).webp",
  "/countrysidebloomsnyk (31).webp",
  "/countrysidebloomsnyk (32).webp",
  "/countrysidebloomsnyk (33).webp",
  "/countrysidebloomsnyk (34).webp",
  "/countrysidebloomsnyk (35).webp",
  "/countrysidebloomsnyk (36).webp",
  "/countrysidebloomsnyk (37).webp",
  "/countrysidebloomsnyk (38).webp",
  "/countrysidebloomsnyk (40).webp",
  "/countrysidebloomsnyk.webp",
]

export function Gallery() {
  const [openImageIndex, setOpenImageIndex] = useState<number | null>(null)
  const [visibleImages, setVisibleImages] = useState(12)

  // Function to handle opening an image
  const handleOpenImage = (index: number) => {
    setOpenImageIndex(index)
  }

  // Function to close the dialog
  const handleCloseDialog = () => {
    setOpenImageIndex(null)
  }

  // Function to navigate through images in the lightbox
  const navigateImage = (direction: "next" | "prev") => {
    if (openImageIndex === null) return

    if (direction === "next") {
      setOpenImageIndex((openImageIndex + 1) % galleryImages.length)
    } else {
      setOpenImageIndex((openImageIndex - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  // Load more images
  const loadMoreImages = () => {
    setVisibleImages((prev) => Math.min(prev + 12, galleryImages.length))
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-great-vibes text-5xl md:text-6xl gradient-text mb-6">Our Floral Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Browse through our collection of handcrafted floral arrangements. Each piece tells a unique story and
            showcases our passion for creating beautiful moments.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.slice(0, visibleImages).map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer hover-lift shadow-md"
              onClick={() => handleOpenImage(index)}
            >
              <Image
                src={image}
                alt={`Countryside Blooms Floral Arrangement ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white font-medium text-sm">Countryside Blooms</span>
                <span className="text-white/80 text-xs">Handcrafted Floral Arrangement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleImages < galleryImages.length && (
          <div className="text-center mt-12">
            <Button
              onClick={loadMoreImages}
              className="bg-[var(--primary)] hover:bg-[var(--primary-light)] text-white px-8 py-2 text-lg font-medium hover-lift shadow-md"
            >
              Load More
            </Button>
          </div>
        )}

        {/* Lightbox Dialog */}
        <Dialog open={openImageIndex !== null} onOpenChange={() => handleCloseDialog()}>
          <DialogContent className="max-w-4xl bg-black/90 border-none">
            {openImageIndex !== null && (
              <div className="relative">
                <div className="relative h-[70vh] w-full">
                  <Image
                    src={galleryImages[openImageIndex]}
                    alt={`Countryside Blooms Floral Arrangement ${openImageIndex + 1}`}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("prev")
                  }}
                >
                  ◀
                </button>
                <button
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigateImage("next")
                  }}
                >
                  ▶
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                  {openImageIndex + 1} / {galleryImages.length}
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

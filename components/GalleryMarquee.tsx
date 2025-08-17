"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"

// Placeholder images for the gallery
const galleryImages = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  src: `/images/gallery-${i + 1}.jpg`,
  alt: `Cake ${i + 1}`,
}))

export function GalleryMarquee() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            MY CAKE COLLECTION
          </h2>
          <p className="font-body text-gray-600">
            Press and hold to pause the gallery
          </p>
        </div>

        {/* Desktop Marquee */}
        <div className="hidden lg:block overflow-hidden">
          <div
            className={`flex space-x-6 ${
              isPaused ? "animate-none" : "animate-marquee"
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set of images */}
            {galleryImages.map((image) => (
              <div key={image.id} className="flex-shrink-0">
                <Card className="w-64 h-64 overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg">🎂</span>
                      </div>
                      <p className="text-xs text-gray-500">Gallery {image.id}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {galleryImages.map((image) => (
              <div key={`duplicate-${image.id}`} className="flex-shrink-0">
                <Card className="w-64 h-64 overflow-hidden">
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-lg">🎂</span>
                      </div>
                      <p className="text-xs text-gray-500">Gallery {image.id}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="lg:hidden">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {galleryImages.map((image) => (
              <Card key={image.id} className="aspect-square overflow-hidden">
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sm">🎂</span>
                    </div>
                    <p className="text-xs text-gray-500">Gallery {image.id}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

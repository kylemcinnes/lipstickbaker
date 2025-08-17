"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const tiles = [
  {
    title: "Order Online Here",
    description: "Place your order online",
    image: "/images/placeholder-1.jpg",
    action: "scroll", // scroll to contact section
  },
  {
    title: "Order Information",
    description: "Learn about our ordering process",
    image: "/images/placeholder-2.jpg",
    action: "link",
    href: "/details",
  },
  {
    title: "Customize Your Cake",
    description: "Create your perfect cake",
    image: "/images/placeholder-3.jpg",
    action: "scroll", // scroll to contact section
  },
]

export function ImageTiles() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiles.map((tile, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="aspect-square bg-gray-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-2xl">🍰</span>
                    </div>
                    <p className="text-sm opacity-80">Image Placeholder</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 text-center">
                <h3 className="font-heading text-xl font-semibold text-gray-800 mb-2">
                  {tile.title}
                </h3>
                <p className="font-body text-gray-600 mb-4">
                  {tile.description}
                </p>
                {tile.action === "link" ? (
                  <Link href={tile.href!}>
                    <Button className="w-full">Learn More</Button>
                  </Link>
                ) : (
                  <Button onClick={scrollToContact} className="w-full">
                    Get Started
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

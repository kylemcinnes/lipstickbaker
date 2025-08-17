import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { Hero } from "@/components/Hero"
import { ImageTiles } from "@/components/ImageTiles"
import { GalleryMarquee } from "@/components/GalleryMarquee"
import { InstagramGrid } from "@/components/InstagramGrid"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-16 lg:pt-20">
        <Hero />
        <ImageTiles />
        <GalleryMarquee />
        <InstagramGrid />
      </main>
      <Footer />
    </>
  )
}

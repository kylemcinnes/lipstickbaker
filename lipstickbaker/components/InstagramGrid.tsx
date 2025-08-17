"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { siteConfig } from "@/site.config"

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  media_type: string
  thumbnail_url?: string
  caption?: string
  timestamp: string
}

export function InstagramGrid() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (siteConfig.instagram.useBasicDisplay) {
      fetchInstagramPosts()
    } else {
      setIsLoading(false)
    }
  }, [])

  const fetchInstagramPosts = async () => {
    try {
      const response = await fetch("/api/instagram")
      if (!response.ok) {
        throw new Error("Failed to fetch Instagram posts")
      }
      const data = await response.json()
      setPosts(data.posts || [])
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch posts")
    } finally {
      setIsLoading(false)
    }
  }

  if (siteConfig.instagram.widgetEmbed) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              INSTAGRAM
            </h2>
            <Button
              asChild
              className="mb-8"
            >
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div 
              className="bg-white rounded-2xl p-4 shadow-sm"
              dangerouslySetInnerHTML={{ 
                __html: siteConfig.instagram.widgetEmbed 
              }}
            />
          </div>
        </div>
      </section>
    )
  }

  if (isLoading) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              INSTAGRAM
            </h2>
            <Button
              asChild
              className="mb-8"
            >
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {Array.from({ length: 9 }).map((_, i) => (
              <Card key={i} className="aspect-square bg-gray-100 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              INSTAGRAM
            </h2>
            <Button
              asChild
              className="mb-8"
            >
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
          
          <div className="text-center text-gray-600">
            <p>Unable to load Instagram feed. Please visit our Instagram page directly.</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            INSTAGRAM
          </h2>
          <Button
            asChild
            className="mb-8"
          >
            <a
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow on Instagram
            </a>
          </Button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
          {posts.slice(0, 9).map((post) => (
            <Card key={post.id} className="aspect-square overflow-hidden group">
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full"
              >
                <div className="w-full h-full bg-gray-100 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-sm">
                        {post.media_type === "VIDEO" ? "🎥" : "📷"}
                      </span>
                    </div>
                    <p className="text-xs text-gray-500">Instagram Post</p>
                  </div>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

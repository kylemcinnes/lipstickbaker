import { NextResponse } from "next/server"
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

interface InstagramApiResponse {
  data: Array<{
    id: string
    media_url: string
    permalink: string
    media_type: string
    thumbnail_url?: string
    caption?: string
    timestamp: string
  }>
}

export async function GET() {
  try {
    // Check if Instagram credentials are configured
    if (!siteConfig.instagram.accessToken || !siteConfig.instagram.userId) {
      return NextResponse.json(
        { error: "Instagram credentials not configured" },
        { status: 500 }
      )
    }

    // Fetch Instagram posts using Basic Display API
    const response = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,media_type,thumbnail_url,timestamp&access_token=${siteConfig.instagram.accessToken}&limit=20`
    )

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`)
    }

    const data: InstagramApiResponse = await response.json()
    
    if (!data.data) {
      throw new Error("Invalid response from Instagram API")
    }

    // Transform the data to match our interface
    const posts: InstagramPost[] = data.data.map((post) => ({
      id: post.id,
      media_url: post.media_url,
      permalink: post.permalink,
      media_type: post.media_type,
      thumbnail_url: post.thumbnail_url,
      caption: post.caption,
      timestamp: post.timestamp,
    }))

    // Return the posts (limit to 9 for the grid)
    return NextResponse.json({ 
      posts: posts.slice(0, 9),
      total: posts.length 
    })

  } catch (error) {
    console.error("Instagram API error:", error)
    return NextResponse.json(
      { error: "Failed to fetch Instagram posts" },
      { status: 500 }
    )
  }
}

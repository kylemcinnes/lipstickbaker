import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Lipstick Baker - Handcrafted Cakes with Love",
  description: "Taste and quality are our top priority. Our cakes are handcrafted with love using the finest ingredients.",
  keywords: ["custom cakes", "wedding cakes", "birthday cakes", "handcrafted", "bakery"],
  authors: [{ name: "Lipstick Baker" }],
  openGraph: {
    title: "Lipstick Baker - Handcrafted Cakes with Love",
    description: "Taste and quality are our top priority. Our cakes are handcrafted with love using the finest ingredients.",
    url: "https://lipstickbaker.com",
    siteName: "Lipstick Baker",
    images: [
      {
        url: "https://lipstickbaker.com/og.jpg",
        width: 1200,
        height: 630,
        alt: "Lipstick Baker - Handcrafted Cakes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lipstick Baker - Handcrafted Cakes with Love",
    description: "Taste and quality are our top priority. Our cakes are handcrafted with love using the finest ingredients.",
    images: ["https://lipstickbaker.com/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

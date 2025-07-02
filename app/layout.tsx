import type React from "react"
import type { Metadata } from "next"
import { Great_Vibes, Lora } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-great-vibes",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "CountrySide Blooms - Where Every Bloom Tells a Story | Premium Flower Arrangements in Nanyuki",
  description:
    "CountrySide Blooms specializes in unique, handcrafted flower arrangements in Nanyuki, Kenya. Fresh flowers, custom bouquets, corporate arrangements, and subscription services. Order online or contact us for personalized floral designs.",
  keywords: [
    "flower arrangements",
    "Nanyuki florist",
    "fresh flowers Kenya",
    "custom bouquets",
    "wedding flowers",
    "corporate arrangements",
    "flower delivery",
    "CountrySide Blooms",
  ],
  authors: [{ name: "CountrySide Blooms" }],
  creator: "CountrySide Blooms",
  publisher: "CountrySide Blooms",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://countrysideblooms.com",
    siteName: "CountrySide Blooms",
    title: "CountrySide Blooms - Premium Flower Arrangements in Nanyuki",
    description:
      "Discover unique, handcrafted flower arrangements that capture the beauty of the countryside. Fresh flowers, custom designs, and exceptional service in Nanyuki, Kenya.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CountrySide Blooms - Beautiful Flower Arrangements",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CountrySide Blooms - Premium Flower Arrangements",
    description: "Unique, handcrafted flower arrangements in Nanyuki, Kenya. Fresh flowers and exceptional service.",
    images: ["/og-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://countrysideblooms.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo-icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${greatVibes.variable} ${lora.variable} font-lora antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

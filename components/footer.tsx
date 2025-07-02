"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Music, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribing, setIsSubscribing] = useState(false)
  const { toast } = useToast()

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubscribing(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Successfully subscribed!",
      description:
        "Thank you for subscribing to our newsletter. You'll receive updates about our latest arrangements and special offers.",
    })

    setEmail("")
    setIsSubscribing(false)
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="/logo-icon.svg" alt="CountrySide Blooms" width={32} height={32} className="floating-logo" />
              <span className="font-great-vibes text-xl text-[var(--primary)]">CountrySide Blooms</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Where Every Bloom Tells a Story. Creating one-of-a-kind flower arrangements that capture the beauty and
              uniqueness of our natural surroundings in the heart of Nanyuki, Kenya.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg mb-3">Stay Updated</h3>
              <p className="text-gray-300 text-sm mb-3">
                Subscribe to our newsletter for the latest arrangements and special offers.
              </p>
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button
                  type="submit"
                  disabled={isSubscribing}
                  className="bg-[var(--primary)] hover:bg-[var(--primary-light)] whitespace-nowrap"
                >
                  {isSubscribing ? <div className="loading-spinner"></div> : "Subscribe"}
                </Button>
              </form>
            </div>

            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/countrysidebloomsnyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--primary)] transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://tiktok.com/@countrysidebloomsnyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[var(--primary)] transition-colors p-2 rounded-full hover:bg-gray-800"
                aria-label="Follow us on TikTok"
              >
                <Music className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/bouquets" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  Bouquets
                </Link>
              </li>
              <li>
                <Link
                  href="https://paystack.shop/countrysidebloomsnyk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[var(--primary)] transition-colors"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/subscriptions" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[var(--primary)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3 text-gray-300">
              <a href="tel:+254715744816" className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                <Phone className="h-4 w-4 text-[var(--primary)]" />
                <span>+254715744816</span>
              </a>
              <a href="mailto:countrysidebloomsnyk@gmail.com" className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                <Mail className="h-4 w-4 text-[var(--primary)]" />
                <span>countrysidebloomsnyk@gmail.com</span>
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[var(--primary)]" />
                <span>Nanyuki, Kenya</span>
              </div>
              <a href="https://instagram.com/countrysidebloomsnyk" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-[var(--primary)] transition-colors">
                <Instagram className="h-4 w-4 text-[var(--primary)]" />
                <span>@countrysidebloomsnyk</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© 2025 CountrySide Blooms. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-[var(--primary)] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-[var(--primary)] transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

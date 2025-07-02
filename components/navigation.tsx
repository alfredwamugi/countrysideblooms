"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when switching to desktop view
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false)
    }
  }, [isMobile, isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src="/logo-icon.svg"
              alt="CountrySide Blooms Logo"
              width={40}
              height={40}
              className="floating-logo group-hover:scale-110 transition-transform duration-300"
            />
            <span className="font-great-vibes text-2xl text-[var(--primary)] group-hover:text-[var(--primary-light)] transition-colors">
              CountrySide Blooms
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="https://paystack.shop/countrysidebloomsnyk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              Shop
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/bouquets"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              Bouquets
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Add-ons Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[var(--primary)] transition-colors font-medium group">
                Add-ons
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-data-[state=open]:rotate-180" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/add-ons/wines-chocolates" className="w-full">
                    Wines & Chocolates
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/add-ons/cakes" className="w-full">
                    Cakes
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/add-ons/custom-cards" className="w-full">
                    Custom Cards
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/subscriptions"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              Subscriptions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-[var(--primary)] transition-colors font-medium relative group"
            >
              Contact Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle mobile menu" className="p-1">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-white z-40 overflow-y-auto">
            <div className="px-2 pt-4 pb-16 space-y-3 sm:px-3">
              <Link
                href="/"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="https://paystack.shop/countrysidebloomsnyk"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Shop
              </Link>
              <Link
                href="/bouquets"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Bouquets
              </Link>
              <Link
                href="/add-ons/wines-chocolates"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors pl-6"
                onClick={() => setIsOpen(false)}
              >
                Wines & Chocolates
              </Link>
              <Link
                href="/add-ons/cakes"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors pl-6"
                onClick={() => setIsOpen(false)}
              >
                Cakes
              </Link>
              <Link
                href="/add-ons/custom-cards"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors pl-6"
                onClick={() => setIsOpen(false)}
              >
                Custom Cards
              </Link>
              <Link
                href="/subscriptions"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Subscriptions
              </Link>
              <Link
                href="/about"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-3 text-gray-700 hover:text-[var(--primary)] hover:bg-gray-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

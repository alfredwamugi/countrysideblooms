import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Contact Us - CountrySide Blooms | Get in Touch for Beautiful Floral Arrangements",
  description:
    "Contact CountrySide Blooms for all your floral needs. We provide beautiful flower arrangements for any occasion. Reach out to us via phone or email.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-lighter to-primary-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">Contact Us</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We'd love to hear from you. Reach out to us for all your floral needs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="font-great-vibes text-3xl text-primary mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions about our flowers or services? Want to place an order? We're here to help! Contact us using
                the information below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Nanyuki, Kenya</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">
                      <a href="tel:+254715744816" className="hover:text-primary">
                        +254 715 744 816
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@countrysideblooms.com" className="hover:text-primary">
                        info@countrysideblooms.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Instagram</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://instagram.com/countrysideblooms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        @countrysideblooms
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Facebook className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Facebook</h3>
                    <p className="text-gray-600">
                      <a
                        href="https://facebook.com/countrysideblooms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        @countrysideblooms
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-primary hover:bg-primary-light">
                  <Link href="https://wa.me/254715744816" target="_blank" rel="noopener noreferrer">
                    Contact Us on WhatsApp
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-great-vibes text-2xl text-primary mb-4">Business Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday</span>
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="font-great-vibes text-2xl text-primary mb-4">Delivery Information</h3>
                    <p className="text-gray-600 mb-4">
                      We deliver throughout Nanyuki and surrounding areas. For deliveries to other regions, please contact
                      us for arrangements.
                    </p>
                    <p className="text-gray-600">
                      Same-day delivery is available for orders placed before 12:00 PM, subject to availability.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="mt-8">
                <h3 className="font-great-vibes text-2xl text-primary mb-4">Ready to Order?</h3>
                <p className="text-gray-600 mb-4">
                  Explore our beautiful collection of floral arrangements and place your order online.
                </p>
                <Button asChild className="w-full bg-primary hover:bg-primary-light">
                  <Link href="/bouquets">View Our Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

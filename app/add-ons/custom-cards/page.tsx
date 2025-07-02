import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function CustomCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-lighter)] to-[var(--primary-light)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-great-vibes text-5xl md:text-6xl text-white mb-6">Custom Cards</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Add a personal touch to your flower arrangements with our custom greeting cards. Express your feelings with
            beautifully designed, personalized messages.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=400&width=500&text=Custom+Cards"
                alt="Custom Cards Examples"
                width={500}
                height={400}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="font-great-vibes text-4xl text-[var(--primary)]">Personalized Messages</h2>
              <p className="text-lg text-gray-600">
                Make your flower gift even more meaningful with a custom greeting card. Whether it's for a birthday,
                anniversary, sympathy, or just because, we'll help you find the perfect words to express your feelings.
              </p>
              <div className="space-y-4">
                <h3 className="font-semibold text-xl text-gray-800">What We Offer:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                    Personalized messages written by hand
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                    Beautiful card designs to match any occasion
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                    Premium quality cardstock and materials
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3"></span>
                    Custom calligraphy and design options
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Card Types */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">Card Types Available</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of card styles, or let us create something completely unique for your special
              message.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Birthday Cards",
                description: "Celebrate another year of life with joy",
                image: "/placeholder.svg?height=200&width=200&text=Birthday",
              },
              {
                title: "Anniversary Cards",
                description: "Honor love and commitment milestones",
                image: "/placeholder.svg?height=200&width=200&text=Anniversary",
              },
              {
                title: "Sympathy Cards",
                description: "Express condolences with gentle words",
                image: "/placeholder.svg?height=200&width=200&text=Sympathy",
              },
              {
                title: "Thank You Cards",
                description: "Show appreciation and gratitude",
                image: "/placeholder.svg?height=200&width=200&text=Thank+You",
              },
              {
                title: "Love Cards",
                description: "Express romantic feelings beautifully",
                image: "/placeholder.svg?height=200&width=200&text=Love",
              },
              {
                title: "Congratulations",
                description: "Celebrate achievements and success",
                image: "/placeholder.svg?height=200&width=200&text=Congrats",
              },
              {
                title: "Get Well Cards",
                description: "Send healing thoughts and wishes",
                image: "/placeholder.svg?height=200&width=200&text=Get+Well",
              },
              {
                title: "Custom Design",
                description: "Completely personalized for your needs",
                image: "/placeholder.svg?height=200&width=200&text=Custom",
              },
            ].map((card, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-4">
                  <Image
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    width={200}
                    height={200}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-gray-600 text-sm">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">How It Works</h2>
            <p className="text-lg text-gray-600">Ordering your custom card is simple and straightforward</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Contact Us</h3>
              <p className="text-gray-600">
                Reach out via WhatsApp or our contact form to discuss your custom card needs.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Share Your Message</h3>
              <p className="text-gray-600">
                Tell us your message, preferred style, and any special requirements for your card.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">We Create & Deliver</h3>
              <p className="text-gray-600">
                We'll create your beautiful custom card and include it with your flower arrangement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">Ready to Create Your Custom Card?</h2>
          <p className="text-xl text-white mb-8">
            Let us help you express your feelings with a beautifully crafted, personalized greeting card.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--primary)] px-8 bg-transparent"
            >
              <Link
                href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to order a custom greeting card for my flower arrangement.")}`}
                target="_blank"
              >
                WhatsApp Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

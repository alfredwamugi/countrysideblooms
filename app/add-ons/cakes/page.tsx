import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const cakes = [
  {
    name: "Unicorn Swirl (6pcs)",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Unicorn+Swirl",
    description: "Magical unicorn-themed cupcakes with colorful swirls",
  },
  {
    name: "Death By Chocolate (6pcs)",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Death+By+Chocolate",
    description: "Rich, decadent chocolate cupcakes for chocolate lovers",
  },
  {
    name: "Rainbow Swirl (6pcs)",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Rainbow+Swirl",
    description: "Vibrant rainbow-colored cupcakes that brighten any day",
  },
  {
    name: "Strawberry Goodness (6pcs)",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Strawberry+Goodness",
    description: "Fresh strawberry cupcakes with creamy frosting",
  },
  {
    name: "Cupcakes & Minies",
    price: 1000,
    image: "/placeholder.svg?height=300&width=300&text=Cupcakes+Minies",
    description: "Assorted mini cupcakes perfect for sharing",
  },
]

export default function CakesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-lighter)] to-[var(--primary-light)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-great-vibes text-5xl md:text-6xl text-white mb-6">Delicious Cakes & Cupcakes</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Sweet treats to complement your beautiful flower arrangements. Our freshly baked cupcakes are the perfect
            addition to any celebration.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cakes.map((product, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                  <p className="text-2xl font-bold text-[var(--primary)]">Ksh {product.price.toLocaleString()}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                    Quick View
                  </Button>
                  <Button asChild size="sm" className="flex-1 bg-[var(--primary)] hover:bg-[var(--primary-light)]">
                    <Link href="https://paystack.shop/countrysidebloomsnyk" target="_blank">
                      Add to Cart
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">Freshly Baked Daily</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our cupcakes are baked fresh daily using premium ingredients. Each one is carefully crafted to ensure the
              perfect taste and presentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧁</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Premium Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest ingredients to ensure every cupcake is delicious and memorable.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Beautiful Designs</h3>
              <p className="text-gray-600">
                Each cupcake is artistically decorated to complement your flower arrangements perfectly.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Perfect Packaging</h3>
              <p className="text-gray-600">
                Carefully packaged to maintain freshness and arrive in perfect condition with your flowers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">Make It Extra Sweet</h2>
          <p className="text-xl text-white mb-8">
            Add our delicious cupcakes to your flower order for a complete gift that will delight all the senses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg" className="px-8">
              <Link href="/bouquets">View Bouquets</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-[var(--primary)] px-8 bg-transparent"
            >
              <Link
                href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to add cupcakes to my flower order.")}`}
                target="_blank"
              >
                Custom Order
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

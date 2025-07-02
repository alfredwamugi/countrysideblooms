import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const winesAndChocolates = [
  {
    name: "Four Cousins, Sweet White",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Sweet+White+Wine",
    description: "A delightful sweet white wine perfect for celebrations",
  },
  {
    name: "Four Cousins, Sweet Red",
    price: 1200,
    image: "/placeholder.svg?height=300&width=300&text=Sweet+Red+Wine",
    description: "Rich and smooth sweet red wine for special moments",
  },
  {
    name: "Robertson Winery Sweet Red (750ml)",
    price: 1600,
    image: "/placeholder.svg?height=300&width=300&text=Robertson+Red",
    description: "Premium sweet red wine from Robertson Winery",
  },
  {
    name: "Robertson Winery Sweet Rose (750ml)",
    price: 1600,
    image: "/placeholder.svg?height=300&width=300&text=Robertson+Rose",
    description: "Elegant sweet rosé wine with floral notes",
  },
]

export default function WinesChocolatesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-lighter)] to-[var(--primary-light)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-great-vibes text-5xl md:text-6xl text-white mb-6">Wines & Chocolates</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Complete your flower gift with our selection of fine wines and premium chocolates. Perfect additions to make
            any occasion extra special.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {winesAndChocolates.map((product, index) => (
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
                  <Button asChild size="sm" className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)]">
                    <Link href="https://paystack.shop/countrysidebloomsnyk" target="_blank">
                      View Addon
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">Perfect Pairings</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our wines and chocolates are carefully selected to complement our flower arrangements. Whether you're
            celebrating an anniversary, birthday, or just want to show someone you care, these additions will make your
            gift unforgettable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Wine Selection</h3>
              <p className="text-gray-600">
                Our wine collection features sweet varieties that pair beautifully with romantic flower arrangements.
                Perfect for celebrations and intimate moments.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-xl text-gray-800 mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We source our wines from reputable wineries, ensuring each bottle meets our high standards for quality
                and taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--primary)] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">Create the Perfect Gift</h2>
          <p className="text-xl text-white mb-8">
            Combine our beautiful flowers with wines and chocolates for an unforgettable gift experience.
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
                href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to create a custom gift package with flowers and wine.")}`}
                target="_blank"
              >
                Custom Package
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

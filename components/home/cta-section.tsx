import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Phone, ShoppingBag, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-r from-[var(--primary)] to-[var(--primary-light)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
          Ready to Create Beautiful Moments?
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed">
          Whether you need a custom arrangement, want to send flowers today, or have questions about our services, we're
          here to help make your floral dreams come true.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-auto py-4 md:p-6 flex flex-col items-center space-y-2 md:space-y-3 hover-lift shadow-lg"
          >
            <Link href="/bouquets">
              <ShoppingBag className="h-6 w-6 md:h-8 md:w-8 text-[var(--primary)]" />
              <span className="font-semibold text-base md:text-lg">View Our Bouquets</span>
              <span className="text-xs md:text-sm text-gray-600">Browse our collection</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-auto py-4 md:p-6 flex flex-col items-center space-y-2 md:space-y-3 hover-lift shadow-lg"
          >
            <Link href="https://paystack.shop/countrysidebloomsnyk" target="_blank" rel="noopener noreferrer">
              <Phone className="h-6 w-6 md:h-8 md:w-8 text-[var(--primary)]" />
              <span className="font-semibold text-base md:text-lg">Send Flowers Today</span>
              <span className="text-xs md:text-sm text-gray-600">Order now for delivery</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-auto py-4 md:p-6 flex flex-col items-center space-y-2 md:space-y-3 hover-lift shadow-lg"
          >
            <Link
              href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to discuss a custom flower arrangement.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-[var(--primary)]" />
              <span className="font-semibold text-base md:text-lg">Contact on WhatsApp</span>
              <span className="text-xs md:text-sm text-gray-600">Chat about custom orders</span>
            </Link>
          </Button>

          <Button
            asChild
            variant="secondary"
            size="lg"
            className="h-auto py-4 md:p-6 flex flex-col items-center space-y-2 md:space-y-3 hover-lift shadow-lg"
          >
            <Link href="/subscriptions">
              <Calendar className="h-6 w-6 md:h-8 md:w-8 text-[var(--primary)]" />
              <span className="font-semibold text-base md:text-lg">Subscription Packages</span>
              <span className="text-xs md:text-sm text-gray-600">Regular flower delivery</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

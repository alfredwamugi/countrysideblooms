import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MessageCircle } from "lucide-react"
import Link from "next/link"

const packages = [
  {
    name: "Silver Package",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.",
    features: [
      "Monthly flower delivery",
      "Seasonal bloom selection",
      "Basic arrangement styles",
      "Standard delivery",
      "Email notifications",
    ],
    popular: false,
  },
  {
    name: "Gold Package",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.",
    features: [
      "Bi-weekly flower delivery",
      "Premium bloom selection",
      "Designer arrangement styles",
      "Priority delivery",
      "WhatsApp notifications",
      "Seasonal add-ons included",
    ],
    popular: true,
  },
  {
    name: "Luxe Package",
    description:
      "I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click \"Edit Text\" or double click me to add your own content and make changes to the font.",
    features: [
      "Weekly flower delivery",
      "Exclusive premium blooms",
      "Custom arrangement designs",
      "Same-day delivery",
      "Personal consultation",
      "Complimentary add-ons",
      "Special occasion reminders",
      "VIP customer support",
    ],
    popular: false,
  },
]

export default function SubscriptionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[var(--primary-lighter)] to-[var(--primary-light)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-great-vibes text-5xl md:text-7xl text-white mb-6">Flower Subscription Packages</h1>
          <p className="text-xl text-white max-w-4xl mx-auto mb-8 leading-relaxed">
            Enjoy fresh, beautiful flowers delivered regularly to your doorstep. Choose from our carefully crafted
            subscription packages designed to bring joy and beauty to your life on a regular basis.
          </p>
          <Button asChild size="lg" variant="secondary" className="px-10 py-4 text-lg hover-lift shadow-lg">
            <Link
              href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to learn more about your flower subscription packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat about the packages on WhatsApp
            </Link>
          </Button>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-great-vibes text-4xl md:text-5xl gradient-text mb-6">Choose Your Perfect Package</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Each package is designed to fit different lifestyles and preferences. Contact us on WhatsApp to discuss
              which option works best for you and get personalized pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`relative hover-lift ${pkg.popular ? "ring-2 ring-[var(--primary)] shadow-xl scale-105" : "shadow-lg"}`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[var(--primary)] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardHeader className="text-center pb-6">
                  <CardTitle className="font-great-vibes text-4xl text-[var(--primary)] mb-4">{pkg.name}</CardTitle>
                  <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg text-gray-800">Package Includes:</h4>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 text-[var(--primary)] mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    asChild
                    className={`w-full py-3 ${pkg.popular ? "bg-[var(--primary)] hover:bg-[var(--primary-light)]" : "bg-gray-800 hover:bg-gray-700"} hover-lift shadow-lg`}
                  >
                    <Link
                      href={`https://wa.me/254715744816?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name}. Can you tell me more about pricing and availability?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Chat about {pkg.name}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-great-vibes text-4xl md:text-5xl gradient-text mb-6">Why Choose Our Subscriptions?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Experience the joy of fresh flowers with the convenience of regular delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Always Fresh</h3>
              <p className="text-gray-600 leading-relaxed">
                Fresh flowers delivered regularly, ensuring your space always has beautiful blooms that brighten your
                day.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Convenient Delivery</h3>
              <p className="text-gray-600 leading-relaxed">
                Scheduled deliveries that fit your lifestyle, with flexible timing options and reliable service.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Great Value</h3>
              <p className="text-gray-600 leading-relaxed">
                Subscription packages offer better value than individual purchases, with exclusive member benefits.
              </p>
            </div>
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">🎨</span>
              </div>
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Variety</h3>
              <p className="text-gray-600 leading-relaxed">
                Different arrangements each delivery, keeping your space fresh, exciting, and seasonally appropriate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-great-vibes text-4xl md:text-5xl gradient-text mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">How do I get started?</h3>
              <p className="text-gray-600 leading-relaxed">
                Simply contact us on WhatsApp at +254715744816 to discuss which package works best for you. We'll help
                you choose the right subscription and set up your delivery schedule based on your preferences.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Can I pause or cancel my subscription?</h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, you have full flexibility to pause, modify, or cancel your subscription at any time. Just let us
                know via WhatsApp and we'll adjust your service accordingly with no penalties.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">What if I'm not satisfied with a delivery?</h3>
              <p className="text-gray-600 leading-relaxed">
                Your satisfaction is our priority. If you're not happy with any delivery, contact us immediately and
                we'll make it right with a replacement or credit to your account.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover-lift">
              <h3 className="font-semibold text-xl text-gray-800 mb-4">Do you deliver to my area?</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver throughout Nanyuki and surrounding areas. Contact us to confirm delivery availability to your
                specific location and discuss any special delivery requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[var(--primary)] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-great-vibes text-5xl md:text-6xl text-white mb-6">Ready to Start Your Flower Journey?</h2>
          <p className="text-xl text-white mb-10 leading-relaxed">
            Contact us on WhatsApp to discuss our subscription packages and find the perfect fit for your lifestyle. Our
            team is ready to help you bring more beauty into your daily life.
          </p>
          <Button asChild variant="secondary" size="lg" className="px-10 py-4 text-lg hover-lift shadow-lg">
            <Link
              href={`https://wa.me/254715744816?text=${encodeURIComponent("Hi! I would like to chat about your flower subscription packages.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Chat about packages on WhatsApp
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

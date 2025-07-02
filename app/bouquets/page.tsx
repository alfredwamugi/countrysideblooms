import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const bouquetCategories = [
	{
		title: "Fresh Flower Bouquets",
		description:
			"Beautiful fresh arrangements perfect for any occasion, crafted with the finest seasonal blooms.",
		image: "/placeholder.svg?height=300&width=400",
		products: [
			"CB Flower Box - Ksh 5,000",
			"CB Sunshine for Him - Ksh 3,000",
			"Summer Breeze - Ksh 2,500",
			"Country Garden - Ksh 3,000",
		],
	},
	{
		title: "Special Occasions Bouquets",
		description:
			"Celebrate life's special moments with our curated collection of occasion-specific arrangements.",
		image: "/placeholder.svg?height=300&width=400",
		products: [
			"Valentine's Day Special - Ksh 5,000",
			"Thinking of You - Ksh 2,000",
			"Bella Basket - Ksh 5,500",
			"The Flower Cake Box - Ksh 4,500",
		],
	},
	{
		title: "Funeral and Sympathy Flowers",
		description:
			"Express your condolences with our respectful and elegant sympathy arrangements.",
		image: "/placeholder.svg?height=300&width=400",
		products: [
			"Peaceful White Arrangement - Ksh 4,000",
			"Sympathy Wreath - Ksh 6,000",
			"Memorial Bouquet - Ksh 3,500",
			"Comfort Flowers - Ksh 2,800",
		],
	},
	{
		title: "Corporate and Hotel Arrangements",
		description:
			"Professional floral arrangements designed to enhance your business environment.",
		image: "/placeholder.svg?height=300&width=400",
		products: [
			"Executive Centerpiece - Ksh 8,000",
			"Lobby Arrangement - Ksh 12,000",
			"Conference Table Flowers - Ksh 5,500",
			"Reception Desk Bouquet - Ksh 4,200",
		],
	},
	{
		title: "Gift and Add-on Bouquets",
		description:
			"Perfect additions to make your gift extra special with our complementary arrangements.",
		image: "/placeholder.svg?height=300&width=400",
		products: [
			"CB in Red - Ksh 6,000",
			"Pinky - Ksh 3,000",
			"CB Classic - Ksh 1,800",
			"Nanyuki Sunny Vibes - Ksh 3,800",
		],
	},
]

export default function BouquetsPage() {
	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-[var(--primary-lighter)] to-[var(--primary-light)] py-10 md:py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 md:mb-6">
						Our Exquisite Bouquets for Every Occasion
					</h1>
					<p className="text-base sm:text-lg md:text-xl text-white max-w-3xl mx-auto">
						Discover our carefully curated collection of flower arrangements, each
						designed to capture the perfect moment and express your emotions
						beautifully.
					</p>
				</div>
			</section>

			{/* Bouquet Categories */}
			<section className="py-10 md:py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="space-y-10 md:space-y-16">
						{bouquetCategories.map((category, index) => (
							<div
								key={index}
								className={`flex flex-col ${
									index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
								} gap-6 md:gap-8 items-center`}
							>
								<div className="lg:w-1/2">
									<Image
										src={category.image || "/placeholder.svg"}
										alt={category.title}
										width={400}
										height={300}
										className="w-full h-56 sm:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
									/>
								</div>
								<div className="lg:w-1/2 space-y-4 md:space-y-6">
									<h2 className="font-great-vibes text-2xl sm:text-3xl md:text-4xl text-[var(--primary)]">
										{category.title}
									</h2>
									<p className="text-base md:text-lg text-gray-600">
										{category.description}
									</p>
									<div className="space-y-2">
										<h3 className="font-semibold text-md text-gray-800">
											Featured Products:
										</h3>
										<ul className="space-y-1 grid grid-cols-1 sm:grid-cols-2 gap-x-4">
											{category.products.map((product, productIndex) => (
												<li
													key={productIndex}
													className="text-gray-600 flex items-center py-1"
												>
													<span className="w-2 h-2 bg-[var(--primary)] rounded-full mr-3 flex-shrink-0"></span>
													<span className="text-sm md:text-base">{product}</span>
												</li>
											))}
										</ul>
									</div>
									<Button
										asChild
										className="bg-[var(--primary)] hover:bg-[var(--primary-light)] w-full sm:w-auto"
									>
										<Link
											href="https://paystack.shop/countrysidebloomsnyk"
											target="_blank"
										>
											Shop This Category
										</Link>
									</Button>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-[var(--primary)] py-10 md:py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl text-white mb-4 md:mb-6">
						Can't Find What You're Looking For?
					</h2>
					<p className="text-base md:text-xl text-white mb-6 md:mb-8">
						Let us create a custom arrangement just for you. Contact us to discuss
						your specific needs.
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
								href={`https://wa.me/254715744816?text=${encodeURIComponent(
									"Hi! I would like to discuss a custom flower arrangement."
								)}`}
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

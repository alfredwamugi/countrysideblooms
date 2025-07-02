"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Link from "next/link"
import { Eye, ShoppingCart, Star } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"

const products = [
	{
		name: "CB Flower Box",
		price: 5000,
		image: "/placeholder.svg?height=300&width=300&text=CB+Flower+Box",
		description:
			"Elegant flower box arrangement perfect for any occasion. Features seasonal blooms in our signature style.",
		category: "Premium Arrangements",
	},
	{
		name: "Valentine's Day Special",
		price: 5000,
		image: "/placeholder.svg?height=300&width=300&text=Valentine+Special",
		description:
			"Romantic arrangement designed specifically for Valentine's Day with red roses and complementary flowers.",
		category: "Special Occasions",
	},
	{
		name: "CB Sunshine for Him",
		price: 3000,
		image: "/placeholder.svg?height=300&width=300&text=Sunshine+Him",
		description:
			"Bright and cheerful arrangement designed with masculine appeal. Perfect for celebrating the men in your life.",
		category: "For Him",
	},
	{
		name: "CB in Red",
		price: 6000,
		image: "/placeholder.svg?height=300&width=300&text=CB+Red",
		description: "Stunning red-themed arrangement that makes a bold statement. Perfect for passionate expressions.",
		category: "Premium Arrangements",
	},
	{
		name: "Thinking of You",
		price: 2000,
		badge: "Best Seller",
		image: "/placeholder.svg?height=300&width=300&text=Thinking+You",
		description: "Our most popular sympathy and care arrangement. Gentle colors and thoughtful design.",
		category: "Sympathy & Care",
	},
	{
		name: "Bella Basket",
		price: 5500,
		badge: "New Arrival",
		image: "/placeholder.svg?height=300&width=300&text=Bella+Basket",
		description: "Beautiful basket arrangement featuring fresh seasonal flowers in an elegant wicker basket.",
		category: "Basket Arrangements",
	},
	{
		name: "The Flower Cake Box",
		price: 4500,
		badge: "New Arrival",
		image: "/placeholder.svg?height=300&width=300&text=Flower+Cake+Box",
		description: "Unique cake-style flower arrangement that looks good enough to eat. Perfect for celebrations.",
		category: "Unique Designs",
	},
	{
		name: "Country Garden",
		price: 3000,
		badge: "Most Popular",
		image: "/placeholder.svg?height=300&width=300&text=Country+Garden",
		description: "Rustic garden-style arrangement that captures the essence of countryside beauty.",
		category: "Garden Style",
	},
	{
		name: "Summer Breeze",
		price: 2500,
		badge: "Best Seller",
		image: "/placeholder.svg?height=300&width=300&text=Summer+Breeze",
		description: "Light and airy arrangement perfect for summer occasions. Fresh and vibrant colors.",
		category: "Seasonal",
	},
	{
		name: "Pinky",
		price: 3000,
		badge: "Best Seller",
		image: "/placeholder.svg?height=300&width=300&text=Pinky",
		description: "Soft pink arrangement that's perfect for expressing gentle love and appreciation.",
		category: "Romantic",
	},
	{
		name: "CB Classic",
		price: 1800,
		image: "/placeholder.svg?height=300&width=300&text=CB+Classic",
		description: "Our timeless classic arrangement. Simple, elegant, and always appropriate.",
		category: "Classic",
	},
	{
		name: "Nanyuki Sunny Vibes",
		price: 3800,
		badge: "Best Seller",
		image: "/placeholder.svg?height=300&width=300&text=Nanyuki+Sunny",
		description: "Bright and cheerful arrangement inspired by the sunny climate of Nanyuki. Full of warmth and joy.",
		category: "Local Inspired",
	},
]

export function FeaturedProducts() {
	const [selectedProduct, setSelectedProduct] = useState<(typeof products)[0] | null>(null)
	const isMobile = useIsMobile()

	return (
		<section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-10 md:mb-16">
					<h2 className="font-great-vibes text-3xl sm:text-4xl md:text-5xl gradient-text mb-4 md:mb-6">
						Featured Products
					</h2>
					<p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
						Discover our most popular flower arrangements, each crafted with love and attention to
						detail. Perfect for every occasion and designed to tell your unique story.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
					{products.map((product, index) => (
						<Card
							key={index}
							className="group hover-lift border-0 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<CardHeader className="p-0 relative overflow-hidden">
								<div className="relative">
									<Image
										src={product.image || "/placeholder.svg"}
										alt={product.name}
										width={300}
										height={300}
										className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
									/>
									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
										<Dialog>
											<DialogTrigger asChild>
												<Button
													variant="secondary"
													size="sm"
													onClick={() => setSelectedProduct(product)}
													className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
												>
													<Eye className="h-4 w-4 mr-2" />
													View Product
												</Button>
											</DialogTrigger>
											<DialogContent className="max-w-2xl max-h-[90vh] overflow-auto">
												<DialogHeader>
													<DialogTitle className="font-great-vibes text-2xl sm:text-3xl text-[var(--primary)]">
														{selectedProduct?.name}
													</DialogTitle>
												</DialogHeader>
												{selectedProduct && (
													<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
														<Image
															src={selectedProduct.image || "/placeholder.svg"}
															alt={selectedProduct.name}
															width={400}
															height={400}
															className="w-full h-64 object-cover rounded-lg"
														/>
														<div className="space-y-4">
															<div>
																<p className="text-sm text-gray-500 mb-2">
																	{selectedProduct.category}
																</p>
																<p className="text-2xl sm:text-3xl font-bold text-[var(--primary)]">
																	Ksh{" "}
																	{selectedProduct.price.toLocaleString()}
																</p>
															</div>
															<p className="text-gray-600">
																{selectedProduct.description}
															</p>
															<div className="flex items-center space-x-1 mb-4">
																{[...Array(5)].map((_, i) => (
																	<Star
																		key={i}
																		className="h-4 w-4 fill-yellow-400 text-yellow-400"
																	/>
																))}
																<span className="text-sm text-gray-500 ml-2">
																	(4.9/5)
																</span>
															</div>
															<Button
																asChild
																className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)]"
															>
																<Link
																	href="https://paystack.shop/countrysidebloomsnyk"
																	target="_blank"
																	rel="noopener noreferrer"
																>
																	<ShoppingCart className="h-4 w-4 mr-2" />
																	Order Now
																</Link>
															</Button>
														</div>
													</div>
												)}
											</DialogContent>
										</Dialog>
									</div>
									{product.badge && (
										<Badge
											className={`absolute top-3 right-3 ${
												product.badge === "Best Seller"
													? "bg-[var(--primary)] hover:bg-[var(--primary-light)]"
													: product.badge === "New Arrival"
													? "bg-green-500 hover:bg-green-600"
													: "bg-blue-500 hover:bg-blue-600"
											} shadow-lg`}
										>
											{product.badge}
										</Badge>
									)}
								</div>
							</CardHeader>
							<CardContent className="p-4 sm:p-6">
								<CardTitle className="text-base sm:text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
									{product.name}
								</CardTitle>
								<p className="text-xs sm:text-sm text-gray-500 mb-2 sm:mb-3">{product.category}</p>
								<p className="text-xl sm:text-2xl font-bold text-[var(--primary)]">
									Ksh {product.price.toLocaleString()}
								</p>
							</CardContent>
							<CardFooter className="p-4 sm:p-6 pt-0">
								<Dialog>
									<DialogTrigger asChild>
										<Button
											className="w-full bg-[var(--primary)] hover:bg-[var(--primary-light)]"
											onClick={() => setSelectedProduct(product)}
										>
											<Eye className="h-4 w-4 mr-2" />
											View Product
										</Button>
									</DialogTrigger>
								</Dialog>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="text-center mt-10 md:mt-16">
					<Button
						asChild
						size={isMobile ? "default" : "lg"}
						className="bg-[var(--primary)] hover:bg-[var(--primary-light)] px-6 md:px-10 py-2 md:py-4 text-base md:text-lg hover-lift shadow-lg"
					>
						<Link
							href="https://paystack.shop/countrysidebloomsnyk"
							target="_blank"
							rel="noopener noreferrer"
						>
							Shop All Products
						</Link>
					</Button>
				</div>
			</div>
		</section>
	)
}

"use client"

import Link from "next/link"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
	{
		name: "Julieta Wamuyu",
		location: "International Customer",
		rating: 5,
		date: "May 2024",
		text: "5 Stars – Exceptional Service and Stunning Flowers! I ordered flowers from Countryside Blooms in Nanyuki for my mother on Mother's Day, and I couldn't be happier with the experience. Being out of the country, I was a bit nervous about coordinating everything, but they made the entire process so smooth and stress-free. I didn't have to chase anyone around for updates—communication was clear, and the flowers were delivered right on time. Most importantly, the bouquet was absolutely gorgeous—fresh, vibrant, and beautifully arranged. My mother was overjoyed! Thank you, Countryside Blooms, for helping me make her feel special even from miles away. I'll definitely be ordering again!",
		image: "/placeholder.svg?height=80&width=80&text=JW",
		verified: true,
	},
	{
		name: "Rose Mathenge",
		location: "Seattle, Washington",
		rating: 5,
		date: "May 2024",
		text: "Whether you're in Kenya or representing from the diaspora, Country Blooms Nanyuki has you covered! I'm currently in Seattle, Washington, and they still came through with a gorgeous bouquet for my mum in Kenya (Nanyuki) this Mother's Day. Shoutout to Mercy for delivering the flowers with such care and it meant everything. If you're in Kenya or abroad and want to make someone feel special back home, Country Blooms Nanyuki is the real deal. Beautiful flowers, smooth service, and that local touch that makes it feel personal. Support local. Send love. Make someone's day no matter where you are in the world.",
		image: "/placeholder.svg?height=80&width=80&text=RM",
		verified: true,
	},
	{
		name: "Cheryl Brown",
		location: "United Kingdom",
		rating: 5,
		date: "June 2023",
		text: "Amazing service and beautiful flower arrangements - highly recommend. I was able to arrange the bouquets and cards I wanted from the UK. Countryside Blooms handled my orders quickly and with excellent customer service - thanks for your help!",
		image: "/placeholder.svg?height=80&width=80&text=CB",
		verified: true,
	},
	{
		name: "Helbert Arkhurst",
		location: "International Customer",
		rating: 5,
		date: "June 2023",
		text: "Fantastic products and services! Great attention to detail and doing everything to satisfy the customer! It was truly a great pleasure buying from you! A million thanks for such a wonderful experience 💗",
		image: "/placeholder.svg?height=80&width=80&text=HA",
		verified: true,
	},
	{
		name: "Fah'd Ramzan",
		location: "Kenya",
		rating: 5,
		date: "June 2023",
		text: "Everything gets a 5 star: from the customer service, to the presentation, flower selection and delivery. The bouquet was to be as a surprise for and it was a hit! Loved the vibrant flowers and beautiful floral arrangement. A perfect choice for a special occasion. Countryside Blooms will definitely give you the burst of vibrant beauty and leave lasting impressions. Would 10/10 recommend to someone.",
		image: "/placeholder.svg?height=80&width=80&text=FR",
		verified: true,
	},
	{
		name: "Elisabeth Hancock",
		location: "United Kingdom",
		rating: 5,
		date: "June 2021",
		text: "What a wonderful shop - we sent flowers from the UK and Kui, who I think is the owner, couldn't have been more helpful. Instant replies to emails and texts and she tried to deliver the flowers three times before being successful very late at night. Huge thanks!",
		image: "/placeholder.svg?height=80&width=80&text=EH",
		verified: true,
	},
]

export default function AboutPage() {
	const [currentReview, setCurrentReview] = useState(0)

	const nextReview = () => {
		setCurrentReview((prev) => (prev + 1) % reviews.length)
	}

	const prevReview = () => {
		setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
	}

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Hero Section */}
			<section className="bg-gradient-to-r from-primary-lighter to-primary-light py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">
						About CountrySide Blooms
					</h1>
					<p className="text-xl text-white max-w-3xl mx-auto">
						Discover our story, meet our team, and learn about our passion for
						creating beautiful flower arrangements in the heart of the countryside.
					</p>
				</div>
			</section>

			{/* Company Story */}
			<section className="py-16 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">
								Designing with Love
							</h2>
							<p className="text-lg text-gray-600 leading-relaxed">
								Countryside Blooms is a small florist shop located in the heart of
								the countryside. We specialize in creating one-of-a-kind flower
								arrangements that capture the beauty and uniqueness of our natural
								surroundings. Our passion for flowers and creativity shines through
								in all of our creations.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed mt-4">
								We are dedicated to providing fresh flowers and excellent customer
								service. We strive to listen to our customers and create
								arrangements that perfectly match their vision and style. Stop by
								our shop and experience the beauty of Countryside Blooms.
							</p>
						</div>
						<div>
							<Image
								src="/placeholder.svg?height=400&width=500&text=Countryside+Farm"
								alt="Countryside Blooms Farm"
								width={500}
								height={400}
								className="w-full h-80 object-cover rounded-lg shadow-lg"
							/>
						</div>
					</div>
				</div>
			</section>

			{/* About Kui */}
			<section className="py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div className="lg:order-2">
							<Image
								src="/placeholder.svg?height=400&width=400&text=Kui+Portrait"
								alt="Kui - Owner & Lead Florist"
								width={400}
								height={400}
								className="w-full h-80 object-cover rounded-lg shadow-lg"
							/>
						</div>
						<div className="lg:order-1">
							<h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">
								Hello, My Name is Kui
							</h2>
							<p className="text-lg font-semibold text-gray-800 mb-4">
								Owner & Lead Florist
							</p>
							<p className="text-lg text-gray-600 leading-relaxed">
								Countryside Blooms is the go-to shop for all your floral needs. As a
								self-trained florist, I bring my great taste and creative vision to
								every project I take on. My passion for flowers has made me an expert
								in the field and I take pride in making sure that my customers get
								the best quality arrangements.
							</p>
							<p className="text-lg text-gray-600 leading-relaxed mt-4">
								Whether you're looking for something for a special occasion or just
								to brighten up your home, I'm here to help. Visit Countryside Blooms
								today and let me bring my unique style to your event.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Reviews Section */}
			<section className="py-16 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">
							What Our Customers Say
						</h2>
						<p className="text-lg text-gray-600">
							Read testimonials from our satisfied customers around the world
						</p>
					</div>

					<div className="relative">
						<Card className="min-h-[300px]">
							<CardContent className="p-8">
								<div className="text-center mb-6">
									<div className="flex justify-center mb-4">
										{Array.from(
											{ length: reviews[currentReview].rating },
											(_, i) => (
												<Star
													key={i}
													className="h-6 w-6 text-yellow-400 fill-current"
												/>
											)
										)}
									</div>
									<h3 className="font-semibold text-xl text-gray-800 mb-2">
										{reviews[currentReview].name}
									</h3>
								</div>
								<p className="text-gray-600 leading-relaxed text-center">
									"{reviews[currentReview].text}"
								</p>
							</CardContent>
						</Card>

						{/* Navigation */}
						<div className="flex justify-center items-center space-x-4 mt-8">
							<Button
								variant="outline"
								size="sm"
								onClick={prevReview}
								disabled={reviews.length <= 1}
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>

							<div className="flex space-x-2">
								{reviews.map((_, i) => (
									<button
										key={i}
										onClick={() => setCurrentReview(i)}
										className={`w-3 h-3 rounded-full transition-colors ${
											i === currentReview
												? "bg-[var(--primary)]"
												: "bg-gray-300 hover:bg-gray-400"
										}`}
									/>
								))}
							</div>

							<Button
								variant="outline"
								size="sm"
								onClick={nextReview}
								disabled={reviews.length <= 1}
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Values Section */}
			<section className="py-16">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="font-great-vibes text-4xl text-[var(--primary)] mb-6">
							Our Values
						</h2>
						<p className="text-lg text-gray-600">
							The principles that guide everything we do at CountrySide Blooms
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<div className="text-center">
							<div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌸</span>
							</div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">
								Quality
							</h3>
							<p className="text-gray-600">
								We use only the freshest, highest-quality flowers in all our
								arrangements.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">💝</span>
							</div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">
								Creativity
							</h3>
							<p className="text-gray-600">
								Each arrangement is uniquely designed to capture your vision and
								style.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🤝</span>
							</div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">
								Service
							</h3>
							<p className="text-gray-600">
								Exceptional customer service is at the heart of everything we do.
							</p>
						</div>
						<div className="text-center">
							<div className="w-16 h-16 bg-[var(--primary-lighter)] rounded-full flex items-center justify-center mx-auto mb-4">
								<span className="text-2xl">🌱</span>
							</div>
							<h3 className="font-semibold text-xl text-gray-800 mb-3">
								Sustainability
							</h3>
							<p className="text-gray-600">
								We're committed to sustainable practices and supporting local growers.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<section className="bg-[var(--primary)] py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h2 className="font-great-vibes text-4xl md:text-5xl text-white mb-6">
						Experience the CountrySide Blooms Difference
					</h2>
					<p className="text-xl text-white mb-8">
						Ready to bring the beauty of our countryside flowers to your special
						moments?
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button asChild variant="secondary" size="lg" className="px-8">
							<Link href="/bouquets">View Our Bouquets</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-white text-white hover:bg-white hover:text-[var(--primary)] px-8 bg-transparent"
						>
							<Link href="/contact">Contact Us</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}

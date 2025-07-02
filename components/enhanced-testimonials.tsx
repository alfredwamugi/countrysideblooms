"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star, Quote, MapPin, Calendar, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const testimonials = [
	{
		name: "Julieta Wamuyu",
		location: "International Customer",
		rating: 5,
		date: "May 2024",
		text: "5 Stars – Exceptional Service and Stunning Flowers! I ordered flowers from Countryside Blooms in Nanyuki for my mother on Mother's Day, and I couldn't be happier with the experience. Being out of the country, I was a bit nervous about coordinating everything, but they made the entire process so smooth and stress-free. I didn't have to chase anyone around for updates—communication was clear, and the flowers were delivered right on time. Most importantly, the bouquet was absolutely gorgeous—fresh, vibrant, and beautifully arranged. My mother was overjoyed! Thank you, Countryside Blooms, for helping me make her feel special even from miles away. I'll definitely be ordering again!",
		image: "/placeholder.svg?height=80&width=80&text=JW",
		verified: true,
		category: "International",
	},
	{
		name: "Rose Mathenge",
		location: "Seattle, Washington",
		rating: 5,
		date: "May 2024",
		text: "Whether you're in Kenya or representing from the diaspora, Country Blooms Nanyuki has you covered! I'm currently in Seattle, Washington, and they still came through with a gorgeous bouquet for my mum in Kenya (Nanyuki) this Mother's Day. Shoutout to Mercy for delivering the flowers with such care and it meant everything. If you're in Kenya or abroad and want to make someone feel special back home, Country Blooms Nanyuki is the real deal. Beautiful flowers, smooth service, and that local touch that makes it feel personal. Support local. Send love. Make someone's day no matter where you are in the world.",
		image: "/placeholder.svg?height=80&width=80&text=RM",
		verified: true,
		category: "International",
	},
	{
		name: "Cheryl Brown",
		location: "United Kingdom",
		rating: 5,
		date: "June 2023",
		text: "Amazing service and beautiful flower arrangements - highly recommend. I was able to arrange the bouquets and cards I wanted from the UK. Countryside Blooms handled my orders quickly and with excellent customer service - thanks for your help!",
		image: "/placeholder.svg?height=80&width=80&text=CB",
		verified: true,
		category: "International",
	},
	{
		name: "Helbert Arkhurst",
		location: "International Customer",
		rating: 5,
		date: "June 2023",
		text: "Fantastic products and services! Great attention to detail and doing everything to satisfy the customer! It was truly a great pleasure buying from you! A million thanks for such a wonderful experience 💗",
		image: "/placeholder.svg?height=80&width=80&text=HA",
		verified: true,
		category: "International",
	},
	{
		name: "Fah'd Ramzan",
		location: "Kenya",
		rating: 5,
		date: "June 2023",
		text: "Everything gets a 5 star: from the customer service, to the presentation, flower selection and delivery. The bouquet was to be as a surprise for and it was a hit! Loved the vibrant flowers and beautiful floral arrangement. A perfect choice for a special occasion. Countryside Blooms will definitely give you the burst of vibrant beauty and leave lasting impressions. Would 10/10 recommend to someone.",
		image: "/placeholder.svg?height=80&width=80&text=FR",
		verified: true,
		category: "Local",
	},
	{
		name: "Elisabeth Hancock",
		location: "United Kingdom",
		rating: 5,
		date: "June 2021",
		text: "What a wonderful shop - we sent flowers from the UK and Kui, who I think is the owner, couldn't have been more helpful. Instant replies to emails and texts and she tried to deliver the flowers three times before being successful very late at night. Huge thanks!",
		image: "/placeholder.svg?height=80&width=80&text=EH",
		verified: true,
		category: "International",
	},
]

interface EnhancedTestimonialsProps {
	showTitle?: boolean
	maxItems?: number
	autoPlay?: boolean
	showCategories?: boolean
}

export function EnhancedTestimonials({
	showTitle = true,
	maxItems = testimonials.length,
	autoPlay = true,
	showCategories = true,
}: EnhancedTestimonialsProps) {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [selectedCategory, setSelectedCategory] = useState<string>("All")

	const displayTestimonials = testimonials.slice(0, maxItems)
	const categories = ["All", ...Array.from(new Set(displayTestimonials.map((t) => t.category)))]

	const filteredTestimonials =
		selectedCategory === "All"
			? displayTestimonials
			: displayTestimonials.filter((t) => t.category === selectedCategory)

	useEffect(() => {
		if (!autoPlay) return

		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
		}, 6000)

		return () => clearInterval(interval)
	}, [autoPlay, filteredTestimonials.length])

	const nextTestimonial = () => {
		setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length)
	}

	const prevTestimonial = () => {
		setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length)
	}

	const goToTestimonial = (index: number) => {
		setCurrentIndex(index)
	}

	const currentTestimonial = filteredTestimonials[currentIndex]

	if (!currentTestimonial) return null

	const getCategoryColor = (category: string) => {
		const colors = {
			International: "bg-blue-100 text-blue-800",
			Wedding: "bg-pink-100 text-pink-800",
			Corporate: "bg-purple-100 text-purple-800",
			Sympathy: "bg-gray-100 text-gray-800",
			Subscription: "bg-green-100 text-green-800",
		}
		return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
	}

	return (
		<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				{showTitle && (
					<div className="text-center mb-16">
						<h2 className="font-great-vibes text-5xl md:text-6xl gradient-text mb-6">
							What Our Customers Say
						</h2>
						<p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
							Read testimonials from our satisfied customers around the world. Their stories inspire us to
							continue creating beautiful moments with every bloom.
						</p>
					</div>
				)}

				{/* Category Filter */}
				{showCategories && (
					<div className="flex flex-wrap justify-center gap-3 mb-12">
						{categories.map((category) => (
							<Button
								key={category}
								variant={selectedCategory === category ? "default" : "outline"}
								size="sm"
								onClick={() => {
									setSelectedCategory(category)
									setCurrentIndex(0)
								}}
								className={`${
									selectedCategory === category
										? "bg-[var(--primary)] hover:bg-[var(--primary-light)]"
										: "hover:bg-[var(--primary)] hover:text-white"
								} transition-all duration-300`}
							>
								{category}
							</Button>
						))}
					</div>
				)}

				{/* Statistics */}
				<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
					<div className="text-center">
						<div className="text-4xl font-bold text-[var(--primary)] mb-2">500+</div>
						<div className="text-gray-600">Happy Customers</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-[var(--primary)] mb-2">4.9</div>
						<div className="text-gray-600">Average Rating</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-[var(--primary)] mb-2">15+</div>
						<div className="text-gray-600">Countries Served</div>
					</div>
					<div className="text-center">
						<div className="text-4xl font-bold text-[var(--primary)] mb-2">100%</div>
						<div className="text-gray-600">Satisfaction Rate</div>
					</div>
				</div>

				{/* Main Testimonial Display */}
				<div className="relative">
					<Card className="max-w-4xl mx-auto shadow-2xl border-0 overflow-hidden">
						<CardContent className="p-0">
							<div className="grid grid-cols-1 lg:grid-cols-3">
								{/* Customer Info */}
								<div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] p-8 text-white flex flex-col justify-center">
									<div className="text-center">
										<Image
											src={currentTestimonial.image || "/placeholder.svg"}
											alt={currentTestimonial.name}
											width={80}
											height={80}
											className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
										/>
										<h3 className="font-semibold text-xl mb-2">{currentTestimonial.name}</h3>
										<div className="flex items-center justify-center text-sm mb-3">
											<MapPin className="h-4 w-4 mr-1" />
											{currentTestimonial.location}
										</div>
										<div className="flex items-center justify-center text-sm mb-4">
											<Calendar className="h-4 w-4 mr-1" />
											{currentTestimonial.date}
										</div>
										<div className="flex justify-center mb-4">
											{Array.from({ length: currentTestimonial.rating }, (_, i) => (
												<Star key={i} className="h-5 w-5 fill-yellow-300 text-yellow-300" />
											))}
										</div>
										<div className="flex items-center justify-center">
											<Badge className={`${getCategoryColor(currentTestimonial.category)} border-0`}>
												{currentTestimonial.category}
											</Badge>
											{currentTestimonial.verified && (
												<div className="flex items-center ml-2 text-xs">
													<CheckCircle className="h-4 w-4 mr-1" />
													Verified
												</div>
											)}
										</div>
									</div>
								</div>

								{/* Testimonial Content */}
								<div className="lg:col-span-2 p-8 flex flex-col justify-center">
									<Quote className="h-12 w-12 text-[var(--primary)] mb-6 opacity-50" />
									<blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
										"{currentTestimonial.text}"
									</blockquote>
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-2">
											<div className="flex">
												{Array.from({ length: 5 }, (_, i) => (
													<Star
														key={i}
														className={`h-4 w-4 ${
															i < currentTestimonial.rating
																? "fill-yellow-400 text-yellow-400"
																: "text-gray-300"
														}`}
													/>
												))}
											</div>
											<span className="text-sm text-gray-500">
												{currentTestimonial.rating}/5 stars
											</span>
										</div>
									</div>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Navigation Controls */}
					<div className="flex justify-center items-center mt-8 space-x-6">
						<Button
							variant="outline"
							size="sm"
							onClick={prevTestimonial}
							className="hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] bg-transparent"
						>
							<ChevronLeft className="h-4 w-4 mr-1" />
							Previous
						</Button>

						<div className="flex space-x-2">
							{filteredTestimonials.map((_, index) => (
								<button
									key={index}
									onClick={() => goToTestimonial(index)}
									className={`w-3 h-3 rounded-full transition-all duration-300 ${
										index === currentIndex
											? "bg-[var(--primary)] scale-125"
											: "bg-gray-300 hover:bg-gray-400"
									}`}
									aria-label={`Go to testimonial ${index + 1}`}
								/>
							))}
						</div>

						<Button
							variant="outline"
							size="sm"
							onClick={nextTestimonial}
							className="hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] bg-transparent"
						>
							Next
							<ChevronRight className="h-4 w-4 ml-1" />
						</Button>
					</div>

					{/* Testimonial Counter */}
					<div className="text-center mt-4">
						<p className="text-sm text-gray-500">
							{currentIndex + 1} of {filteredTestimonials.length} testimonials
							{selectedCategory !== "All" && ` in ${selectedCategory}`}
						</p>
					</div>
				</div>

				{/* Testimonial Grid Preview */}
				<div className="mt-16">
					<h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">
						More Customer Stories
					</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{filteredTestimonials.slice(0, 6).map((testimonial, index) => (
							<Card
								key={index}
								className={`hover-lift cursor-pointer transition-all duration-300 ${
									index === currentIndex ? "ring-2 ring-[var(--primary)] shadow-lg" : ""
								}`}
								onClick={() => goToTestimonial(index)}
							>
								<CardContent className="p-6">
									<div className="flex items-center mb-4">
										<Image
											src={testimonial.image || "/placeholder.svg"}
											alt={testimonial.name}
											width={40}
											height={40}
											className="w-10 h-10 rounded-full mr-3"
										/>
										<div>
											<h4 className="font-semibold text-sm">{testimonial.name}</h4>
											<p className="text-xs text-gray-500">{testimonial.location}</p>
										</div>
									</div>
									<div className="flex mb-3">
										{Array.from({ length: testimonial.rating }, (_, i) => (
											<Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
										))}
									</div>
									<p className="text-sm text-gray-600 line-clamp-3">
										"{testimonial.text.substring(0, 120)}..."
									</p>
									<Badge className={`${getCategoryColor(testimonial.category)} mt-3 text-xs`}>
										{testimonial.category}
									</Badge>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

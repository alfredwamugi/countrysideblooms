"use client"

import { useEffect } from "react"

export default function ShopPage() {
  useEffect(() => {
    // Redirect to Paystack shop
    window.location.href = "https://paystack.shop/countrysidebloomsnyk"
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="loading-spinner mx-auto mb-4"></div>
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">Redirecting to our shop...</h1>
        <p className="text-gray-600 mb-4">You'll be redirected to our secure Paystack store in a moment.</p>
        <p className="text-sm text-gray-500">
          If you're not redirected automatically,
          <a
            href="https://paystack.shop/countrysidebloomsnyk"
            className="text-[var(--primary)] hover:underline ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            click here
          </a>
        </p>
      </div>
    </div>
  )
}

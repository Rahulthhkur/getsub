import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function PromoBannerBW({ showBanner = true }) {
  const [isVisible, setIsVisible] = useState(showBanner)
  const [countdown, setCountdown] = useState(3600) // 1 hour in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => (prevCount > 0 ? prevCount - 1 : 0))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600)
    const minutes = Math.floor((time % 3600) / 60)
    const seconds = time % 60
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  if (!isVisible) return null

  return (
    <div className={`border border-gray-200 rounded-lg shadow-sm pl-5 py-3 my-5 hover:border-gray-300 transition-colors ${
      showBanner ? '' : 'hidden'
    } sm:block overflow-hidden relative bg-gray-700 text-white`}>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2 right-2 p-1 hover:bg-white/20 rounded-full transition-colors text-white"
        aria-label="Close promotional banner"
      >
        <X className="h-4 w-4" />
      </button>

      <p className="mb-3 text-sm font-medium uppercase tracking-wide flex items-center gap-2">
        <span className="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              points="17 8 12 3 7 8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="12"
              y1="3"
              x2="12"
              y2="15"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          FLASH SALE
        </span>
      </p>
      <div className="flex flex-col gap-2 text-sm">
        <p className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-100">
          50% OFF
        </p>
        <p className="text-xs opacity-90">On all premium collections</p>
        <div className="mt-2 flex items-center gap-2">
          <button className="bg-white text-black px-4 py-1 rounded-full text-xs font-semibold hover:bg-gray-200 transition-colors">
            Shop Now
          </button>
          <div className="text-xs font-mono">
            Ends in: {formatTime(countdown)}
          </div>
        </div>
      </div>

      {/* Animated decorative elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 animate-ping" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/20 rounded-full animate-spin" />
    </div>
  )
}


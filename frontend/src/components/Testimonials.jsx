'use client'

import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'
import { assets } from '../assets/assets'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: "Thakur Saab",
    image: assets.ts1,
    quote: "Don't waste time, just order! This is the best website to purchase smart watches.",
    rating: 5
  },
  {
    id: 2,
    name: "Arjun Singh",
    image: assets.ts2,
    quote: "I've been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    rating: 5
  },
  {
    id: 3,
    name: "Nikku Singh",
    image: assets.ts2,
    quote: "I've been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    rating: 5
  },
  {
    id: 4,
    name: "JAAAT",
    image: assets.ts1,
    quote: "I've been purchasing smart watches of Mohid for a long time. All the products are good quality.",
    rating: 5
  },
]

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) =>
          prev >= testimonials.length - 2 ? 0 : prev + 2
        )
      }, 5000)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section className="font-prata py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-blue-600 mb-2 sm:mb-4 text-sm sm:text-base"
          >
            Here are some of our best clients.
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl font-medium"
          >
            What People Say About Us
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {testimonials
              .slice(currentSlide, currentSlide + 2)
              .map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2, // Sequential animations
                  }}
                  className="bg-gray-50 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-semibold mb-2">
                        {testimonial.name}
                      </h3>
                      <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                        {testimonial.quote}
                      </p>
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {[...Array(Math.ceil(testimonials.length / 2))].map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index * 2)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                currentSlide === index * 2
                  ? 'bg-blue-600 scale-110'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection

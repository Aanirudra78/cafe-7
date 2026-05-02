'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react'
import { testimonials } from '@/lib/data'
import { fadeIn } from '@/lib/animations'

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-8 sm:py-20 px-4 sm:px-6 lg:px-24 bg-gradient-to-br from-light-beige via-white to-light-beige dark:from-dark-brown dark:via-rich-black dark:to-dark-brown relative overflow-hidden">
      {/* Background decorative elements */}
      <motion.div
        animate={{ 
          x: [0, 50, 0],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-10 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ 
          x: [0, -50, 0],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-golden/10 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-golden/10 backdrop-blur-sm border border-accent/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Customer Love</span>
          </motion.div>
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Don&apos;t take our word for it - hear from our valued customers.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white/80 to-light-beige/80 dark:from-dark-brown/80 dark:to-rich-black/80 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-white/50 dark:border-gray-800/50 relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-golden to-accent" />
              <motion.div
                animate={{ 
                  rotate: [0, 360]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-accent/20 to-golden/20 rounded-full blur-2xl"
              />
              
              {/* Decorative quote icon */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-6xl sm:text-8xl text-accent/20 font-serif">&ldquo;</div>
              
              {/* Stars */}
              <div className="flex justify-center mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Star
                      className="w-5 h-5 sm:w-7 sm:h-7 fill-golden text-golden drop-shadow-lg"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-center text-base sm:text-xl lg:text-2xl italic text-deep-charcoal dark:text-soft-white-dark leading-relaxed mb-6 sm:mb-8 drop-shadow-sm">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-accent/10 to-golden/10 backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-accent to-golden flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <p className="font-semibold text-base sm:text-lg text-deep-charcoal dark:text-soft-white-dark">
                    {testimonials[currentIndex].name}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 space-x-2 sm:space-x-4">
            <motion.button
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(194, 148, 100, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 sm:p-4 rounded-full bg-white dark:bg-rich-black/80 backdrop-blur-sm shadow-xl text-deep-charcoal dark:text-soft-white-dark hover:bg-gradient-to-r hover:from-accent hover:to-golden hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            {/* Dots */}
            <div className="flex space-x-2 sm:space-x-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-accent to-golden w-8 sm:w-10 shadow-lg shadow-accent/30'
                      : 'bg-gray-300 dark:bg-gray-600 w-2.5 sm:w-3'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.15, boxShadow: '0 0 20px rgba(194, 148, 100, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 sm:p-4 rounded-full bg-white dark:bg-rich-black/80 backdrop-blur-sm shadow-xl text-deep-charcoal dark:text-soft-white-dark hover:bg-gradient-to-r hover:from-accent hover:to-golden hover:text-white transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

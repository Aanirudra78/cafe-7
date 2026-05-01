'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useScrollProgress } from '@/hooks/useScrollProgress'
import Button from '@/components/ui/Button'
import { fadeInUp, slideIn, staggerContainer } from '@/lib/animations'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(true)
  const scrollProgress = useScrollProgress()

  useEffect(() => {
    setIsVisible(scrollProgress < 10)
  }, [scrollProgress])

  const words = 'Premium Coffee Experience'.split(' ')

  return (
    <section className="relative h-screen min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/90 via-espresso/70 to-accent/80 z-10" />
        <img
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?semt=ais_hybrid&w=1920&q=80"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-6 sm:px-12 lg:px-24">
        <div className="max-w-3xl">
          {/* Headline with Staggered Animation */}
          <motion.h1
            className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                className="inline-block mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.3 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
          >
            Discover the art of coffee-making in a warm, inviting atmosphere. Every cup tells a story of passion and excellence.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = '/menu'}
              className="w-full sm:w-auto"
            >
              View Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/reservations'}
              className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-espresso"
            >
              Reserve a Table
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 3.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center text-white"
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

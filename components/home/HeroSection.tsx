'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'
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
    <section className="relative h-screen min-h-[500px] sm:min-h-[600px] max-h-[900px] overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-espresso/80 to-accent/85 z-10" />
        {/* Add subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-10 z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
        <img
          src="https://img.freepik.com/free-photo/restaurant-interior_1127-3394.jpg?semt=ais_hybrid&w=1920&q=80"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 right-20 w-32 h-32 bg-accent/20 rounded-full blur-3xl z-10"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-10 w-48 h-48 bg-golden/20 rounded-full blur-3xl z-10"
      />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center px-4 sm:px-6 lg:px-24">
        <div className="max-w-3xl w-full">
          {/* Premium badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-golden" />
            <span className="text-sm font-medium text-white/90">Premium Quality</span>
          </motion.div>

          {/* Headline with Staggered Animation */}
          <motion.h1
            className="font-cinzel text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6 drop-shadow-2xl"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={fadeInUp}
                className="inline-block mr-2 sm:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline with glassmorphism */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 mb-6 sm:mb-8 max-w-xl shadow-2xl"
          >
            <p className="text-base sm:text-lg lg:text-xl text-white/90">
              Discover the art of coffee-making in a warm, inviting atmosphere. Every cup tells a story of passion and excellence.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 2.8 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button
              size="lg"
              onClick={() => window.location.href = '/menu'}
              className="w-full sm:w-auto shadow-2xl shadow-accent/30 hover:shadow-accent/50"
            >
              View Menu
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.location.href = '/reservations'}
              className="w-full sm:w-auto !border-white/50 !text-white hover:!bg-white/20 backdrop-blur-sm shadow-xl"
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
            className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center text-white"
            >
              <span className="text-xs sm:text-sm mb-2 font-medium">Scroll to explore</span>
              <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

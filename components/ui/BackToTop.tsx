'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-24 right-4 sm:bottom-8 sm:right-8 z-40',
        'w-12 h-12 rounded-full bg-accent text-white',
        'shadow-lg hover:shadow-xl hover:scale-110',
        'transition-all duration-300',
        'flex items-center justify-center'
      )}
      aria-label="Back to top"
    >
      <ChevronUp className="w-6 h-6" />
    </motion.button>
  )
}

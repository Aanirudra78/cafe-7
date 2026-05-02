'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee } from 'lucide-react'

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => {
      clearInterval(timer)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-espresso to-[#5D4037]"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
              rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="mb-8"
          >
            <Coffee className="w-24 h-24 text-accent drop-shadow-2xl" />
          </motion.div>

          {/* Text */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-serif text-4xl font-bold text-cream mb-4"
          >
            Café Espresso
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-cream/20 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-accent to-[#c49464]"
            />
          </div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-cream/60 text-sm mt-4"
          >
            Brewing excellence...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'
import { Sparkles, Coffee } from 'lucide-react'

export default function CTASection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-24 overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-[#5D4037]/90 to-accent/85 z-10" />
        {/* Add subtle noise texture overlay */}
        <div className="absolute inset-0 opacity-20 z-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />
        <motion.img
          style={{ y: y1 }}
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
          alt="Coffee shop atmosphere"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-20 w-40 h-40 bg-accent/30 rounded-full blur-3xl z-10"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-20 w-56 h-56 bg-golden/30 rounded-full blur-3xl z-10"
      />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        {/* Premium badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
        >
          <Sparkles className="w-5 h-5 text-golden" />
          <span className="text-sm font-medium text-white">Premium Experience</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 drop-shadow-2xl">
            Ready to Experience the Best Coffee?
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 mb-8 max-w-3xl mx-auto shadow-2xl"
          >
            <p className="text-base sm:text-lg lg:text-xl text-white/90">
              Visit us today or order online for pickup. Your perfect cup of coffee is just a click away.
            </p>
          </motion.div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/menu">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto shadow-2xl shadow-accent/30 hover:shadow-accent/50 bg-gradient-to-r from-accent to-golden"
                >
                  Order Now
                </Button>
              </motion.div>
            </Link>
            <Link href="/reservations">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto !border-white/50 !text-white hover:!bg-white/20 backdrop-blur-sm shadow-xl"
                >
                  Reserve a Table
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

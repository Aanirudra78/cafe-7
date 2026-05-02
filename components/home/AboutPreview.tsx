'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

export default function AboutPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section ref={ref} className="py-8 sm:py-20 px-4 sm:px-6 lg:px-24 bg-gradient-warm dark:bg-rich-black bg-pattern-dots">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Our coffee story"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-32 sm:h-32 bg-accent/20 rounded-full -z-10 animate-float" />
            <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-20 sm:h-20 bg-espresso/20 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-xs sm:text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3 mb-4 sm:mb-6">
              Crafting Perfect Coffee Since 2010
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6">
              At Café Espresso, we believe that great coffee is an art form. Our journey began with a simple passion for bringing people together through exceptional coffee and warm hospitality.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg leading-relaxed mb-6 sm:mb-8">
              We source our beans from sustainable farms around the world, roast them in small batches, and craft each cup with precision and care. Every visit is an opportunity to experience something special.
            </p>
            <Link href="/about">
              <Button variant="outline" className="w-full sm:w-auto">
                Learn More About Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

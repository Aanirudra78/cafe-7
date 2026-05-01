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
    <section ref={ref} className="py-20 px-6 sm:px-12 lg:px-24 bg-gradient-warm dark:bg-rich-black bg-pattern-dots">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Our coffee story"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10 animate-float" />
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-espresso/20 rounded-full -z-10 animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-semibold tracking-wider uppercase text-sm">
              Our Story
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-deep-charcoal dark:text-soft-white-dark mt-3 mb-6">
              Crafting Perfect Coffee Since 2010
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              At Café Espresso, we believe that great coffee is an art form. Our journey began with a simple passion for bringing people together through exceptional coffee and warm hospitality.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              We source our beans from sustainable farms around the world, roast them in small batches, and craft each cup with precision and care. Every visit is an opportunity to experience something special.
            </p>
            <Link href="/about">
              <Button variant="outline">
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

'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fadeInUp } from '@/lib/animations'

export default function CTASection() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 500], [0, 150])
  const y2 = useTransform(scrollY, [0, 500], [0, -150])

  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-24 overflow-hidden">
      {/* Background with Parallax */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-espresso/95 via-[#5D4037]/90 to-accent/85 z-10" />
        <img
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&q=80"
          alt="Coffee shop atmosphere"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-2xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Ready to Experience the Best Coffee?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-cream/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Visit us today or order online for pickup. Your perfect cup of coffee is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/menu">
              <Button size="lg" className="w-full sm:w-auto">
                Order Now
              </Button>
            </Link>
            <Link href="/reservations">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto !border-white !text-white hover:!bg-white hover:!text-espresso"
              >
                Reserve a Table
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
